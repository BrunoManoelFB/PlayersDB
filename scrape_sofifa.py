import json
import time
import random
import os
import shutil
from datetime import datetime
import re
import sys
from bs4 import BeautifulSoup
import cloudscraper  # Para contornar proteções (Cloudflare)
from concurrent.futures import ThreadPoolExecutor, as_completed

# Main configuration
TEST_MODE = False    # Se True, limita o número de páginas para teste
MAX_TEST_PAGES = 3  # Número de páginas a processar em modo teste
MAX_THREADS = 2
DELAY_BETWEEN_REQUESTS = 3
MAX_OFFSET = 19980  # Offset máximo permitido

# Global variables for logs
log_new_players = ""
log_updated_players = ""

def load_cookies_from_json(file_path):
    if not os.path.exists(file_path):
        sys.exit(f"JSON cookie file not found: {file_path}")
    with open(file_path, 'r', encoding='utf-8') as f:
        cookies_array = json.load(f)
    return {cookie['name']: cookie['value'] for cookie in cookies_array}

def get_random_user_agent():
    user_agents = [
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:119.0) Gecko/20100101 Firefox/119.0",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
    ]
    return random.choice(user_agents)

def configure_session():
    scraper = cloudscraper.create_scraper(browser={'custom': get_random_user_agent()})
    return scraper

def get_page_html(url, cookies, session):
    headers = {
        'User-Agent': get_random_user_agent(),
        'Referer': 'https://sofifa.com/',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1'
    }
    try:
        print("Using cookies:", cookies)
        response = session.get(url, cookies=cookies, headers=headers, timeout=15)
        print(f"Response status: {response.status_code}")
        print(f"Response headers: {response.headers}")
        response.raise_for_status()
        time.sleep(random.uniform(DELAY_BETWEEN_REQUESTS * 2, DELAY_BETWEEN_REQUESTS * 3))
        return response.text
    except Exception as e:
        print(f"Error accessing {url}: {e}")
        return None

def check_next_page_exists(html):
    if not html:
        return False
    soup = BeautifulSoup(html, 'html.parser')
    buttons = soup.select('div.pagination a.button')
    for btn in buttons:
        if "Next" in btn.get_text():
            return True
    return False

def log_changes(new_player, existing_player=None):
    global log_new_players, log_updated_players
    if not existing_player:
        log_new_players += f"{new_player.get('ID', '??')}: {new_player.get('Name', '??')}\n"
    else:
        changes = []
        for field, value in new_player.items():
            if field not in ['LastUpdate'] and field in existing_player and existing_player[field] != value:
                changes.append(f"- {field}: {existing_player[field]} → {value}")
        if changes:
            log_updated_players += f"{new_player.get('ID', '??')}: {new_player.get('Name', '??')}\n"
            log_updated_players += "\n".join(changes) + "\n\n"

def values_in_order(player, headers):
    return [player.get(header, "") for header in headers]

def clean_cell(cell):
    """Extrai o valor principal do cell.
    Se houver spans com a classe 'inline-block nowrap', junta seus textos com ', ' removendo sinais de '+' ou '-'.
    Caso contrário, se houver <em> com atributo title, retorna esse valor; senão, tenta extrair o primeiro número."""
    spans = cell.find_all("span", class_="inline-block nowrap")
    if spans:
        texts = []
        for sp in spans:
            text = sp.get_text(strip=True)
            text = re.sub(r"\s*\+$", "", text)  # Remove trailing '+' se existir
            texts.append(text)
        return ", ".join(texts)
    em = cell.find("em")
    if em and em.has_attr("title"):
        return em["title"].strip()
    text = cell.get_text(strip=True)
    m = re.search(r"(\d+)", text)
    if m:
        return m.group(1)
    return text

def process_page(page_num, base_url, cookies, session, existing_data, headers):
    offset = (page_num - 1) * 60
    if offset >= MAX_OFFSET:
        print("Reached max offset.")
        return 0, None, [], headers, False
    full_url = f"{base_url}&offset={offset}"
    html = get_page_html(full_url, cookies, session)
    if not html:
        print(f"Failed to get HTML from page {page_num}.")
        return 0, None, [], headers, False

    soup = BeautifulSoup(html, 'html.parser')
    last_update = datetime.now().strftime('%Y-%m-%d')
    table = soup.select_one('table')
    if not table:
        print(f"No table found on page {page_num}.")
        return 0, last_update, [], headers, check_next_page_exists(html)

    rows = table.select('tbody > tr')
    if not rows:
        print(f"No player <tr> on page {page_num}.")
        return 0, last_update, [], headers, check_next_page_exists(html)

    count_players_on_page = 0
    players_on_this_page = []

    # Determina se o link base é do tipo "history" ou "all"
    is_history = "type=history" in base_url

    for row in rows:
        tds = row.find_all('td')
        if len(tds) < 2:
            continue

        player = {}
        # Extração do ID
        id_cell = row.find("td", attrs={"data-col": "pi"})
        player["ID"] = id_cell.get_text(strip=True) if id_cell else ""

        # Nome, Fullname, Country, Position, Other Positions
        name_cell = tds[1]
        name_link = name_cell.find('a')
        if name_link:
            player["Name"] = name_link.get_text(strip=True)
            player["Fullname"] = name_link.get("data-tippy-content", "").strip() or player["Name"]
        else:
            player["Name"] = name_cell.get_text(strip=True)
            player["Fullname"] = player["Name"]

        div_info = name_cell.find("div")
        if div_info:
            flag_img = div_info.find("img")
            player["Country"] = flag_img["title"].strip() if flag_img and flag_img.has_attr("title") else ""
            pos_links = div_info.find_all("a")
            positions = [link.find("span", class_="pos").get_text(strip=True)
                         for link in pos_links if link.find("span", class_="pos")]
            if positions:
                player["Position"] = positions[0]
                player["Other Positions"] = ", ".join(positions[1:]) if len(positions) > 1 else None
            else:
                player["Position"] = ""
                player["Other Positions"] = None
        else:
            player["Country"] = ""
            player["Position"] = ""
            player["Other Positions"] = None

        # Outros campos básicos
        if len(tds) > 2:
            player["Age"] = tds[2].get_text(strip=True)
        if len(tds) > 3:
            player["Overall rating"] = tds[3].get_text(strip=True)
        if len(tds) > 4:
            player["Potential"] = tds[4].get_text(strip=True)

        # Dados de Time
        if len(tds) > 5:
            if is_history:
                player["Team"] = None
                player["Contract"] = None
                player["Contract_Info"] = None
                player["Team ID"] = None
            else:
                team_cell = tds[5]
                team_link = team_cell.find('a')
                if team_link:
                    team = team_link.get_text(strip=True)
                    m = re.search(r'/team/(\d+)/', team_link.get("href", ""))
                    team_id = m.group(1) if m else None
                else:
                    team = team_cell.get_text(strip=True)
                    team_id = None
                contract_div = team_cell.find('div')
                if contract_div:
                    contract_text = contract_div.get_text(" ", strip=True)
                    if "On loan" in contract_text:
                        parts = contract_text.split("On loan")
                        contract_date = parts[0].strip()
                        contract_info = "On loan"
                    else:
                        contract_date = contract_text
                        contract_info = None
                else:
                    contract_date = ""
                    contract_info = None
                player["Team"] = team
                player["Contract"] = contract_date
                player["Contract_Info"] = contract_info
                player["Team ID"] = team_id

        if len(tds) > 7:
            h_text = tds[7].get_text(strip=True)
            m = re.search(r"(\d+)cm", h_text)
            player["Height"] = m.group(1) if m else ""
        if len(tds) > 8:
            w_text = tds[8].get_text(strip=True)
            m = re.search(r"(\d+)kg", w_text)
            player["Weight"] = m.group(1) if m else ""
        if len(tds) > 9:
            player["foot"] = tds[9].get_text(strip=True)

        # Processa os demais campos a partir do td[10] usando clean_cell para limpar os valores
        td_index = 10
        header_index = 15  # Os 15 primeiros campos já foram preenchidos
        while td_index < len(tds) and header_index < (len(headers) - 1):
            cell = tds[td_index]
            player[headers[header_index]] = clean_cell(cell)
            td_index += 1
            header_index += 1

        player["LastUpdate"] = last_update

        if not player["ID"] and name_link:
            possible_id = re.search(r'/player/(\d+)/', name_link['href'])
            if possible_id:
                player["ID"] = possible_id.group(1)
        if not player["ID"]:
            print(f"Page {page_num}: player without clear ID, skipping.")
            continue

        # Atualiza existing_data: se o jogador já existe, atualiza; se não, adiciona
        if player["ID"] in existing_data:
            existing_player = existing_data[player["ID"]]
            new_no_date = {k: v for k, v in player.items() if k != 'LastUpdate'}
            old_no_date = {k: v for k, v in existing_player.items() if k != 'LastUpdate'}
            if new_no_date != old_no_date:
                log_changes(player, existing_player)
                existing_data[player["ID"]] = player
            else:
                existing_data[player["ID"]]['LastUpdate'] = last_update
        else:
            log_changes(player)
            existing_data[player["ID"]] = player

        players_on_this_page.append(player)
        count_players_on_page += 1

    has_next = check_next_page_exists(html)
    return count_players_on_page, last_update, players_on_this_page, headers, has_next

def write_players_to_file(filename, players, headers):
    if not players or not headers:
        return
    with open(filename, 'a', encoding='utf-8') as f:
        for player in players:
            f.write(json.dumps(values_in_order(player, headers), ensure_ascii=False) + '\n')

def scrape_page_task(page_num, base_url, cookies, session, existing_data, headers):
    try:
        result = process_page(page_num, base_url, cookies, session, existing_data, headers)
        players_count, last_update, players, headers, has_next = result
        return {'page': page_num, 'count': players_count, 'has_next': has_next}
    except Exception as e:
        print(f"Error processing page {page_num}: {e}")
        return {'page': page_num, 'count': 0, 'has_next': False, 'error': str(e)}

def scrape_base_link(base_url, cookies, session, existing_data, headers):
    print("Processing base link:", base_url)
    players_collected = 0
    total_pages = 0
    current_page = 1
    while True:
        if (current_page - 1) * 60 >= MAX_OFFSET:
            print("Reached max offset for this base link.")
            break
        result = process_page(current_page, base_url, cookies, session, existing_data, headers)
        players_count, last_update, players, headers, has_next = result
        # Escrita incremental para verificação
        write_players_to_file(filename, players, headers)
        players_collected += players_count
        total_pages += 1
        print(f"Processed page {current_page} (players: {players_count}) for base link.")
        if TEST_MODE and current_page >= MAX_TEST_PAGES:
            print("TEST_MODE enabled: stopping after", MAX_TEST_PAGES, "pages.")
            break
        if not has_next:
            break
        current_page += 1
    return total_pages, players_collected

def rewrite_file_from_existing_data(filename, headers, existing_data):
    """Reescreve o arquivo JSONL a partir dos dados atuais, ordenando pelo ID (do menor para o maior)."""
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(json.dumps(headers, ensure_ascii=False) + "\n")
        for player_id in sorted(existing_data.keys(), key=lambda x: int(x) if x.isdigit() else x):
            f.write(json.dumps(values_in_order(existing_data[player_id], headers), ensure_ascii=False) + "\n")
    print(f"Arquivo reescrito com {len(existing_data)} registros.")

if __name__ == "__main__":
    # Lista de base links com filtros:
    # Se o link contiver "type=history", os campos de time (Team, Contract, Contract_Info, Team ID)
    # serão definidos como None; se for "type=all", os dados serão extraídos.
    base_links = [
        "https://sofifa.com/players?type=history&wk%5B0%5D=1&col=pi&sort=asc", # LINKS COM TODOS OS JOGADORES
        "https://sofifa.com/players?type=history&sk%5B%5D=0&wk%5B%5D=2&col=pi&sort=asc",
        "https://sofifa.com/players?type=history&sk%5B%5D=1&wk%5B%5D=2&col=pi&sort=asc",
        "https://sofifa.com/players?type=history&sk%5B%5D=2&wk%5B%5D=2&col=pi&sort=asc",
        "https://sofifa.com/players?type=history&sk%5B%5D=3&wk%5B%5D=2&col=pi&sort=asc",
        "https://sofifa.com/players?type=history&sk%5B%5D=4&wk%5B%5D=2&col=pi&sort=asc",
        "https://sofifa.com/players?type=history&sk%5B%5D=0&wk%5B%5D=3&col=pi&sort=asc",
        "https://sofifa.com/players?type=history&pn%5B%5D=0&pn%5B%5D=2&pn%5B%5D=3&pn%5B%5D=5&pn%5B%5D=7&sk%5B%5D=1&wk%5B%5D=3",
        "https://sofifa.com/players?type=history&pn%5B%5D=8&pn%5B%5D=10&pn%5B%5D=12&pn%5B%5D=14&pn%5B%5D=16&pn%5B%5D=18&pn%5B%5D=20&pn%5B%5D=21&pn%5B%5D=22&pn%5B%5D=23&pn%5B%5D=25&pn%5B%5D=27&sk%5B%5D=1&wk%5B%5D=3",
        "https://sofifa.com/players?type=history&sk%5B%5D=2&wk%5B%5D=3&col=pi&sort=asc",
        "https://sofifa.com/players?type=history&sk%5B%5D=3&wk%5B%5D=3&col=pi&sort=asc",
        "https://sofifa.com/players?type=history&sk%5B%5D=4&wk%5B%5D=3&col=pi&sort=asc",
        "https://sofifa.com/players?type=history&wk%5B0%5D=4&col=pi&sort=asc",
        "https://sofifa.com/players?type=history&wk%5B0%5D=5&col=pi&sort=asc",
        "https://sofifa.com/players?type=all&col=pi&sort=asc" # LINK COM OS JOGADORES ATRELADOS A UM CLUBE
    ]

    cookies_file = "sofifa_cookies.json"
    cookies = load_cookies_from_json(cookies_file)
    session = configure_session()

    filename = 'sofifa_players.jsonl'
    backup_filename = f"bkps/sofifa_players_bkp_{datetime.now().strftime('%Y%m%d')}.jsonl"
    os.makedirs('bkps', exist_ok=True)
    if os.path.exists(filename):
        print(f"Creating backup of {filename} => {backup_filename}")
        shutil.copy2(filename, backup_filename)

    existing_data = {}
    headers = None

    new_headers = [
        "ID", "Name", "Fullname", "Country", "Position", "Other Positions",
        "Age", "Overall rating", "Potential", "Team", "Contract", "Contract_Info", "Team ID",
        "Height", "Weight", "foot", "Best overall", "Best position", "Growth",
        "Joined", "Loan date end", "Value", "Wage", "Release clause",
        "Total attacking", "Crossing", "Finishing", "Heading accuracy",
        "Short passing", "Volleys", "Total skill", "Dribbling", "Curve",
        "FK Accuracy", "Long passing", "Ball control", "Total movement",
        "Acceleration", "Sprint speed", "Agility", "Reactions", "Balance",
        "Total power", "Shot power", "Jumping", "Stamina", "Strength",
        "Long shots", "Total mentality", "Aggression", "Interceptions",
        "Att. Position", "Vision", "Penalties", "Composure", "Total defending",
        "Defensive awareness", "Standing tackle", "Sliding tackle",
        "Total goalkeeping", "GK Diving", "GK Handling", "GK Kicking",
        "GK Positioning", "GK Reflexes", "Total stats", "Base stats",
        "Weak foot", "Skill moves", "Attacking work rate", "Defensive work rate",
        "International reputation", "Body type", "Real face", "Pace / Diving",
        "Shooting / Handling", "Passing / Kicking", "Dribbling / Reflexes",
        "Defending / Pace", "Physical / Positioning", "Traits", "Traits",
        "PlayStyles", "PlayStyles +", "Number of playstyles", "Acceleration Type",
        "LastUpdate"
    ]
    
    # Carrega dados existentes, se houver, para evitar duplicatas
    temp_filename = filename + '.tmp'
    if os.path.exists(filename):
        print(f"Checking integrity of {filename}")
        with open(filename, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        with open(temp_filename, 'w', encoding='utf-8') as ftemp:
            if lines:
                try:
                    headers = json.loads(lines[0].strip())
                    ftemp.write(json.dumps(headers, ensure_ascii=False) + '\n')
                    for i, line in enumerate(lines[1:], 2):
                        try:
                            values = json.loads(line.strip())
                            if len(values) == len(headers):
                                ftemp.write(line)
                                item = dict(zip(headers, values))
                                if 'ID' in item:
                                    existing_data[item['ID']] = item
                            else:
                                print(f"Line {i} ignored (inconsistent size).")
                        except json.JSONDecodeError as e:
                            print(f"Line {i} ignored due to JSON error: {e}")
                except json.JSONDecodeError as e:
                    print(f"Error loading headers: {e} - Restarting file.")
                    headers = None
        os.replace(temp_filename, filename)
    
    if not headers:
        headers = new_headers
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(json.dumps(headers, ensure_ascii=False) + '\n')
    
    start_time = time.time()
    
    total_pages_overall = 0
    players_collected_overall = 0

    for base_url in base_links:
        pages, players_count = scrape_base_link(base_url, cookies, session, existing_data, headers)
        total_pages_overall += pages
        players_collected_overall += players_count

    # Ao final, reescreve o arquivo com os dados atualizados e ordenados pelo ID
    rewrite_file_from_existing_data(filename, headers, existing_data)
    
    metadata_filename = 'sofifa_metadata.json'
    with open(metadata_filename, 'w', encoding='utf-8') as f:
        json.dump(
            {
                "dbLastUpdateLocal": datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                "pagesScraped": total_pages_overall
            },
            f,
            ensure_ascii=False,
            indent=4
        )
    
    total_time = int(time.time() - start_time)
    formatted_time = time.strftime("%H:%M:%S", time.gmtime(total_time))
    print("==== Extraction complete ====")
    print(f"Total pages processed (all base links): {total_pages_overall}")
    print(f"Total players saved/updated: {players_collected_overall}")
    print(f"Total time: {formatted_time}")
    
    final_log = f"###### {datetime.now().strftime('%d/%m/%Y %H:%M:%S')} ######\n"
    final_log += f"Pages: {total_pages_overall}\n"
    final_log += "***Updated Players:***\n" + log_updated_players + "\n"
    final_log += "***New Players:***\n" + log_new_players
    
    os.makedirs('logs', exist_ok=True)
    log_filename = f"logs/sofifa_{datetime.now().strftime('%Y%m%d_%H%M%S')}_log.txt"
    with open(log_filename, 'w', encoding='utf-8') as flog:
        flog.write(final_log)
    
    print("\nUpdated Players:")
    print(log_updated_players)
    print("\nNew Players:")
    print(log_new_players)

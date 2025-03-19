import json
import time
import random
import os
import shutil
from datetime import datetime
import re
import sys
from bs4 import BeautifulSoup
import cloudscraper
from concurrent.futures import ThreadPoolExecutor, as_completed

# Configurações
TEST_MODE = False
MAX_TEST_PAGES = 1
MAX_THREADS = 2
DELAY_BETWEEN_REQUESTS = 3
MAX_OFFSET = 19980

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
    }
    try:
        response = session.get(url, cookies=cookies, headers=headers, timeout=15)
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
    return bool(soup.select_one('div.pagination a.button:-soup-contains("Next")'))

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

def clean_cell(cell, header):
    """Extrai o valor da célula com base no tipo esperado do campo."""
    spans = cell.find_all("span", class_="inline-block nowrap")
    if spans:
        texts = [re.sub(r"\s*[\+\-]$", "", sp.get_text(strip=True)) for sp in spans]
        return ", ".join(texts)
    em = cell.find("em")
    if em and em.has_attr("title"):
        return em["title"].strip()
    text = cell.get_text(strip=True)
    
    # Validação específica por campo
    if header == "foot":
        return text if text in ["Right", "Left"] else "N/A"
    elif header in ["Height", "Weight", "Best overall", "Growth"] or "Total" in header or header.endswith("rating"):
        m = re.search(r"(\d+)", text)
        return m.group(1) if m else ""
    return text

def extract_select_values(html):
    """Extrai GameVersion e LastUpdate dos selects ativos."""
    soup = BeautifulSoup(html, 'html.parser')
    
    # GameVersion
    version_select = soup.find('select', {'name': 'version'})
    game_version = version_select.find('option', selected=True).get_text(strip=True) if version_select else "Unknown"
    
    # LastUpdate
    roster_select = soup.find('select', {'name': 'roster'})
    if roster_select:
        last_update_text = roster_select.find('option', selected=True).get_text(strip=True)
        last_update = datetime.strptime(last_update_text, "%b %d, %Y").strftime("%Y-%m-%d")
    else:
        last_update = datetime.now().strftime("%Y-%m-%d")
    
    return game_version, last_update

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
    game_version, last_update = extract_select_values(html)
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
    is_history = "type=history" in base_url

    # Mapeamento de data-col para headers (opcional)
    col_to_header = {th.get('data-col'): th.get_text(strip=True) for th in soup.select('thead th[data-col]')}
    dynamic_headers = headers[16:]  # Após "foot" na lista de headers

    for row in rows:
        tds = row.find_all('td')
        if len(tds) < 10:  # Mínimo para campos fixos
            continue

        player = {}
        # Campos fixos
        player["ID"] = tds[6].get_text(strip=True) if len(tds) > 6 else ""
        name_cell = tds[1]
        name_link = name_cell.find('a')
        player["Name"] = name_link.get_text(strip=True) if name_link else name_cell.get_text(strip=True)
        player["Fullname"] = name_link.get("data-tippy-content", "").strip() or player["Name"] if name_link else player["Name"]
        
        div_info = name_cell.find("div")
        if div_info:
            flag_img = div_info.find("img")
            player["Country"] = flag_img["title"].strip() if flag_img and flag_img.has_attr("title") else ""
            pos_links = div_info.find_all("a")
            positions = [link.find("span", class_="pos").get_text(strip=True) for link in pos_links if link.find("span", class_="pos")]
            player["Position"] = positions[0] if positions else ""
            player["Other Positions"] = ", ".join(positions[1:]) if len(positions) > 1 else None
        else:
            player["Country"] = ""
            player["Position"] = ""
            player["Other Positions"] = None

        player["Age"] = tds[2].get_text(strip=True) if len(tds) > 2 else ""
        player["Overall rating"] = clean_cell(tds[3], "Overall rating") if len(tds) > 3 else ""
        player["Potential"] = clean_cell(tds[4], "Potential") if len(tds) > 4 else ""

        # Team
        if len(tds) > 5:
            if is_history:
                player["Team"] = None
                player["Contract"] = None
                player["Contract_Info"] = None
                player["Team ID"] = None
                player["GameVersion"] = None
                player["LastUpdate"] = None
            else:
                team_cell = tds[5]
                team_link = team_cell.find('a')
                team = team_link.get_text(strip=True) if team_link else team_cell.get_text(strip=True)
                team_id = re.search(r'/team/(\d+)/', team_link.get("href", "")) if team_link else None
                contract_div = team_cell.find('div')
                contract_text = contract_div.get_text(" ", strip=True) if contract_div else ""
                if "On loan" in contract_text:
                    parts = contract_text.split("On loan")
                    contract_date = parts[0].strip()
                    contract_info = "On loan"
                else:
                    contract_date = contract_text
                    contract_info = None
                player["Team"] = team
                player["Contract"] = contract_date
                player["Contract_Info"] = contract_info
                player["Team ID"] = team_id.group(1) if team_id else None

        # Campos fixos: Height, Weight, foot
        player["Height"] = clean_cell(tds[7], "Height") if len(tds) > 7 else ""
        player["Weight"] = clean_cell(tds[8], "Weight") if len(tds) > 8 else ""
        player["foot"] = clean_cell(tds[9], "foot") if len(tds) > 9 else "N/A"

        # Mapeamento dinâmico: fallback para sequencial se data-col não funcionar
        td_index = 10
        header_index = 16  # Índice de "Best overall" em headers
        while td_index < len(tds) and header_index < len(headers) - 2:  # -2 para GameVersion e LastUpdate
            data_col = tds[td_index].get('data-col')
            if data_col and data_col in col_to_header and col_to_header[data_col] in headers:
                player[col_to_header[data_col]] = clean_cell(tds[td_index], col_to_header[data_col])
            else:
                header = headers[header_index]
                player[header] = clean_cell(tds[td_index], header)
            td_index += 1
            header_index += 1

        player["GameVersion"] = game_version
        player["LastUpdate"] = last_update

        if not player["ID"] and name_link:
            possible_id = re.search(r'/player/(\d+)/', name_link['href'])
            if possible_id:
                player["ID"] = possible_id.group(1)
        if not player["ID"]:
            print(f"Page {page_num}: player without clear ID, skipping.")
            continue

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
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(json.dumps(headers, ensure_ascii=False) + '\n')
        for player_id in sorted(existing_data.keys(), key=lambda x: int(x) if x.isdigit() else x):
            f.write(json.dumps(values_in_order(existing_data[player_id], headers), ensure_ascii=False) + '\n')
    print(f"Arquivo reescrito com {len(existing_data)} registros.")

if __name__ == "__main__":
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

    cookies_file = "scraping/sofifa_cookies.json"
    cookies = load_cookies_from_json(cookies_file)
    session = configure_session()

    filename = 'scraping/sofifa_players.jsonl'
    backup_filename = f"scraping/bkps/sofifa_players_bkp_{datetime.now().strftime('%Y%m%d')}.jsonl"
    os.makedirs('scraping/bkps', exist_ok=True)
    if os.path.exists(filename):
        shutil.copy2(filename, backup_filename)

    existing_data = {}
    headers = [
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
        "GameVersion", "LastUpdate"
    ]

    if os.path.exists(filename):
        with open(filename, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        if lines:
            headers = json.loads(lines[0].strip())
            for line in lines[1:]:
                try:
                    values = json.loads(line.strip())
                    if len(values) == len(headers):
                        item = dict(zip(headers, values))
                        if 'ID' in item:
                            existing_data[item['ID']] = item
                except json.JSONDecodeError:
                    continue
    
    start_time = time.time()
    total_pages_overall = 0
    players_collected_overall = 0

    for base_url in base_links:
        pages, players_count = scrape_base_link(base_url, cookies, session, existing_data, headers)
        total_pages_overall += pages
        players_collected_overall += players_count

    rewrite_file_from_existing_data(filename, headers, existing_data)
    
    total_time = int(time.time() - start_time)
    formatted_time = time.strftime("%H:%M:%S", time.gmtime(total_time))
    print("==== Extraction complete ====")
    print(f"Total pages processed: {total_pages_overall}")
    print(f"Total players saved/updated: {players_collected_overall}")
    print(f"Total time: {formatted_time}")
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
TEST_MODE = True  # Ative para testar com poucos jogadores
MAX_TEST_PLAYERS = 10  # Limite de jogadores no modo teste
MAX_THREADS = 2  # Confirmado como seguro
DELAY_BETWEEN_REQUESTS = 3  # Delay mínimo entre requisições
OUTPUT_FILE = 'scraping/sofifa_players.jsonl'
COOKIES_FILE = "scraping/sofifa_cookies.json"
CHECKPOINT_FILE = 'scraping/checkpoint.json'  # Arquivo para salvar progresso

log_updates = ""

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
        time.sleep(random.uniform(DELAY_BETWEEN_REQUESTS, DELAY_BETWEEN_REQUESTS * 1.5))
        return response.text
    except Exception as e:
        print(f"Error accessing {url}: {e}")
        return None

def extract_select_values(html):
    """Extrai GameVersion e LastUpdate dos selects ativos na página individual."""
    soup = BeautifulSoup(html, 'html.parser')
    
    version_select = soup.find('select', {'name': 'version'})
    game_version = version_select.find('option', selected=True).get_text(strip=True) if version_select else "Unknown"
    
    roster_select = soup.find('select', {'name': 'roster'})
    if roster_select:
        last_update_text = roster_select.find('option', selected=True).get_text(strip=True)
        last_update = datetime.strptime(last_update_text, "%b %d, %Y").strftime("%Y-%m-%d")
    else:
        last_update = datetime.now().strftime("%Y-%m-%d")
    
    return game_version, last_update

def process_player(player_id, cookies, session, existing_data, player_number):
    """Processa a página individual de um jogador e retorna GameVersion e LastUpdate."""
    player_name = existing_data.get(player_id, {}).get('playerName', 'Unknown')
    print(f"Extraindo jogador #{player_number} | {player_id} - {player_name}")
    url = f"https://sofifa.com/player/{player_id}"
    html = get_page_html(url, cookies, session)
    if not html:
        print(f"Falha ao obter HTML para o jogador {player_id} - {player_name}")
        return player_id, None, None
    
    game_version, last_update = extract_select_values(html)
    return player_id, game_version, last_update

def load_existing_data(filename):
    """Carrega os dados existentes do JSONL."""
    existing_data = {}
    headers = []
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
    return headers, existing_data

def load_checkpoint(checkpoint_file):
    """Carrega o checkpoint, se existir."""
    if os.path.exists(checkpoint_file):
        with open(checkpoint_file, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {"processed_ids": []}

def save_checkpoint(checkpoint_file, processed_ids):
    """Salva o progresso no checkpoint."""
    with open(checkpoint_file, 'w', encoding='utf-8') as f:
        json.dump({"processed_ids": processed_ids}, f)

def update_player_data(player_id, game_version, last_update, existing_data):
    """Atualiza os campos GameVersion e LastUpdate no existing_data."""
    global log_updates
    if player_id in existing_data:
        old_version = existing_data[player_id].get('GameVersion', 'N/A')
        old_update = existing_data[player_id].get('LastUpdate', 'N/A')
        existing_data[player_id]['GameVersion'] = game_version
        existing_data[player_id]['LastUpdate'] = last_update
        if old_version != game_version or old_update != last_update:
            log_updates += f"ID {player_id}: GameVersion {old_version} → {game_version}, LastUpdate {old_update} → {last_update}\n"
    else:
        print(f"Player ID {player_id} not found in existing data.")

def rewrite_file_from_existing_data(filename, headers, existing_data):
    """Reescreve o JSONL com os dados atualizados."""
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(json.dumps(headers, ensure_ascii=False) + '\n')
        for player_id in sorted(existing_data.keys(), key=lambda x: int(x) if x.isdigit() else x):
            player = existing_data[player_id]
            values = [player.get(header, "") for header in headers]
            f.write(json.dumps(values, ensure_ascii=False) + '\n')
    print(f"Arquivo reescrito com {len(existing_data)} registros.")

if __name__ == "__main__":
    # Carrega cookies e configura sessão
    cookies = load_cookies_from_json(COOKIES_FILE)
    session = configure_session()

    # Carrega dados existentes
    headers, existing_data = load_existing_data(OUTPUT_FILE)
    if not headers:
        print("Erro: headers não encontrados no JSONL.")
        sys.exit(1)

    # Backup do arquivo original
    backup_filename = f"scraping/bkps/sofifa_players_bkp_{datetime.now().strftime('%Y%m%d')}.jsonl"
    os.makedirs('scraping/bkps', exist_ok=True)
    if os.path.exists(OUTPUT_FILE):
        shutil.copy2(OUTPUT_FILE, backup_filename)
        print(f"Backup criado: {backup_filename}")

    # Carrega checkpoint
    checkpoint = load_checkpoint(CHECKPOINT_FILE)
    processed_ids = set(checkpoint["processed_ids"])
    print(f"{len(processed_ids)} jogadores já processados carregados do checkpoint.")

    # Lista de IDs a processar
    player_ids = list(existing_data.keys())
    remaining_ids = [pid for pid in player_ids if pid not in processed_ids]
    if TEST_MODE:
        remaining_ids = remaining_ids[:MAX_TEST_PLAYERS]
        print(f"Modo teste ativado: processando {MAX_TEST_PLAYERS} jogadores.")
    else:
        print(f"Processando {len(remaining_ids)} jogadores restantes.")

    start_time = time.time()
    processed_count = len(processed_ids)

    # Processamento paralelo com ThreadPoolExecutor
    with ThreadPoolExecutor(max_workers=MAX_THREADS) as executor:
        # Adiciona o número do jogador na lista de tarefas
        future_to_player = {
            executor.submit(process_player, pid, cookies, session, existing_data, i + 1 + processed_count): pid 
            for i, pid in enumerate(remaining_ids)
        }
        for future in as_completed(future_to_player):
            player_id = future_to_player[future]
            try:
                pid, game_version, last_update = future.result()
                if game_version and last_update:
                    update_player_data(pid, game_version, last_update, existing_data)
                    processed_ids.add(pid)
                    processed_count += 1
                    if processed_count % 100 == 0:
                        print(f"Processados {processed_count} jogadores...")
                        save_checkpoint(CHECKPOINT_FILE, list(processed_ids))
                        rewrite_file_from_existing_data(OUTPUT_FILE, headers, existing_data)
                        print(f"Checkpoint salvo em {CHECKPOINT_FILE}")
            except Exception as e:
                print(f"Erro ao processar {player_id}: {e}")

    # Salva o progresso final
    save_checkpoint(CHECKPOINT_FILE, list(processed_ids))
    rewrite_file_from_existing_data(OUTPUT_FILE, headers, existing_data)

    # Calcula tempo total
    total_time = int(time.time() - start_time)
    formatted_time = time.strftime("%H:%M:%S", time.gmtime(total_time))

    # Exibe resultados
    print("==== Atualização completa ====")
    print(f"Total de jogadores processados: {processed_count}")
    print(f"Tempo total: {formatted_time}")
    if log_updates:
        print("\nLog de atualizações:")
        print(log_updates)
    with open('scraping/logs/sofifa_players_log.txt', 'w', encoding='utf-8') as log_file:
        log_file.write(log_updates)
    print(f"scraping/logs/sofifa_players_log.txt")
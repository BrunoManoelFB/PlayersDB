import requests
from bs4 import BeautifulSoup
import csv
import json
import os
from dotenv import load_dotenv

# Carregar variáveis de ambiente do arquivo .env
load_dotenv()

# Configurações (obtidas do .env)
BASE_URL = os.getenv("EVOWEB_BASE_URL")
LOGIN_URL = os.getenv("EVOWEB_LOGIN_URL")
THREAD_URL = os.getenv("EVOWEB_TEAMS_THREAD_URL")
POST_IDS = ["post-3838249", "post-3838250"]  # IDs dos posts a serem extraídos

# Credenciais (obtidas do .env)
USERNAME = os.getenv("EVOWEB_USERNAME")
PASSWORD = os.getenv("EVOWEB_PASSWORD")

# Arquivos de saída
OUTPUT_JSONL = "teams.jsonl"
OUTPUT_CSV = "teams.csv"

# Validação de variáveis de ambiente
required_vars = ["EVOWEB_USERNAME", "EVOWEB_PASSWORD", "EVOWEB_BASE_URL", "EVOWEB_LOGIN_URL", "EVOWEB_TEAMS_THREAD_URL"]
missing_vars = [var for var in required_vars if os.getenv(var) is None]
if missing_vars:
    raise ValueError(f"As seguintes variáveis de ambiente estão faltando: {', '.join(missing_vars)}")

# Função para fazer login e obter sessão autenticada
def login(session):
    login_page = session.get(LOGIN_URL)
    soup = BeautifulSoup(login_page.text, "html.parser")
    csrf_token = soup.find("input", {"name": "_xfToken"})["value"]
    redirect_input = soup.find("input", {"name": "_xfRedirect"})
    redirect_value = redirect_input["value"] if redirect_input else "/"
    login_data = {
        "login": USERNAME,
        "password": PASSWORD,
        "_xfToken": csrf_token,
        "remember": "1",
        "_xfRedirect": redirect_value,
    }
    login_action_url = f"{BASE_URL}/login/login"
    response = session.post(login_action_url, data=login_data)
    if response.status_code == 200 and "login" not in response.url.lower():
        print("Login bem-sucedido!")
        print(f"Redirecionado para: {response.url}")
    else:
        print(f"Resposta do servidor: {response.status_code}")
        print(f"URL após login: {response.url}")
        print(f"Conteúdo da resposta: {response.text[:500]}")
        raise Exception("Falha no login. Verifique suas credenciais ou o formulário de login.")

# Função para limpar o nome do time e extrair a legenda
def clean_team_name_and_extract_legend(team_name_html):
    soup = BeautifulSoup(str(team_name_html), "html.parser")
    legend_tags = soup.find_all("code", {"class": "bbCodeInline"})
    legend = " ".join(tag.get_text(strip=True) for tag in legend_tags) if legend_tags else ""
    for tag in legend_tags:
        tag.decompose()
    clean_name = soup.get_text(strip=True)
    return clean_name, legend

# Função para determinar o país para seleções
def get_country_for_national_team(team_name):
    if team_name in ["Japan Reserves", "Japan Reserves 2"]:
        return "Japan"
    if team_name.startswith("Classic "):
        return team_name.replace("Classic ", "").strip()
    return team_name

# Função para extrair tabelas e países de um post
def extract_tables_from_post(post_html, post_id, is_national_team):
    soup = BeautifulSoup(post_html, "html.parser")
    post_element = soup.find("article", {"data-content": post_id})
    if not post_element:
        print(f"Post {post_id} não encontrado no HTML.")
        return []

    all_data = []
    if is_national_team:
        tables = post_element.find_all("table", {"class": "collapse left alternate"})
        for table in tables:
            headers = [th.get_text(strip=True) for th in table.find("tr").find_all("th")]
            print(f"Cabeçalhos da tabela no post {post_id}: {headers}")
            if "Team name:" not in headers:
                print(f"Coluna 'Team name:' não encontrada no post {post_id}. Pulando tabela.")
                continue
            for tr in table.find_all("tr")[1:]:
                cells = [td for td in tr.find_all("td")]
                if cells:
                    row_dict = dict(zip(headers, [cell.get_text(strip=True) for cell in cells]))
                    team_name_html = cells[headers.index("Team name:")]
                    clean_name, legend = clean_team_name_and_extract_legend(team_name_html)
                    del row_dict["Team name:"]
                    row_dict["Team name"] = clean_name
                    row_dict["National Team"] = True
                    row_dict["Country"] = get_country_for_national_team(clean_name)
                    row_dict["Legend"] = legend
                    all_data.append(row_dict)
    else:
        spoilers = post_element.find_all("div", {"class": "bbCodeSpoiler"})
        for spoiler in spoilers:
            country_tag = spoiler.find("span", {"class": "bbCodeSpoiler-button-title"})
            country = country_tag.get_text(strip=True).split(":")[0].strip() if country_tag else "Unknown"
            tables = spoiler.find_all("table", {"class": "collapse left alternate"})
            for table in tables:
                headers = [th.get_text(strip=True) for th in table.find("tr").find_all("th")]
                print(f"Cabeçalhos da tabela no post {post_id} (spoiler {country}): {headers}")
                if "Team name:" not in headers:
                    print(f"Coluna 'Team name:' não encontrada no post {post_id} (spoiler {country}). Pulando tabela.")
                    continue
                for tr in table.find_all("tr")[1:]:
                    cells = [td for td in tr.find_all("td")]
                    if cells:
                        row_dict = dict(zip(headers, [cell.get_text(strip=True) for cell in cells]))
                        team_name_html = cells[headers.index("Team name:")]
                        clean_name, legend = clean_team_name_and_extract_legend(team_name_html)
                        del row_dict["Team name:"]
                        row_dict["Team name"] = clean_name
                        row_dict["National Team"] = False
                        row_dict["Country"] = country
                        row_dict["Legend"] = legend
                        all_data.append(row_dict)
    return all_data

# Função para salvar em JSONL
def save_to_jsonl(data, filename):
    with open(filename, "w", encoding="utf-8") as f:
        for row in data:
            f.write(json.dumps(row, ensure_ascii=False) + "\n")

# Função para salvar em CSV
def save_to_csv(data, filename, headers):
    with open(filename, "w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=headers)
        writer.writeheader()
        writer.writerows(data)

# Função principal
def main():
    session = requests.Session()
    session.headers.update({
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Referer": BASE_URL
    })
    login(session)
    
    all_data = []
    all_headers = set()
    
    for i, post_id in enumerate(POST_IDS):
        post_url = f"{THREAD_URL}#{post_id}"
        response = session.get(post_url)
        if response.status_code != 200:
            print(f"Erro ao acessar {post_url}: {response.status_code}")
            continue
        
        is_national_team = (i == 0)
        table_data = extract_tables_from_post(response.text, post_id, is_national_team)
        if table_data:
            all_data.extend(table_data)
            headers = set(table_data[0].keys())
            all_headers.update(headers)
    
    if all_data:
        # Classificar por "National Team" (True primeiro) e depois por "Team name"
        all_data = sorted(all_data, key=lambda x: (-x["National Team"], x["Country"], x["Team name"]))
        
        save_to_jsonl(all_data, OUTPUT_JSONL)
        print(f"Dados salvos em {OUTPUT_JSONL}")
        # save_to_csv(all_data, OUTPUT_CSV, list(all_headers))
        # print(f"Dados salvos em {OUTPUT_CSV}")
    else:
        print("Nenhum dado extraído.")

if __name__ == "__main__":
    main()
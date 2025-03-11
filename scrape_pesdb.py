import json
import time
import random
import os
import shutil
from datetime import datetime
import re
import sys
from bs4 import BeautifulSoup
import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry
from concurrent.futures import ThreadPoolExecutor, as_completed

# Configuración inicial
modo_prueba = False
MAX_THREADS = 5
DELAY_BETWEEN_REQUESTS = 0.5

# Variables globales para logs
log_nuevos = ""
log_actualizados = ""

def cargar_cookies_desde_json(ruta_archivo):
    if not os.path.exists(ruta_archivo):
        sys.exit(f"El archivo de cookies JSON no fue encontrado: {ruta_archivo}")
    with open(ruta_archivo, 'r') as f:
        cookies_array = json.load(f)
    return {cookie['name']: cookie['value'] for cookie in cookies_array}

def obtener_user_agent_aleatorio():
    user_agents = [
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/119.0",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
    ]
    return random.choice(user_agents)

def configurar_sesion():
    session = requests.Session()
    retry_strategy = Retry(total=3, backoff_factor=2, status_forcelist=[429, 500, 502, 503, 504], allowed_methods=["GET"])
    adapter = HTTPAdapter(max_retries=retry_strategy)
    session.mount("http://", adapter)
    session.mount("https://", adapter)
    return session

def obtener_html_pagina(url, cookies, session):
    headers = {
        'User-Agent': obtener_user_agent_aleatorio(),
        'Referer': 'https://pesdb.net/',
        'Accept-Language': 'es-ES,es;q=0.9'
    }
    try:
        response = session.get(url, cookies=cookies, headers=headers, timeout=10)
        response.raise_for_status()
        time.sleep(random.uniform(DELAY_BETWEEN_REQUESTS, DELAY_BETWEEN_REQUESTS * 2))
        return response.text
    except requests.exceptions.RequestException as e:
        print(f"Error al acceder a {url}: {e}")
        return None

def obtener_fecha_ultima_actualizacion(soup):
    footer = soup.select_one('#footer')
    if footer:
        text = footer.get_text()
        match = re.search(r'Last update:\s*(\d{4}/\d{2}/\d{2})', text)
        if match:
            return datetime.strptime(match.group(1), '%Y/%m/%d').strftime('%Y-%m-%d')
    return None

def registrar_cambios_en_log(jugador_nuevo, jugador_antiguo=None):
    global log_nuevos, log_actualizados
    if not jugador_antiguo:
        log_nuevos += f"{jugador_nuevo['ID']}: {jugador_nuevo['Player Name']} ({jugador_nuevo.get('Team Name', 'Sin equipo')})\n"
    else:
        cambios = []
        for campo, valor in jugador_nuevo.items():
            if campo not in ['LastUpdate', 'Rating'] and campo in jugador_antiguo and jugador_antiguo[campo] != valor:
                cambios.append(f"- {campo}: {jugador_antiguo[campo]} → {valor}")
        if cambios:
            log_actualizados += f"{jugador_nuevo['ID']}: {jugador_nuevo['Player Name']}\n"
            log_actualizados += "\n".join(cambios) + "\n\n"

def valores_en_orden(jugador, headers):
    return [jugador.get(header, None) for header in headers]

def procesar_pagina(pagina, url_base, cookies, session, datos_existentes, filename, headers=None):
    url_pagina = url_base if pagina == 1 else f"{url_base}&page={pagina}"
    html_pagina = obtener_html_pagina(url_pagina, cookies, session)
    if not html_pagina:
        return 0, None, [], headers

    soup = BeautifulSoup(html_pagina, 'html.parser')
    last_update = obtener_fecha_ultima_actualizacion(soup)
    jugadores_local = 0
    jugadores_pagina = []

    tablas = soup.select('table.players')
    if not headers and tablas:  # Si no hay headers aún, extraerlos de la primera tabla
        filas = tablas[0].find_all('tr')
        headers = [th.get_text(strip=True) for th in filas[0].find_all('th')]
        headers.append('LastUpdate')  # Añadir LastUpdate manualmente

    for tabla in tablas:
        filas = tabla.find_all('tr')[1:]  # Saltar la fila de encabezados
        for fila in filas:
            celdas = fila.find_all('td')
            if len(celdas) < len(headers) - 1:  # -1 por LastUpdate que se añade después
                continue
            jugador = {headers[i]: celdas[i].get_text(strip=True) for i in range(len(celdas))}
            jugador['LastUpdate'] = last_update
            id_jugador = jugador['ID']
            if id_jugador in datos_existentes:
                jugador_existente = datos_existentes[id_jugador]
                jugador_sin_fecha = {k: v for k, v in jugador.items() if k != 'LastUpdate'}
                existente_sin_fecha = {k: v for k, v in jugador_existente.items() if k != 'LastUpdate'}
                if jugador_sin_fecha != existente_sin_fecha:
                    registrar_cambios_en_log(jugador, jugador_existente)
                    datos_existentes[id_jugador] = jugador
                    jugadores_pagina.append(jugador)
                else:
                    datos_existentes[id_jugador]['LastUpdate'] = last_update
            else:
                registrar_cambios_en_log(jugador)
                datos_existentes[id_jugador] = jugador
                jugadores_pagina.append(jugador)
            jugadores_local += 1

    # Guardar jugadores de esta página inmediatamente
    if jugadores_pagina and headers:
        with open(filename, 'a', encoding='utf-8') as f:
            for jugador in jugadores_pagina:
                valores = valores_en_orden(jugador, headers)
                f.write(json.dumps(valores, ensure_ascii=False) + '\n')

    return jugadores_local, last_update, jugadores_pagina, headers

# Configuración inicial
url_base = "https://pesdb.net/efootball/?mode=authentic&all=1&featured=0&sort=id&order=a"
ruta_cookies = 'pesdb_cookies.json'
cookies = cargar_cookies_desde_json(ruta_cookies)
session = configurar_sesion()

# Crear backup e inicializar el archivo
filename = 'pesdb_players.jsonl'
backup_filename = f"pesdb_players_bkp_{datetime.now().strftime('%Y%m%d')}.jsonl"
if os.path.exists(filename):
    print(f"Creando backup de {filename} como {backup_filename}")
    shutil.copy2(filename, backup_filename)
datos_existentes = {}
headers = None

# Cargar datos existentes y headers si el archivo ya existe
if os.path.exists(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        if lines and len(lines) > 1:
            headers = json.loads(lines[0].strip())
            for line in lines[1:]:
                valores = json.loads(line.strip())
                if len(valores) == len(headers):
                    item = dict(zip(headers, valores))
                    if 'ID' in item:
                        datos_existentes[item['ID']] = item

# Si no hay archivo, inicializar headers en la primera página
if not headers:
    html_primera_pagina = obtener_html_pagina(url_base, cookies, session)
    soup = BeautifulSoup(html_primera_pagina, 'html.parser')
    tablas = soup.select('table.players')
    if tablas:
        filas = tablas[0].find_all('tr')
        headers = [th.get_text(strip=True) for th in filas[0].find_all('th')]
        headers.append('LastUpdate')
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(json.dumps(headers, ensure_ascii=False) + '\n')
    else:
        print("No se encontraron tablas en la primera página. Abortando.")
        sys.exit(1)

# Obtener total de páginas y mostrar información inicial
total_jugadores = 0
pages_div = soup.select_one('.pages')
if pages_div:
    match = re.search(r'(\d+) players found', pages_div.text)
    if match:
        total_jugadores = int(match.group(1))

numeros_paginas = [int(re.search(r'page=(\d+)', a['href']).group(1)) for a in soup.select('.pages a') if re.search(r'page=(\d+)', a['href'])]
total_paginas = max(numeros_paginas) if numeros_paginas else 1
if modo_prueba:
    total_paginas = min(total_paginas, 5)

# Mensajes iniciales
print(f"Total de jugadores estimado: {total_jugadores}")
print(f"Modo: {'PRUEBA (hasta 5 páginas)' if modo_prueba else 'COMPLETO'}")
print("Iniciando...")

# Scraping paralelo
tiempo_inicio = time.time()
jugadores_recopilados = 0
last_update_global = None

with ThreadPoolExecutor(max_workers=MAX_THREADS) as executor:
    futures = {executor.submit(procesar_pagina, pagina, url_base, cookies, session, datos_existentes, filename, headers): pagina for pagina in range(1, total_paginas + 1)}
    for future in as_completed(futures):
        pagina = futures[future]
        try:
            jugadores_pagina_count, last_update, jugadores_pagina, returned_headers = future.result()
            jugadores_recopilados += jugadores_pagina_count
            if last_update:
                last_update_global = last_update
            progreso = (jugadores_recopilados / total_jugadores * 100) if total_jugadores > 0 else 0
            print(f"Progreso: {progreso:.1f}% | Jugadores recopilados: {jugadores_recopilados} | Página {pagina} concluida")
        except Exception as e:
            print(f"Error en la página {pagina}: {e}")

# Guardar metadatos
metadata_filename = 'pesdb_metadata.json'
with open(metadata_filename, 'w', encoding='utf-8') as f:
    json.dump({"dbLastUpdate": datetime.now().strftime('%Y-%m-%d'), "pesdbData": last_update_global}, f, ensure_ascii=False, indent=4)

# Finalización
tiempo_fin = time.time()
tiempo_transcurrido = int(tiempo_fin - tiempo_inicio)
tiempo_formateado = time.strftime("%H:%M:%S", time.gmtime(tiempo_transcurrido))

print("¡Extracción finalizada!")
print(f"Total de jugadores guardados: {jugadores_recopilados}")
print(f"Tiempo total transcurrido: {tiempo_formateado}")

log_final = f"######{datetime.now().strftime('%d/%m/%Y')}######\n"
log_final += f"Última Actualización del sitio: {last_update_global}\n\n"
log_final += "***Jugadores Actualizados:***\n" + log_actualizados + "\n"
log_final += "***Nuevos Jugadores:***\n" + log_nuevos

log_filename = f"logs/{datetime.now().strftime('%Y%m%d_%H%M%S')}_log.txt"
os.makedirs('logs', exist_ok=True)
with open(log_filename, 'w', encoding='utf-8') as f:
    f.write(log_final)

print("\nJugadores Actualizados:")
print(log_actualizados)
print("\nNuevos Jugadores:")
print(log_nuevos)
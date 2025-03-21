import os
import json
import pandas as pd
import mysql.connector
from dotenv import load_dotenv
import numpy as np

# Carrega variáveis de ambiente do arquivo .env
load_dotenv()

DATABASE_HOST = os.getenv("DATABASE_HOST")
DATABASE_USER = os.getenv("DATABASE_USER")
DATABASE_PASSWORD = os.getenv("DATABASE_PASSWORD")
DATABASE_NAME = os.getenv("DATABASE_NAME")

def jsonl_to_dataframe(file_path):
    with open(file_path, encoding="utf-8") as f:
        lines = f.read().splitlines()
    header = json.loads(lines[0])
    data = [json.loads(line) for line in lines[1:]]
    return pd.DataFrame(data, columns=header)

def connect_to_database():
    """Função para criar e retornar uma conexão ao banco de dados."""
    return mysql.connector.connect(
        host=DATABASE_HOST,
        user=DATABASE_USER,
        password=DATABASE_PASSWORD,
        database=DATABASE_NAME,
        port=3306
    )

def create_tables():
    conn = connect_to_database()
    cur = conn.cursor()

    # Criação das tabelas (mantido como estava)
    cur.execute("DROP TABLE IF EXISTS players;")
    cur.execute("""
    CREATE TABLE players (
        id INT AUTO_INCREMENT PRIMARY KEY,
        konamiID VARCHAR(255),
        pFifaID VARCHAR(255),
        commentaryID VARCHAR(255),
        playerName VARCHAR(255),
        fakeName VARCHAR(255),
        jpPlayerName VARCHAR(255),
        cnPlayerName VARCHAR(255),
        fullName VARCHAR(255),
        clubShirtName VARCHAR(255),
        nationalShirtName VARCHAR(255),
        nationality1 VARCHAR(255),
        nationality2 VARCHAR(255),
        age INT,
        birthdate DATE,
        height INT,
        weight INT,
        strongFoot INT,
        strongHand INT,
        starRating INT,
        registeredPosition INT,
        positions JSON,
        youthClub VARCHAR(255),
        pBeSoccerLink VARCHAR(255),
        update_at DATE,
        info_id VARCHAR(255)
    );
    """)

    cur.execute("DROP TABLE IF EXISTS ef_stats;")
    cur.execute("""
    CREATE TABLE ef_stats (
        konamiID VARCHAR(255) PRIMARY KEY,
        update_at DATE,
        info_id VARCHAR(255),
        stats JSON,
        overall INT,
        playing_style VARCHAR(255),
        skills JSON
    );
    """)

    ''' ----------------------------------------------------- tabela teams
    cur.execute("DROP TABLE IF EXISTS teams;")
    cur.execute("""
    CREATE TABLE teams (
        id INT AUTO_INCREMENT PRIMARY KEY,
        konamiid VARCHAR(255),
        hex_id VARCHAR(255),
        team_name VARCHAR(255),
        soccerway VARCHAR(255),
        fm_uid VARCHAR(255),
        fifaid VARCHAR(255),
        bsid VARCHAR(255),
        est VARCHAR(255),
        primary_color VARCHAR(255),
        secondary_color VARCHAR(255),
        database_name VARCHAR(255),
        japanese VARCHAR(255),
        chinese VARCHAR(255),
        korean VARCHAR(255),
        greek VARCHAR(255),
        greek_uppercase VARCHAR(255),
        russian VARCHAR(255),
        national_team BOOLEAN,
        country VARCHAR(255),
        legend VARCHAR(255)
    );
    """)
    '''

    conn.commit()
    cur.close()
    conn.close()
    print("Tabelas criadas com sucesso!")

def convert_side_value(value):
    if isinstance(value, str):
        v = value.strip().lower()
        if v == "right":
            return 0
        elif v == "left":
            return 1
        return None
    elif isinstance(value, (int, float)) and not pd.isna(value):
        return int(value)
    return None

def load_players():
    print("Carregando players.jsonl...")
    df_players = jsonl_to_dataframe("scraping/players.jsonl")
    
    df_players["konamiID"] = df_players["konamiID"].astype(str)
    df_players["strongFoot"] = df_players["strongFoot"].apply(convert_side_value)
    df_players["strongHand"] = df_players["strongHand"].apply(convert_side_value)
    
    int_columns = ["age", "height", "weight", "starRating", "registeredPosition"]
    for col in int_columns:
        if col in df_players.columns:
            df_players[col] = df_players[col].apply(lambda x: int(float(x)) if pd.notnull(x) and not pd.isna(x) else None)
    
    df_players["positions"] = df_players["positions"].apply(lambda x: json.dumps(json.loads(x)) if pd.notna(x) and x != 'null' else None)
    
    date_columns = ['birthdate', 'update_at']
    for col in date_columns:
        df_players[col] = df_players[col].replace('null', None)
        df_players[col] = df_players[col].replace('', None)
        df_players[col] = pd.to_datetime(df_players[col], format='%Y-%m-%d', errors='coerce')
        df_players[col] = df_players[col].where(pd.notnull(df_players[col]), None)
    
    df_players = df_players.replace({np.nan: None})
    
    conn = connect_to_database()
    cur = conn.cursor()
    
    print("Truncando tabela players...")
    cur.execute("TRUNCATE TABLE players;")
    
    insert_sql = """
    INSERT INTO players (konamiID, pFifaID, commentaryID, playerName, fakeName, jpPlayerName,
                         cnPlayerName, fullName, clubShirtName, nationalShirtName, nationality1, nationality2,
                         age, birthdate, height, weight, strongFoot, strongHand, starRating,
                         registeredPosition, positions, youthClub, pBeSoccerLink, update_at, info_id)
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    """
    
    # Prepara os dados como uma lista de tuplas
    data = [tuple(row) for row in df_players.itertuples(index=False, name=None)]
    
    # Define o tamanho do lote (batch size)
    batch_size = 1000
    total_rows = len(data)
    print(f"Total de registros: {total_rows}")
    
    # Insere os dados em lotes
    for i in range(0, total_rows, batch_size):
        batch = data[i:i + batch_size]
        print(f"Inserindo lote {i // batch_size + 1} ({len(batch)} registros)...")
        cur.executemany(insert_sql, batch)
        conn.commit()  # Commit após cada lote para evitar sobrecarga
    
    cur.close()
    conn.close()
    print("Tabela players atualizada com sucesso!")

def load_ef_stats():
    print("Carregando ef_stats.jsonl...")
    df_stats = jsonl_to_dataframe("scraping/ef_stats.jsonl")
    if df_stats.empty:
        print("Nenhum dado encontrado em ef_stats.jsonl")
        return

    new_rows = []
    for row in df_stats.itertuples(index=False):
        konamiID = row[0]
        update_at = pd.to_datetime(row[1], format='%Y-%m-%d', errors='coerce') if row[1] else None
        info_id = row[2]
        stats_dict = {df_stats.columns[i]: row[i] for i in range(3, 33)}
        overall = int(float(row[33])) if row[33] and pd.notnull(row[33]) else None
        playing_style = row[34]
        skills_dict = {df_stats.columns[i]: row[i] for i in range(35, len(df_stats.columns))}
        new_rows.append((
            konamiID, update_at, info_id, json.dumps(stats_dict), overall, playing_style, json.dumps(skills_dict)
        ))
    
    conn = connect_to_database()
    cur = conn.cursor()
    
    print("Truncando tabela ef_stats...")
    cur.execute("TRUNCATE TABLE ef_stats;")
    
    insert_sql = """
    INSERT INTO ef_stats (konamiID, update_at, info_id, stats, overall, playing_style, skills)
    VALUES (%s, %s, %s, %s, %s, %s, %s)
    """
    
    batch_size = 1000
    total_rows = len(new_rows)
    print(f"Total de registros: {total_rows}")
    
    for i in range(0, total_rows, batch_size):
        batch = new_rows[i:i + batch_size]
        print(f"Inserindo lote {i // batch_size + 1} ({len(batch)} registros)...")
        cur.executemany(insert_sql, batch)
        conn.commit()
    
    cur.close()
    conn.close()
    print("Tabela ef_stats atualizada com sucesso!")

def load_teams():
    print("Carregando teams.jsonl...")
    df_teams = jsonl_to_dataframe("scraping/teams.jsonl")
    
    if df_teams.empty:
        print("Nenhum dado encontrado em teams.jsonl")
        return
    
    expected_columns = [
        "konamiid", "hex_id", "team_name", "soccerway", "fm_uid", "fifaid", "bsid", "est",
        "primary_color", "secondary_color", "database_name", "japanese", "chinese",
        "korean", "greek", "greek_uppercase", "russian", "national_team", "country", "legend"
    ]
    
    column_mapping = {
        "KonamiID:": "konamiid", "HEX ID:": "hex_id", "Team name": "team_name",
        "Soccerway:": "soccerway", "FM UID:": "fm_uid", "FIFA ID:": "fifaid",
        "bsID": "bsid", "Est.:": "est", "Primary:": "primary_color",
        "Secondary:": "secondary_color", "Database name:": "database_name",
        "Japanese:": "japanese", "Chinese:": "chinese", "Korean:": "korean",
        "Greek:": "greek", "Greek (uppercase):": "greek_uppercase",
        "Russian:": "russian", "National Team": "national_team", "Country": "country",
        "Legend": "legend"
    }
    df_teams = df_teams.rename(columns=column_mapping)
    
    for col in expected_columns:
        if col not in df_teams.columns:
            df_teams[col] = None
    
    df_teams = df_teams[expected_columns]
    df_teams["konamiid"] = df_teams["konamiid"].astype(str)
    df_teams["national_team"] = df_teams["national_team"].fillna(False).astype(bool)
    df_teams = df_teams.replace({np.nan: None})
    
    conn = connect_to_database()
    cur = conn.cursor()
    
    print("Truncando tabela teams...")
    cur.execute("TRUNCATE TABLE teams;")
    
    insert_sql = """
    INSERT INTO teams (konamiid, hex_id, team_name, soccerway, fm_uid, fifaid, bsid, est,
                       primary_color, secondary_color, database_name, japanese, chinese,
                       korean, greek, greek_uppercase, russian, national_team, country, legend)
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    """
    
    data = [tuple(row) for row in df_teams.itertuples(index=False, name=None)]
    batch_size = 1000
    total_rows = len(data)
    print(f"Total de registros: {total_rows}")
    
    for i in range(0, total_rows, batch_size):
        batch = data[i:i + batch_size]
        print(f"Inserindo lote {i // batch_size + 1} ({len(batch)} registros)...")
        cur.executemany(insert_sql, batch)
        conn.commit()
    
    cur.close()
    conn.close()
    print("Tabela teams atualizada com sucesso!")

if __name__ == '__main__':
    create_tables()
    load_players()
    load_ef_stats()
    # load_teams() --só será necessário se houver atualização nos dados de times
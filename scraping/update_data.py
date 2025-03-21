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

def load_db_players():
    """Carrega os dados da tabela players do banco em um dicionário."""
    conn = connect_to_database()
    cur = conn.cursor(dictionary=True)
    cur.execute("SELECT * FROM players")
    rows = cur.fetchall()
    cur.close()
    conn.close()
    return {row['konamiID']: row for row in rows}

def load_db_ef_stats():
    """Carrega os dados da tabela ef_stats do banco em um dicionário."""
    conn = connect_to_database()
    cur = conn.cursor(dictionary=True)
    cur.execute("SELECT * FROM ef_stats")
    rows = cur.fetchall()
    cur.close()
    conn.close()
    return {row['konamiID']: row for row in rows}

def update_players():
    print("Carregando players.jsonl...")
    df_players = jsonl_to_dataframe("scraping/players.jsonl")
    
    # Conversão de tipos
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
    
    # Carrega dados existentes do banco
    db_players = load_db_players()
    print(f"Total de jogadores no banco: {len(db_players)}")
    
    conn = connect_to_database()
    cur = conn.cursor()
    
    insert_sql = """
    INSERT INTO players (konamiID, pFifaID, commentaryID, playerName, fakeName, jpPlayerName,
                         cnPlayerName, fullName, clubShirtName, nationalShirtName, nationality1, nationality2,
                         age, birthdate, height, weight, strongFoot, strongHand, starRating,
                         registeredPosition, positions, youthClub, pBeSoccerLink, update_at, info_id)
    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    """
    
    update_sql = """
    UPDATE players SET
        pFifaID = %s, commentaryID = %s, playerName = %s, fakeName = %s, jpPlayerName = %s,
        cnPlayerName = %s, fullName = %s, clubShirtName = %s, nationalShirtName = %s, nationality1 = %s,
        nationality2 = %s, age = %s, birthdate = %s, height = %s, weight = %s, strongFoot = %s,
        strongHand = %s, starRating = %s, registeredPosition = %s, positions = %s, youthClub = %s,
        pBeSoccerLink = %s, update_at = %s, info_id = %s
    WHERE konamiID = %s
    """
    
    new_players = 0
    updated_players = 0
    batch_size = 1000
    insert_batch = []
    update_batch = []
    
    for row in df_players.itertuples(index=False, name=None):
        konamiID = row[0]
        player_data = tuple(row)
        
        if konamiID not in db_players:
            # Novo jogador: adiciona ao batch de INSERT
            insert_batch.append(player_data)
            new_players += 1
        else:
            # Jogador existente: compara e atualiza se necessário
            db_player = db_players[konamiID]
            db_data = (
                db_player['pFifaID'], db_player['commentaryID'], db_player['playerName'], db_player['fakeName'],
                db_player['jpPlayerName'], db_player['cnPlayerName'], db_player['fullName'], db_player['clubShirtName'],
                db_player['nationalShirtName'], db_player['nationality1'], db_player['nationality2'], db_player['age'],
                db_player['birthdate'], db_player['height'], db_player['weight'], db_player['strongFoot'],
                db_player['strongHand'], db_player['starRating'], db_player['registeredPosition'], db_player['positions'],
                db_player['youthClub'], db_player['pBeSoccerLink'], db_player['update_at'], db_player['info_id']
            )
            if db_data != player_data[1:]:  # Ignora konamiID na comparação
                update_batch.append(player_data[1:] + (konamiID,))
                updated_players += 1
        
        # Executa os lotes quando atingirem o tamanho definido
        if len(insert_batch) >= batch_size:
            print(f"Inserindo {len(insert_batch)} novos jogadores...")
            cur.executemany(insert_sql, insert_batch)
            conn.commit()
            insert_batch = []
        
        if len(update_batch) >= batch_size:
            print(f"Atualizando {len(update_batch)} jogadores existentes...")
            cur.executemany(update_sql, update_batch)
            conn.commit()
            update_batch = []
    
    # Executa os lotes restantes
    if insert_batch:
        print(f"Inserindo {len(insert_batch)} novos jogadores restantes...")
        cur.executemany(insert_sql, insert_batch)
        conn.commit()
    
    if update_batch:
        print(f"Atualizando {len(update_batch)} jogadores existentes restantes...")
        cur.executemany(update_sql, update_batch)
        conn.commit()
    
    cur.close()
    conn.close()
    print(f"Players atualizados: {updated_players} | Novos: {new_players}")

def update_ef_stats():
    print("Carregando ef_stats.jsonl...")
    df_stats = jsonl_to_dataframe("scraping/ef_stats.jsonl")
    if df_stats.empty:
        print("Nenhum dado encontrado em ef_stats.jsonl")
        return
    
    # Carrega dados existentes do banco
    db_stats = load_db_ef_stats()
    print(f"Total de stats no banco: {len(db_stats)}")
    
    conn = connect_to_database()
    cur = conn.cursor()
    
    insert_sql = """
    INSERT INTO ef_stats (konamiID, update_at, info_id, stats, overall, playing_style, skills)
    VALUES (%s, %s, %s, %s, %s, %s, %s)
    """
    
    update_sql = """
    UPDATE ef_stats SET
        update_at = %s, info_id = %s, stats = %s, overall = %s, playing_style = %s, skills = %s
    WHERE konamiID = %s
    """
    
    new_stats = 0
    updated_stats = 0
    batch_size = 1000
    insert_batch = []
    update_batch = []
    
    for row in df_stats.itertuples(index=False):
        konamiID = row[0]
        update_at = pd.to_datetime(row[1], format='%Y-%m-%d', errors='coerce') if row[1] else None
        info_id = row[2]
        stats_dict = {df_stats.columns[i]: row[i] for i in range(3, 33)}
        overall = int(float(row[33])) if row[33] and pd.notnull(row[33]) else None
        playing_style = row[34]
        skills_dict = {df_stats.columns[i]: row[i] for i in range(35, len(df_stats.columns))}
        stat_data = (konamiID, update_at, info_id, json.dumps(stats_dict), overall, playing_style, json.dumps(skills_dict))
        
        if konamiID not in db_stats:
            # Novo stat: adiciona ao batch de INSERT
            insert_batch.append(stat_data)
            new_stats += 1
        else:
            # Stat existente: compara e atualiza se necessário
            db_stat = db_stats[konamiID]
            db_data = (
                db_stat['update_at'], db_stat['info_id'], db_stat['stats'], db_stat['overall'],
                db_stat['playing_style'], db_stat['skills']
            )
            new_data = stat_data[1:]  # Ignora konamiID na comparação
            if db_data != new_data:
                update_batch.append(new_data + (konamiID,))
                updated_stats += 1
        
        # Executa os lotes quando atingirem o tamanho definido
        if len(insert_batch) >= batch_size:
            print(f"Inserindo {len(insert_batch)} novos stats...")
            cur.executemany(insert_sql, insert_batch)
            conn.commit()
            insert_batch = []
        
        if len(update_batch) >= batch_size:
            print(f"Atualizando {len(update_batch)} stats existentes...")
            cur.executemany(update_sql, update_batch)
            conn.commit()
            update_batch = []
    
    # Executa os lotes restantes
    if insert_batch:
        print(f"Inserindo {len(insert_batch)} novos stats restantes...")
        cur.executemany(insert_sql, insert_batch)
        conn.commit()
    
    if update_batch:
        print(f"Atualizando {len(update_batch)} stats existentes restantes...")
        cur.executemany(update_sql, update_batch)
        conn.commit()
    
    cur.close()
    conn.close()
    print(f"Stats atualizados: {updated_stats} | Novos: {new_stats}")

if __name__ == '__main__':
    update_players()
    update_ef_stats()
    # Não incluí update_teams(), pois você mencionou que só seria necessário com atualização de times
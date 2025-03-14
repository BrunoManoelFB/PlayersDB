import os
import json
import pandas as pd
from io import StringIO
import psycopg2
from dotenv import load_dotenv
import csv

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

def load_jsonl(file_path):
    """Lê um arquivo JSONL e retorna (header, rows)"""
    with open(file_path, encoding="utf-8") as f:
        lines = f.read().splitlines()
    if not lines:
        return None, []
    header = json.loads(lines[0])
    rows = [json.loads(line) for line in lines[1:]]
    return header, rows

def convert_side_value(value):
    """Converte 'right' para 0, 'left' para 1 e garante que números sejam inteiros."""
    if isinstance(value, str):
        v = value.strip().lower()
        if v == "right":
            return 0
        elif v == "left":
            return 1
    elif isinstance(value, (int, float)):
        return int(value)
    return value

def create_tables():
    """Elimina e recria as tabelas players e ef_stats no PostgreSQL."""
    conn = psycopg2.connect(
        host=DATABASE_HOST,
        user=DATABASE_USER,
        password=DATABASE_PASSWORD,
        dbname=DATABASE_NAME
    )
    cur = conn.cursor()

    # Criação da tabela players
    cur.execute("DROP TABLE IF EXISTS players;")
    cur.execute("""
    CREATE TABLE players (
        konamiID TEXT PRIMARY KEY,
        pFifaID TEXT,
        commentaryID TEXT,
        playerName TEXT,
        fakeName TEXT,
        jpPlayerName TEXT,
        cnPlayerName TEXT,
        fullName TEXT,
        clubShirtName TEXT,
        nationalShirtName TEXT,
        nationality1 TEXT,
        nationality2 TEXT,
        age INTEGER,
        birthdate DATE,
        height INTEGER,
        weight INTEGER,
        strongFoot INTEGER,
        strongHand INTEGER,
        starRating INTEGER,
        registeredPosition INTEGER,
        positions JSONB,
        youthClub TEXT,
        pBeSoccerLink TEXT,
        update_at DATE,
        info_id TEXT
    );
    """)

    # Criação da tabela ef_stats
    cur.execute("DROP TABLE IF EXISTS ef_stats;")
    cur.execute("""
    CREATE TABLE ef_stats (
        konamiID TEXT PRIMARY KEY,
        update_at DATE,
        info_id TEXT,
        stats JSONB,
        overall INTEGER,
        playing_style TEXT,
        skills JSONB
    );
    """)

    conn.commit()
    cur.close()
    conn.close()
    print("Tabelas criadas com sucesso!")

def load_players():
    print("Carregando players.jsonl...")
    df_players = jsonl_to_dataframe("players.jsonl")
    
    # Garante que a coluna konamiID seja string
    df_players["konamiID"] = df_players["konamiID"].astype(str)
    
    # Converte os campos de pé e mão para valores inteiros (0 para right, 1 para left)
    df_players["strongFoot"] = df_players["strongFoot"].apply(convert_side_value)
    df_players["strongHand"] = df_players["strongHand"].apply(convert_side_value)
    
    # Converte outras colunas inteiras, se aplicável
    int_columns = ["age", "height", "weight", "starRating", "registeredPosition"]
    for col in int_columns:
        if col in df_players.columns:
            df_players[col] = df_players[col].apply(lambda x: int(float(x)) if pd.notnull(x) else None)
    
    # Para a coluna positions, se não for nula, garante que seja um JSON string válido
    df_players["positions"] = df_players["positions"].apply(lambda x: json.dumps(json.loads(x)) if pd.notna(x) else None)
    
    # Tratar as colunas de data
    date_columns = ['birthdate', 'update_at']
    for col in date_columns:
        df_players[col] = df_players[col].replace('null', None)
        df_players[col] = df_players[col].replace('', None)
        df_players[col] = pd.to_datetime(df_players[col], format='%Y-%m-%d', errors='coerce')
        df_players[col] = df_players[col].where(pd.notnull(df_players[col]), None)
    
    # Exporta o DataFrame para CSV em memória; use float_format para não ter casas decimais
    csv_buffer = StringIO()
    df_players.to_csv(csv_buffer, index=False, header=True, na_rep='', float_format='%.0f')
    csv_buffer.seek(0)
    
    conn = psycopg2.connect(
        host=DATABASE_HOST,
        user=DATABASE_USER,
        password=DATABASE_PASSWORD,
        dbname=DATABASE_NAME
    )
    cur = conn.cursor()
    
    print("Truncando tabela players...")
    cur.execute("TRUNCATE TABLE players;")
    
    copy_sql = """
    COPY players(konamiID, pFifaID, commentaryID, playerName, fakeName, jpPlayerName,
                  cnPlayerName, fullName, clubShirtName, nationalShirtName, nationality1, nationality2,
                  age, birthdate, height, weight, strongFoot, strongHand, starRating,
                  registeredPosition, positions, youthClub, pBeSoccerLink, update_at, info_id)
    FROM STDIN WITH CSV HEADER DELIMITER AS ',' NULL AS ''
    """
    print("Inserindo dados na tabela players via COPY...")
    cur.copy_expert(sql=copy_sql, file=csv_buffer)
    conn.commit()
    cur.close()
    conn.close()
    print("Tabela players atualizada com sucesso!")


def load_ef_stats():
    print("Carregando ef_stats.jsonl...")
    header, rows = load_jsonl("ef_stats.jsonl")
    if not header or not rows:
        print("Nenhum dado encontrado em ef_stats.jsonl")
        return

    new_rows = []
    for row in rows:
        konamiID = row[0]
        update_at = row[1]
        info_id = row[2]
        stats_dict = { header[i]: row[i] for i in range(3, 33) }
        overall = row[33]
        playing_style = row[34]
        skills_dict = { header[i]: row[i] for i in range(35, len(header)) }
        new_rows.append({
            "konamiID": konamiID,
            "update_at": update_at,
            "info_id": info_id,
            "stats": json.dumps(stats_dict),
            "overall": overall,
            "playing_style": playing_style,
            "skills": json.dumps(skills_dict)
        })
    df_stats = pd.DataFrame(new_rows, columns=["konamiID", "update_at", "info_id", "stats", "overall", "playing_style", "skills"])
    
    csv_buffer = StringIO()
    df_stats.to_csv(csv_buffer, index=False, header=True, na_rep='')
    csv_buffer.seek(0)
    
    conn = psycopg2.connect(
        host=DATABASE_HOST,
        user=DATABASE_USER,
        password=DATABASE_PASSWORD,
        dbname=DATABASE_NAME
    )
    cur = conn.cursor()
    
    print("Truncando tabela ef_stats...")
    cur.execute("TRUNCATE TABLE ef_stats;")
    
    copy_sql = """
    COPY ef_stats(konamiID, update_at, info_id, stats, overall, playing_style, skills)
    FROM STDIN WITH CSV HEADER DELIMITER AS ',' NULL AS ''
    """
    print("Inserindo dados na tabela ef_stats via COPY...")
    cur.copy_expert(sql=copy_sql, file=csv_buffer)
    conn.commit()
    cur.close()
    conn.close()
    print("Tabela ef_stats atualizada com sucesso!")

def load_teams():
    print("Carregando teams.jsonl...")
    df_teams = jsonl_to_dataframe("teams.jsonl")
    
    if df_teams.empty:
        print("Nenhum dado encontrado em teams.jsonl")
        return
    
    expected_columns = [
        "id", "hex_id", "team_name", "soccerway", "fm_uid", "fifa_ea_fc_id", "est",
        "primary_color", "secondary_color", "database_name", "japanese", "chinese",
        "korean", "greek", "greek_uppercase", "russian", "national_team", "country", "legend"
    ]
    
    column_mapping = {
        "ID:": "id",
        "HEX ID:": "hex_id",
        "Team name": "team_name",
        "Soccerway:": "soccerway",
        "FM UID:": "fm_uid",
        "FIFA/EA FC ID:": "fifa_ea_fc_id",
        "Est.:": "est",
        "Primary:": "primary_color",
        "Secondary:": "secondary_color",
        "Database name:": "database_name",
        "Japanese:": "japanese",
        "Chinese:": "chinese",
        "Korean:": "korean",
        "Greek:": "greek",
        "Greek (uppercase):": "greek_uppercase",
        "Russian:": "russian",
        "National Team": "national_team",
        "Country": "country",
        "Legend": "legend"
    }
    df_teams = df_teams.rename(columns=column_mapping)
    
    existing_columns = [col for col in df_teams.columns if col in expected_columns]
    if len(existing_columns) != len(expected_columns):
        missing = set(expected_columns) - set(existing_columns)
        extra = set(df_teams.columns) - set(expected_columns)
        print(f"Colunas faltando: {missing}")
        print(f"Colunas extras: {extra}")
    df_teams = df_teams[existing_columns]
    
    df_teams["id"] = df_teams["id"].astype(str)
    df_teams["national_team"] = df_teams["national_team"].astype(bool)
    
    print("Colunas do DataFrame:", df_teams.columns.tolist())
    print("Primeiras 5 linhas do DataFrame:\n", df_teams.head().to_string())
    
    csv_buffer = StringIO()
    df_teams.to_csv(csv_buffer, index=False, header=True, na_rep='')
    csv_buffer.seek(0)
    
    print("Conteúdo do CSV (primeiras 500 caracteres):\n", csv_buffer.getvalue()[:500])
    
    conn = psycopg2.connect(
        host=DATABASE_HOST,
        user=DATABASE_USER,
        password=DATABASE_PASSWORD,
        dbname=DATABASE_NAME
    )
    cur = conn.cursor()
    
    print("Truncando tabela teams...")
    cur.execute("TRUNCATE TABLE teams;")
    
    copy_sql = """
    COPY teams(id, hex_id, soccerway, fm_uid, fifa_ea_fc_id, est, primary_color,
               secondary_color, database_name, japanese, chinese, korean, greek, greek_uppercase,
               russian, team_name, national_team, country, legend)
    FROM STDIN WITH CSV HEADER DELIMITER AS ',' NULL AS ''
    """
    print("Inserindo dados na tabela teams via COPY...")
    cur.copy_expert(sql=copy_sql, file=csv_buffer)
    conn.commit()
    cur.close()
    conn.close()
    print("Tabela teams atualizada com sucesso!")

if __name__ == '__main__':
    create_tables()
    load_players()
    load_ef_stats()
    #load_teams()
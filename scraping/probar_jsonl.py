import json

with open("scraping/pesdb_players.jsonl", encoding="utf-8") as f:
    lines = f.read().splitlines()
    print(f"Total de linhas: {len(lines)}")
    print(f"Primeira linha: {lines[0]}")
    header = json.loads(lines[0])
    print("Cabeçalho parseado com sucesso:", header[:5])
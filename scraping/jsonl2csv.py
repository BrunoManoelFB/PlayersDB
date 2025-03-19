import pandas as pd

# Lê o arquivo JSONL (usando lines=True para tratar cada linha como um JSON separado)
df = pd.read_json("players.jsonl", lines=True)

# Exibe as primeiras linhas da tabela
df.head()

df.to_csv("players.csv", index=False, sep=";")

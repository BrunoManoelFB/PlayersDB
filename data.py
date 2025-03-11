import json
from collections import OrderedDict
from datetime import datetime

# --- Funções Auxiliares ---

# Dicionário de países (para converter códigos do JSON2 ou outros)
countries = {
    "1": "Afghanistan", "2": "Bahrain", "3": "Bangladesh", "4": "Bhutan",
    "5": "Brunei Darussalam", "6": "Cambodia", "7": "China PR", "8": "Hong Kong",
    "9": "India", "10": "Indonesia", "11": "IR Iran", "12": "Iraq",
    "13": "Japan", "14": "Jordan", "15": "Korea DPR", "16": "Korea Republic",
    "17": "Kuwait", "18": "Laos", "19": "Lebanon", "20": "Macau",
    "21": "Malaysia", "22": "Maldives", "23": "Mongolia", "24": "Myanmar",
    "25": "Nepal", "26": "Oman", "27": "Pakistan", "28": "Palestine",
    "29": "Philippines", "30": "Qatar", "31": "Saudi Arabia", "32": "Singapore",
    "33": "Sri Lanka", "34": "Syria", "36": "Thailand", "37": "United Arab Emirates",
    "38": "Vietnam", "39": "Yemen", "40": "Kyrgyz Republic", "41": "Tajikistan",
    "42": "Turkmenistan", "43": "Timor-Leste", "44": "Algeria", "45": "Angola",
    "46": "Benin", "47": "Botswana", "48": "Burkina Faso", "49": "Burundi",
    "50": "Cameroon", "51": "Cape Verde", "52": "Central African Republic",
    "53": "Chad", "54": "Comoros", "55": "Congo DR", "56": "Côte d'Ivoire",
    "57": "Djibouti", "58": "Egypt", "59": "Equatorial Guinea", "60": "Eritrea",
    "61": "Ethiopia", "62": "Gabon", "63": "Gambia", "64": "Ghana",
    "65": "Guinea", "66": "Guinea-Bissau", "67": "Kenya", "68": "Lesotho",
    "69": "Liberia", "70": "Libya", "71": "Madagascar", "72": "Malawi",
    "73": "Mali", "74": "Mauritania", "75": "Mauritius", "76": "Morocco",
    "77": "Mozambique", "78": "Namibia", "79": "Niger", "80": "Nigeria",
    "81": "Rwanda", "82": "São Tomé and Príncipe", "83": "Senegal",
    "84": "Seychelles", "85": "Sierra Leone", "86": "Somalia", "87": "South Africa",
    "88": "Sudan", "89": "Eswatini", "90": "Tanzania", "91": "Togo",
    "92": "Tunisia", "93": "Uganda", "94": "Zambia", "95": "Zimbabwe",
    "98": "Congo", "103": "Anguilla", "104": "Antigua and Barbuda", "105": "Aruba",
    "106": "Bahamas", "107": "Barbados", "108": "Belize", "109": "Bermuda",
    "110": "Canada", "111": "Cayman Islands", "112": "Costa Rica", "113": "Cuba",
    "114": "Dominica", "115": "Dominican Republic", "116": "El Salvador",
    "117": "Grenada", "119": "Guatemala", "120": "Haiti", "121": "Honduras",
    "122": "Jamaica", "124": "Mexico", "125": "Montserrat", "127": "Nicaragua",
    "128": "Panama", "129": "Puerto Rico", "130": "Saint Kitts and Nevis",
    "131": "Saint Lucia", "132": "Saint Vincent and the Grenadines",
    "133": "Trinidad and Tobago", "134": "Turks and Caicos Islands",
    "135": "USA", "136": "British Virgin Islands", "137": "US Virgin Islands",
    "138": "French Guiana", "139": "Suriname", "140": "Curaçao", "144": "Argentina",
    "145": "Bolivia", "146": "Brazil", "147": "Chile", "148": "Colombia",
    "149": "Ecuador", "150": "Paraguay", "151": "Peru", "152": "Uruguay",
    "153": "Venezuela", "159": "Guyana", "161": "American Samoa", "162": "Australia",
    "163": "Cook Islands", "164": "Fiji", "165": "New Caledonia", "166": "New Zealand",
    "167": "Papua New Guinea", "168": "Samoa", "169": "Solomon Islands", "170": "Tahiti",
    "171": "Tonga", "172": "Vanuatu", "176": "Guam", "184": "Palau", "189": "Israel",
    "190": "Turkey", "191": "Albania", "192": "Andorra", "193": "Armenia",
    "194": "Austria", "195": "Azerbaijan", "196": "Belarus", "197": "Belgium",
    "198": "Bosnia and Herzegovina", "199": "Bulgaria", "200": "Croatia", "201": "Cyprus",
    "202": "Czech Republic", "203": "Denmark", "204": "England", "205": "Estonia",
    "206": "Faroe Islands", "207": "Finland", "208": "France", "209": "Georgia",
    "210": "Germany", "211": "Greece", "212": "Hungary", "213": "Iceland",
    "214": "Republic of Ireland", "215": "Italy", "216": "Kazakhstan", "217": "Latvia",
    "218": "Liechtenstein", "219": "Lithuania", "220": "Luxembourg", "221": "North Macedonia",
    "222": "Malta", "223": "Moldova", "224": "Netherlands", "225": "Northern Ireland",
    "226": "Norway", "227": "Poland", "228": "Portugal", "229": "Romania",
    "230": "Russia", "231": "San Marino", "232": "Scotland", "234": "Slovakia",
    "235": "Slovenia", "236": "Spain", "237": "Sweden", "238": "Switzerland",
    "239": "Ukraine", "240": "Uzbekistan", "241": "Wales", "245": "Gibraltar",
    "250": "Monaco", "260": "- Others", "298": "Chinese Taipei", "303": "Serbia",
    "304": "Montenegro", "311": "Kosovo", "312": "South Sudan"
}

# Mapeamento para registeredPosition (JSON1)
registered_position_map = {
    "GK": 0, "CB": 1, "LB": 2, "RB": 3, "DMF": 4, "CMF": 5,
    "LMF": 6, "RMF": 7, "AMF": 8, "LWF": 9, "RWF": 10, "SS": 11, "CF": 12
}

def converter_id(input_id):
    if input_id > 1074003968:
        return input_id - 1074003968, False
    elif input_id > 1073741824:
        return input_id - 1073741824, True
    elif input_id > 75497472:
        return input_id - 75497472, False
    elif input_id > 67108864:
        return input_id - 67108864, True
    elif input_id > 58720256:
        return input_id - 58720256, False
    elif input_id > 50331648:
        return input_id - 50331648, True
    elif input_id > 25165824:
        return input_id - 25165824, False
    elif input_id > 16777216:
        return input_id - 16777216, True
    elif input_id > 8388608:
        return input_id - 8388608, False
    elif input_id > 262144:
        return input_id - 262144, False
    else:
        return input_id, True

def convert_positions(data1):
    order = ["GK", "CB", "LB", "RB", "DMF", "CMF", "LMF", "RMF", "AMF", "LWF", "RWF", "SS", "CF"]
    mapping = {"A": 2, "B": 1, "C": 0}
    pos_arr = []
    for pos in order:
        letter = data1.get(pos, "C")
        pos_arr.append(mapping.get(letter, 0))
    return json.dumps(pos_arr)

def convert_side(value, default="right"):
    if isinstance(value, str):
        v = value.strip().lower()
        if v in ["0", "right", "right foot"]:
            return "right"
        elif v in ["1", "left", "left foot"]:
            return "left"
    return default

def consolidar_json(json1, json2):
    """
    Consolida os dados dos jogadores (players.jsonl) usando JSON2 como base e atualizando com JSON1.
    Adiciona os campos update_at e info_id.
    Renomeia a chave para "konamiID".
    A saída é gerada com um cabeçalho (lista de keys) na primeira linha e, para cada jogador, apenas os valores.
    """
    db = {}
    # Processa JSON2 (base oficial/licenciado)
    for rec in json2:
        try:
            konami_id = int(rec.get("konamiPlID"))
            base_id, _ = converter_id(konami_id)
            entry = {
                "konamiID": str(base_id),
                "pFifaID": rec.get("pFifaID"),
                "commentaryID": rec.get("commentaryID"),
                "playerName": rec.get("playerName"),
                "fakeName": None,
                "jpPlayerName": rec.get("jpPlayerName"),
                "fullName": rec.get("fullName"),
                "clubShirtName": rec.get("clubShirtName"),
                "nationalShirtName": rec.get("nationalShirtName"),
                "nationality1": rec.get("nationality1"),
                "nationality2": rec.get("nationality2"),
                "age": rec.get("age"),
                "birthdate": rec.get("birthdate"),
                "height": rec.get("height"),
                "weight": rec.get("weight"),
                "strongFoot": rec.get("strongFoot"),
                "strongHand": convert_side(rec.get("strongHand"), "right"),
                "starRating": rec.get("starRating"),
                "registeredPosition": rec.get("registeredPosition"),
                "positions": rec.get("positions"),
                "youthClub": rec.get("youthCLub"),
                "pBeSoccerLink": rec.get("pBeSoccerLink"),
                "update_at": None,
                "info_id": None
            }
            nat = rec.get("nationality1")
            if nat:
                entry["nationality1"] = countries.get(str(nat), str(nat))
            db[base_id] = entry
        except Exception:
            continue

    # Processa JSON1 para atualizar/inserir
    for rec in json1:
        try:
            rec_id = int(rec.get("ID"))
            base_id, lic_flag = converter_id(rec_id)
            json1_data = {
                "age": rec.get("Age"),
                "height": rec.get("Height"),
                "weight": rec.get("Weight"),
                "strongFoot": convert_side(rec.get("Foot"), "right"),
                "registeredPosition": None,
                "positions": None,
                "nationality1": None
            }
            current_date = datetime.now().strftime("%Y-%m-%d")
            info_id = rec.get("ID")
            if base_id in db:
                if lic_flag:
                    db[base_id]["playerName"] = rec.get("Player Name")
                    if rec.get("Shirt Name 2") and rec.get("Shirt Name 2").strip():
                        db[base_id]["jpPlayerName"] = rec.get("Shirt Name 2")
                    db[base_id]["clubShirtName"] = rec.get("Name Print")
                    # Não atualiza os campos numéricos se já existir registro oficial
                else:
                    for key in json1_data:
                        val = json1_data[key]
                        if val:
                            db[base_id][key] = val
                    unlicensed_name = rec.get("Player Name")
                    if unlicensed_name:
                        if db[base_id].get("fakeName"):
                            if unlicensed_name not in db[base_id]["fakeName"]:
                                db[base_id]["fakeName"] += ", " + unlicensed_name
                        else:
                            db[base_id]["fakeName"] = unlicensed_name
                db[base_id]["update_at"] = current_date
                db[base_id]["info_id"] = info_id
            else:
                new_entry = {}
                new_entry["konamiID"] = str(base_id)
                if lic_flag:
                    new_entry["playerName"] = rec.get("Player Name")
                    new_entry["jpPlayerName"] = rec.get("Shirt Name 2")
                    new_entry["clubShirtName"] = rec.get("Name Print")
                    new_entry["fakeName"] = None
                else:
                    new_entry["playerName"] = None
                    new_entry["jpPlayerName"] = None
                    new_entry["clubShirtName"] = None
                    new_entry["fakeName"] = rec.get("Player Name")
                for key in json1_data:
                    new_entry[key] = json1_data[key] if json1_data[key] else None
                new_entry["pFifaID"] = None
                new_entry["commentaryID"] = "-1"
                new_entry["fullName"] = None
                new_entry["nationalShirtName"] = None
                new_entry["nationality2"] = None
                new_entry["birthdate"] = None
                new_entry["strongHand"] = "right"
                new_entry["starRating"] = None
                new_entry["youthClub"] = None
                new_entry["pBeSoccerLink"] = None
                new_entry["update_at"] = current_date
                new_entry["info_id"] = info_id
                db[base_id] = new_entry
        except Exception:
            continue

    players_keys = ["konamiID", "pFifaID", "commentaryID", "playerName", "fakeName", "jpPlayerName",
                    "fullName", "clubShirtName", "nationalShirtName", "nationality1", "nationality2",
                    "age", "birthdate", "height", "weight", "strongFoot", "strongHand", "starRating",
                    "registeredPosition", "positions", "youthClub", "pBeSoccerLink", "update_at", "info_id"]
    ordered_players = []
    for rec in db.values():
        ordered_players.append([rec.get(key) for key in players_keys])
    ordered_players = sorted(ordered_players, key=lambda r: int(r[0]))
    return players_keys, ordered_players

def gerar_ef_stats(json1):
    stats_keys = [
        "Offensive Awareness", "Ball Control", "Dribbling", "Tight Possession",
        "Low Pass", "Lofted Pass", "Finishing", "Heading", "Set Piece Taking",
        "Curl", "Speed", "Acceleration", "Kicking Power", "Jumping",
        "Physical Contact", "Balance", "Stamina", "Defensive Awareness",
        "Tackling", "Aggression", "Defensive Engagement", "GK Awareness",
        "GK Catching", "GK Parrying", "GK Reflexes", "GK Reach",
        "Weak Foot Usage", "Weak Foot Accuracy", "Form", "Injury Resistance",
        "Overall Rating", "Playing Style"
    ]
    for i in range(1, 51):
        stats_keys.append("S" + str(i).zfill(2))
    for i in range(1, 8):
        stats_keys.append("P" + str(i).zfill(2))
    
    header = ["konamiID", "update_at", "info_id"] + stats_keys
    current_date = datetime.now().strftime("%Y-%m-%d")
    ef_stats = []
    for rec in json1:
        try:
            rec_id = int(rec.get("ID"))
            base_id, _ = converter_id(rec_id)
            info_id = rec.get("ID")
            stats_values = [rec.get(key) for key in stats_keys]
            row = [str(base_id), current_date, info_id] + stats_values
            ef_stats.append(row)
        except Exception:
            continue
    ef_stats = sorted(ef_stats, key=lambda row: int(row[0]))
    return header, ef_stats

def ler_jsonl(file_path):
    """
    Lê um arquivo JSONL com cabeçalho na primeira linha e retorna (header, list_of_rows).
    Cada linha (após o cabeçalho) é convertida de JSON para uma lista.
    """
    with open(file_path, encoding="utf-8") as f:
        lines = f.read().splitlines()
    if not lines:
        return None, []
    header = json.loads(lines[0])
    rows = [json.loads(line) for line in lines[1:]]
    return header, rows

def salvar_jsonl(file_path, header, rows):
    """
    Salva os dados no arquivo file_path com cabeçalho (primeira linha) e, em seguida, uma linha por registro.
    """
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(json.dumps(header, ensure_ascii=False) + "\n")
        for row in rows:
            f.write(json.dumps(row, ensure_ascii=False) + "\n")

def atualizar_players(existing_header, existing_rows, pesdb_players):
    """
    Atualiza os registros existentes (players.jsonl) com os dados do pesdb_players (estrutura JSON1).
    Para cada registro em pesdb_players:
      - Converte o ID para a base (konamiID).
      - Atualiza todos os campos com os dados do update.
      - Se o registro for unlicensed, acrescenta (concatenando) o nome no fakeName sem sobrescrever os nomes oficiais.
      - Se o registro for licenciado, substitui os campos (incluindo os numéricos) pelo update.
    Retorna (header, updated_rows) ordenados pela konamiID.
    """
    # Converte os registros existentes para um dicionário indexado por konamiID (string)
    db = {}
    for row in existing_rows:
        db[row[0]] = { key: row[i] for i, key in enumerate(existing_header) }
    
    current_date = datetime.now().strftime("%Y-%m-%d")
    for rec in pesdb_players:
        try:
            id_val = rec.get("ID")
            if not id_val:
                continue
            rec_id = int(id_val)
            base_id, lic_flag = converter_id(rec_id)
            base_str = str(base_id)
            info_id = rec.get("ID")
            # Aqui, em vez de pegar rec.get("positions"), chamamos convert_positions(rec)
            json1_data = {
                "age": rec.get("Age"),
                "height": rec.get("Height"),
                "weight": rec.get("Weight"),
                "strongFoot": convert_side(rec.get("Foot"), "right"),
                "registeredPosition": registered_position_map.get(rec.get("Position", "").upper()) if rec.get("Position") else None,
                "positions": convert_positions(rec),  # <== Aqui é a alteração!
                "nationality1": rec.get("Nationality")
            }
            if base_str in db:
                if lic_flag:
                    # Atualiza os campos de nomes
                    db[base_str]["playerName"] = rec.get("Player Name")
                    db[base_str]["jpPlayerName"] = rec.get("Shirt Name 2")
                    db[base_str]["clubShirtName"] = rec.get("Name Print")
                    # Atualiza também os campos numéricos do update
                    for key, val in json1_data.items():
                        if val is not None:
                            db[base_str][key] = val
                else:
                    # Se unlicensed, atualiza os campos numéricos
                    for key, val in json1_data.items():
                        if val is not None:
                            db[base_str][key] = val
                    # Acrescenta o nome unlicensed em fakeName sem sobrescrever os oficiais
                    unlicensed_name = rec.get("Player Name")
                    if unlicensed_name:
                        if db[base_str].get("fakeName"):
                            if unlicensed_name not in db[base_str]["fakeName"]:
                                db[base_str]["fakeName"] += ", " + unlicensed_name
                        else:
                            db[base_str]["fakeName"] = unlicensed_name
                db[base_str]["update_at"] = current_date
                db[base_str]["info_id"] = info_id
            else:
                new_entry = {}
                new_entry["konamiID"] = base_str
                if lic_flag:
                    new_entry["playerName"] = rec.get("Player Name")
                    new_entry["jpPlayerName"] = rec.get("Shirt Name 2")
                    new_entry["clubShirtName"] = rec.get("Name Print")
                    new_entry["fakeName"] = None
                else:
                    new_entry["playerName"] = None
                    new_entry["jpPlayerName"] = None
                    new_entry["clubShirtName"] = None
                    new_entry["fakeName"] = rec.get("Player Name")
                for key, val in json1_data.items():
                    new_entry[key] = val if val is not None else None
                # Campos default para os que não vêm no update
                new_entry["pFifaID"] = None
                new_entry["commentaryID"] = "-1"
                new_entry["fullName"] = None
                new_entry["nationalShirtName"] = None
                new_entry["nationality2"] = None
                new_entry["birthdate"] = None
                new_entry["strongHand"] = "right"
                new_entry["starRating"] = None
                new_entry["youthClub"] = None
                new_entry["pBeSoccerLink"] = None
                new_entry["update_at"] = current_date
                new_entry["info_id"] = info_id
                db[base_str] = new_entry
        except Exception as e:
            print("Erro ao atualizar registro:", e)
            continue

    updated_rows = [[db[k].get(key) for key in existing_header] for k in db]
    updated_rows = sorted(updated_rows, key=lambda r: int(r[0]))
    return existing_header, updated_rows


def atualizar_ef_stats(existing_header, existing_rows, pesdb_players):
    """
    Atualiza os registros de estatísticas (ef_stats.jsonl) usando os dados do pesdb_players (JSON1).
    Para cada registro em pesdb_players, extrai os campos estatísticos e atualiza ou insere o registro.
    Retorna (header, updated_rows) ordenados pela konamiID.
    """
    stats_keys = [
        "Offensive Awareness", "Ball Control", "Dribbling", "Tight Possession",
        "Low Pass", "Lofted Pass", "Finishing", "Heading", "Set Piece Taking",
        "Curl", "Speed", "Acceleration", "Kicking Power", "Jumping",
        "Physical Contact", "Balance", "Stamina", "Defensive Awareness",
        "Tackling", "Aggression", "Defensive Engagement", "GK Awareness",
        "GK Catching", "GK Parrying", "GK Reflexes", "GK Reach",
        "Weak Foot Usage", "Weak Foot Accuracy", "Form", "Injury Resistance",
        "Overall Rating", "Playing Style"
    ]
    for i in range(1, 51):
        stats_keys.append("S" + str(i).zfill(2))
    for i in range(1, 8):
        stats_keys.append("P" + str(i).zfill(2))
    
    header = ["konamiID", "update_at", "info_id"] + stats_keys
    current_date = datetime.now().strftime("%Y-%m-%d")
    db_stats = {}
    for row in existing_rows:
        db_stats[row[0]] = row
    for rec in pesdb_players:
        try:
            id_val = rec.get("ID")
            if not id_val:
                continue
            rec_id = int(id_val)
            base_id, _ = converter_id(rec_id)
            base_str = str(base_id)
            info_id = rec.get("ID")
            stats_values = [rec.get(key) for key in stats_keys]
            new_row = [base_str, current_date, info_id] + stats_values
            db_stats[base_str] = new_row
        except Exception:
            continue
    updated_rows = list(db_stats.values())
    updated_rows = sorted(updated_rows, key=lambda r: int(r[0]))
    return header, updated_rows


def ler_jsonl(file_path):
    with open(file_path, encoding="utf-8") as f:
        lines = f.read().splitlines()
    if not lines:
        return None, []
    header = json.loads(lines[0])
    rows = [json.loads(line) for line in lines[1:]]
    return header, rows

def salvar_jsonl(file_path, header, rows):
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(json.dumps(header, ensure_ascii=False) + "\n")
        for row in rows:
            f.write(json.dumps(row, ensure_ascii=False) + "\n")

if __name__ == '__main__':
    # Carrega os dados consolidados atuais
    players_header, players_data = ler_jsonl("players.jsonl")
    stats_header, stats_data = ler_jsonl("ef_stats.jsonl")
    
    # Carrega o novo arquivo de atualização
    with open("pesdb_players.json", encoding="utf-8") as f:
        pesdb_players = json.load(f)
    
    # Atualiza os registros
    new_players_header, new_players_data = atualizar_players(players_header, players_data, pesdb_players)
    new_stats_header, new_stats_data = atualizar_ef_stats(stats_header, stats_data, pesdb_players)
    
    # Salva os arquivos atualizados
    salvar_jsonl("players.jsonl", new_players_header, new_players_data)
    print("players.jsonl atualizado com sucesso!")
    
    salvar_jsonl("ef_stats.jsonl", new_stats_header, new_stats_data)
    print("ef_stats.jsonl atualizado com sucesso!")

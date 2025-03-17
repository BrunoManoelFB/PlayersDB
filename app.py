from flask import Flask, render_template, request, abort, redirect, url_for
import psycopg2
import os, json
from math import ceil
from datetime import datetime
from dotenv import load_dotenv

load_dotenv()

# Configure o Flask para servir os arquivos estáticos do JSONL Viewer
app = Flask(__name__)


def get_db_connection():
    return psycopg2.connect(
        host=os.getenv("DATABASE_HOST"),
        user=os.getenv("DATABASE_USER"),
        password=os.getenv("DATABASE_PASSWORD"),
        dbname=os.getenv("DATABASE_NAME")
    )

def load_jsonl(file_path):
    with open(file_path, encoding="utf-8") as f:
        lines = f.read().splitlines()
    if not lines:
        return []
    header = json.loads(lines[0])
    data = []
    for line in lines[1:]:
        row = json.loads(line)
        item = dict(zip(header, row))
        data.append(item)
    return data

@app.route("/jsonlviewer", endpoint="jsonlviewer")
def jsonlviewer():
    return render_template("jsonl_viewer.php")

# Filtro para converter uma string JSON para objeto
@app.template_filter('fromjson')
def fromjson_filter(s):
    try:
        return json.loads(s)
    except Exception:
        return {}

@app.template_filter('badge_class')
def get_badge_class(value):
    try:
        v = int(value)
        if 40 <= v <= 69:
            return 'stat-40'
        elif 70 <= v <= 79:
            return 'stat-70'
        elif 80 <= v <= 89:
            return 'stat-80'
        elif 90 <= v <= 99:
            return 'stat-90'
    except:
        return ''
    return ''

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

# Mapeamento de posição conforme definido
position_names = {
    0: 'GK', 1: 'CB', 2: 'LB', 3: 'RB',
    4: 'DMF', 5: 'CMF', 6: 'LMF', 7: 'RMF',
    8: 'AMF', 9: 'LWF', 10: 'RWF', 11: 'SS', 12: 'CF'
}

# Classes CSS para as posições
position_classes = {
    0: 'position-gk',
    1: 'position-cb',
    2: 'position-lb',
    3: 'position-rb',
    4: 'position-dmf',
    5: 'position-cmf',
    6: 'position-lmf',
    7: 'position-rmf',
    8: 'position-amf',
    9: 'position-lwf',
    10: 'position-rwf',
    11: 'position-ss',
    12: 'position-cf'
}


@app.route("/teditor", endpoint="teditor")
def teditor():
    return render_template("teditor/index.html")

# Rota para listagem de jogadores (endpoint definido explicitamente)
@app.route("/", endpoint="players")
@app.route("/players", endpoint="players")
def players_list():
    query = request.args.get("query", "").strip()
    page = request.args.get("page", 1)
    try:
        page = int(page)
        if page < 1:
            page = 1
    except ValueError:
        page = 1

    conn = get_db_connection()
    cur = conn.cursor()
    
    # Se a query for numérica, converte e busca pelo ID base
    if query.isdigit():
        input_id = int(query)
        converted_id, message, afccl_id = convert_player_id(input_id)
        # Realiza a busca pelo konamiid convertido (como string)
        cur.execute("SELECT * FROM players WHERE konamiid = %s;", (str(converted_id),))
        rows = cur.fetchall()
        colnames = [desc[0].lower() for desc in cur.description]
        players_list = [dict(zip(colnames, row)) for row in rows]
        total_players = len(players_list)
        total_pages = 1  # Nesse caso, exibimos apenas o resultado encontrado (ou nenhum)
        pagination = {}
        # Opcional: você pode passar também a mensagem para o template
        query = str(converted_id)  # Substitui a query pelo ID convertido, se desejado.
    else:
        # Busca textual: paginada normalmente
        limit = 20
        offset = (page - 1) * limit
        if query:
            cur.execute("""
                SELECT COUNT(*) FROM players
                WHERE playername ILIKE %s OR konamiid ILIKE %s;
            """, (f"%{query}%", f"%{query}%"))
        else:
            cur.execute("SELECT COUNT(*) FROM players;")
        total_players = cur.fetchone()[0]
        total_pages = ceil(total_players / limit) if total_players else 1

        if query:
            cur.execute("""
                SELECT * FROM players
                WHERE playername ILIKE %s OR konamiid ILIKE %s
                ORDER BY konamiid::int
                LIMIT %s OFFSET %s;
            """, (f"%{query}%", f"%{query}%", limit, offset))
        else:
            cur.execute("""
                SELECT * FROM players
                ORDER BY konamiid::int
                LIMIT %s OFFSET %s;
            """, (limit, offset))
        rows = cur.fetchall()
        colnames = [desc[0].lower() for desc in cur.description]
        players_list = [dict(zip(colnames, row)) for row in rows]

        # Paginação simplificada
        pagination = {}
        if page > 1:
            pagination["prev"] = page - 1
        start_page = page - 7 if page - 7 > 1 else 1
        end_page = page + 7 if page + 7 < total_pages else total_pages
        pagination["pages"] = list(range(start_page, end_page + 1))
        if page < total_pages:
            pagination["next"] = page + 1

    cur.close()
    conn.close()

    return render_template("players.html",
                           title="Players List",
                           players=players_list,
                           query=query,
                           pagination=pagination,
                           current_page=page,
                           total_pages=total_pages,
                           position_names=position_names,
                           position_classes=position_classes,
                           current_year=datetime.now().year)


@app.route("/player/<konamiID>")
def player_detail(konamiID):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM players WHERE konamiid = %s;", (konamiID,))
    row = cur.fetchone()
    if not row:
        cur.close()
        conn.close()
        abort(404)
    colnames = [desc[0].lower() for desc in cur.description]
    player = dict(zip(colnames, row))
    cur.close()

    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("SELECT stats, overall, playing_style, skills FROM ef_stats WHERE konamiid = %s;", (konamiID,))
    stat_row = cur.fetchone()
    if stat_row:
        # Se o stats já for dicionário, usa-o diretamente
        if isinstance(stat_row[0], str):
            stats = json.loads(stat_row[0])
        else:
            stats = stat_row[0]
        player['overall'] = stat_row[1]
        player['playing_style'] = stat_row[2]
        player['skills'] = stat_row[3]
    else:
        stats = {}
        player["overall"] = None
        player["playing_style"] = None
        player["skills"] = None
    cur.close()
    conn.close()

    skill_names = [
        "Scissors Feint", "Double Touch", "Flip Flap", "Marseille Turn", "Sombrero", "Cross Over Turn", 
        "Cut Behind And Turn", "Scotch Move", "Step On Skill Control", "Heading Special", "Long Range Drive", 
        "Chip Shot Control", "Long Range Shot", "Knuckle Shot", "Dipping Shots", "Rising Shots", 
        "Acrobatic Finishing", "Heel Trick", "First Time Shot", "One Touch Pass", "Through Passing", 
        "Weighted Pass", "Pinpoint Crossing", "Outside Curler", "Rabona", "No Look Pass", "Low Lofted Pass", 
        "GK Low Punt", "GK High Punt", "Long Throw", "GK Long Throw", "Penalty Specialist", "GK Penalty Saver", 
        "Gamesmanship", "Man Marking", "TrackBack", "Interception", "Acrobatic Clear", "Captaincy", 
        "Super Sub", "Fighting Spirit"
    ]

    return render_template("player_detail.html",
                           title="Player Details",
                           player=player,
                           stats=stats,
                           position_names=position_names,
                           position_classes=position_classes,
                           skill_names=skill_names,
                           current_year=datetime.now().year)


# Rota de pesquisa
@app.route("/search", methods=["GET"])
def search():
    q = request.args.get("q", "").strip()
    if not q:
        return redirect(url_for("players"))
    # Se a query for numérica, converte o ID
    if q.isdigit():
        input_id = int(q)
        converted_id, message, afccl_id = convert_player_id(input_id)
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute("SELECT * FROM players WHERE konamiid = %s;", (str(converted_id),))
        row = cur.fetchone()
        colnames = [desc[0].lower() for desc in cur.description] if row else []
        player = dict(zip(colnames, row)) if row else None
        cur.close()
        conn.close()
        return render_template("search_results.html",
                               query=q,
                               converted_id=converted_id,
                               message=message,
                               afccl_id=afccl_id,
                               player=player,
                               current_year=datetime.now().year)
    else:
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute("""
            SELECT * FROM players
            WHERE playername ILIKE %s OR konamiid ILIKE %s
            ORDER BY konamiid::int
            LIMIT 50;
        """, (f"%{q}%", f"%{q}%"))
        rows = cur.fetchall()
        colnames = [desc[0].lower() for desc in cur.description]
        players_list = [dict(zip(colnames, row)) for row in rows]
        cur.close()
        conn.close()
        return render_template("search_results.html",
                               query=q,
                               converted_id=None,
                               message="",
                               afccl_id=None,
                               player=None,
                               players_list=players_list,
                               current_year=datetime.now().year)

def convert_player_id(input_id):
    if input_id > 1074003968:
        converted_id = input_id - 1074003968
        message = f"Unlicensed AFC Champions League (PES 2021) ID. Its base ID is {converted_id}."
        afccl_id = 1073741824 + converted_id
    elif input_id > 1073741824:
        converted_id = input_id - 1073741824
        message = f"Licensed AFC Champions League (PES 2021) ID. Its base ID is {converted_id}."
        afccl_id = 1073741824 + converted_id
    elif input_id > 75497472:
        converted_id = input_id - 75497472
        message = f"Unlicensed NT (?) (eFootball) ID. Its base ID is {converted_id}."
        afccl_id = None
    elif input_id > 67108864:
        converted_id = input_id - 67108864
        message = f"Licensed (?) (eFootball) ID. Its base ID is {converted_id}."
        afccl_id = None
    elif input_id > 58720256:
        converted_id = input_id - 58720256
        message = f"Unlicensed AFC Asian Cup (eFootball) ID. Its base ID is {converted_id}."
        afccl_id = None
    elif input_id > 50331648:
        converted_id = input_id - 50331648
        message = f"Licensed AFC Asian Cup (eFootball) ID. Its base ID is {converted_id}."
        afccl_id = None
    elif input_id > 25165824:
        converted_id = input_id - 25165824
        message = f"Unlicensed AFC Champions League (eFootball) ID. Its base ID is {converted_id}."
        afccl_id = None
    elif input_id > 16777216:
        converted_id = input_id - 16777216
        message = f"Licensed AFC Champions League (eFootball) ID. Its base ID is {converted_id}."
        afccl_id = None
    elif input_id > 8388608:
        converted_id = input_id - 8388608
        message = f"Unlicensed eFootball ID. Its base ID is {converted_id}."
        afccl_id = None
    elif input_id > 262144:
        converted_id = input_id - 262144
        message = f"Unlicensed PES 2021 ID. Its base ID is {converted_id}."
        afccl_id = None
    elif input_id < 262144:
        converted_id = input_id
        message = f"It's a Licensed PES 2021 ID. Base ID: {converted_id}."
        afccl_id = None
    else:
        converted_id = None
        message = "Invalid ID. Please enter a valid player ID."
        afccl_id = None
    return converted_id, message, afccl_id

if __name__ == '__main__':
    app.run(debug=True)

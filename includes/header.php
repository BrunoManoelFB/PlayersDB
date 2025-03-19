<?php 
    include __DIR__ . '/db_connection.php';

    session_start(); // Start the session at the beginning of the file

    // Mapeamento de números de posição para nomes
    $position_names = [
        0 => 'GK',
        1 => 'CB',
        2 => 'LB',
        3 => 'RB',
        4 => 'DMF',
        5 => 'CMF',
        6 => 'LMF',
        7 => 'RMF',
        8 => 'AMF',
        9 => 'LWF',
        10 => 'RWF',
        11 => 'SS',
        12 => 'CF'
    ];

    // Mapeamento de números de posição para classes CSS
    $position_classes = [
        0 => 'position-gk',
        1 => 'position-cb',
        2 => 'position-lb',
        3 => 'position-rb',
        4 => 'position-dmf',
        5 => 'position-cmf',
        6 => 'position-lmf',
        7 => 'position-rmf',
        8 => 'position-amf',
        9 => 'position-lwf',
        10 => 'position-rwf',
        11 => 'position-ss',
        12 => 'position-cf'
    ];
			
    // Definir os nomes das estatísticas
    $stat_names = [
        "Offensive Awareness", "Ball Control", "Dribbling", "Tight Possession", "Low Pass", "Lofted Pass", 
        "Finishing", "Heading", "Place Kicking", "Curl", "Speed", "Acceleration", "Kicking Power", 
        "Jump", "Physical Contact", "Balance", "Stamina", "Defensive Awareness", "Ball Winning", 
        "Aggression", "GK Awareness", "GK Catching", "GK Clearing", "GK Reflexes", "GK Reach", 
        "Weak Foot Usage", "Weak Foot Accuracy", "Form", "Injury Resistance"
    ];
			
    // Definir os nomes das estatísticas
    $movement_names = [
        "Celebration 1", "Celebration 2", "Dribbling Hunching", "Dribbling Arm Move", "Running Hunching", "Running Arm Movement", "Corner Kicks", "Free Kicks", "Penalty Kick", "Dribble Motion"
    ];
    
    // Definir os nomes das skills
    $skill_names = [
        "Scissors Feint", "Double Touch", "Flip Flap", "Marseille Turn", "Sombrero", "Cross Over Turn", 
        "Cut Behind And Turn", "Scotch Move", "Step On Skill Control", "Heading Special", "Long Range Drive", 
        "Chip Shot Control", "Long Range Shot", "Knuckle Shot", "Dipping Shots", "Rising Shots", 
        "Acrobatic Finishing", "Heel Trick", "First Time Shot", "One Touch Pass", "Through Passing", 
        "Weighted Pass", "Pinpoint Crossing", "Outside Curler", "Rabona", "No Look Pass", "Low Lofted Pass", 
        "GK Low Punt", "GK High Punt", "Long Throw", "GK Long Throw", "Penalty Specialist", "GK Penalty Saver", 
        "Gamesmanship", "Man Marking", "TrackBack", "Interception", "Acrobatic Clear", "Captaincy", 
        "Super Sub", "Fighting Spirit"
    ];
    
    $appearances_names = [
        "NeckLength", "NeckSize", "ShoulderHeight", "ShoulderWidth", "ChestMeasurement", "WaistSize", "ArmSize", "ThighSize", "CalfSize", "LegLength", "ArmLength", "SkinColour",
        "HeadLength", "HeadWidth", "HeadDepth", "FaceHeight", "FaceSize", "UpperEyelidType", "BottomEyelidType", "EyeHeight", "HorizontalEyePosition", "IrisColour", "PupilSize",
        "UpperEyelidHt.(Inner)", "UpperEyelidWd.(Inner)", "UpperEyelidHt.(Outer)", "UpperEyelidWd.(Outer)", "InnerEyeHeight", "InnerEyePosition", "EyeCornerHeight",
        "OuterEyePosition", "BottomEyelidHeight", "EyeDepth", "Forehead", "EyebrowType", "EyebrowThickness", "EyebrowStyle", "EyebrowDensity", "EyebrowColourR", "EyebrowColourG",
        "EyebrowColourB", "InnerEyebrowHeight", "BrowWidth", "OuterEdyebrowHeight", "TempleWidth", "EyebrowDepth", "NoseType", "LaughterLines", "NoseHeight", "NostrilWidth",
        "NoseWidth", "NoseTipDepth", "NoseDepth", "UpperLipType", "LowerLipType", "MouthPosition", "LipSize", "LipWidth", "MouthCornerHeight", "MouthDepth", "FacialHairType",
        "FacialHairColourR", "FacialHairColourG", "FacialHairColourB", "Thickness", "CheekType", "NeckLineType", "Cheekbones", "ChinHeight", "ChinWidth", "JawHeight", "Jawline",
        "ChinDepth", "EarLength", "EarWidth", "EarAngle", "Overall-Style", "Overall-Length", "Overall-WaveLevel", "Overall-HairVariation", "Font-Style", "Font-Parted",
        "Font-Hairline", "Font-ForeheadWidth", "Side/Back-Style", "Side/Back-Cropped", "HairColourR", "HairColourG", "HairColourB", "AccessoryColour", "HairColour", "Accessories",
        "Wristtaping", "WristTapeColour1", "WristTapeColour2", "AnkleTaping", "PlayerGloves", "Colour", "Undershorts", "Sleeves", "Shirttail", "SockLength", "Long-SleevedInners",
        "ValueAp1", "ValueAp2", "ValueAp3", "ValueAp4", "ValueAp5", "ValueAp6", "ValueAp7", "ValueAp8", "ValueAp9", "ValueAp10", "ValueAp11", "ValueAp12", "ValueAp13", "ValueAp14",
        "ValueAp15", "ValueAp16", "ValueAp17", "ValueAp18", "ValueAp19", "IdFace", "Boots", "Gloves"
    ];
    
    $pStyles_names = [
        "None", "Goal Poacher", "Dummy Runner", "Fox in the Box", "Target Man", "Creative Playmaker", "Prolific Winger", "Roaming Flank", "Cross Specialist", "Classic No. 10", "Hole Player", "Box-to-Box",
        "The Destroyer", "Orchestrator", "Anchor Man", "Build Up", "Offensive Full-back", "Full-back Finisher", "Defensive Full-back", "Extra Frontman", "Offensive Goalkeeper", "Defensive Goalkeeper"
    ];
    
    $comStyles_names = ["Trickster", "Mazing Run", "Speeding Bullet", "Incisive Run", "Long Ball Expert", "Early Cross", "Long Ranger"];
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PlayersDB</title>
    
    <!-- Inclua o Bootstrap e o jQuery (versão completa) -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- jQuery completo -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- Popper e Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+" crossorigin="anonymous"></script>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">


    <style>

        body {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            transition: background-color 0.3s, color 0.3s;
        }
        
        /* Estilos para o switch de tema */
        .theme-switch-wrapper {
            display: flex;
            align-items: center;
            margin-left: 15px;
        }

        .theme-switch {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;
        }

        .theme-switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            transition: .4s;
            border-radius: 34px;
        }

        .slider:before {
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
        }

        input:checked + .slider {
            background-color: #2196F3;
        }

        input:checked + .slider:before {
            transform: translateX(26px);
        }

        .theme-icon {
            margin-left: 10px;
            font-size: 20px;
            transition: color 0.3s;
        }

        /* Estilos para os temas claro/escuro */
        body.dark-mode {
            background-color: #333;
            color: #fff;
        }

        body.dark-mode .navbar {
            background-color: #444 !important;
        }

        body.dark-mode .navbar-brand,
        body.dark-mode .navbar-nav .nav-link {
            color: #fff !important;
        }

        body.dark-mode .navbar-toggler-icon {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.8)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
        }

        body.dark-mode .footer {
            background-color: #444 !important;
            color: #ccc;
        }

        /* Ajustes para tabelas */
        body.light-mode .table {
        color: #333;
        background-color: #fff;
        }
        body.dark-mode .table {
        color: #fff;
        background-color: #444;
        }
        body.dark-mode .table th,
        body.dark-mode .table td {
        border-color: #666;
        }
        body.dark-mode .table .thead-light th {
        background-color: #555;
        color: #fff;
        }
        /* Ajustes para paginação */
        body.light-mode .page-link {
        color: #007bff;
        background-color: #fff;
        border-color: #dee2e6;
        }
        body.light-mode .page-item.active .page-link {
        background-color: #007bff;
        border-color: #007bff;
        color: #fff;
        }
        body.dark-mode .page-link {
        color: #66b0ff;
        background-color: #555;
        border-color: #777;
        }
        body.dark-mode .page-item.active .page-link {
        background-color: #66b0ff;
        border-color: #66b0ff;
        color: #fff;
        }
        body.dark-mode .page-link:hover {
        background-color: #666;
        color: #fff;
        }
    </style>
    <style>
        .stat-badge {
            display: inline-flex; /* Using flex to center vertically */
            align-items: center; /* Center vertically */
            justify-content: center; /* Center horizontally */
            width: 25px; /* Fixed width for all badges */
            height: 25px; /* Fixed height for all badges */
            border-radius: 25%; /* Rounded borders */
            font-weight: medium;
            color: #000;
            text-align: center; /* Center text alignment */
            font-size: 14px; /* Font size */
        }

        /* Specific styles for each stat */
        .stat-40 {
            background-color: red; /* Red for stats from 40 to 69 */
        }

        .stat-70 {
            background-color: yellow; /* Yellow for stats from 70 to 79 */
        }

        .stat-80 {
            background-color: lightgreen; /* Light green for stats from 80 to 89 */
        }

        .stat-90 {
            background-color: #00CED1; /* Blue-green for stats from 90 to 99 */
        }

        /* Styles for player position badges */
        .position-badge {
            display: inline-flex; /* Using flex to center vertically */
            align-items: center; /* Center vertically */
            justify-content: center; /* Center horizontally */
            width: 40px; /* Fixed width for all badges */
            height: 25px; /* Fixed height for all badges */
            border-radius: 8%; /* Rounded borders */
            font-weight: bold;
            color: #fff;
            text-align: center; /* Center text alignment */
            font-size: 14px; /* Font size */
        }

        /* Specific styles for each position */
        .position-gk {
            background-color: #f0ad4e; /* Gold for Goalkeepers */
        }

        .position-cb, .position-lb, .position-rb {
            background-color: #5bc0de; /* Light blue for Defenders */
        }

        .position-dmf, .position-cmf, .position-lmf, .position-rmf, .position-amf {
            background-color: #5cb85c; /* Green for Midfielders */
        }

        .position-ss, .position-lwf, .position-rwf, .position-cf {
            background-color: #d9534f; /* Red for Forwards */
        }

        .bg-dark-red {
            background-color: #8B0000 !important; /* Dark red background */
        }
        .bg-dark-purple {
            background-color: #4B0082 !important; /* Dark purple background */
        }

        /* Adjustments for fixed header and footer */
        body {
            padding-top: 56px; /* Height of the fixed header */
            margin-bottom: 120px; /* Height of the footer */
            position: relative;
            min-height: 100vh; /* 100% of the viewport height */
        }
        .footer {
            position: fixed;
            bottom: 0;
            width: 100%;
            height: 100px; /* Height of the footer */
            background-color: #f8f9fa; /* Light gray background */
            line-height: 100px; /* Centering text vertically */
        }
    </style>
    <style>
		.btn {
			margin: 2px;
		}

        
	</style>

    <style>
        .stat-badge {
            display: inline-flex; /* Using flex to center vertically */
            align-items: center; /* Center vertically */
            justify-content: center; /* Center horizontally */
            width: 30px; /* Fixed width for all badges */
            height: 25px; /* Fixed height for all badges */
            border-radius: 20%; /* Rounded corners */
            font-weight: bold;
            color: #000;
            text-align: center; /* Center text */
            font-size: 14px; /* Font size */
        }

        /* Styles specific to each stat range */
        .stat-40 {
            background-color: red; /* From 40 to 69 is red */
        }

        .stat-70 {
            background-color: yellow; /* From 70 to 79 is yellow */
        }

        .stat-80 {
            background-color: lightgreen; /* From 80 to 89 is light green */
        }

        .stat-90 {
            background-color: #00CED1; /* From 90 to 99 is teal */
        }
    </style>
</head>
<body>
    <?php

    // Check if the user is logged in and set the navbar color
    $navbarColor = isset($_SESSION['userID']) ? (isset($_SESSION['adminRights']) && $_SESSION['adminRights'] == 1 ? 'bg-dark-purple' : 'bg-dark-red') : 'bg-light';

    ?>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a class="navbar-brand" href="/"><strong>PlayersDB</strong></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <!--<li class="nav-item"><a class="nav-link" href="index.php">Home</a></li>-->
                <li class="nav-item"><a class="nav-link" href="/players">Players</a></li>
                <!--<li class="nav-item"><a class="nav-link" href="../pages/teams.php">Teams</a></li>-->
                <li class="nav-item"><a class="nav-link" href="/convert_id">ID Conversion</a></li>
                <li class="nav-item"><a class="nav-link" href="/convert_stats">Stats Conversion</a></li>
                <li class="nav-item"><a class="nav-link" href="/teditor">TEDitor</a></li>
                <!--<li class="nav-item"><a class="nav-link" href="../scraping/">PESDB Scraping</a></li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Tools
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="../pages/idconv.php">ID Converter</a>
                    </div>
                </li>-->
                <!--<li class="nav-item"><a class="nav-link" href="../admin/coaches_list.php">Coaches</a></li>
                <li class="nav-item"><a class="nav-link" href="../admin/competitions_list.php">Competitions</a></li>-->
            </ul>

            <!-- Search Form -->
            <form class="form-inline ml-auto mt-2 mt-lg-0 mr-3" id="searchForm" action="../pages/players_search.php" method="GET">
                <input class="form-control mr-sm-2" type="search" placeholder="Search players..." aria-label="Search" name="query">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <!-- End of Search Form -->

            <!-- Login Session
            <?php if (isset($_SESSION['userID'])): ?>
                <form class="form-inline my-2 my-lg-0" action="../pages/logout.php" method="POST">
                    <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">Logout</button>
                </form>
            <?php else: ?>
                <button class="btn btn-outline-primary my-2 my-sm-0" type="button" data-toggle="modal" data-target="#loginModal">Login</button>
            <?php endif; ?> -->

            <!-- Adicionar após o form de login -->
            <div class="theme-switch-wrapper">
                <label class="theme-switch" for="checkbox">
                    <input type="checkbox" id="checkbox">
                    <span class="slider"></span>
                </label>
                <i class="fa-solid fa-sun theme-icon"></i>
            </div>
        </div>
    </nav>

    <!-- Login Modal -->
    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="loginModalLabel">Login</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="loginForm" action="login.php" method="post">
                        <div class="form-group">
                            <label for="loginEmail">Email address</label>
                            <input type="email" class="form-control" id="loginEmail" name="loginEmail" required>
                        </div>
                        <div class="form-group">
                            <label for="loginPassword">Password</label>
                            <input type="password" class="form-control" id="loginPassword" name="loginPassword" required>
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>
                        <p class="mt-3">Not registered? <a href="../pages/register.php" id="registerLink">Register now!</a></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <script>
        const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
        const themeIcon = document.querySelector('.theme-icon');
        const body = document.body;
        const currentTheme = localStorage.getItem('theme') || 'light';

        // Aplicar tema salvo
        if (currentTheme === 'dark') {
            body.classList.add('dark-mode');
            toggleSwitch.checked = true;
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }

        // Alternar tema
        toggleSwitch.addEventListener('change', function() {
            if (this.checked) {
                body.classList.add('dark-mode');
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                localStorage.setItem('theme', 'dark');
            } else {
                body.classList.remove('dark-mode');
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                localStorage.setItem('theme', 'light');
            }
        });
    </script>
<?php
header('Content-Type: text/html; charset=utf-8');
include __DIR__ . '/../includes/header.php';
//include '../includes/auth.php';

// Arrays de mapeamento (ajuste conforme necessário)
$position_names = [
    0 => 'GK', 1 => 'CB', 2 => 'LB', 3 => 'RB', 4 => 'DMF', 5 => 'CMF',
    6 => 'LMF', 7 => 'RMF', 8 => 'AMF', 9 => 'LWF', 10 => 'RWF', 11 => 'SS', 12 => 'CF'
];

$ef_stats = [
    "Offensive Awareness", "Ball Control", "Dribbling", "Tight Possession",
    "Low Pass", "Lofted Pass", "Finishing", "Heading", "Set Piece Taking",
    "Curl", "Speed", "Acceleration", "Kicking Power", "Jumping",
    "Physical Contact", "Balance", "Stamina", "Defensive Awareness", "Tackling",
    "Aggression", "Defensive Engagement", "GK Awareness", "GK Catching",
    "GK Parrying", "GK Reflexes", "GK Reach", "Weak Foot Usage",
    "Weak Foot Accuracy", "Form", "Injury Resistance"
];

$ef_skills = [
    "Scissors Feint", "Double Touch", "Flip Flap", "Marseille Turn", "Sombrero",
    "Chop Turn", "Cut Behind & Turn", "Scotch Move", "Sole Control", "Momentum Dribbling",
    "Heading", "Long-Range Curler", "Chip Shot Control", "Knuckle Shot", "Dipping Shot",
    "Rising Shot", "Long Range Shooting", "Acrobatic Finishing", "Heel Trick", "First-time Shot",
    "Phenomenal Finishing", "One-touch Pass", "Through Passing", "Weighted Pass", "Pinpoint Crossing",
    "Edged Crossing", "Outside Curler", "Rabona", "No Look Pass", "Game-changing Pass",
    "Visionary Pass", "Low Lofted Pass", "GK Low Punt", "GK High Punt", "Long Throw", "GK Long Throw",
    "Penalty Specialist", "GK Penalty Saver", "Gamesmanship", "Man Marking", "Track Back",
    "Interception", "Blocker", "Aerial Superiority", "Sliding Tackle", "Fortress", "Acrobatic Clearance",
    "Captaincy", "Super-sub", "Fighting Spirit"

];

$ef_styles = [
    "Trickster", "Mazing Run", "Speeding Bullet", "Incisive Run", "Long Ball Expert", 
    "Early Cross", "Long Ranger"
];
?>

<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <?php
            // Função para obter a classe do badge
            function getBadgeClass($value) {
                $value = (int)$value;
                if ($value >= 40 && $value <= 69) return 'stat-40';
                elseif ($value >= 70 && $value <= 79) return 'stat-70';
                elseif ($value >= 80 && $value <= 89) return 'stat-80';
                elseif ($value >= 90 && $value <= 99) return 'stat-90';
                else return '';
            }

            // Verificar se o parâmetro de ID do jogador foi passado na URL
            if (isset($_GET['id'])) {
                $player_id = (int)$_GET['id']; // Sanitizar entrada

                // Consulta para obter os dados do jogador
                $sql_player = "SELECT * FROM players WHERE id = $player_id";
                $result_player = $conn->query($sql_player);

                if ($result_player->num_rows > 0) {
                    $player = $result_player->fetch_assoc();

                    // Consulta para obter as estatísticas do jogador
                    $sql_stats = "SELECT * FROM ef_stats WHERE konamiID = '{$player['konamiID']}'";
                    $result_stats = $conn->query($sql_stats);
                    $stats = $result_stats->num_rows > 0 ? $result_stats->fetch_assoc() : null;

                    // Consulta para obter o código alpha-2 e nome do país
                    $nationality_code = $player['nationality1'];
                    $sql_country = "SELECT alpha2, engName FROM Countries WHERE countryID = '$nationality_code'";
                    $result_country = $conn->query($sql_country);
                    $country = $result_country->num_rows > 0 ? $result_country->fetch_assoc() : null;

                    // Construir o caminho da imagem do jogador usando konamiID
                    $image_path = "https://api.efootballdb.com/assets/2022/players/{$player['konamiID']}_.png.webp";
                    $headers = @get_headers($image_path);
                    $image_tag = ($headers && strpos($headers[0], '200') !== false)
                        ? "<img src='$image_path' alt='{$player['playerName']}' style='max-height: 160px;' class='float-left mr-3'>"
                        : "";

                    // Exibir as características do jogador
                    echo "<div class='profile'>";
                    echo $image_tag;

                    echo "<h1>";
                    if ($stats) {
                        $ovr_value = $stats['overall'];
                        $badge_class = getBadgeClass($ovr_value);
                        echo "<span class='stat-badge $badge_class' style='width: 55px; height: 50px; font-size: 35px;'>$ovr_value</span> ";
                    }
                    echo $player['playerName'] . "</h1>";

                    // Exibir posições
                    $positions = json_decode($player['positions'], true);
                    $position_badges = [];
                    if (!empty($positions)) {
                        $registered_position = $position_names[$player['registeredPosition']] ?? 'Unknown';
                        $position_badges[] = "<span class='position-badge position-" . strtolower($registered_position) . "'>$registered_position</span>";

                        foreach ($positions as $index => $aptitude) {
                            if (($aptitude == 1 || $aptitude == 2) && $index != $player['registeredPosition']) {
                                $position_name = $position_names[$index] ?? 'Unknown';
                                $position_badges[] = "<span class='position-badge position-" . strtolower($position_name) . "'>$position_name</span>";
                            }
                        }
                        echo "<p>" . implode(' ', $position_badges) . "<br>";
                    }

                    // Nacionalidade com bandeira (usando Countries)
                    if ($country) {
                        $country_code = strtolower($country['alpha2']);
                        $country_name = $country['engName'];
                        $flag_path = "../assets/images/flags/{$country_code}.svg";
                        $flag_tag = file_exists($flag_path) 
                            ? "<img src='$flag_path' alt='$country_name' title='$country_name' width='21' height='16'> "
                            : "";
                        echo "{$flag_tag}{$country_name}<br>";
                    } else {
                        echo "{$player['nationality1']}<br>";
                    }

                    echo "{$player['age']} y.o. ";
                    if (!empty($player['birthdate'])) {
                        echo "(" . date('M d, Y', strtotime($player['birthdate'])) . ") ";
                    }
                    echo number_format($player['height'], 0, '.', '') . "cm / " . number_format($player['weight'], 0, '.', '') . "kg";
                    echo " / " . ($player['strongFoot'] == 0 ? 'Right' : 'Left') . " foot";

                    // Times (N/A por enquanto, até criar pAssignments)
                    echo "<br><strong>Team:</strong> N/A";

                    // IDs e links
                    if (!empty($player['konamiID'])) {
                        echo "<br><strong>PES ID:</strong> {$player['konamiID']} ";
                    }
                    if (!empty($player['pFifaID'])) {
                        echo "<strong>FIFA ID:</strong> {$player['pFifaID']} (<a href='https://sofifa.com/player/{$player['pFifaID']}' target='_blank'>SoFIFA</a>) ";
                    }
                    if (!empty($player['pBeSoccerLink'])) {
                        echo "<strong>BeSoccer Link:</strong> <a href='{$player['pBeSoccerLink']}' target='_blank'>{$player['pBeSoccerLink']}</a>";
                    }
                    echo "</p>";

                    // Botão de edição (se admin)
                    if (isset($_SESSION['isAdmin'])) {
                        echo "<a href='player_edit.php?id=$player_id' class='btn btn-success mb-3'><i class='fas fa-edit'></i> Edit Player</a>";
                    }

                    // Abas
                    echo '<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item"><a class="nav-link active" id="basic-info-tab" data-toggle="pill" href="#basic-info" role="tab" aria-controls="basic-info" aria-selected="true">Basic</a></li>
                        <li class="nav-item"><a class="nav-link" id="pills-stats-tab" data-toggle="pill" href="#pills-stats" role="tab" aria-controls="pills-stats" aria-selected="false">Stats</a></li>
                    </ul>';

                    echo '<div class="tab-content" id="pills-tabContent">';

                    // Aba Basic
                    echo "<div class='tab-pane fade show active' id='basic-info' role='tabpanel' aria-labelledby='basic-info-tab'>
                        <strong>Player Name:</strong><br>{$player['playerName']}<br>
                        <strong>Full Name:</strong><br>" . ($player['fullName'] ?? '-') . "<br>
                        <strong>Shirt Name:</strong><br>{$player['clubShirtName']}<br>
                        <strong>NT Shirt Name:</strong><br>{$player['nationalShirtName']}<br>
                        <strong>Nationality:</strong><br>" . ($country ? $country['engName'] : $player['nationality1']) . "<br>
                        <strong>Age:</strong><br>{$player['age']}<br>
                        <strong>Height:</strong><br>{$player['height']}<br>
                        <strong>Weight:</strong><br>{$player['weight']}<br>
                        <strong>Strong Foot:</strong><br>" . ($player['strongFoot'] == 0 ? 'Right' : 'Left') . "<br>
                        <strong>Strong Hand:</strong><br>" . ($player['strongHand'] == 0 ? 'Right' : ($player['strongHand'] == 1 ? 'Left' : '-')) . "<br>
                        <strong>Star Rating:</strong><br>" . ($player['starRating'] ?? '-') . "<br>
                    </div>";

                    // Aba Stats
                    echo "<div class='tab-pane fade' id='pills-stats' role='tabpanel' aria-labelledby='pills-stats-tab'>";
                    echo    "<select class='form-control' name='stats' id='stats'>
                                <option value='efootball'>eFootball</option>
                                <option value='pes2021'>PES 2021</option>
                                <option value='fifa'>FIFA/EA FC</option>
                            </select>";
                    
                    echo "<br>";

                    if ($stats) {
                        $stats_data = json_decode($stats['stats'], true);
                        if (isset($stats_data) && is_array($stats_data)) {
                            echo '<table style="border-collapse: collapse; width: 100%;">';
                            foreach ($stat_names as $stat_name) {
                                $stat_value = $stats_data[$stat_name] ?? 0;
                                $badge_class = getBadgeClass($stat_value);
                                echo "<tr><td style='padding: 8px; text-align:left; width:30%; height:32px;'>$stat_name:</td><td style='padding: 8px; height:32px;'><span class='stat-badge $badge_class'>$stat_value</span></td></tr>";
                            }
                            echo '</table>';
                        } else {
                            echo "Error: Player statistics are not available.";
                        }
                    } else {
                        echo "No stat records found for this player.";
                    }
                    echo "<br><br>";
                    if ($stats) {
                        $skills_data = json_decode($stats['skills'], true);
                        if (isset($skills_data) && is_array($skills_data)) {
                            echo "<strong>Playing Style:</strong><br>";
                            $playing_style = $stats['playing_style'] ?? 'None';
                            echo "$playing_style<br><br>";

                            echo "<strong>Skills:</strong><br>";
                            $skills_found = false;
                            foreach ($skill_names as $index => $skill_name) {
                                if (($skills_data[$skill_name] ?? 0) == 1) {
                                    echo "$skill_name<br>";
                                    $skills_found = true;
                                }
                            }
                            if (!$skills_found) {
                                echo "No skills assigned for this player.";
                            }
                        } else {
                            echo "Skills/Playing Style not found for this player.";
                        }
                    } else {
                        echo "Skills/Playing Style not found for this player.";
                    }
                    echo "</div>";

                    
                    echo "</div>"; // Fecha tab-content
                    echo "</div>"; // Fecha profile
                } else {
                    echo "Player not found.";
                }
            } else {
                echo "Player ID not provided.";
            }
            ?>
        </div>
    </div>
</div>

<?php
include __DIR__ . '/../includes/footer.php';

echo "<head><title>" . ($player['playerName'] ?? 'Player') . " | PlayersDB</title></head>";
?>
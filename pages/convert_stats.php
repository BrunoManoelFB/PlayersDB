<?php
ob_start();

if (isset($_GET['action']) && $_GET['action'] == 'search') {
    header('Content-Type: application/json');
    ob_clean();

    $id = isset($_GET['id']) ? trim($_GET['id']) : "";
    $filename = __DIR__ . '/../scraping/sofifa_players.jsonl';

    if (!file_exists($filename)) {
        echo json_encode(["success" => false, "message" => "Arquivo JSONL não encontrado."]);
        exit;
    }

    $found = false;
    $fifa_player = null;
    $handle = fopen($filename, 'r');
    if ($handle) {
        $headers = null;
        while (($line = fgets($handle)) !== false) {
            $data = json_decode($line, true);
            if (!$headers) {
                $headers = $data;
            } else {
                if (!$data) continue;
                $player = array_combine($headers, $data);
                if (isset($player['ID']) && $player['ID'] == $id) {
                    $found = true;
                    $fifa_player = $player;
                    break;
                }
            }
        }
        fclose($handle);
    }

    if ($found) {
        // Função para limitar valores
        function clamp($value, $min_val = 40, $max_val = 99) {
            return max($min_val, min($max_val, $value));
        }

        // Função de conversão de FIFA para PES 2021
        function convert_to_pes21($fifa_stats) {
            $pes_stats = [];

            // Stats principais com ajuste para alinhar com PES 2021
            $adjustment_factor = 1.095;
            $pes_stats['Offensive Awareness'] = clamp(round(
                ($fifa_stats['Att. Position'] * 0.5 + $fifa_stats['Finishing'] * 0.3 + $fifa_stats['Vision'] * 0.2) * $adjustment_factor
            ));
            $pes_stats['Ball Control'] = clamp(round($fifa_stats['Ball control'] * $adjustment_factor));
            $pes_stats['Dribbling'] = clamp(round($fifa_stats['Dribbling'] * $adjustment_factor));
            $pes_stats['Tight Possession'] = clamp(round(
                ($fifa_stats['Dribbling'] * 0.4 + $fifa_stats['Ball control'] * 0.4 + $fifa_stats['Balance'] * 0.2) * $adjustment_factor
            ));
            $pes_stats['Low Pass'] = clamp(round($fifa_stats['Short passing'] * $adjustment_factor));
            $pes_stats['Lofted Pass'] = clamp(round($fifa_stats['Long passing'] * $adjustment_factor));
            $pes_stats['Finishing'] = clamp(round($fifa_stats['Finishing'] * $adjustment_factor));
            $pes_stats['Heading'] = clamp(round(
                ($fifa_stats['Heading accuracy'] * 0.7 + $fifa_stats['Jumping'] * 0.3) * $adjustment_factor
            ));
            $pes_stats['Place Kicking'] = clamp(round(
                ($fifa_stats['FK Accuracy'] * 0.6 + $fifa_stats['Curve'] * 0.4) * $adjustment_factor
            ));
            $pes_stats['Curl'] = clamp(round($fifa_stats['Curve'] * $adjustment_factor));
            $pes_stats['Speed'] = clamp(round($fifa_stats['Sprint speed'] * $adjustment_factor));
            $pes_stats['Acceleration'] = clamp(round($fifa_stats['Acceleration'] * $adjustment_factor));
            $pes_stats['Kicking Power'] = clamp(round($fifa_stats['Shot power'] * $adjustment_factor));
            $pes_stats['Jump'] = clamp(round($fifa_stats['Jumping'] * $adjustment_factor));
            $pes_stats['Physical Contact'] = clamp(round($fifa_stats['Strength'] * $adjustment_factor));
            $pes_stats['Balance'] = clamp(round($fifa_stats['Balance'] * $adjustment_factor));
            $pes_stats['Stamina'] = clamp(round($fifa_stats['Stamina'] * $adjustment_factor));
            $pes_stats['Defensive Awareness'] = clamp(round($fifa_stats['Defensive awareness'] * $adjustment_factor));
            $pes_stats['Ball Winning'] = clamp(round(
                ($fifa_stats['Standing tackle'] * 0.5 + $fifa_stats['Sliding tackle'] * 0.3 + $fifa_stats['Interceptions'] * 0.2) * $adjustment_factor
            ));
            $pes_stats['Aggression'] = clamp(round($fifa_stats['Aggression'] * $adjustment_factor));
            $pes_stats['GK Awareness'] = clamp(round($fifa_stats['GK Positioning'] * $adjustment_factor));
            $pes_stats['GK Catching'] = clamp(round($fifa_stats['GK Handling'] * $adjustment_factor));
            $pes_stats['GK Clearing'] = clamp(round($fifa_stats['GK Kicking'] * $adjustment_factor));
            $pes_stats['GK Reflexes'] = clamp(round($fifa_stats['GK Reflexes'] * $adjustment_factor));
            $pes_stats['GK Reach'] = clamp(round($fifa_stats['GK Diving'] * $adjustment_factor));
            $pes_stats['Weak Foot Usage'] = min(4, max(1, round(($fifa_stats['Weak foot'] - 1) * 0.75 + 1)));
            $pes_stats['Weak Foot Accuracy'] = min(4, max(1, round(($fifa_stats['Weak foot'] - 1) * 0.75 + 1)));
            $pes_stats['Form'] = 7;
            $pes_stats['Injury Resistance'] = 2;

            // Posições de jogo
            $positions = [$fifa_stats['Position']];
            if ($fifa_stats['Other Positions']) {
                $positions = array_merge($positions, explode(', ', $fifa_stats['Other Positions']));
            }
            $pes_positions = [];
            foreach ($positions as $pos) {
                switch ($pos) {
                    case 'ST': $pes_positions[] = 'CF'; break;
                    case 'LW': case 'RW': $pes_positions[] = 'WF'; break;
                    case 'CAM': $pes_positions[] = 'AMF'; break;
                    case 'CM': $pes_positions[] = 'CMF'; break;
                    case 'CDM': $pes_positions[] = 'DMF'; break;
                    case 'LB': $pes_positions[] = 'LB'; break;
                    case 'RB': $pes_positions[] = 'RB'; break;
                    case 'CB': $pes_positions[] = 'CB'; break;
                    case 'GK': $pes_positions[] = 'GK'; break;
                }
            }
            if ($fifa_stats['Att. Position'] > 75 && !in_array('CF', $pes_positions)) $pes_positions[] = 'SS';
            if ($fifa_stats['Dribbling'] > 75 && $fifa_stats['Sprint speed'] > 75) $pes_positions[] = 'WF';
            $pes_stats['Playing Positions'] = array_unique($pes_positions);

            // Habilidades especiais
            $skills = [];
            if ($fifa_stats['Dribbling'] > 80) $skills[] = 'Scissors Feint';
            if ($fifa_stats['Dribbling'] > 85) $skills[] = 'Double Touch';
            if ($fifa_stats['Dribbling'] > 80 && $fifa_stats['Agility'] > 80) $skills[] = 'Flip Flap';
            if ($fifa_stats['Long shots'] > 80 && $fifa_stats['Shot power'] > 80) $skills[] = 'Long Range Shooting';
            if ($fifa_stats['FK Accuracy'] > 80) $skills[] = 'Knuckle Shot';
            if ($fifa_stats['Heading accuracy'] > 80) $skills[] = 'Heading';
            if ($fifa_stats['Ball control'] > 80 && $fifa_stats['Short passing'] > 80) $skills[] = 'One-touch Pass';
            if ($fifa_stats['Long passing'] > 80) $skills[] = 'Long Throw';
            $pes_stats['Player Skills'] = $skills;

            // Overall Rating (mantido no cálculo, mas não exibido)
            $weights = [];
            $position = $fifa_stats['Position'];
            if ($position === 'ST') { // CF
                $weights = [
                    'Offensive Awareness' => 0.25, 'Ball Control' => 0.15, 'Dribbling' => 0.15, 'Tight Possession' => 0.10,
                    'Low Pass' => 0.08, 'Lofted Pass' => 0.03, 'Finishing' => 0.35, 'Heading' => 0.15,
                    'Place Kicking' => 0.05, 'Curl' => 0.05, 'Speed' => 0.15, 'Acceleration' => 0.15,
                    'Kicking Power' => 0.15, 'Jump' => 0.15, 'Physical Contact' => 0.10, 'Balance' => 0.10,
                    'Stamina' => 0.10, 'Defensive Awareness' => 0.05, 'Ball Winning' => 0.05, 'Aggression' => 0.05,
                    'GK Awareness' => 0.00, 'GK Catching' => 0.00, 'GK Clearing' => 0.00, 'GK Reflexes' => 0.00,
                    'GK Reach' => 0.00
                ];
            } elseif ($position === 'CB') {
                $weights = [
                    'Offensive Awareness' => 0.05, 'Ball Control' => 0.10, 'Dribbling' => 0.10, 'Tight Possession' => 0.05,
                    'Low Pass' => 0.10, 'Lofted Pass' => 0.10, 'Finishing' => 0.05, 'Heading' => 0.15,
                    'Place Kicking' => 0.05, 'Curl' => 0.05, 'Speed' => 0.15, 'Acceleration' => 0.10,
                    'Kicking Power' => 0.10, 'Jump' => 0.15, 'Physical Contact' => 0.20, 'Balance' => 0.10,
                    'Stamina' => 0.15, 'Defensive Awareness' => 0.30, 'Ball Winning' => 0.25, 'Aggression' => 0.15,
                    'GK Awareness' => 0.00, 'GK Catching' => 0.00, 'GK Clearing' => 0.00, 'GK Reflexes' => 0.00,
                    'GK Reach' => 0.00
                ];
            } elseif ($position === 'GK') {
                $weights = [
                    'Offensive Awareness' => 0.05, 'Ball Control' => 0.05, 'Dribbling' => 0.05, 'Tight Possession' => 0.05,
                    'Low Pass' => 0.05, 'Lofted Pass' => 0.05, 'Finishing' => 0.05, 'Heading' => 0.05,
                    'Place Kicking' => 0.05, 'Curl' => 0.05, 'Speed' => 0.10, 'Acceleration' => 0.10,
                    'Kicking Power' => 0.10, 'Jump' => 0.15, 'Physical Contact' => 0.15, 'Balance' => 0.10,
                    'Stamina' => 0.10, 'Defensive Awareness' => 0.05, 'Ball Winning' => 0.05, 'Aggression' => 0.05,
                    'GK Awareness' => 0.30, 'GK Catching' => 0.20, 'GK Clearing' => 0.20, 'GK Reflexes' => 0.20,
                    'GK Reach' => 0.20
                ];
            } else { // Padrão genérico
                $weights = [
                    'Offensive Awareness' => 0.15, 'Ball Control' => 0.15, 'Dribbling' => 0.15, 'Tight Possession' => 0.10,
                    'Low Pass' => 0.15, 'Lofted Pass' => 0.10, 'Finishing' => 0.10, 'Heading' => 0.10,
                    'Place Kicking' => 0.05, 'Curl' => 0.05, 'Speed' => 0.15, 'Acceleration' => 0.15,
                    'Kicking Power' => 0.10, 'Jump' => 0.10, 'Physical Contact' => 0.10, 'Balance' => 0.10,
                    'Stamina' => 0.15, 'Defensive Awareness' => 0.15, 'Ball Winning' => 0.15, 'Aggression' => 0.10,
                    'GK Awareness' => 0.00, 'GK Catching' => 0.00, 'GK Clearing' => 0.00, 'GK Reflexes' => 0.00,
                    'GK Reach' => 0.00
                ];
            }

            // Calcular OVR (mantido, mas não exibido)
            $ovr = 0;
            foreach ($weights as $stat => $weight) {
                $ovr += $pes_stats[$stat] * $weight;
            }
            $pes_stats['Overall Rating'] = clamp(round($ovr));

            // Outros campos diretos
            $pes_stats['Height'] = $fifa_stats['Height'];
            $pes_stats['Weight'] = $fifa_stats['Weight'];
            $pes_stats['Foot'] = $fifa_stats['foot'];

            return $pes_stats;
        }

        $convert_to = isset($_GET['convert_to']) ? $_GET['convert_to'] : 'fifa';
        if ($convert_to === 'pes2021') {
            $pes_player = convert_to_pes21($fifa_player);
            $pes_player['ID'] = $fifa_player['ID'];
            $pes_player['Name'] = $fifa_player['Name'];
            $pes_player['Fullname'] = $fifa_player['Fullname'];
            $pes_player['Country'] = $fifa_player['Country'];
            $pes_player['Position'] = $fifa_player['Position'];
            $pes_player['GameVersion'] = $fifa_player['GameVersion'];
            $pes_player['LastUpdate'] = $fifa_player['LastUpdate'];
            echo json_encode(["success" => true, "fifa" => $fifa_player, "pes2021" => $pes_player]);
        } else {
            echo json_encode(["success" => true, "fifa" => $fifa_player]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "No Player Found."]);
    }
    exit;
}

include __DIR__ . '/../includes/header.php';
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Stats Conversion</title>
    <style>
        #stats .row {
            margin-bottom: 20px;
        }
        #stats .col-md-4, #stats .col-md-6 {
            padding: 15px;
        }
        #stats h3 {
            margin-bottom: 10px;
        }
        #stats span {
            display: block;
            margin-bottom: 5px;
        }
        #photo img {
            max-width: 100%;
            height: auto;
        }
    </style>
</head>
<body>
<div class="container mt-5">
    <h2>Stats Conversion</h2>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <form class="form-inline">
                <input class="form-control" type="number" id="inputID" placeholder="Player ID" min="0" max="999999" style="width: 7em" required>
                <button type="button" class="btn btn-primary ml-2" onclick="scrapeFIFA()">Convert from FIFA</button>
                <button type="button" class="btn btn-primary ml-2" onclick="scrapeeftb()" style="display: none;">Convert from eFootball</button>
            </form>
        </div>
        <div class="col-md-12" id="stats" style="display: none;">
            <div class="row">
                <div class="col-md-4" id="photo"></div>
                <div class="col-md-4" id="info1"></div>
                <div class="col-md-4" id="info2"></div>
            </div>
            <div class="row">
                <div class="col-md-6" id="original"></div>
                <div class="col-md-6" id="converted"></div>
            </div>
        </div>
    </div>
</div>

<script>
$(document).ready(function(){
    window.scrapeFIFA = function(){
        var id = $('#inputID').val().trim();
        if (id === "") {
            alert("Por favor, insira um ID de jogador.");
            return;
        }

        $.ajax({
            method: "GET",
            url: "/convert_stats",
            data: { action: 'search', id: id, convert_to: 'pes2021' },
            dataType: "json"
        })
        .done(function(response){
            if (response.success) {
                var fifa = response.fifa;
                var pes = response.pes2021 || {};

                $("#stats").show();

                var idStr = String(fifa['ID']).padStart(6, '0');
                var photoUrl = `https://cdn.sofifa.net/players/${idStr.substr(0, 3)}/${idStr.substr(3, 3)}/25_240.png`;
                $("#photo").html(`<img src="${photoUrl}" alt="${fifa['Name']}" onerror="this.src='https://cdn.sofifa.net/player_0.svg';">`);

                var info1Html = '<h3>Player Info</h3>';
                var info1Fields = {
                    'Name': fifa['Name'],
                    'Fullname': fifa['Fullname'],
                    'Country': fifa['Country'],
                    'Age': fifa['Age'],
                    'Height': fifa['Height'],
                    'Weight': fifa['Weight'],
                    'Foot': fifa['foot']
                };
                for (var field in info1Fields) {
                    var value = info1Fields[field] !== null ? info1Fields[field] : "N/A";
                    info1Html += `<span><strong>${field}:</strong> ${value}</span>`;
                }
                $("#info1").html(info1Html);

                var info2Html = '<h3>Career Info</h3>';
                var info2Fields = {
                    'Position': fifa['Position'],
                    'Other Positions': fifa['Other Positions'],
                    'Team': fifa['Team'],
                    'Contract': fifa['Contract'],
                    'Contract Info': fifa['Contract_Info'],
                    'Game Version': fifa['GameVersion'],
                    'Last Update': fifa['LastUpdate']
                };
                for (var field in info2Fields) {
                    var value = info2Fields[field] !== null ? info2Fields[field] : "N/A";
                    info2Html += `<span><strong>${field}:</strong> ${value}</span>`;
                }
                $("#info2").html(info2Html);

                var fifaHtml = '<h3>FIFA Stats</h3>';
                var fifaStatsFields = [
                    'Overall rating', 'Potential', 'Best overall', 'Best position', 'Growth',
                    'Total attacking', 'Crossing', 'Finishing', 'Heading accuracy', 'Short passing', 'Volleys',
                    'Total skill', 'Dribbling', 'Curve', 'FK Accuracy', 'Long passing', 'Ball control',
                    'Total movement', 'Acceleration', 'Sprint speed', 'Agility', 'Reactions', 'Balance',
                    'Total power', 'Shot power', 'Jumping', 'Stamina', 'Strength', 'Long shots',
                    'Total mentality', 'Aggression', 'Interceptions', 'Att. Position', 'Vision', 'Penalties', 'Composure',
                    'Total defending', 'Defensive awareness', 'Standing tackle', 'Sliding tackle',
                    'Total goalkeeping', 'GK Diving', 'GK Handling', 'GK Kicking', 'GK Positioning', 'GK Reflexes'
                ];
                for (var i = 0; i < fifaStatsFields.length; i++) {
                    var field = fifaStatsFields[i];
                    var value = fifa[field] !== null ? fifa[field] : "N/A";
                    fifaHtml += `<span><strong>${field}:</strong> ${value}</span>`;
                }
                $("#original").html(fifaHtml);

                var pesHtml = '<h3>PES 2021 Stats</h3>';
                var pesStatsFields = [
                    // 'Overall Rating' removido da exibição
                    'Offensive Awareness', 'Ball Control', 'Dribbling', 'Tight Possession', 'Low Pass',
                    'Lofted Pass', 'Finishing', 'Heading', 'Place Kicking', 'Curl',
                    'Speed', 'Acceleration', 'Kicking Power', 'Jump', 'Physical Contact', 'Balance', 'Stamina',
                    'Defensive Awareness', 'Ball Winning', 'Aggression',
                    'GK Awareness', 'GK Catching', 'GK Clearing', 'GK Reflexes', 'GK Reach',
                    'Weak Foot Usage', 'Weak Foot Accuracy', 'Form', 'Injury Resistance',
                    'Playing Positions', 'Player Skills'
                ];
                for (var i = 0; i < pesStatsFields.length; i++) {
                    var field = pesStatsFields[i];
                    var value = pes[field];
                    if (field === 'Playing Positions') {
                        value = value.join(', ');
                    } else if (field === 'Player Skills') {
                        value = value.length > 0 ? value.join(', ') : 'None';
                    }
                    value = value !== null && value !== undefined ? value : "N/A";
                    pesHtml += `<span><strong>${field}:</strong> ${value}</span>`;
                }
                $("#converted").html(pesHtml);
            } else {
                $("#stats").hide();
                $("#original").html("<p>" + response.message + "</p>").show();
                $("#converted").hide();
            }
        })
        .fail(function(jqXHR, textStatus){
            $("#stats").hide();
            $("#original").html("<p>Erro: " + textStatus + " - " + jqXHR.status + "</p>").show();
            $("#converted").hide();
        });
    };

    window.scrapeeftb = function(){
        alert("Conversão de eFootball ainda não implementada.");
    };
});
</script>

<?php
include __DIR__ . '/../includes/footer.php';
ob_end_flush();
?>
</body>
</html>
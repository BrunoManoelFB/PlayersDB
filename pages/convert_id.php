<?php
include '../includes/db_connection.php'; // Conecte-se ao banco de dados

if (isset($_POST['id'])) {
    $input_id = (int)$_POST['id'];
    $converted_id = null;
    $afccl_id = null;
    $message = '<br>';
    $btns = '';

    if ($input_id > 1074003968) {
        $converted_id = $input_id - 1074003968;
        $message .= "Unlicensed AFC Champions League (PES 2021) ID.<br>Its base ID is $converted_id.";
    } elseif ($input_id > 1073741824) {
        $converted_id = $input_id - 1073741824;
        $message .= "Licensed AFC Champions League (PES 2021) ID.<br>Its base ID is $converted_id.";
    } elseif ($input_id > 75497472) {
        $converted_id = $input_id - 75497472;
        $message .= "Unlicensed NT (?) (eFootball) ID.<br>Its base ID is $converted_id.";
    } elseif ($input_id > 67108864) {
        $converted_id = $input_id - 67108864;
        $message .= "Licensed (?) (eFootball) ID.<br>Its base ID is $converted_id.";
    } elseif ($input_id > 58720256) {
        $converted_id = $input_id - 58720256;
        $message .= "Unlicensed AFC Asian Cup (eFootball) ID.<br>Its base ID is $converted_id.";
    } elseif ($input_id > 50331648) {
        $converted_id = $input_id - 50331648;
        $message .= "Licensed AFC Asian Cup (eFootball) ID.<br>Its base ID is $converted_id.";
    } elseif ($input_id > 25165824) {
        $converted_id = $input_id - 25165824;
        $message .= "Unlicensed AFC Champions League (eFootball) ID.<br>Its base ID is $converted_id.";
    } elseif ($input_id > 16777216) {
        $converted_id = $input_id - 16777216;
        $message .= "Licensed AFC Champions League (eFootball) ID.<br>Its base ID is $converted_id.";
    } elseif ($input_id > 8388608) {
        $converted_id = $input_id - 8388608;
        $message .= "Unlicensed eFootball ID.<br>Its base ID is $converted_id.";
    } elseif ($input_id > 262144) {
        $converted_id = $input_id - 262144;
        $message .= "Unlicensed PES 2021 ID.<br>Its base ID is $converted_id.";
    } elseif ($input_id < 262144) {
        $converted_id = $input_id;
        $message .= "It's a Licensed PES 2021 ID.<br>Base ID: $converted_id.";
    } else {
        $message .= "Invalid ID. Please enter a valid player ID.";
    }

    if ($converted_id !== null) {
        $sql = "SELECT playerID, konamiPlID, playerName FROM Players WHERE konamiPlID = $converted_id";
        $result = $conn->query($sql);
		
		$afccl = 1073741824 + $converted_id;

        if ($result->num_rows > 0) {
            $player = $result->fetch_assoc();
            $message .= "<br>Player found: <a href='player.php?id={$player['playerID']}'>{$player['playerName']}</a>.";
        } else {
            $message .= "<br><small>ID conversion based in <a href='https://evoweb.uk/threads/06-11-22-team-player-manager-competition-country-boot-glove-stadium-derby-city-ids-breakdown-lists-ef-pes-id-converter-v5-0b.78377/#:~:text=Competition%20ID%E1%B4%B1s%20constructions.-,2%3A%20Player%20IDs%3A,-Any%20single%20player'>NFS_FM studies</a>.</small>";
        }
           
		$message .= "<br>No player found with this base ID.<br>";
		$btns = "<br><button type='button' class='btn btn-primary' onclick='navigator.clipboard.writeText(\"$converted_id\")'>Copy Base ID</button>";
		$btns .= "<button type='button' class='btn btn-primary' onclick='navigator.clipboard.writeText(\"$afccl\")'>Copy AFC Champions League ID</button><br>";
    }

    echo $message;
    echo $btns;
}
?>

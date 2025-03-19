<?php
// idconv.php – NÃO inclua header.php nem footer.php aqui!
include __DIR__ . '/../includes/db_connection.php';

if (isset($_POST['id'])) {
    $input_id = (int)$_POST['id'];
    $converted_id = null;
    $afccl_id = null;
    $message = '';
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
        $stmt = $conn->prepare("SELECT id, konamiID, playerName FROM players WHERE konamiid = ?");
        if ($stmt) {
            $stmt->bind_param("i", $converted_id);
            $stmt->execute();
            $result = $stmt->get_result();

            $afccl = 1073741824 + $converted_id;

            if ($result && $result->num_rows > 0) {
                $player = $result->fetch_assoc();
                $message .= "<br>Player found: <a href='player.php?id={$player['id']}'>{$player['playerName']}</a>.";
            } else {
                $message .= "<br>No players found for that ID.";
            }
            $stmt->close();

            $message .= "<br><small>ID conversion based on <a href='https://evoweb.uk/threads/78377/'>NFS_FM IDs breakdown</a>.</small>";
            $btns  = "<br><br><button type='button' class='btn btn-primary' onclick='navigator.clipboard.writeText(\"$converted_id\")'>Copy Base ID</button>";
            $btns .= "<button type='button' class='btn btn-primary' onclick='navigator.clipboard.writeText(\"$afccl\")'>Copy AFC Champions League ID</button><br>";
        } else {
            $message .= "<br>Error preparing SQL statement.";
        }
    }

    echo $message . $btns;
}
?>

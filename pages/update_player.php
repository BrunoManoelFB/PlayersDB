<?php
require 'db_connection.php'; // Conexão com o banco de dados

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $playerID = $_POST['playerID'];

    // Atualizar informações básicas do jogador
    $playerName = $_POST['playerName'];
    $fullName = $_POST['fullname'];
    $clubShirtName = $_POST['clubshirt'];
    $nationalShirtName = $_POST['ntshirt'];
    $nationality1 = $_POST['nationality'];
    $age = $_POST['age'];
    $height = $_POST['height'];
    $weight = $_POST['weight'];
    $strongFoot = $_POST['foot'];
    $strongHand = $_POST['hand'];
    $starRating = $_POST['starrating'];

    $sql_update_player = "UPDATE Players SET
        playerName = ?, fullName = ?, clubShirtName = ?, nationalShirtName = ?, nationality1 = ?, age = ?, height = ?, weight = ?, strongFoot = ?, strongHand = ?, starRating = ?
        WHERE playerID = ?";
    
    $stmt = $conn->prepare($sql_update_player);
    $stmt->bind_param('sssssiiiissi', $playerName, $fullName, $clubShirtName, $nationalShirtName, $nationality1, $age, $height, $weight, $strongFoot, $strongHand, $starRating, $playerID);
    $stmt->execute();

    // Inserir estatísticas do jogador (p21stats)
    $stats = [];
    foreach ($stat_names as $index => $stat_name) {
        $stats[$index] = $_POST["stat-$index"];
    }
    $attitude = $_POST['attitude'];

    $sql_insert_stats = "INSERT INTO p21stats (playerID, stats, attitude) VALUES (?, ?, ?) 
                         ON DUPLICATE KEY UPDATE stats = VALUES(stats), attitude = VALUES(attitude)";
    
    $stmt = $conn->prepare($sql_insert_stats);
    $stmt->bind_param('iss', $playerID, json_encode($stats), $attitude);
    $stmt->execute();

    // Inserir aparências do jogador (pAppearances)
    $appearances = [];
    foreach ($appearances_names as $index => $face_name) {
        $appearances[$index] = $_POST["face-$index"];
    }
    $createdBy = $_SESSION['userID']; // Supondo que a ID do usuário que criou a aparência esteja armazenada na sessão
    $apinfo = "Updated by user"; // Informações adicionais, você pode personalizar isso conforme necessário

    $sql_insert_appearances = "INSERT INTO pAppearances (playerID, appearances, createdBy, apinfo) VALUES (?, ?, ?, ?)";
    
    $stmt = $conn->prepare($sql_insert_appearances);
    $stmt->bind_param('isis', $playerID, json_encode($appearances), $createdBy, $apinfo);
    $stmt->execute();

    // Redirecionar de volta à página de edição do jogador com uma mensagem de sucesso
    header("Location: edit_player.php?playerID=$playerID&success=1");
    exit();
} else {
    // Redirecionar se a solicitação não for POST
    header("Location: players.php");
    exit();
}
?>

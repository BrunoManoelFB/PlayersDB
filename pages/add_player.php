<?php
include '../includes/header.php';
include '../includes/auth.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $team_id = $_POST['team_id'];
    $player_konami_id = $_POST['playerKonamiId'];
    $player_fifa_id = $_POST['playerFifaId'];
    $player_besoccer_link = $_POST['playerBesoccerLink'];
    $player_name = $_POST['playerName'];
    $player_position = $_POST['playerPosition'];
    $player_ovr = $_POST['playerOvr'];

    // Insert the new player
    $sql_insert_player = "INSERT INTO Players (konamiPlID, pFifaID, pBeSoccerLink, playerName, registeredPosition, pOVR) 
                          VALUES ('$player_konami_id', '$player_fifa_id', '$player_besoccer_link', '$player_name', '$player_position', '$player_ovr')";
    $conn->query($sql_insert_player);

    // Get the new player's ID
    $new_player_id = $conn->insert_id;

    // Assign the new player to the team
    $sql_assign_player = "INSERT INTO pAssignments (playerID, teamID) VALUES ($new_player_id, $team_id)";
    $conn->query($sql_assign_player);

    // Redirect back to the team edit page
    header("Location: team_edit.php?id=$team_id");
    exit();
} else {
    echo "<p>Invalid request method.</p>";
}

include '../includes/footer.php';
?>

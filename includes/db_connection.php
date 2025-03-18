<?php
$servername = "tommy.heliohost.org";
$username = "brunomanoelfb_user";
$password = "st6mR045_";
$dbname = "brunomanoelfb_playersdb";

$conn = new mysqli($servername, $username, $password, $dbname);
$conn->set_charset("utf8mb4");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
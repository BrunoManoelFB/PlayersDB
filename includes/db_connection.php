<?php
$servername = "tommy.heliohost.org";
$username = "brunomanoelfb_user";
$password = "st6mR045_";
$dbname = "brunomanoelfb_playersdb";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
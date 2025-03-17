<?php
// Inclua o arquivo de conexão com o banco de dados
include 'db_connection.php';

// Captura a consulta do usuário
if (isset($_POST['query'])) {
    $query = $_POST['query'];

    // Consulta no banco de dados para buscar jogadores ou times que correspondem à consulta
    $sql = "SELECT playerName FROM Players WHERE playerName LIKE '%$query%' LIMIT 10";
    $result = $conn->query($sql);

    // Verifica se há resultados
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo '<a class="dropdown-item" href="#">' . $row['playerName'] . '</a>';
        }
    } else {
        echo '<a class="dropdown-item" href="#">No results found</a>';
    }
}
?>

<?php
include '../includes/header.php'; // Inclui o cabeçalho da página
//include '../includes/auth.php';

$limit = 20; // Número de jogadores por página
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$offset = ($page - 1) * $limit;

// Verifica se foi passada uma consulta via GET
if (isset($_GET['query'])) {
    $searchTerm = $_GET['query'];

    // Consulta SQL para buscar jogadores que correspondem ao termo de pesquisa
    $sql = "SELECT Players.playerID, Players.registeredPosition, Players.playerName, 
            GROUP_CONCAT(Teams.teamName SEPARATOR ', ') as teamNames 
            FROM Players 
            LEFT JOIN pAssignments ON Players.playerID = pAssignments.playerID 
            LEFT JOIN Teams ON pAssignments.teamID = Teams.teamID 
            WHERE Players.playerName LIKE '%$searchTerm%' 
            GROUP BY Players.playerID, Players.playerName 
            LIMIT $limit OFFSET $offset";

    $result = $conn->query($sql);

    // Consulta para contar o total de jogadores encontrados
    $count_sql = "SELECT COUNT(*) AS total FROM Players WHERE playerName LIKE '%$searchTerm%'";
    $total_result = $conn->query($count_sql);
    $total_players = $total_result->fetch_assoc()['total'];
    $total_pages = ceil($total_players / $limit);

    // Exibe a tabela de resultados
    echo "<div class='container mt-5'>";
    echo "<h2>Search Results for '$searchTerm'</h2>";
    echo "<table class='table table-striped'>";
    echo "<thead>";
    echo "<tr>";
    echo "<th>ID</th>";
    echo "<th>Player Name</th>";
    echo "<th>Team Name(s)</th>";
    echo "</tr>";
    echo "</thead>";
    echo "<tbody>";
    
    if ($result->num_rows > 0) {
		while ($row = $result->fetch_assoc()) {
			echo "<tr>";
			echo "<td>" . $row['playerID'] . "</td>";
			
			// Concatena a posição registrada com o nome do jogador
			$position_name = isset($position_names[$row['registeredPosition']]) ? $position_names[$row['registeredPosition']] : '';
			$position_class = strtolower('position-' . $position_name); // Transforma em minúsculas
			
			// Cria o link para a página do jogador com o ID do jogador
			echo "<td><span class='position-badge $position_class'>$position_name</span> ";
			echo "<a href='player.php?id=" . $row['playerID'] . "' class='player-link'>" . $row['playerName'];
			echo "</a></td>";
			
			echo "<td>" . $row['teamNames'] . "</td>";
			echo "</tr>";
		}
	} else {
		echo "<tr><td colspan='3'>No players found for '$searchTerm'</td></tr>";
	}

    
    echo "</tbody>";
    echo "</table>";

    // Paginação
    echo "<nav aria-label='Page navigation'>";
    echo "<ul class='pagination'>";
    if ($page > 1) {
        echo "<li class='page-item'><a class='page-link' href='?query=$searchTerm&page=" . ($page - 1) . "'>Previous</a></li>";
    }
    $start_page = max(1, $page - 7);
    $end_page = min($total_pages, $page + 7);
    for ($i = $start_page; $i <= $end_page; $i++) {
        echo "<li class='page-item " . ($i == $page ? 'active' : '') . "'><a class='page-link' href='?query=$searchTerm&page=$i'>$i</a></li>";
    }
    if ($page < $total_pages) {
        echo "<li class='page-item'><a class='page-link' href='?query=$searchTerm&page=" . ($page + 1) . "'>Next</a></li>";
    }
    echo "</ul>";
    echo "</nav>";
    
    echo "</div>"; // Fechar container
}

include '../includes/footer.php'; // Inclui o rodapé da página
?>

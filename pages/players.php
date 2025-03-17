<?php
include '../includes/header.php';
//include '../includes/auth.php';

$limit = 20; // Número de jogadores por página
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$offset = ($page - 1) * $limit;

// Consulta para obter o número total de jogadores
$total_result = $conn->query("SELECT COUNT(*) as total FROM Players");
$total_players = $total_result->fetch_assoc()['total'];
$total_pages = ceil($total_players / $limit);

// Consulta para obter jogadores com limite e offset
$sql = "SELECT Players.playerID, Players.konamiPlID, Players.registeredPosition, Players.playerName, 
        GROUP_CONCAT(Teams.teamName SEPARATOR ', ') as teamNames 
        FROM Players 
        LEFT JOIN pAssignments ON Players.playerID = pAssignments.playerID 
        LEFT JOIN Teams ON pAssignments.teamID = Teams.teamID 
        GROUP BY Players.playerID, Players.registeredPosition, Players.playerName 
        LIMIT $limit OFFSET $offset";
$result = $conn->query($sql);

?>
<body>
<div class="container mt-5">
    <h2>Players List</h2>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>ID</th>
                <th>PES ID</th>
                <th>Player Name</th>
                <th>Team Name(s)</th>
            </tr>
        </thead>
        <tbody>
            <?php
            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    echo "<tr>";
                    echo "<td>" . $row['playerID'] . "</td>";
                    echo "<td>" . $row['konamiPlID'] . "</td>";
                    // Substituir o número pela string correspondente usando o array $position_names
                    
					// Concatena a posição registrada com o nome do jogador
					$position_name = isset($position_names[$row['registeredPosition']]) ? $position_names[$row['registeredPosition']] : '';
					$position_class = strtolower('position-' . $position_name); // Transforma em minúsculas
					
					// Cria o link para a página do jogador com o ID do jogador
					echo "<td><span class='position-badge $position_class'>$position_name</span> ";
					echo "<a href='player.php?id=" . $row['playerID'] . "' class='player-link'>" . $row['playerName'] . "</a></td>";
					
                    echo "<td>" . $row['teamNames'] . "</td>";
                    echo "</tr>";
                }
            } else {
                echo "<tr><td colspan='3'>No players found</td></tr>";
            }
            ?>
        </tbody>
    </table>

    <!-- Paginação -->
    <nav aria-label="Page navigation">
        <ul class="pagination">
            <?php if($page > 1): ?>
                <li class="page-item"><a class="page-link" href="?page=<?= $page - 1 ?>">Previous</a></li>
            <?php endif; ?>
            <?php
            $start_page = max(1, $page - 7);
            $end_page = min($total_pages, $page + 7);
            for($i = $start_page; $i <= $end_page; $i++): ?>
                <li class="page-item <?= $i == $page ? 'active' : '' ?>"><a class="page-link" href="?page=<?= $i ?>"><?= $i ?></a></li>
            <?php endfor; ?>
            <?php if($page < $total_pages): ?>
                <li class="page-item"><a class="page-link" href="?page=<?= $page + 1 ?>">Next</a></li>
            <?php endif; ?>
        </ul>
    </nav>
</div>

<?php
include '../includes/footer.php';
?>

<?php
include '../includes/header.php';
//include '../includes/auth.php';

$limit = 20; // Número de times por página
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$offset = ($page - 1) * $limit;

// Consulta para obter o número total de times
$total_result = $conn->query("SELECT COUNT(*) as total FROM Teams");
$total_teams = $total_result->fetch_assoc()['total'];
$total_pages = ceil($total_teams / $limit);

// Consulta para obter times com limite e offset, incluindo o nome do país
$sql = "SELECT Teams.teamID, Teams.teamName, 
        Countries.engName as countryName, 
        COUNT(pAssignments.playerID) as playerCount 
        FROM Teams 
        LEFT JOIN pAssignments ON Teams.teamID = pAssignments.teamID 
        LEFT JOIN Countries ON Teams.teamCountry = Countries.countryID 
        GROUP BY Teams.teamID, Teams.teamName, Countries.engName 
        LIMIT $limit OFFSET $offset";
$result = $conn->query($sql);

?>
<body>
<div class="container mt-5">
    <h2>Teams List</h2>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>ID</th>
                <th>Team Name</th>
                <th>Country</th>
                <th>Player Count</th>
            </tr>
        </thead>
        <tbody>
            <?php
            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    echo "<tr>";
                    echo "<td>" . $row['teamID'] . "</td>";
                    // Cria o link para a página do time com o ID do time
                    echo "<td><a href='team.php?id=" . $row['teamID'] . "' class='team-link'>" . $row['teamName'] . "</a></td>";
                    echo "<td>" . $row['countryName'] . "</td>";
                    echo "<td>" . $row['playerCount'] . "</td>";
                    echo "</tr>";
                }
            } else {
                echo "<tr><td colspan='4'>No teams found</td></tr>";
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

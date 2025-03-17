<?php
include '../includes/header.php'; // Incluir cabeçalho comum
include '../includes/auth.php';
?>

<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <?php
            // Verificar se o parâmetro de ID da liga foi passado na URL
            if (isset($_GET['id'])) {
                $league_id = $_GET['id'];

                // Consulta para obter os dados da liga
                $sql_league = "SELECT * FROM Leagues WHERE leagueID = $league_id";
                $result_league = $conn->query($sql_league);

                if ($result_league->num_rows > 0) {
                    $league = $result_league->fetch_assoc();

                    // Exibir as informações básicas da liga
                    echo "<h1>" . $league['leagueName'] . "</h1>";
                    ?>
                    
                    <p>
                        <strong>Country:</strong> <?php echo $league['countryName']; ?><br>
                        <strong>Established:</strong> <?php echo $league['established']; ?><br>
                    </p>

                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="pills-details-tab" data-toggle="pill" href="#pills-details" role="tab" aria-controls="pills-details" aria-selected="true">Details</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="pills-teams-tab" data-toggle="pill" href="#pills-teams" role="tab" aria-controls="pills-teams" aria-selected="false">Teams</a>
                        </li>
                    </ul>

                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-details" role="tabpanel" aria-labelledby="pills-details-tab">
                            <form action="update_league.php" method="post">
                                <div class="form-group">
                                    <label for="leagueName">League Name</label>
                                    <input type="text" class="form-control" id="leagueName" name="leagueName" value="<?php echo $league['leagueName']; ?>" required>
                                </div>
                                <div class="form-group">
                                    <label for="countryName">Country</label>
                                    <input type="text" class="form-control" id="countryName" name="countryName" value="<?php echo $league['countryName']; ?>" required>
                                </div>
                                <div class="form-group">
                                    <label for="established">Established</label>
                                    <input type="text" class="form-control" id="established" name="established" value="<?php echo $league['established']; ?>" required>
                                </div>
                                <input type="hidden" name="leagueID" value="<?php echo $league['leagueID']; ?>">
                                <button type="submit" class="btn btn-primary">Save</button>
                            </form>
                        </div>
                        <div class="tab-pane fade" id="pills-teams" role="tabpanel" aria-labelledby="pills-teams-tab">
                            <?php
                            // Consulta para obter os times da liga
                            $sql_teams = "SELECT Teams.teamID, Teams.teamName FROM Teams
                                          JOIN LeagueTeams ON Teams.teamID = LeagueTeams.teamID
                                          WHERE LeagueTeams.leagueID = $league_id";
                            $result_teams = $conn->query($sql_teams);

                            if ($result_teams->num_rows > 0) {
                                echo "<table class='table'>";
                                echo "<thead><tr><th>Team Name</th><th>Actions</th></tr></thead>";
                                echo "<tbody>";

                                while ($team = $result_teams->fetch_assoc()) {
                                    echo "<tr>";
                                    echo "<td>" . $team['teamName'] . "</td>";
                                    echo "<td><a href='remove_team.php?leagueID=$league_id&teamID=" . $team['teamID'] . "' class='btn btn-danger btn-sm'>Remove</a></td>";
                                    echo "</tr>";
                                }
                                echo "</tbody>";
                                echo "</table>";
                            } else {
                                echo "<p>No teams found for this league.</p>";
                            }
                            ?>
                            <form action="add_team.php" method="post">
                                <div class="form-group">
                                    <label for="teamID">Add Team</label>
                                    <select class="form-control" id="teamID" name="teamID">
                                        <?php
                                        // Consulta para obter todos os times disponíveis
                                        $sql_all_teams = "SELECT teamID, teamName FROM Teams WHERE teamID NOT IN (SELECT teamID FROM LeagueTeams WHERE leagueID = $league_id)";
                                        $result_all_teams = $conn->query($sql_all_teams);

                                        while ($team = $result_all_teams->fetch_assoc()) {
                                            echo "<option value='" . $team['teamID'] . "'>" . $team['teamName'] . "</option>";
                                        }
                                        ?>
                                    </select>
                                </div>
                                <input type="hidden" name="leagueID" value="<?php echo $league_id; ?>">
                                <button type="submit" class="btn btn-primary">Add Team</button>
                            </form>
                        </div>
                    </div>

                    <?php
                } else {
                    echo "League not found.";
                }
            } else {
                echo "League ID not provided.";
            }
            ?>
        </div>
    </div>
</div>

<?php
include '../includes/footer.php'; // Incluir rodapé comum
?>
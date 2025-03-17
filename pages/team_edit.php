<?php
include '../includes/header.php'; // Incluir cabeçalho comum
include '../includes/auth.php';
?>

<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-10">
            <?php
            // Verificar se o parâmetro de ID do time foi passado na URL
            if (isset($_GET['id'])) {
                $team_id = $_GET['id'];

                // Consulta para obter os dados do time
                $sql_team = "SELECT Teams.*, Countries.engName AS countryName FROM Teams 
                             JOIN Countries ON Teams.teamCountry = Countries.countryID 
                             WHERE Teams.teamID = $team_id";
                $result_team = $conn->query($sql_team);

                if ($result_team->num_rows > 0) {
                    $team = $result_team->fetch_assoc();

                    // Verificar se é uma seleção
                    $is_nt = $team['isNT'] == 1;
                    $team_name = $team['teamName'] . ($is_nt ? ' NT' : '');
                    $country_name = $is_nt ? '' : $team['countryName'];

                    // Construir o caminho da imagem do time usando teamID
                    $logo_path = "../assets/images/logos/teams/{$team['teamID']}.png";
                    $logo_tag = '';

                    if (file_exists($logo_path)) {
                        $logo_tag = "<img src='$logo_path' alt='{$team['teamName']}' style='max-height: 160px;' class='float-left mr-3'>";
                    }
                    // Exibir as informações básicas do time
                    echo "<div class='profile'>";
                    // Exibir a logo do time à esquerda, se existir
                    echo $logo_tag;
                    echo "<h1>" . $team_name . "</h1>";
                    ?>

                    <p>
                        <?php if (!$is_nt) { ?>
                            <strong>Country:</strong> <?php echo $country_name; ?><br>
                        <?php } ?>
                        <strong>Short Name:</strong> <?php echo $team['shortName']; ?><br>
                        <strong>PES ID:</strong> <?php echo $team['pesTeamID']; ?><br>
                        <strong>FIFA ID:</strong> <?php echo $team['tFifaID']; ?><br>
                    </p>
                    </div>

                    <div>
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="pills-basic-tab" data-toggle="pill" href="#pills-basic" role="tab" aria-controls="pills-basic" aria-selected="true">Basic</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="pills-roster-tab" data-toggle="pill" href="#pills-roster" role="tab" aria-controls="pills-roster" aria-selected="false">Roster</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="pills-banners-tab" data-toggle="pill" href="#pills-banners" role="tab" aria-controls="pills-banners" aria-selected="false">Banners</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="pills-stadium-tab" data-toggle="pill" href="#pills-stadium" role="tab" aria-controls="pills-stadium" aria-selected="false">Stadium</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="pills-rivals-tab" data-toggle="pill" href="#pills-rivals" role="tab" aria-controls="pills-rivals" aria-selected="false">Rivals</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="pills-colors-tab" data-toggle="pill" href="#pills-colors" role="tab" aria-controls="pills-colors" aria-selected="false">Colors</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="pills-coach-tab" data-toggle="pill" href="#pills-coach" role="tab" aria-controls="pills-coach" aria-selected="false">Coach</a>
                        </li>
                    </ul>

                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-basic" role="tabpanel" aria-labelledby="pills-basic-tab">
                            <form action="update_team.php" method="post">
                                <input type="hidden" name="teamID" value="<?php echo $team['teamID']; ?>">
                                <div class="form-group">
                                    <label for="teamName">Team Name</label>
                                    <input type="text" class="form-control" id="teamName" name="teamName" value="<?php echo $team['teamName']; ?>" required>
                                </div>
                                <div class="form-group">
                                    <label for="shortName">Short Name</label>
                                    <input type="text" class="form-control" id="shortName" name="shortName" value="<?php echo $team['shortName']; ?>" required>
                                </div>
                                <div class="form-group">
                                    <label for="pesTeamID">PES ID</label>
                                    <input type="number" class="form-control" id="pesTeamID" name="pesTeamID" value="<?php echo $team['pesTeamID']; ?>" required>
                                </div>
                                <div class="form-group">
                                    <label for="tFifaID">FIFA ID</label>
                                    <input type="number" class="form-control" id="tFifaID" name="tFifaID" value="<?php echo $team['tFifaID']; ?>" required>
                                </div>
                                <div class="form-group">
                                    <label for="beSoccerLink">beSoccer Link</label>
                                    <input type="text" class="form-control" id="beSoccerLink" name="beSoccerLink" value="<?php echo $team['tBeSoccerLink']; ?>" required>
                                </div>
                                <button type="submit" class="btn btn-primary">Update Team</button>
                            </form>
                        </div>
                        <div class="tab-pane fade" id="pills-roster" role="tabpanel" aria-labelledby="pills-roster-tab">
                            <?php
                            // Consulta para obter os jogadores do time
                            $sql_players = "SELECT Players.playerID, pAssignments.shirtNumber, Players.konamiPlID, Players.pFifaID, Players.pBeSoccerLink, Players.registeredPosition, Players.playerName, p21stats_latest.OVR 
                            FROM Players 
                            JOIN pAssignments 
                            ON Players.playerID = pAssignments.playerID 
                            JOIN ( 
                                SELECT playerID, OVR FROM p21stats WHERE (playerID, createTime) 
                                IN ( SELECT playerID, MAX(createTime) FROM p21stats GROUP BY playerID ) ) AS p21stats_latest 
                                ON Players.playerID = p21stats_latest.playerID WHERE pAssignments.teamID = $team_id";
                            $result_players = $conn->query($sql_players);

                            if ($result_players->num_rows > 0) {
                                echo "<table class='table'>";
                                echo "<thead><tr><th>Shirt</th><th>Konami ID</th><th>FIFA ID</th><th>BeSoccer Link</th><th>POS</th><th>Name</th><th>OVR</th></tr></thead>";
                                echo "<tbody>";

                                $position_names = [
                                    0 => 'GK',
                                    1 => 'CB',
                                    2 => 'LB',
                                    3 => 'RB',
                                    4 => 'DMF',
                                    5 => 'CMF',
                                    6 => 'LMF',
                                    7 => 'RMF',
                                    8 => 'AMF',
                                    9 => 'LWF',
                                    10 => 'RWF',
                                    11 => 'SS',
                                    12 => 'CF'
                                ];

                                while ($player = $result_players->fetch_assoc()) {
                                    echo "<tr>";
                                    echo "<td><input type='number' class='form-control' name='shirtNumber[]' value='" . $player['shirtNumber'] . "' min = '1' max= '999'></td>";
                                    echo "<td><input type='number' class='form-control' name='konamiID[]' value='" . $player['konamiPlID'] . "' min = '1' max= '200000'></td>";
                                    echo "<td><input type='number' class='form-control' name='fifaID[]' value='" . $player['pFifaID'] . "' min = '1' max= '999999'></td>";
                                    echo "<td><input type='text' class='form-control' name='beSoccerLink[]' value='" . $player['pBeSoccerLink'] . "'></td>";
                                    echo "<td><span class='position-badge position-" . strtolower($position_names[$player['registeredPosition']]) . "'>" . $position_names[$player['registeredPosition']] . "</span></td>";
                                    echo "<td><input type='text' class='form-control' name='playerName[]' value='" . $player['playerName'] . "'></td>";
                                    echo "<td>" . $player['OVR'] . "</td>";
                                    echo "</tr>";
                                }

                                echo "</tbody>";
                                echo "</table>";
                            } else {
                                echo "<p>No players found for this team.</p>";
                            }
                            ?>
                        </div>
                        <div class="tab-pane fade" id="pills-banners" role="tabpanel" aria-labelledby="pills-banners-tab">
							Banners content here.
						</div>
                        <div class="tab-pane fade" id="pills-stadium" role="tabpanel" aria-labelledby="pills-stadium-tab">Stadium content here.</div>
                        <div class="tab-pane fade" id="pills-rivals" role="tabpanel" aria-labelledby="pills-rivals-tab">Rivals content here.</div>
                        <div class="tab-pane fade" id="pills-colors" role="tabpanel" aria-labelledby="pills-colors-tab">Colors content here.</div>
                        <div class="tab-pane fade" id="pills-coach" role="tabpanel" aria-labelledby="pills-coach-tab">Coach content here.</div>
                    </div>

                    <?php
                } else {
                    echo "<p>Team not found.</p>";
                }
            } else {
                echo "<p>No team selected.</p>";
            }
            ?>
        </div>
    </div>
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
    // Obter o nome do time
    var teamNameElement = document.querySelector(".team-name");
    if (teamNameElement) {
        var teamName = teamNameElement.textContent;
        // Alterar o título da página
        document.title = teamName + " - Team Page";
    }
});
</script>

<?php
include '../includes/footer.php'; // Incluir rodapé comum
?>
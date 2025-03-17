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
					
					<script>
						document.title = 'Your new title';
					</script>
                    
                    <p>
                        <?php if (!$is_nt) { ?>
                            <strong>Country:</strong> <?php echo $country_name; ?><br>
                        <?php } ?>
                        <!--<strong>Established:</strong> <?php //echo $team['established']; ?><br>-->
                        <strong>Short Name:</strong> <?php echo $team['shortName']; ?><br>
                        <strong>PES ID:</strong> <?php echo $team['pesTeamID']; ?><br>
                        <strong>FIFA ID:</strong> <?php echo $team['tFifaID']; ?><br>
                    </p>
                    <div class="mb-3">
                        <?php 
						if (isset($_SESSION['isAdmin'])) {
							echo "<a class='btn btn-primary mb-3' href='team_edit.php?id=$team_id'><i class='fas fa-edit'></i> Edit Team</a>";
						}
						?>
                        <button class="btn btn-secondary mb-3">Export to .CSV (ejogc Editor)</button>
                        <button class="btn btn-secondary mb-3">Export *.TED (PES 2021)</button>
                        <button class="btn btn-secondary mb-">Export *.TED (PES 2020)</button>
                    </div>
                    </div>
                    
                    <div>
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="pills-roster-tab" data-toggle="pill" href="#pills-roster" role="tab" aria-controls="pills-roster" aria-selected="true">Roster</a>
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
                        <div class="tab-pane fade show active" id="pills-roster" role="tabpanel" aria-labelledby="pills-roster-tab">
                            <?php
                            // Consulta para obter os jogadores do time
                            $sql_players = "SELECT Players.playerID, pAssignments.shirtNumber, Players.konamiPlID, Players.registeredPosition, Players.playerName, p21stats_latest.OVR 
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
                                echo "<thead><tr><th>Shirt</th><th>Konami ID</th><th>POS</th><th>Name</th><th>OVR</th></tr></thead>";
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
                                    echo "<td>" . $player['shirtNumber'] . "</td>";
                                    echo "<td>" . $player['konamiPlID'] . "</td>";
                                    echo "<td><span class='position-badge position-" . strtolower($position_names[$player['registeredPosition']]) . "'>" . $position_names[$player['registeredPosition']] . "</span></td>";
                                    echo "<td><a href='player.php?id=" . $player['playerID'] . "' target='_blank'>" . $player['playerName'] . "</a></td>";
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
                            <?php
                            // Exibir banners do time
                            echo "<p>Banners content goes here.</p>";
                            ?>
                        </div>
                        <div class="tab-pane fade" id="pills-stadium" role="tabpanel" aria-labelledby="pills-stadium-tab">
                            <?php
                            // Exibir estádio do time
                            echo "<p>Stadium content goes here.</p>";
                            ?>
                        </div>
                        <div class="tab-pane fade" id="pills-rivals" role="tabpanel" aria-labelledby="pills-rivals-tab">
                            <?php
                            // Exibir rivais do time
                            echo "<p>Rivals content goes here.</p>";
                            ?>
                        </div>
                        <div class="tab-pane fade" id="pills-colors" role="tabpanel" aria-labelledby="pills-colors-tab">
                            <?php
                            // Exibir cores do time
                            if (!empty($team['color1']) && !empty($team['color2'])) {
                                $color1 = strtoupper($team['color1']);
                                $color2 = strtoupper($team['color2']);
                                $rgb1 = implode(",", array_map('hexdec', str_split(ltrim($team['color1'], '#'), 2)));
                                $rgb2 = implode(",", array_map('hexdec', str_split(ltrim($team['color2'], '#'), 2)));
                                echo "<p><strong>Color 1:</strong> <span style='background-color: " . $color1 . "; padding: 5px;'>" . $color1 . " | RGB (" . $rgb1 . ")</span></p>";
                                echo "<p><strong>Color 2:</strong> <span style='background-color: " . $color2 . "; padding: 5px;'>" . $color2 . " | RGB (" . $rgb2 . ")</span></p>";
                            } else {
                                echo "<p>No colors defined for this team.</p>";
                            }
                            ?>
                        </div>
                        <div class="tab-pane fade" id="pills-coach" role="tabpanel" aria-labelledby="pills-coach-tab">
                            <?php
                            // Exibir rivais do time
                            echo "<p>Coaches assignments coming soon.</p>";
                            ?>
                        </div>
                    </div>
                </div>
                <?php
                } else {
                    echo "<p>Team not found.</p>";
                }
            } else {
                echo "<p>No team ID specified.</p>";
            }
            ?>
        </div>
    </div>
</div>



<?php
include '../includes/footer.php'; // Incluir rodapé comum
?>

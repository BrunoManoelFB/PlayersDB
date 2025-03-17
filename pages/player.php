<?php
include '../includes/header.php'; // Incluir cabeçalho comum
//include '../includes/auth.php';
?>

<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-8">
			<?php
			// Função para obter a classe do badge
			function getBadgeClass($value) {
				// Certificar que o valor é um número
				$value = (int)$value;

				if ($value >= 40 && $value <= 69) {
					return 'stat-40';
				} elseif ($value >= 70 && $value <= 79) {
					return 'stat-70';
				} elseif ($value >= 80 && $value <= 89) {
					return 'stat-80';
				} elseif ($value >= 90 && $value <= 99) {
					return 'stat-90';
				} else {
					return '';
				}
			}

            // Verificar se o parâmetro de ID do jogador foi passado na URL
            if (isset($_GET['id'])) {
                $player_id = $_GET['id'];
				
                // Consulta para obter os dados do jogador
                $sql_player = "SELECT * FROM Players WHERE playerID = $player_id";
                $result_player = $conn->query($sql_player);

                if ($result_player->num_rows > 0) {
                    $player = $result_player->fetch_assoc();
					
					// Consulta para obter o OVR do jogador
					$sql_stats = "SELECT * FROM p21stats WHERE playerID = $player_id";
					$result_stats = $conn->query($sql_stats);

					if ($result_stats->num_rows > 0) {
						$stats = $result_stats->fetch_assoc();
						$ovr_value = $stats['OVR'];
						$badge_class = getBadgeClass($ovr_value);
					}

                    // Construir o caminho da imagem do jogador usando konamiPlID (se existir)
                    $image_path = "https://api.efootballdb.com/assets/2022/players/{$player['konamiPlID']}_.png.webp";
					$headers = @get_headers($image_path);

					if ($headers && strpos($headers[0], '200') !== false) {
						$image_tag = "<img src='$image_path' alt='{$player['playerName']}' style='max-height: 160px;' class='float-left mr-3'>";
					} else {
						$image_tag = "";
						//$image_tag = "<a href='$image_path'>Imagem não disponível</a>";
					}

                    // Consulta para obter o código alpha-2 do país do jogador
                    $nationality_code = $player['nationality1'];
                    $sql_country = "SELECT alpha2, engName FROM Countries WHERE countryID = '$nationality_code'"; // Ajuste conforme a estrutura real da sua tabela

                    $result_country = $conn->query($sql_country);

                    if ($result_country->num_rows > 0) {
                        $country = $result_country->fetch_assoc();
                        $country_code = $country['alpha2'];
                        $country_name = $country['engName'];

                        // Construir o caminho da bandeira usando o código alpha-2
                        $flag_path = "../assets/images/flags/{$country_code}.svg";
                        $flag_tag = '';

                        if (file_exists($flag_path)) {
                            $flag_tag = "<img src='$flag_path' alt='{$country_name}' title='{$country_name}' width='21' height='16'> ";
                        }

                        // Exibir as características do jogador
                        echo "<div class='profile'>";
                        // Exibir a imagem do jogador à esquerda, se existir
                        echo $image_tag;
                        
						echo "<h1>";
						if ($result_stats->num_rows > 0) {
							echo "<span class='stat-badge $badge_class' style='width: 55px; height: 50px; font-size: 35px;'>$ovr_value</span> ";
						}
						echo "" . $player['playerName'] . "</h1>";

                        // Exibir posições
                        $positions = json_decode($player['positions'], true);
                        $position_badges = [];

                        if (!empty($positions)) {
                            // Posição registrada
                            $registered_position = $position_names[$player['registeredPosition']];
                            $position_badges[] = "<span class='position-badge position-" . strtolower($registered_position) . "'>$registered_position</span>";

                            // Outras posições
                            foreach ($positions as $index => $aptitude) {
                                if (($aptitude == 1 || $aptitude == 2) && $index != $player['registeredPosition']) {
                                    $position_name = $position_names[$index];
                                    $position_badges[] = "<span class='position-badge position-" . strtolower($position_name) . "'>$position_name</span>";
                                }
                            }

                            echo "<p>" . implode(' ', $position_badges) . "<br>";
                        }

                        echo "{$flag_tag} "  . $country['engName'] . " <br>";
                        echo $player['age'] . " y.o. ";

                        // Exibir a idade apenas se a data de nascimento estiver presente
                        if (!empty($player['birthdate'])) {
                            echo "(" . date('M d, Y', strtotime($player['birthdate'])) . ") ";
                        }

                        echo number_format($player['height'], 0, '.', '') . "cm / " . number_format($player['weight'], 0, '.', '') . "kg";

                        // Exibir o pé forte
                        echo " / " . ($player['strongFoot'] == 0 ? 'Left' : 'Right') . " foot";

                        echo "";

                        // Exibir clubes e seleções (usando pAssignments)
                        $sql_assignments = "SELECT Teams.teamID, Teams.teamName, Teams.isNT FROM pAssignments 
                                            JOIN Teams ON pAssignments.teamID = Teams.teamID 
                                            WHERE pAssignments.playerID = $player_id";
                        $result_assignments = $conn->query($sql_assignments);

                        if ($result_assignments->num_rows > 0) {
                            $clubs = [];
                            $national_teams = [];
                            while ($assignment = $result_assignments->fetch_assoc()) {
                                if ($assignment['isNT'] == 0) {
									$team_name_link = "<a href='team.php?id={$assignment['teamID']}'>{$assignment['teamName']}</a>";
                                    $clubs[] = $team_name_link;
                                } else if ($assignment['isNT'] == 1) {
									$team_name_link = "<a href='team.php?id={$assignment['teamID']}'>{$assignment['teamName']} NT</a>";
                                    $national_teams[] = $team_name_link;
                                }
                            }
							//echo "<br><strong>Teams:</strong> ";
                            
							
                            if (!empty($national_teams) AND !empty($clubs)) {
                                echo "<br><strong>Teams:</strong> ";
                            } else {
                                echo "<br><strong>Team:</strong> ";
							}
							if (!empty($clubs)) {
                                echo "" . implode(', ', $clubs) . "";
                            }
                            if (!empty($national_teams) AND !empty($clubs)) {
                                echo ", ";
                            }
                            if (!empty($national_teams)) {
                                echo "" . implode(', ', $national_teams) . "";
                            }
                        }
						
						//echo "</p>";

                        // Exibir os IDs (PES ID e FIFA ID) e link do BeSoccer
                        if (!empty($player['konamiPlID'])) {
                            echo "<br><strong>PES ID:</strong> " . $player['konamiPlID'] . " ";
                        }
                        if (!empty($player['pFifaID'])) {
                            echo "<strong>FIFA ID:</strong> " . $player['pFifaID'] . " (<a href='https://sofifa.com/player/" . $player['pFifaID'] . "'/>SoFIFA</a>) ";
                        }

                        // Exibir o link no BeSoccer
                        if (!empty($player['pBeSoccerLink'])) {
                            echo "<strong>BeSoccer Link:</strong> <a href='" . $player['pBeSoccerLink'] . "' target='_blank'>" . $player['pBeSoccerLink'] . "</a>";
                        }
						
						echo "</p>";
						?>
						
						<?php 
						if (isset($_SESSION['isAdmin'])) {
							echo "<a href='player_edit.php?id=$player_id' class='btn btn-success mb-3'><i class='fas fa-edit'></i> Edit Player</a>";
						}
						?>
						
						<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
							<li class="nav-item">
								<a class="nav-link active" id="basic-info-tab" data-toggle="pill" href="#basic-info" role="tab" aria-controls="basic-info" aria-selected="true">Basic</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" id="pills-stats-tab" data-toggle="pill" href="#pills-stats" role="tab" aria-controls="pills-stats" aria-selected="true">Stats</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" id="pills-skills-tab" data-toggle="pill" href="#pills-skills" role="tab" aria-controls="pills-skills" aria-selected="false">Playing Style & Skills</a>
							</li>
							
							<li class="nav-item">
								<a class="nav-link" id="playingstyles-tab" data-toggle="pill" href="#playingstyles" role="tab" aria-controls="playingstyles" aria-selected="false">Playing Styles</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" id="pills-appear-tab" data-toggle="pill" href="#pills-appear" role="tab" aria-controls="pills-appear" aria-selected="false">Appearance</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" id="pills-move-tab" data-toggle="pill" href="#pills-move" role="tab" aria-controls="pills-move" aria-selected="false">Movement</a>
							</li>
						</ul>
						<div class="tab-content" id="pills-tabContent">
						<?php
							echo "<div class='tab-content' id='playerTabsContent'>
                                <div class='tab-pane fade show active' id='basic-info' role='tabpanel' aria-labelledby='basic-info-tab'>
									<strong>Player Name:</strong><br>{$player['playerName']}<br>";
									
									echo "<strong>Full Name:</strong><br>";
									if (isset($player['fullName'])){
										echo "{$player['fullName']}";
									} else{
										echo "-";
									}
									echo "<br>";
									
								echo "<strong>Shirt Name:</strong><br>{$player['clubShirtName']}<br>
									<strong>NT Shirt Name:</strong><br>{$player['nationalShirtName']}<br>
									<strong>Nationality:</strong><br>{$country['engName']}<br>
									<strong>Age:</strong><br>{$player['age']}<br>
									<strong>Height:</strong><br>{$player['height']}<br>
									<strong>Weight:</strong><br>{$player['weight']}<br>
									
									<strong>Strong Foot:</strong><br>";
									if (isset($player['strongFoot'])){
										if ($player['strongFoot'] == 0){
											echo "Right";
										} else{
											echo "Left";
										}
									} else{
										echo "-";
									}
									echo "<br>";
									
									echo "<strong>Strong Hand:</strong><br>";
									if (isset($player['strongHand'])){
										if ($player['strongHand'] == 0){
											echo "Right";
										} else{
											echo "Left";
										}
									} else{
										echo "-";
									}
									echo "<br>";
									
									echo "<strong>Star Rating:</strong><br>";
									if (isset($player['starRating'])){
										echo "{$player['starRating']}";
									} else{
										echo "-";
									}
									echo "<br>";
								echo "</div>";
							?>
							<div class="tab-pane fade show" id="pills-stats" role="tabpanel" aria-labelledby="pills-stats-tab">
								<?php
								// Consulta para obter as estatísticas do jogador
								$sql_stats = "SELECT * FROM p21stats WHERE playerID = $player_id";
								$result_stats = $conn->query($sql_stats);

								if ($result_stats->num_rows > 0) {
									$stats = $result_stats->fetch_assoc();

									// Decodificar JSON
									$stats_data = json_decode($stats['stats'], true);

									// Verificar se a chave 'stats' existe
									if (isset($stats_data) && is_array($stats_data)) {
										// Exibir estatísticas
										echo '<table style="border-collapse: collapse; width: 100%;">';
										foreach ($stat_names as $index => $stat_name) {
											$stat_value = isset($stats_data[$index]) ? $stats_data[$index] : 0;
											$badge_class = getBadgeClass($stat_value);
											echo "<tr><td style='padding: 8px; text-align:left; width:30%; heigth:32px;'>$stat_name: </td><td style='padding: 8px; heigth:32px;'><span class='stat-badge $badge_class'>$stat_value</span></td></tr>";
										}
										echo '</table>';
									} else {
										echo "Error: Player statistics are not available.";
									}
								} else {
									echo "Error: No stat records found for the player.";
								}
								?>
							</div>
							
							<div class="tab-pane fade" id="pills-skills" role="tabpanel" aria-labelledby="pills-skills-tab">
								<?php
								// Consulta para obter as habilidades do jogador
								$sql_stats = "SELECT * FROM p21stats WHERE playerID = $player_id";
								$result_stats = $conn->query($sql_stats);

								if ($result_stats->num_rows > 0) {
									$stats = $result_stats->fetch_assoc();
									
									// Decodificar JSON
									$skills_data = json_decode($stats['skills'], true);

									// Verificar se a chave 'stats' existe
									if (isset($skills_data) && is_array($skills_data)) {
										$skills_found = false;
										echo "<strong>Skills:</strong><br>";
										// Exibir estatísticas
										foreach ($skill_names as $index => $skill_name) {
											if ($skills_data[$index] == 1) {
												echo "$skill_name<br>";
												$skills_found = true;
											}
										}
										
										// Se nenhuma skill for encontrada, exibir mensagem
										if (!$skills_found) {
											echo "<p>No skill assigned for this player.</p>";
										}
									} else {
										echo "<p>Skills not found for this player.</p>";
									}
								} else {
									echo "<p>Skills not found for this player.</p>";
								}
							echo "</div>";
							echo "<div class='tab-pane fade' id='playingstyles' role='tabpanel' aria-labelledby='playingstyles-tab'>";
									// Consulta para obter as habilidades do jogador
									$sql_stats = "SELECT * FROM p21stats WHERE playerID = $player_id";
									$result_stats = $conn->query($sql_stats);

									if ($result_stats->num_rows > 0) {
										$stats = $result_stats->fetch_assoc();
										
										// Decodificar JSON
										$comstyles_data = json_decode($stats['comStyles'], true);
										

										// Verificar se a chave 'stats' existe
										if (isset($comstyles_data) && is_array($comstyles_data)) {
											$comstyles_found = false;
											$pstyles_found = false;
											
											echo "<strong>Playing Style:</strong><br>";
											foreach ($pStyles_names as $index => $pStyle_name) {
												if ($stats['pStyle'] == $index){
													echo "$pStyle_name<br>";
												}
											}
											
											echo "<br>";
											
											echo "<strong>COM Playing Styles:</strong><br>";
											// Exibir estatísticas
											foreach ($comStyles_names as $index => $comstyle_name) {
												if ($comstyles_data[$index] == 1) {
													echo "$comstyle_name<br>";
													$comstyles_found = true;
												}
											}
											
											// Se nenhuma comstyle for encontrada, exibir mensagem
											if (!$comstyles_found) {
												echo "<p>No COM Playing Style assigned for this player.</p>";
											}
											
											// Se nenhuma comstyle for encontrada, exibir mensagem
											if (!$pstyles_found) {
												//echo "<p>No Playing Style assigned for this player.</p>";
											}
										} else {
											echo "<p>Playing Style not found for this player.</p>";
										}
									} else {
										echo "<p>Playing Style not found for this player.</p>";
										echo "<strong>Playing Styles:</strong><br>";
										echo "<div class='form-group'>
											<select class='form-control' id='callname' name='callname'>";
										foreach ($pStyles_names as $index => $pStyle_name) {
											echo "<option value='{$stats['pStyle']}'";
											if ($index == 0){
												echo " selected";
											}
											echo ">{$pStyle_name}</option>";
										}
										// Feche o <select>
										echo "</select>
											</div>";
										
										echo "<strong>COM Playing Styles:</strong><br>";
										// Exibir estatísticas
										foreach ($comStyles_names as $index => $comstyle_name) {
											echo "<div class='form-check'><input class='form-check-input' type='checkbox' id='comstyle-$index'";
											echo ">$comstyle_name</label></div>";
										}
									}
                                echo "</div>";
								?>

							<div class="tab-pane fade" id="pills-appear" role="tabpanel" aria-labelledby="pills-appear-tab">
								<?php
								// Consulta para obter a aparência mais recente do jogador com detalhes do usuário
								$sql_face = "
									SELECT pa.*, u.username 
									FROM pAppearances pa 
									JOIN Users u ON pa.createdBy = u.userID 
									WHERE pa.playerID = $player_id 
									ORDER BY pa.createTime DESC 
									LIMIT 1";
								$result_faces = $conn->query($sql_face);

								// Exibir informações de aparência
								if ($result_faces->num_rows > 0) {
									$faces = $result_faces->fetch_assoc();

									// Decodificar JSON
									$faces_data = json_decode($faces['appearances'], true);

									// Verificar se a chave 'appearances' existe
									if (isset($faces_data) && is_array($faces_data)) {
										
										// Exibir estatísticas
										echo "<table>";
										foreach ($appearances_names as $index => $face_name) {
											$face_value = isset($faces_data[$index]) ? $faces_data[$index] : 0;
											echo "<tr><td style='padding: 8px;'><strong>$face_name:</strong></td><td style='padding: 8px; text-align:center;'>$face_value</td></tr>";
										}
										echo "</table><br>";
										
										echo "<strong>Face added by:</strong> " . $faces['username'] . "<br>";
										echo "<strong>Created at:</strong> " . $faces['createTime'] . "<br>";
										echo "<strong>Info:</strong> " . $faces['apinfo'] . "<br><br>";
									} else {
										echo "Error: Player Appearance are not available.";
									}
								} else {
									echo "Error: No face records found for the player.";
								}
								?>
							</div>

							<div class="tab-pane fade" id="pills-move" role="tabpanel" aria-labelledby="pills-move-tab">
								<?php
								// Consulta para obter a aparência mais recente do jogador com detalhes do usuário
								$sql_face = "
									SELECT pa.*, u.username 
									FROM pAppearances pa 
									JOIN Users u ON pa.createdBy = u.userID 
									WHERE pa.playerID = $player_id 
									ORDER BY pa.createTime DESC 
									LIMIT 1";
								$result_faces = $conn->query($sql_face);

								// Exibir informações de aparência
								if ($result_faces->num_rows > 0) {
									$moves = $result_faces->fetch_assoc();

									// Decodificar JSON
									$moves_data = json_decode($moves['movement'], true);

									// Verificar se a chave 'appearances' existe
									if (isset($moves_data) && is_array($moves_data)) {
										
										// Exibir estatísticas
										echo "<table>";
										foreach ($movement_names as $index => $move_name) {
											$move_value = isset($moves_data[$index]) ? $moves_data[$index] : 0;
											echo "<tr><td style='padding: 8px;'><strong>$move_name:</strong></td><td style='padding: 8px; text-align:center;'>$move_value</td></tr>";
										}
										echo "</table><br>";
										
										echo "<strong>Face added by:</strong> " . $faces['username'] . "<br>";
										echo "<strong>Created at:</strong> " . $faces['createTime'] . "<br>";
										echo "<strong>Info:</strong> " . $faces['apinfo'] . "<br><br>";
									} else {
										echo "Error: Player movement are not available.";
									}
								} else {
									echo "Error: No movement records found for the player.";
								}
								?>
							</div>
						</div>
						<?php
                    } else {
                        echo "Country not found for this player.";
                    }
                    echo "</div>";
                } else {
                    echo "Player not found.";
                }
            } else {
                echo "Player ID not provided.";
            }
            ?>
        </div>
    </div>
</div>

<?php
include '../includes/footer.php'; // Incluir rodapé comum
echo "<head><title>{$player['playerID']} | EditemosDB</title></head>";
?>
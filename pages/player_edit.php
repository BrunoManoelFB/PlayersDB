<?php
include '../includes/header.php'; // Incluir cabeçalho comum
include '../includes/auth_ADM.php';
include '../includes/auth.php';
?>

<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <?php
            // Definir o mapeamento de números de posição para nomes
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
			
			$allpositions = [
				'GK', 'CB', 'LB', 'RB', 'DMF', 'CMF', 'LMF', 'RMF', 'AMF', 'LWF', 'RWF', 'SS', 'CF'
			];
			
            // Definir os nomes das estatísticas
            $stat_names = [
                "Offensive Awareness", "Ball Control", "Dribbling", "Tight Possession", "Low Pass", "Lofted Pass", 
                "Finishing", "Heading", "Place Kicking", "Curl", "Speed", "Acceleration", "Kicking Power", 
                "Jump", "Physical Contact", "Balance", "Stamina", "Defensive Awareness", "Ball Winning", 
                "Aggression", "GK Awareness", "GK Catching", "GK Clearing", "GK Reflexes", "GK Reach", 
                "Weak Foot Usage", "Weak Foot Accuracy", "Form", "Injury Resistance"
            ];
			
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
			
            // Definir os nomes das estatísticas
            $movement_names = [
                "Celebration 1", "Celebration 2", "Dribbling Hunching", "Dribbling Arm Move", "Running Hunching", "Running Arm Movement", "Corner Kicks", "Free Kicks", "Penalty Kick", "Dribble Motion"
            ];
			
			// Definir os nomes das skills
            $skill_names = [
                "Scissors Feint", "Double Touch", "Flip Flap", "Marseille Turn", "Sombrero", "Cross Over Turn", 
                "Cut Behind And Turn", "Scotch Move", "Step On Skill Control", "Heading Special", "Long Range Drive", 
                "Chip Shot Control", "Long Range Shot", "Knuckle Shot", "Dipping Shots", "Rising Shots", 
                "Acrobatic Finishing", "Heel Trick", "First Time Shot", "One Touch Pass", "Through Passing", 
                "Weighted Pass", "Pinpoint Crossing", "Outside Curler", "Rabona", "No Look Pass", "Low Lofted Pass", 
                "GK Low Punt", "GK High Punt", "Long Throw", "GK Long Throw", "Penalty Specialist", "GK Penalty Saver", 
                "Gamesmanship", "Man Marking", "TrackBack", "Interception", "Acrobatic Clear", "Captaincy", 
                "Super Sub", "Fighting Spirit"
            ];
			
			$appearances_names = [
				"Neck Length", "Neck Size", "Shoulder Height", "Shoulder Width", "Chest Measurement", "Waist Size", "Arm Size", "Thigh Size", "Calf Size", "Leg Length", "Arm Length", "Skin Colour",
				"Head Length", "Head Width", "Head Depth", "Face Height", "Face Size", "Upper Eyelid Type", "Bottom Eyelid Type", "Eye Height", "Horizontal Eye Position", "Iris Colour", "Pupil Size",
				"Upper Eyelid Ht. (Inner)", "Upper Eyelid Wd. (Inner)", "Upper Eyelid Ht. (Outer)", "Upper Eyelid Wd. (Outer)", "Inner Eye Height", "Inner Eye Position", "Eye Corner Height",
				"Outer Eye Position", "Bottom Eyelid Height", "Eye Depth", "Forehead", "Eyebrow Type", "Eyebrow Thickness", "Eyebrow Style", "Eyebrow Density", "Eyebrow Colour R", "Eyebrow Colour G",
				"Eyebrow Colour B", "Inner Eyebrow Height", "Brow Width", "Outer Eyebrow Height", "Temple Width", "Eyebrow Depth", "Nose Type", "Laughter Lines", "Nose Height", "Nostril Width",
				"Nose Width", "Nose Tip Depth", "Nose Depth", "Upper Lip Type", "Lower Lip Type", "Mouth Position", "Lip Size", "Lip Width", "Mouth Corner Height", "Mouth Depth", "Facial Hair Type",
				"Facial Hair Colour R", "Facial Hair Colour G", "Facial Hair Colour B", "Thickness", "Cheek Type", "Neck Line Type", "Cheekbones", "Chin Height", "Chin Width", "Jaw Height", "Jawline",
				"Chin Depth", "Ear Length", "Ear Width", "Ear Angle", "Overall-Style", "Overall-Length", "Overall-Wave Level", "Overall-Hair Variation", "Front-Style", "Front-Parted",
				"Front-Hairline", "Front-Forehead Width", "Side/Back-Style", "Side/Back-Cropped", "Hair Colour R", "Hair Colour G", "Hair Colour B", "Accessory Colour", "Hair Colour", "Accessories",
				"Wrist taping", "Wrist Tape Colour 1", "Wrist Tape Colour 2", "Ankle Taping", "Player Gloves", "Colour", "Under shorts", "Sleeves", "Shirt tail", "Sock Length", "Long-Sleeved Inners",
				"Value Ap1", "Value Ap2", "Value Ap3", "Value Ap4", "Value Ap5", "Value Ap6", "Value Ap7", "Value Ap8", "Value Ap9", "Value Ap10", "Value Ap11", "Value Ap12", "Value Ap13", "Value Ap14",
				"Value Ap15", "Value Ap16", "Value Ap17", "Value Ap18", "Value Ap19", "Id Face", "Boots", "Gloves"
			];
			
			$pStyles_names = [
				"None", "Goal Poacher", "Dummy Runner", "Fox in the Box", "Target Man", "Creative Playmaker", "Prolific Winger", "Roaming Flank", "Cross Specialist", "Classic No. 10", "Hole Player", "Box-to-Box",
				"The Destroyer", "Orchestrator", "Anchor Man", "Build Up", "Offensive Full-back", "Full-back Finisher", "Defensive Full-back", "Extra Frontman", "Offensive Goalkeeper", "Defensive Goalkeeper"
			];
			
			$comStyles_names = ["Trickster", "Mazing Run", "Speeding Bullet", "Incisive Run", "Long Ball Expert", "Early Cross", "Long Ranger"];
			
			//$comStyles_names = [
            //    0 => 'Trickster',
            //    1 => 'Mazing Run',
            //    2 => 'Speeding Bullet',
            //    3 => 'Incisive Run',
            //    4 => 'Long Ball Expert',
            //    5 => 'Early Cross',
            //    6 => 'Long Ranger'
            //];

            // Verificar se o parâmetro de ID do jogador foi passado na URL
            if (isset($_GET['id'])) {
                $player_id = $_GET['id'];

                // Consulta para obter os dados do jogador
                $sql_player = "SELECT * FROM Players WHERE playerID = $player_id";
                $result_player = $conn->query($sql_player);

                // Consulta para obter os países no DB
                $sql_countries = "SELECT * FROM Countries";
                $result_countries = $conn->query($sql_countries);
				$countries = $result_countries->fetch_assoc();

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
						
						//Botões de importar Stats
						if (isset($_SESSION['isAdmin'])) {
							echo "<a href='#' class='btn btn-success mb-3'><i class='fas fa-edit'></i> Import Stats from eFootball</a>";
						}

						if (isset($_SESSION['isAdmin'])) {
							echo "<a href='#' class='btn btn-success mb-3'><i class='fas fa-edit'></i> Import Stats from EA FC 25</a>";
						}

                        // Conteúdo de navegação para edição
                        echo "<form action='update_player.php' method='POST'>
								<input type='hidden' name='playerID' value='{$player['playerID']}'>
								
								<ul class='nav nav-pills' id='playerTabs' role='tablist'>
                                <li class='nav-item'>
                                    <a class='nav-link active' id='basic-info-tab' data-toggle='pill' href='#basic-info' role='tab' aria-controls='basic-info' aria-selected='true'>Basic</a>
                                </li>
                                <li class='nav-item'>
                                    <a class='nav-link' id='positions-tab' data-toggle='pill' href='#positions' role='tab' aria-controls='positions' aria-selected='false'>Positions</a>
                                </li>
                                <li class='nav-item'>
                                    <a class='nav-link' id='stats-tab' data-toggle='pill' href='#stats' role='tab' aria-controls='stats' aria-selected='false'>Stats</a>
                                </li>
                                <li class='nav-item'>
                                    <a class='nav-link' id='skills-tab' data-toggle='pill' href='#skills' role='tab' aria-controls='skills' aria-selected='false'>Skills</a>
                                </li>
                                <li class='nav-item'>
                                    <a class='nav-link' id='playingstyles-tab' data-toggle='pill' href='#playingstyles' role='tab' aria-controls='playingstyles' aria-selected='false'>Playing Styles</a>
                                </li>
                                <li class='nav-item'>
                                    <a class='nav-link' id='appearance-tab' data-toggle='pill' href='#appearance' role='tab' aria-controls='appearance' aria-selected='false'>Appearance</a>
                                </li>
                                <li class='nav-item'>
                                    <a class='nav-link' id='movement-tab' data-toggle='pill' href='#movement' role='tab' aria-controls='movement' aria-selected='false'>Movement</a>
                                </li>
                                <li class='nav-item'>
                                    <a class='nav-link' id='other-tab' data-toggle='pill' href='#other' role='tab' aria-controls='other' aria-selected='false'>Other</a>
                                </li>
                            </ul><br>";

                        echo "<div class='tab-content' id='playerTabsContent'>
                                <div class='tab-pane fade show active' id='basic-info' role='tabpanel' aria-labelledby='basic-info-tab'>
									<div class='form-group'>
										<label for='playerName'>Player Name</label>
										<input type='text' class='form-control' id='playerName' name='playerName' value='{$player['playerName']}' required>
									</div>
									<div class='form-group'>
										<label for='fullname'>Full Name</label>
										<input type='text' class='form-control' id='fullname' name='fullname' value='{$player['fullName']}'>
									</div>
									<div class='form-group'>
										<label for='clubshirt'>Shirt Name</label>
										<input type='text' class='form-control' id='clubshirt' name='clubshirt' value='{$player['clubShirtName']}' required>
									</div>
									<div class='form-group'>
										<label for='ntshirt'>National Shirt Name</label>
										<input type='text' class='form-control' id='ntshirt' name='ntshirt' value='{$player['nationalShirtName']}'>
									</div>";
									// Consulta para obter os países no DB
									$sql_countries = "SELECT * FROM Countries ORDER BY engName";
									$result_countries = $conn->query($sql_countries);

									// Verifique se há resultados
									if ($result_countries->num_rows > 0) {
										// Comece a criação do <select>
										echo "<div class='form-group'>
												<label for='nationality'>Nationality</label>
												<select class='form-control' id='nationality' name='nationality'>";
										
										// Adicione a opção "Not Set"
										$selected_not_set = ($player['nationality1'] == 260) ? "selected" : "";
										echo "<option value='260' $selected_not_set>Not Set</option>";
										
										// Itere sobre cada país e crie uma opção no <select>
										while ($country = $result_countries->fetch_assoc()) {
											// Verifique se este país é o selecionado
											$selected = ($country['countryID'] == $player['nationality1']) ? "selected" : "";
											echo "<option value='{$country['countryID']}' $selected>{$country['engName']}</option>";
										}

										// Feche o <select>
										echo "</select>
											</div>";
									} else {
										// Caso não haja países no banco de dados
										echo "No countries found in the database.";
									}

									echo" <div class='form-group'>
										<label for='age'>Age</label>
										<input type='number' class='form-control' id='age' name='age' value='{$player['age']}' min='15' max='50' required>
									</div>
									<div class='form-group'>
										<label for='height'>Height (cm)</label>
										<input type='number' class='form-control' id='height' name='height' value='{$player['height']}' min='155' max='210' required>
									</div>
									<div class='form-group'>
										<label for='weight'>Weight (kg)</label>
										<input type='number' class='form-control' id='weight' name='weight' value='{$player['weight']}' min='30' max='129' required>
									</div>
									<div class='form-group'>
										<label for='foot'>Strong Foot</label>
										  <select id='foot' class='form-control'>";
											if ($player['strongFoot'] == 0){
												echo "<option value='0' selected>Right</option><option value='1'>Left</option>";
											} else{
												echo "<option value='0'>Right</option><option value='1' selected>Left</option>";
											}
										  echo "</select>
									</div>
									<div class='form-group'>
										<label for='hand'>Strong Hand</label>
										  <select id='hand' class='form-control'>";
											if ($player['strongHand'] == 0){
												echo "<option value='0' selected>Right</option><option value='1'>Left</option>";
											} else{
												echo "<option value='0'>Right</option><option value='1' selected>Left</option>";
											}
										  echo "</select>
									</div>
									<div class='form-group'>
										<label for='starrating'>Star Rating</label>
										<input type='number' class='form-control' id='starrating' name='starrating' ";
										if (isset($player['starRating']) || $player['starRating'] == ""){
											echo "value='1' ";
										} else{
											echo "value='{$player['starRating']}' ";
										}
										
										echo "min='1' max='8' required>
									</div>
								</div>";
                                echo "<div class='tab-pane fade' id='positions' role='tabpanel' aria-labelledby='positions-tab'>
									<div class='form-group'>";
									echo "<strong>Registered Position:</strong><br>";
											echo "<div class='form-group'>
												<select class='form-control' id='regpos' name='regpos'>";
											foreach ($position_names as $index => $pos_name) {
												echo "<option value='{$index}'";
												if ($player['registeredPosition'] == $index){
													echo " selected";
												}
												echo ">{$pos_name}</option>";
											}
											// Feche o <select>
											echo "</select>
												</div>";
										echo "<table class='table table-borderless'>
										  <thead>
											<tr>
											  <th style='width:40px; text-align:center'>POS</th>
											  <th>Aptitude</th>
											</tr>
										  </thead>
										  <tbody>";
											if (!empty($player['positions'])) {

												foreach ($allpositions as $index => $position) {
													$position_class = strtolower($position);
													$value = isset($positions[$index]) ? $positions[$index] : 0; // Use o valor do $positions ou 0 se não estiver definido
													echo "<tr>
															<td><span class='position-badge position-$position_class'>$position</span></td>
															<td><input style='width: 4rem;' min='0' max='2' type='number' id='pos-$index' class='form-control' value='$value'/></td>
														  </tr>";
												}
											}
										  echo "</tbody>
										</table>
									</div>
                                </div>
                                <div class='tab-pane fade' id='stats' role='tabpanel' aria-labelledby='stats-tab'>";
								// Consulta para obter as estatísticas do jogador
								$sql_stats = "SELECT * FROM p21stats WHERE playerID = $player_id";
								$result_stats = $conn->query($sql_stats);

								if ($result_stats->num_rows > 0) {
									$stats = $result_stats->fetch_assoc();

									// Decodificar JSON
									$stats_data = json_decode($stats['stats'], true);
									
									// Mapear os intervalos de valores específicos para certos stats
									$stat_ranges = [
										"Weak Foot Usage" => ['min' => 1, 'max' => 4],
										"Weak Foot Accuracy" => ['min' => 1, 'max' => 4],
										"Form" => ['min' => 2, 'max' => 8],
										"Injury Resistance" => ['min' => 1, 'max' => 3]
									];

									// Verificar se a chave 'stats' existe
									if (isset($stats_data) && is_array($stats_data)) {
										// Exibir estatísticas
										echo '<table style="border-collapse: collapse; width: 100%;">';
										foreach ($stat_names as $index => $stat_name) {
											$stat_value = isset($stats_data[$index]) ? $stats_data[$index] : 0;
											$badge_class = getBadgeClass($stat_value);

											// Definir os valores min e max com base no stat atual
											$min_value = 40;
											$max_value = 99;
											if (array_key_exists($stat_name, $stat_ranges)) {
												$min_value = $stat_ranges[$stat_name]['min'];
												$max_value = $stat_ranges[$stat_name]['max'];
											}

											echo "<tr>
													<td style='padding: 8px; text-align:left; width:30%; height:32px;'>$stat_name: </td>
													<td style='padding: 8px; height:32px;'>
														<input style='width: 4rem;' min='$min_value' max='$max_value' type='number' id='stat-$index' class='form-control' value='$stat_value'/>
													</td>
												  </tr>";
										}
										echo "<tr>
													<td style='padding: 8px; text-align:left; width:30%; height:32px;'>Playing Attitude: </td>
													<td style='padding: 8px; height:32px;'>
														<input style='width: 4rem;' min='1' max='3' type='number' id='attitude' class='form-control' value='{$stats['attitude']}' required/>
													</td>
												  </tr>";
										
										echo '</table>';
									} else {
										echo "Error: Player statistics are not available.";
									}
								} else {
									echo "Error: No stat records found for the player.";
								}
								echo "</div>";
                                echo "<div class='tab-pane fade' id='skills' role='tabpanel' aria-labelledby='skills-tab'>";
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
												echo "<div class='form-check'><input class='form-check-input' type='checkbox' id='skill-$index'";
												if ($skills_data[$index] == 1) {
													echo " checked";
													$skills_found = true;
												}
												echo ">$skill_name</label></div>";
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
											
											echo "<strong>Playing Styles:</strong><br>";
											echo "<div class='form-group'>
												<select class='form-control' id='pstyle' name='pstyle'>";
											foreach ($pStyles_names as $index => $pStyle_name) {
												echo "<option value='{$stats['pStyle']}'";
												if ($stats['pStyle'] == $index){
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
												if ($comstyles_data[$index] == 1) {
													echo " checked";
													$comstyles_found = true;
												}
												echo ">$comstyle_name</label></div>";
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
											<select class='form-control' id='pstyle-$index' name='pstyle'>";
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
                                echo "<div class='tab-pane fade' id='appearance' role='tabpanel' aria-labelledby='appearance-tab'>";
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
												echo "<tr>
														<td style='padding: 8px; text-align:left; width:30%; height:32px;'>$face_name: </td>
														<td style='padding: 8px; height:32px;'>
															<input style='width: 4rem;' type='number' id='face-$index' class='form-control' value='$face_value'/>
														</td>
													  </tr>";
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
                                echo "</div>
                                <div class='tab-pane fade' id='movement' role='tabpanel' aria-labelledby='movement-tab'>";
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
												echo "<tr>
														<td style='padding: 8px; text-align:left; width:30%; height:32px;'>$move_name: </td>
														<td style='padding: 8px; height:32px;'>
															<input style='width: 4rem;' type='number' id='move-$index' class='form-control' value='$move_value'/>
														</td>
													  </tr>";
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
                                echo "</div>
                                <div class='tab-pane fade' id='other' role='tabpanel' aria-labelledby='other-tab'>
									<div class='form-group'>
										<label for='playerName'>PES ID</label>
										<input type='number' class='form-control' id='playerName' name='playerName' value='{$player['konamiPlID']}'>
									</div>
									<div class='form-group'>
										<label for='playerName'>FIFA ID</label>
										<input type='number' class='form-control' id='playerName' name='playerName' value='{$player['pFifaID']}' required>
									</div>
									<div class='form-group'>
										<label for='playerName'>BeSoccer Link</label>
										<input type='text' class='form-control' id='playerName' name='playerName' value='{$player['pBeSoccerLink']}'>
									</div>";
									
									// Consulta para obter os callnames no DB
									$sql_calls = "SELECT * FROM pCommentaries WHERE callname != '' ORDER BY callname ASC";
									$result_calls = $conn->query($sql_calls);

									// Verifique se há resultados
									if ($result_calls->num_rows > 0) {
										// Comece a criação do <select>
										echo "<div class='form-group'>
												<label for='callname'>Callname</label>
												<select class='form-control' id='callname' name='callname'>";
												
										// Itere sobre cada resultado e crie uma opção no <select>
										while ($call = $result_calls->fetch_assoc()) {
											// Verifique se este callname é o selecionado
											$selected = ($call['licensedID'] == $player['commentaryID']) ? "selected" : "";
											echo "<option value='{$call['licensedID']}' $selected>{$call['callname']}</option>";
										}

										// Feche o <select>
										echo "</select>
											  </div>";
									} else {
										// Caso não haja callnames no banco de dados
										echo "No Commentaries found in the database.";
									}

									
									echo "</div>
                            </div><br>
							<ul class='nav nav-pills' id='playerTabs' role='tablist' >
								<li class='nav-item'>
                                    <button type='submit' class='btn btn-success'><i class='fas fa-save'></i> Save Changes</button>
                                </li> 
                                <li class='nav-item'>
                                    <a class='btn btn-danger' href='player.php?id={$player_id}'><i class='fas fa-times'></i> Discard Changes</a>
                                </li>
                            </ul></form>
                            ";
							
                        echo "</div>"; // Fechar a div .profile
                    } else {
                        echo "<p>Country not found.</p>";
                    }
                } else {
                    echo "<p>Player not found.</p>";
                }
            } else {
                echo "<p>No player ID provided.</p>";
            }
            ?>
        </div>
    </div>
</div>

<script>
	// Função para importar dados do jogador via PESDB
</script>

<?php
include '../includes/footer.php'; // Incluir rodapé comum
?>

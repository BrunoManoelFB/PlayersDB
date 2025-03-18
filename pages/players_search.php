<?php
include '../includes/header.php'; // Incluir cabeçalho comum
//include '../includes/auth_ADM.php';
//include '../includes/auth.php';
?>

<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <?php
            // Definir o mapeamento de números de posição para nomes
            $position_names = [
                0 => 'GK', 1 => 'CB', 2 => 'LB', 3 => 'RB', 4 => 'DMF', 5 => 'CMF',
                6 => 'LMF', 7 => 'RMF', 8 => 'AMF', 9 => 'LWF', 10 => 'RWF', 11 => 'SS', 12 => 'CF'
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
			?>
			
			<div class="form-group">
				<label for="inputID">Insert Player ID to be converted:</label>
				<input type="number" class="form-control" id="inputID" min="1" required onkeydown="if(event.key === 'Enter') { convertID(); }">			</div>
			<button type="button" class="btn btn-primary" onclick="convertID()">Convert</button>

			<div id="result"></div> <!-- Div para mostrar o resultado da conversão -->
			
			
			
			<script>
			function convertID() {
				var id = document.getElementById('inputID').value;
				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
						document.getElementById('result').innerHTML = this.responseText;
					}
				};
				xhttp.open("POST", "convert_id.php", true);
				xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				xhttp.send("id=" + id);
			}
			</script>

<?php
include '../includes/footer.php'; // Incluir rodapé comum
?>
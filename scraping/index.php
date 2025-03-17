<?php
include '../includes/header.php'; // Incluir cabeçalho comum


// Verificar si el archivo "pesdb_players.json" existe
$archivoDatos = 'pesdb_players.json';
$mensajeArchivo = '';

if (file_exists($archivoDatos)) {
    // Obtener la fecha y hora de modificación del archivo
    $fechaModificacion = date("d/m/Y H:i:s", filemtime($archivoDatos));
    $mensajeArchivo = "<p>Último update: <strong>$fechaModificacion</strong>.</p>";
}

?>
	<div class="container mt-5">
		<div class="row justify-content-center">
			<div class="col-12 text-center">
				<h2>Scraping de Jugadores en PESDB</h2>
			</div>
			<div class="col-12 text-center">
				<p class="mb-3"><?php echo $mensajeArchivo; ?></p>
			</div>
			<div class="col-12 text-center">
				<form action="pesdb_scraping.php" method="POST">
					<button type="submit" class="btn btn-primary">Iniciar Nueva Extracción</button>
				</form>
			</div>
		</div>
	</div>



<?php
include '../includes/footer.php'; // Incluir rodapé comum
?>
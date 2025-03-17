<?php include('../includes/header.php'); ?>

<style>
    body {
        background-image: url('../assets/images/bg-index1.jpg');
        background-size: cover; /* Para cobrir todo o espaço disponível */
        background-position: center; /* Centralizar a imagem */
        height: 100vh; /* Garante que o background cobre toda a altura da viewport */
    }

    .container {
        /* Estilos para centralizar o conteúdo */
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        color: #fff; /* Cor do texto para melhor contraste com o fundo */
    }

    .container h2 {
        font-size: 3rem; /* Tamanho do texto */
    }

    .btn-primary {
        margin-top: 20px; /* Espaçamento do botão em relação ao texto */
    }
</style>

<?php
if (isset($_SESSION['userID'])) {
    // Usuário está logado, mostrar mensagem de boas-vindas
    if (isset($_SESSION['username'])) {
        $username = $_SESSION['username'];
        echo "<div class='container'>
            <h2>Welcome back, $username</h2>
        </div>";
	}
} else {
		// Usuário não está logado, mostrar botões de login e registro
		echo "<div class='container'>
			<h2>Welcome to EditemosDB</h2>
			<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#loginModal'>
				Login / Register
			</button>
		</div>";
	}

include('../includes/footer.php');
?>
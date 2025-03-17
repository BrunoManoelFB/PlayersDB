<?php
include '../includes/db_connection.php';
session_start(); // Iniciar a sessão

// Verificar se o formulário de login foi submetido
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Receber dados do formulário
    $email = $_POST['loginEmail'];
    $password = $_POST['loginPassword'];

    // Consultar no banco de dados
    $query = "SELECT * FROM users WHERE userEmail = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Usuário encontrado, verificar senha
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            // Senha correta, iniciar sessão e redirecionar
            $_SESSION['userID'] = $user['userID']; // Definir sessão com o ID do usuário
            if ($user['adminRights'] == 1){
				$_SESSION['isAdmin'] = $user['adminRights']; // Definir sessão com o ID do usuário
				$isAdmin = 1;
			}
			$_SESSION['username'] = $user['userName'];
            header('Location: ' . $_SERVER['HTTP_REFERER']); // Redirecionar para a página de origem
            exit();
        } else {
            // Senha incorreta
            echo 'Invalid password';
        }
    } else {
        // Usuário não encontrado
        echo 'User not found';
    }
} else {
    // Se o método de requisição não for POST, retornar erro
    echo 'Invalid request';
}
?>

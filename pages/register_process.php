<?php
include '../includes/db_connection.php';

// Verificar se o formulário de registro foi submetido
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Receber dados do formulário
    $username = $_POST['registerUsername'];
    $email = $_POST['registerEmail'];
    $password = $_POST['registerPassword'];
    $confirmPassword = $_POST['registerConfirmPassword'];

    // Verificar se as senhas coincidem
    if ($password !== $confirmPassword) {
        echo 'Passwords do not match';
        exit;
    }

    // Verificar se o username já está em uso
    $query = "SELECT * FROM users WHERE username = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        echo 'Username already exists';
        exit;
    }

    // Criptografar a senha antes de salvar no banco de dados
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Inserir novo usuário no banco de dados
    $insertQuery = "INSERT INTO users (userName, userEmail, password) VALUES (?, ?, ?)";
    $insertStmt = $conn->prepare($insertQuery);
    $insertStmt->bind_param("sss", $username, $email, $hashedPassword);

    if ($insertStmt->execute()) {
        echo 'Registration successful';
        // Redirecionar para a página de login, por exemplo
        header('Location: index.php');
        exit;
    } else {
        echo 'Registration failed';
    }
} else {
    // Se o método de requisição não for POST, retornar erro
    echo 'Invalid request';
}
?>

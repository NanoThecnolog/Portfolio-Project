<?php
// Conexão com o banco de dados
$servername = "localhost";
$username = "u647134516_webadmin";
$password = "V1q@&rZpS?";
$dbname = "u647134516_webemconstruct";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}

$registro_sucesso = false;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recebe o email e a senha do formulário
    $email = $_POST["logemail"];
    $senha = $_POST["logpass"];

    // Consulta o banco de dados para encontrar o usuário com o email fornecido
    $sql = "SELECT id, senha FROM usuarios WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $senha_hash = $row["senha"];

        // Verifica se a senha fornecida corresponde à senha no banco de dados
        if (password_verify($senha, $senha_hash)) {
            
            header("Location: https://webemconstrucao.com.br");
        } else {
            echo "Senha incorreta. Tente novamente.";
        }
    } else {
        echo "Email não encontrado. Registre-se antes de fazer o login.";
    }
}

// Fechar a conexão com o banco de dados
$conn->close();
?>

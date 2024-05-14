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

// Inicializar a variável de sucesso
$registro_sucesso = false;

// Tratamento dos dados enviados via formulário
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $senha = password_hash($_POST["senha"], PASSWORD_DEFAULT); // Recomendado para segurança

    // Insere os dados na tabela 'usuarios'
    $sql = "INSERT INTO usuarios (nome, email, senha) VALUES ('$nome', '$email', '$senha')";
    
    if ($conn->query($sql) === TRUE) {
        $registro_sucesso = true;
    }
}

// Fechar a conexão com o banco de dados
$conn->close();
?>

<!DOCTYPE html>
<html>
<head>
    <title>Resultado do Cadastro</title>
</head>
<body>
    <?php
    if ($registro_sucesso) {
        // Exibir uma caixa de diálogo de sucesso
        echo '<script>
            if (confirm("Cadastro realizado com sucesso. Clique em OK para ser redirecionado.")) {
                window.location.href = "https://webemconstrucao.com.br/paginas/Login/index.html";
            }
        </script>';
    }
    ?>

    <h1>Seu conteúdo HTML aqui</h1>
</body>
</html>

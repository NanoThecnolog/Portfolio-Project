<?php
session_start();

include("../php/conexao.php");


?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css">
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

  <link rel="icon" type="image/x-icon" href="../img/favicon_io/favicon.ico">
  <link rel="shortcut icon" type="image/x-icon" href="../img/favicon_io/favicon.ico">


  <title>Login - D&D</title>
  <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script><link rel="stylesheet" href="./style.css">

</head>
<body>
    <section>
        <form method="post">
            <h1>Login</h1>
            <div class="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="email" name="email" required>
                <label for="">Email</label>
            </div>
            <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="password" name="password" required>
                <label for="">Senha</label>
            </div>
            <div class="forget">                
              <p><a href="#">Esqueci minha senha</a></p>
            </div>
            <button>Log in</button>
            <div class="register">
                <p>Não tem conta? <a href="registrar.php">Crie uma agora!</a></p>
            </div>
        </form>
    </section>
</body>
</html>
<?php
function exibirMensagemErro($mensagem) {
    echo '<script>';
    echo 'Swal.fire({';
    echo 'title: "Erro ao tentar fazer o login!",';
    echo 'text: "' . $mensagem . '",';
    echo 'icon: "error",';
    echo 'confirmButtonText: "OK",';
    echo '});';
    echo '</script>';
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $email = $_POST["email"];
    $senha = $_POST["password"];
    
    $sql = "SELECT id, senha, nome, email FROM usuarios WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $senha2 = $row["senha"];
        
        if (password_verify ($senha, $senha2)) {            
			
			$_SESSION['userid'] = $row['id'];
            $_SESSION['username'] = $row['nome'];
            header("Location: ../index.php");
			exit();
        } else {
            exibirMensagemErro("Senha incorreta. Tenta de novo aí!");
            
        }
    } else {
        exibirMensagemErro("Email não encontrado. Tenta de novo aí!");
        
    }
    
}
$conn->close();

?>

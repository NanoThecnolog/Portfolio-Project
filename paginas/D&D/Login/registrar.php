<?php

include("../php/conexao.php");

$registro_sucesso = false;


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $senha = password_hash($_POST["password"], PASSWORD_DEFAULT);


    $sql = "INSERT INTO usuarios (nome, email, senha) VALUES ('$nome', '$email', '$senha')";
    
    if ($conn->query($sql) === TRUE) {
        $registro_sucesso = true;		
    }
}


$conn->close();
?>


<!doctype html>
<html lang="pt-br">
	<head>
	<meta charset="UTF-8">  	
	<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>	
	<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

	<link rel="icon" type="image/x-icon" href="../img/favicon_io/favicon.ico">
	<link rel="shortcut icon" type="image/x-icon" href="../img/favicon_io/favicon.ico">

		
		
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css">


<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>



		<link rel="stylesheet" href="./style.css">

		<title>Criar login - D&D</title>
	</head>

	<body>

		 <section>
			<form method="post">
				<h1>Criar Login</h1>
				<div class="inputbox">
					<ion-icon name="contact"></ion-icon>
					<input type="name" name="nome" required>
					<label for="">Nome</label>
				</div>
				<div class="inputbox">
					<ion-icon name="mail-outline"></ion-icon>
					<input type="email" name="email" required>
					<label for="">Email</label>
				</div>
				<div class="inputbox">
					<ion-icon name="lock-closed-outline"></ion-icon>
					<input type="password" name="password" id="password" required>
					<label for="">Senha</label>
				</div>
				<div class="inputbox">
					<ion-icon name="checkmark-circle" id="checkBox"></ion-icon>
					<input type="password" name="confirm-password" id="confirm" required>
					<label for="">Confirmar Senha</label>
				</div>
				<div class="forget">				
				</div>
				<button>Criar</button>
				<a href="login.php"><button class="invisivel" id="sucesso"></button></a>
			</form>

		</section>
		<script>
			
			const sucesso = <?php echo ($registro_sucesso ? 'true' : 'false'); ?>;
			const botão = document.getElementById("sucesso");
			const senha1 = document.getElementById("password");
			const senha2 = document.getElementById("confirm");
			const check = document.getElementById("checkBox");
			
			senha1.addEventListener("keyup", function() {
				if (senha1.value === senha2.value && senha1.value !== "") {
					check.classList.remove("nao-confirmado");
					check.classList.add("confirmado");
				} else {
					check.classList.remove("confirmado");
					check.classList.add("nao-confirmado");
				}
			});
			senha2.addEventListener("keyup", function() {
				if (senha1.value === senha2.value && senha1.value !== "") {
					check.classList.remove("nao-confirmado");
					check.classList.add("confirmado");
				} else {
					check.classList.remove("confirmado");
					check.classList.add("nao-confirmado");
				}
				if (senha1.value === "" || senha2.value === "") {
					check.classList.remove("nao-confirmado");
				}
			});
			


			if (sucesso) {				
				botão.innerHTML = "Fazer Login";
				botão.classList.remove("invisivel");
				Swal.fire({
					title: "Login Criado com sucesso =D!",
					icon: "success",
					confirmButtonText: "OK",
				}).then((result) => {
					
					if (result.isConfirmed) {
						window.location.href = "login.php";
					}
				});
			} else {
				botão.classList.add("invisivel");
			}

		</script>
	</body>
</html>
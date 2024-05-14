<?php
session_start();
include("php/conexao.php");

if (!isset($_SESSION['userid'])) {
    header("location: Login/login.php");
  exit();
}
$idUsuario = $_SESSION['userid'];
$userNome = $_SESSION['username'];


$timeout = 60 * 60;

if (isset($_SESSION['timeout'])) {
    
    $duration = time() - (int)$_SESSION['timeout'];
    if ($duration > $timeout) {
        
        session_destroy();
        header("location: Login/login.php"); 
        exit();
    }
}
$_SESSION['timeout'] = time();

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css">
  	<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <link rel="stylesheet" href="/css/estilo.css">
    <link rel="icon" type="image/x-icon" href="/img/favicon_io/favicon.ico">
    <link rel="shortcut icon" type="image/x-icon" href="img/favicon_io/favicon.ico">

    <title>Perfil do Usuário</title>
</head>
<body>
    <header>
    <nav class="navbar navbar-expand-md navbar-light fixed-top">
                <div class="container">								  
                    <a href="index.php" class="navbar-brand">					  
                        <img class="imagemLogo" src="img/img icone.png" alt="Logo">		  
                  </a>
				  <p class="usuario">Bem Vindo, <strong><?php echo $userNome?></strong></p>							  
                    <button class="navbar-toggler bg-white ml-4" data-toggle="collapse" data-target="#nav-principal">
                        <span class="navbar-toggler-icon">
                        </span>
                    </button>					  
                    <div class="collapse text-nowrap navbar-collapse" id="nav-principal">
                        <ul class="navbar-nav ml-auto ul-custom">
                            <li class="nav-item"><button class="nav-link" data-nav-link><a href="index.php">Início</a></button></li>
                            <li class="nav-item"><button class="nav-link" data-nav-link></button></li>
                            <li class="nav-item"><button class="nav-link" data-nav-link></button></li>                            
                            <li class="nav-item"><button class="nav-link" data-nav-link></button></li>
							<li class="nav-item"><button class="nav-link" onclick="logout()">Sair</button></li>
                        </ul>
                    </div>			  
              </div>
            </nav>        
    </header>
    <main><!--nome, email, troca de email, troca de senha, info sobre personagens criados, imagem de perfil-->
        <div class="row">
            <div class="col-md-4">
                <section id="sidebar">           
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="img-perfil">
                                    <img src="" alt="Avatar">
                                </div>
                                <div class="infos">
                                    <h4>Nome:</h4>
                                    <p id="nome">Nome do usuario</p>
                                    <h4>Email:</h4>
                                    <p id="email">email@email.com</p>
                                    <h4>Personagens Criados</h4>
                                    <p id="person-criados">4/5</p>
                                    <button>Alterar dados</button>
                                </div>
                            </div>
                        </div>
                    </div>            
                </section>
            </div>
            <div class="col-md-8">
                conteúdo geral dos personagens? não sei ainda.
            </div>
        </div>
        

    </main>








    <script src="/js/main.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
</body>
</html>
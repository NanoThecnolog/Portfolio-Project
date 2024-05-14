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
if(isset($_SESSION['userid'])) {
	$query = "SELECT * FROM personagens WHERE id_usuario = ?";
	$stmt = mysqli_prepare($conn, $query);
	mysqli_stmt_bind_param($stmt, "i", $_SESSION['userid']);
	mysqli_stmt_execute($stmt);
	$resultado = mysqli_stmt_get_result($stmt);
	if (!$resultado) {
		echo ("Erro na consulta: " . mysqli_error($conn));
	} else {
		$dadosPersonagens = array();
	
		while ($linha = mysqli_fetch_assoc($resultado)) {
			$dadosPersonagens[] = $linha;
		}
	
		$jsonDadosPersonagens = json_encode($dadosPersonagens);
	}
	mysqli_stmt_close($stmt);

} else {
	session_destroy();
	header("location: Login/login.php");
	exit();
}
$_SESSION['timeout'] = time();

?>

<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">       

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css">
  		<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
		
		
		<link rel="stylesheet" href="./css/estilo.css">
		<link rel="stylesheet" href="./css/dice.css">
		<link rel="icon" type="image/x-icon" href="img/favicon_io/favicon.ico">
		<link rel="shortcut icon" type="image/x-icon" href="img/favicon_io/favicon.ico">
		
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

        <title>Ficha D&D</title>
    </head>
    <body>
		
        <header class="mb-5">
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
                            <li class="nav-item"><button class="nav-link ativo" data-nav-link>Início</button></li>
							<li class="nav-item"><button class="nav-link"><a href="perfil-usuario.php">Perfil</a></button></li>
							<li class="nav-item"><button class="nav-link"><a onclick="logout()" href="">Sair</a></button></li>
                        </ul>
                    </div>			  
              </div>
            </nav>

        </header>
        <main>
			<article data-page="início">
				<section class="inicio">
					<div class="container">
						<h2>Personagens</h2>
					</div>
					<div class="row">
							<div class="col-md-12">								
								<div id="personagens">									
									<div class="row">
										<div class="col-lg-2 card-personagem"></div>
										<div class="col-lg-2 card-personagem"></div>
										<div class="col-lg-2 card-personagem"></div>
										<div class="col-lg-2 card-personagem"></div>
										<div class="col-lg-2 card-personagem"></div>
										<script>
											const dadosPersonagens = <?php echo $jsonDadosPersonagens; ?>;
										</script>
									</div>
									
								</div>
								
							</div>
							
							
							
							</div>
						</div>
						<div class="modal" id="modal">
							<div class="modal-content">
								<span class="close-btn" id="closeModalBtn">&times;</span>
								<form action="php/cria-personagem.php" method="post" enctype="multipart/form-data" id="modalForm">
									<div class="form-group">
										<label for="nome">Nome do Personagem:</label>
										<input type="text" placeholder="Nome + sobrenome" class="form-control" id="nome" name="nome" required>
									</div>
									<div class="form-group">
										<label for="titulo">Titulo:</label>
										<input type="text" placeholder="Se tiver" class="form-control" id="titulo" name="titulo">
									</div>
									<div class="form-group">
										<label for="raca">Raça:</label>
										<select name="raca" id="raca">
											<option value="nada selecionado">Selecione Uma Raça</option>
											<option value="Anão da Montanha">Anão da Montanha</option>
											<option value="Anão da Colina">Anão da Colina</option>
											<option value="Alto Elfo">Alto Elfo</option>
											<option value="Elfo da Floresta">Elfo da Floresta</option>
											<option value="Elfo Negro">Elfo Negro(Drow)</option>
											<option value="Halfling Pés Leves">Halfling Pés Leves</option>
											<option value="Halfling Robusto">Halfling Robusto</option>
											<option value="Humano">Humano</option>
											<option value="Gnomo da Floresta">Gnomo da Floresta</option>
											<option value="Gnomo das Rochas">Gnomo das Rochas</option>
											<option value="Meio-Elfo">Meio-Elfo</option>
											<option value="Meio-Orc">Meio-Orc</option>
											<option value="Draconato">Draconato</option>
											<option value="Tiefling">Tiefling</option>										
										</select>
										<p id="descricao-raca"></p>
									</div>
									<div class="form-group">
										<label for="classe">Classe:</label>
										<select name="classe" id="classe">
											<option value="nada selecionado">Selecione Uma Classe</option>
											<option value="Barbaro">Bárbaro</option>
											<option value="Bardo">Bardo</option>
											<option value="Bruxo">Bruxo</option>
											<option value="Clerigo">Clérigo</option>
											<option value="Druida">Druida</option>
											<option value="Feiticeiro">Feiticeiro</option>
											<option value="Guerreiro">Guerreiro</option>
											<option value="Ladino">Ladino</option>
											<option value="Mago">Mago</option>
											<option value="Monge">Monge</option>
											<option value="Paladino">Paladino</option>
											<option value="Patrulheiro">Patrulheiro</option>										
										</select>
										<p id="descricao-classe"></p>
									</div>
									<div class="form-group">
										<label for="antecedente">Antecedente:</label>
										<input type="text" placeholder="Informe seu Antecedente do jogo, não o criminal..." class="form-control" id="antecedente" name="antecedente">
									</div>
									<div class="form-group">
										<label for="historia">História do Personagem:</label>
										<textarea name="historia" id="historia" cols="30" rows="3" class="form-control" placeholder="Escreva a história do personagem"></textarea>
									</div>
									<div class="form-group">
										<label for="img">Envie sua imagem ou cole o link da imagem:</label>
										<input type="text" placeholder="ex: https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.einerd.com.br%2Fwp-content%2Fuploads%2F2014%2F12%2F002.jpg&f=1&nofb=1&ipt=f4521fe57943f83b5dbbf7a5e0bbbb8e7200781f6d30e8375a33b62c55ef2e4c&ipo=images" class="form-control" id="img" name="img">										
										<label class="uploadFile mt-1" for="imgFile">
											<div class="icon">
												<svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
											</div>
											<div class="text">
												<span>Escolha sua imagem</span>
											</div>
											<input type="file" id="imgFile" name="imgFile" accept="image/*" class="form-control-file">
										</label>

										<p>Acesse o site duckduckgo.com ou o google.com, pesquisar por imagens, clique com o botão direito na imagem selecionada, clique em <strong>Abrir imagem em uma nova guia</strong>. Na nova guia, copie a URL da guia e cole aqui.</p>
									</div>
									<div class="form-group">
										<label for="status">Status do Personagem:</label>
										<input type="text" placeholder="con" id="con" class="con" name="con" required>
										<input type="text" placeholder="for" id="for" class="for" name="for" required>
										<input type="text" placeholder="des" id="des" class="des" name="des" required>
										<input type="text" placeholder="int" id="int" class="int" name="int" required>
										<input type="text" placeholder="sab" id="sab" class="sab" name="sab" required>
										<input type="text" placeholder="car" id="car" class="car" name="car" required>
									</div>
									<div class="form-group">
										<label for="nivel">Nível do Personagem:</label>
										<input type="text" placeholder="ex: 20" id="nivel" class="nivel" name="nivel" required>
									</div>
									<div class="form-group">
										<label for="riqueza">Riqueza:</label>
										<input type="text" placeholder="ex: 80po ou 0 se n tiver" id="riqueza" class="riqueza" name="riqueza" required>
									</div>
									<div class="form-group">
										<label for="vida">Pontos de Vida:</label>
										<input type="text" placeholder="Pontos de vida totais" id="vida" class="vida" name="vida" required>
									</div>
									<div class="form-group">
										<label for="exp">Experiencia Atual do Personagem</label>
										<input type="text" placeholder="0 para nivel 1" id="exp" class="exp" name="exp">
									</div>																
									<button type="submit" class="btn botao-form" name="cadastrar">Cadastrar Personagem</button>
								</form>
							</div>
						</div>
				</section>				
			
			</article>					
			<article data-page="personagem" class="disable">
				<section class="ficha ficha-personagem">
					<div class="container mt-5">
						<div class="text-center">
							<h2>Visão Geral do Personagem</h2>
						</div>
						<div class="row d-flex text-center justify-content-center align-items-center" id="jogador">
							<div class="col-md-6">
								<img id="imagemPersonagem" src="" alt="imagem do personagem">
							</div>
							<div class="col-md-6 dadosPersonagem">
								<h3>Básico do Personagem</h3>
								<div class="row text-center">
									<div class="col-md-4">
										<h5>Nome:</h5>
										<p id="nomeJogador"></p>
										<h5>Raça:</h5>
										<p id="racaJogador"></p>
										<h5>Classe:</h5>
										<p id="classeJogador"></p>
										</div>


									<div class="col-md-4">
										<h5>Nivel:</h5>
										<input type="text" id="valorLevel" class="invisivel" onKeyPress="verificarTecla(event)"><p id="confirmLevel"></p>
										<p id="levelJogador"></p>
										<h5><i class="fi fi-ss-heart"></i>HP:</h5>
										<p id="hpJogador"></p>
										<div class="barra-vida text-center">
											<div class="vida-atual"></div>							
										</div>										
									</div>
									<div class="col-md-4">
										<div id="info2"></div>
									</div>
								</div>
							</div>
							
						</div>					
					<div class="atributos glass">
						<div class="row text-center mt-5 mb-5" id="atributos">
							<div class="col-md-12 atrib">
								<h3>Atributos</h3>

							</div>
							<div class="col-md-3 bg-danger">
								<p id="atributocon"></p>
								<p id="atributofor"></p>
								<p id="atributoint"></p>
								<p id="atributosab"></p>
								<p id="atributodes"></p>
								<p id="atributocar"></p>
							</div>
							<div class="col-md-3">
								<p>outros atributos</p>
								<p>outros atributos</p>
								<p>outros atributos</p>
								<p>outros atributos</p>

							</div>
							<div class="col-md-3">
								outros atributos

							</div>
							<div class="col-md-3">
								outros atributos

							</div>
							
						</div>
					</div>
					<div class="container">
					    <div class="row">
							<div class="col-md-6">
								<h5>História do personagem</h5>
								<p id="historiaPerson"></p>
								<p id="lerMais">Mostrar mais</p>
							</div>
							<div class="col-md-4"></div>
							<div class="col-md-4"></div>
						</div>

					</div>
					<div class="container">						

					</div>


					
					<div class="container mt-5 text-center">
						<div class="row">
							<div class="col-md-12">
								<h3>Rolagem de Dados</h3>
								<div class="results no-modifier">
									<div class="rolls"></div>
									<span class="modifier"></span> 
									<span class="withModifier with-modifier"></span>
									<span class="sum"></span>
								</div>


								<div class="die-buttons">
									<button href="#" class="dieButton die-button" type="4"><img src="http://dnd.brianknappdeveloper.com/img/ui/icons/d4.png" alt="" /></button>
									<button href="#" class="dieButton die-button" type="6"><img src="http://dnd.brianknappdeveloper.com/img/ui/icons/d6.png" alt="" /></button>
									<button href="#" class="dieButton die-button" type="8"><img src="http://dnd.brianknappdeveloper.com/img/ui/icons/d8.png" alt="" /></button>
									<button href="#" class="dieButton die-button" type="10"><img src="http://dnd.brianknappdeveloper.com/img/ui/icons/d10.png" alt="" /></button>
									<button href="#" class="dieButton die-button" type="12"><img src="http://dnd.brianknappdeveloper.com/img/ui/icons/d12.png" alt="" /></button>
									<button href="#" class="dieButton die-button" type="20"><img src="http://dnd.brianknappdeveloper.com/img/ui/icons/d20.png" alt="" /></button>
									<button href="#" class="dieButton die-button" type="100"><img src="http://dnd.brianknappdeveloper.com/img/ui/icons/d100.png" alt="" /></button>
									<button href="#" class="dieButtonClear die-button">Apagar</button>
								</div>

								<div class="modifiers">
									<h4>Modificadores:</h4>
									<label class="none"><input type="radio" name="modifier" class="none" value ="0" checked /><span>0</span></label>
									<label><input type="radio" name="modifier" value ="1" /><span>+1</span></label>
									<label><input type="radio" name="modifier" value ="2" /><span>+2</span></label>
									<label><input type="radio" name="modifier" value ="3" /><span>+3</span></label>
									<label><input type="radio" name="modifier" value ="4" /><span>+4</span></label>
									<label><input type="radio" name="modifier" value ="5" /><span>+5</span></label>
									<label><input type="radio" name="modifier" value ="6" /><span>+6</span></label>
									<label><input type="radio" name="modifier" value ="7" /><span>+7</span></label>
									<label><input type="radio" name="modifier" value ="8" /><span>+8</span></label>
									<label><input type="radio" name="modifier" value ="9" /><span>+9</span></label>
									<label><input type="radio" name="modifier" value ="10" /><span>+10</span></label>
									<label><input type="radio" name="modifier" value ="11" /><span>+11</span></label>
									<label><input type="radio" name="modifier" value ="12" /><span>+12</span></label>
									<label><input type="radio" name="modifier" value ="13" /><span>+13</span></label>
									<label><input type="radio" name="modifier" value ="14" /><span>+14</span></label>
									<label><input type="radio" name="modifier" value ="15" /><span>+15</span></label>
									<label><input type="radio" name="modifier" value ="16" /><span>+16</span></label>
									<label><input type="radio" name="modifier" value ="17" /><span>+17</span></label>
									<label><input type="radio" name="modifier" value ="18" /><span>+18</span></label>
									<label><input type="radio" name="modifier" value ="19" /><span>+19</span></label>
									<label><input type="radio" name="modifier" value ="20" /><span>+20</span></label>
								</div>
							</div>
						
						</div>
					</div>
					</div>

				</section>
			</article>

        </main>
		
        
		<script src="./js/main.js"></script>
		<script src="./js/dice.js"></script>
		

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

    </body>

</html>
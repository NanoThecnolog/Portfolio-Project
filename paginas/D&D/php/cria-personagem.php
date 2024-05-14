<?php
include("conexao.php");
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

$idUsuario = $_SESSION['userid'];
$nome = $_POST['nome'];
$titulo = $_POST['titulo'];
$raca = $_POST['raca'];
$classe = $_POST['classe'];
$antecedente = $_POST['antecedente'];
$historia = $_POST['historia'];
$con = $_POST['con'];
$for = $_POST['for'];
$des = $_POST['des'];
$int = $_POST['int'];
$sab = $_POST['sab'];
$car = $_POST['car'];
$nivel = $_POST['nivel'];
$riqueza = $_POST['riqueza'];
$vida = $_POST['vida'];
$exp = $_POST['exp'];
$arquivo = "início do código";

if ($nivel < 1) {
    $nivel = 1;  
}
if ($exp < 0) {
    $exp = 0;
}

if (isset($_POST['img'])) {
    if ($_POST['img'] === '') {
        if (isset($_FILES['imgFile']) && !empty($_FILES['imgFile']['name'])) {
            $pastaImg = "../img/";
            $caminhoImg = $pastaImg . basename($_FILES["imgFile"]["name"]);                
                if ($_FILES["imgFile"]["error"] > 0) {
                    error.log( "Erro: " . $_FILES["imgFile"]["error"]);
                } else {
                    if (move_uploaded_file($_FILES["imgFile"]["tmp_name"], $caminhoImg)) {
                        $arquivo = $caminhoImg;
                        } else {            
                        $arquivo = "Nenhum arquivo enviado";                        
                        }        
                }       
        } else {
            $arquivo = "Nenhum arquivo enviado";
        }        
    } else {
        $img = $_POST['img'];
        $arquivo = "If da imagem";
    }    
} else {
    $arquivo = "Nada enviado";
}


$sql = "INSERT INTO personagens (id_usuario, nome, titulo, raca, classe, antecedente, historia, img, imgFile, `con`, `for`, `des`, `int`, sab, car, nivel, riqueza, vida, exp) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn ->prepare($sql);
$stmt -> bind_param("sssssssssiiiiiiisii", $idUsuario, $nome, $titulo, $raca, $classe, $antecedente, $historia, $img, $arquivo, $con, $for, $des, $int, $sab, $car, $nivel, $riqueza, $vida, $exp);

if ($stmt->execute()) {
    echo json_encode(['success' => true, 'arquivo' => $arquivo]);    
} else {
    echo json_encode(['success' => false, 'error' => $stmt->error]);
}



?>
<?php
session_start();

include("conexao.php");

if (!isset($_SESSION['userid'])) {    
    header("Location: ../Login/login.php");
    exit();
}
$id = $_GET['id'];
$stmt = $conn->prepare("SELECT imgFile FROM personagens WHERE id = ?");
$stmt->bind_param("i", $id);
$stmt->execute();

$result = $stmt->get_result();
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $caminhoDoArquivo = $row["imgFile"];
    if (file_exists($caminhoDoArquivo)) {
        if (unlink($caminhoDoArquivo)) {
            $response['deleted'] = 'Arquivo Deletado!';
        } else {
            $response['error'] = 'Erro ao deletar o arquivo.';
        }        
    } else {
        $response['error'] = 'Arquivo não encontrado.';
    }
}

$stmt = $conn->prepare("DELETE FROM personagens WHERE id = ?");
$stmt->bind_param("i", $id);


if ($stmt->execute()) {
    $response['success'] = true;
} else {
    $response['success'] = false;
    $response['error'] = $conn->error;
    
}
echo json_encode($response);

$conn->close();
?>
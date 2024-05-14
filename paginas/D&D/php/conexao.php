<?php
$servername = "localhost";
$username = "u647134516_rpg_mesa";
$password = "s~jVh9^?C5/";
$dbname = "u647134516_db_rpg_mesa";

// Conexão ao banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificação da conexão
if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}

?>
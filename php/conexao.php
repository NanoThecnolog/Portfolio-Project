<?php
$servername = "localhost";
$username = "u647134516_db_portfolio";
$password = "Gu6r/]FaWO|";
$dbname = "u647134516_db_portfolio";

// Conexão ao banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificação da conexão
if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}



?>
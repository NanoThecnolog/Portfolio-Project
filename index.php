<?php

function detectarIdioma() {
    $idiomaArmazenado = $_COOKIE['idiomaUsuario'];
    if ($idiomaArmazenado) {
        return strtolower($idiomaArmazenado);
    }

    $idiomaUsuario = strtolower($_SERVER['HTTP_ACCEPT_LANGUAGE']);
    $idiomaUsuario = substr($idiomaUsuario, 0, 2);

    setcookie('idiomaUsuario', $idiomaUsuario, time() + 86400);

    return $idiomaUsuario;
}

$idiomaUsuario = detectarIdioma();

$mapeamentoIdiomas = [
    'en' => '/en/index.html',
    'pt-br' => '/pt-br/index.html'
    
];

if (isset($mapeamentoIdiomas[$idiomaUsuario])) {
    header("Location: " . $mapeamentoIdiomas[$idiomaUsuario]);
    exit();
} else {
    header("Location: " . $mapeamentoIdiomas['pt-br']);
    exit();
}
?>

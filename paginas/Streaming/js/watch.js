// Recupera os valores dos parâmetros da URL

const urlParams = new URLSearchParams(window.location.search);

const srcValue = urlParams.get('src');
const titleValue = urlParams.get('title');

// Obtém as referências dos elementos HTML pelo ID

const iframe = document.getElementById("movie-iframe");
const title = document.getElementById("titulo");
const driveTitle = document.querySelector("ytp-title-link");

// Verifica se os elementos e os valores dos parâmetros foram encontrados
if (iframe && srcValue && titleValue) {    
    iframe.src = decodeURIComponent(srcValue);
	title.innerHTML = decodeURIComponent(titleValue);
	
} else {
    console.error("O Filme que você está tentando assitir está com dificuldades para ser carregado. Reporte esse problema e tentaremos resolve-lo o mais rápido possível.");
}
document.addEventListener("DOMContentLoaded", function() {
    const driveTitle = document.querySelector("ytp-title-link");
    driveTitle.innerHTML = decodeURIComponent(titleValue);
})
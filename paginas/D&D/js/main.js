//con - modificador no jogador: vidabase, armadura(peso 2) e resistencia magica(peso 1) - modificador no item: nenhum
//for - modificador no jogador: ataque fisico, capacidade de carga - modificador no item: ataque fisico corpo-a-corpo, dano cortante, dano de contusão
//des - modificador no jogador: ataque fisico, precisão, esquiva - modificador no item: ataque fisico a distância, dano perfurante
//int - modificador no jogador: poder de habilidade, manabase - modificador no item: poder de habilidade
//sab - modificador no jogador: resistencia magica (peso 2) - modificador no item: nenhum
//car - interação social apenas. nenhum modificador.



//alteração do nivel do personagem
function verificarTecla(event) {    
    if (event.key === "Enter") {
        verificarValor();
    }
}

function verificarValor() {
    
    var valor = document.getElementById("valorLevel").value;
	var confirma = document.getElementById("confirmLevel");
	
	if (valor >= 1 && valor <= 20) {
		jogador1.atributoBase.level = valor;
		confirma.innerHTML = "Nível alterado.";
		levelJogadorHTML.innerHTML = valor;
		level = valor;		
		return slotsMagia();
		
    } else if (valor < 1) {
		confirma.innerHTML = "Nível não pode ser menor que 1.";
		
	} else if (valor > 20) {
		confirma.innerHTML = "Nível não pode ser maior que 20.";
	}
}


//algumas variaveis iniciadas aqui
let vidaJogador;
let level;
let arma;
let peito;
let cabeca;
let braco;
let perna;
let brinco1;
let brinco2;
let cinto;
let colar;
let artefatoLivro;
let DanoJogador;
let velAtaque;
let nomeJogador;
let statCon;
let statFor;
let statDes;
let statInt;
let statSab;
let statCar;
let Atfisico;
let Pdmagico;
let penfisica;
let penmagica;
let ResFisica;
let ResMagica;

//Informações no html


//lógica de carregamento do card dos personagens
document.addEventListener("DOMContentLoaded", function() {
	let divCard = document.getElementsByClassName("card-personagem");
	
	
	for (i = 0; i < divCard.length; i++) {
		if (i < dadosPersonagens.length) {
			if(!dadosPersonagens[i].img) {
				divCard[i].style.backgroundImage = `url(.${dadosPersonagens[i].imgFile})`;
			} else {
			divCard[i].style.backgroundImage = `url(${dadosPersonagens[i].img})`;
			}
		
		divCard[i].setAttribute("title", `${dadosPersonagens[i].nome}`);

		let nomePersonagem = document.createElement("h3");
		nomePersonagem.classList.add("nome-person");
		nomePersonagem.innerHTML = dadosPersonagens[i].nome;

		let tituloPersonagem = document.createElement("p");
		tituloPersonagem.classList.add("titulo-person");
		tituloPersonagem.innerHTML = dadosPersonagens[i].titulo;
		
		let classePersonagem = document.createElement("p");
		classePersonagem.classList.add("classe-person");
		classePersonagem.innerHTML = dadosPersonagens[i].classe;

		let racaPersonagem = document.createElement("p");
		racaPersonagem.classList.add("raca-person");
		racaPersonagem.innerHTML = dadosPersonagens[i].raca;

		let nivelPersonagem = document.createElement("p");
		nivelPersonagem.classList.add("nivel-person");
		nivelPersonagem.innerHTML = `Nv ${dadosPersonagens[i].nivel}`;		

		let excluiPersonagem = document.createElement("div");
		excluiPersonagem.classList.add("exclui-person");
		excluiPersonagem.dataset.id = dadosPersonagens[i].id;
		excluiPersonagem.innerHTML = '<i class="fa-solid fa-trash-can"></i>';			

		divCard[i].append(nomePersonagem, tituloPersonagem, classePersonagem, racaPersonagem, nivelPersonagem, excluiPersonagem);
				
		//Visão geral do personagem		
		divCard[i].addEventListener("click", (function(indice) {
			return function () {
				


				//lógica para modificadores
				let con = dadosPersonagens[indice].con;
				let baseCon = Math.floor(con / 2) - 5;
				let modifyCon = baseCon >= 0 ? `+${baseCon}` : `${baseCon}`;				

				let forca = dadosPersonagens[indice].for;
				let baseFor = Math.floor(forca / 2) - 5;
				let modifyFor = baseFor >= 0 ? `+${baseFor}` : `${baseFor}`;
				
				let des = dadosPersonagens[indice].des;
				let baseDes = Math.floor(des / 2) - 5;
				let modifyDes = baseDes >= 0 ? `+${baseDes}` : `${baseDes}`;
				
				let int = dadosPersonagens[indice].int;
				let baseInt = Math.floor(int / 2) - 5;
				let modifyInt = baseInt >= 0 ? `+${baseInt}` : `${baseInt}`;
				
				let sab = dadosPersonagens[indice].sab;
				let baseSab = Math.floor(sab / 2) - 5;
				let modifySab = baseSab >= 0 ? `+${baseSab}` : `${baseSab}`;
				
				let car = dadosPersonagens[indice].car;
				let baseCar = Math.floor(car / 2) - 5;
				let modifyCar = baseCar >= 0 ? `+${baseCar}` : `${baseCar}`;				
				//dados no html sobre o personagem	
				try {
					let imagemJogadorHTML = document.getElementById("imagemPersonagem");
					if (!dadosPersonagens[indice].img) {
						imagemJogadorHTML.src = `.${dadosPersonagens[indice].imgFile}`;						
					} else {						
						imagemJogadorHTML.src = dadosPersonagens[indice].img;						
					}					
					imagemJogadorHTML.classList.add("img-fluid");					
					imagemJogadorHTML.style.maxHeight = "450px";
					
					let nomeJogadorHTML = document.getElementById("nomeJogador");
					nomeJogadorHTML.innerHTML = dadosPersonagens[indice].nome;
					
					let racaJogadorHTML = document.getElementById("racaJogador");
					racaJogadorHTML.innerHTML = `${dadosPersonagens[indice].raca}</br>Deslocamento: </br>${dadosPersonagens[indice].deslocamento}`;

					let classeJogadorHTML = document.getElementById("classeJogador");
					classeJogadorHTML.innerHTML = `${dadosPersonagens[indice].classe} ${dadosPersonagens[indice].nv_classe1}`;
					
					let nivelJogadorHTML = document.getElementById("levelJogador");
					nivelJogadorHTML.innerHTML = `${dadosPersonagens[indice].nivel} </br>Pontos de Experiência: ${dadosPersonagens[indice].exp}`;

					let hpJogadorHTML = document.getElementById("hpJogador");
					hpJogadorHTML.innerHTML = dadosPersonagens[indice].Vida_Atual + "/" + dadosPersonagens[indice].vida;

					let porcentagemVida = (dadosPersonagens[indice].Vida_Atual/dadosPersonagens[indice].vida) * 100;

					let vidaPorcentagem = document.querySelector('.vida-atual');
					vidaPorcentagem.style.width = porcentagemVida + '%';
					vidaPorcentagem.innerHTML = porcentagemVida.toFixed(1) + '%';

					let conHTML = document.getElementById("atributocon");
					conHTML.innerHTML = `Constituição: ${dadosPersonagens[indice].con} (${modifyCon})`;
					
					let forHTML = document.getElementById("atributofor");
					forHTML.innerHTML = `Força: ${dadosPersonagens[indice].for} (${modifyFor})`;
					
					let desHTML = document.getElementById("atributodes");
					desHTML.innerHTML = `Destreza: ${dadosPersonagens[indice].des} (${modifyDes})`;
					
					let intHTML = document.getElementById("atributoint");
					intHTML.innerHTML = `Inteligência: ${dadosPersonagens[indice].int} (${modifyInt})`;
					
					let sabHTML = document.getElementById("atributosab");
					sabHTML.innerHTML = `Sabedoria: ${dadosPersonagens[indice].sab} (${modifySab})`;
					
					let carHTML = document.getElementById("atributocar");
					carHTML.innerHTML = `Carisma: ${dadosPersonagens[indice].car} (${modifyCar})`;
					
					let historyHTML = document.getElementById("historiaPerson");
					historyHTML.innerHTML = dadosPersonagens[indice].historia;

					//CD e CA do personagem
					let info2 = document.getElementById("info2");

					let antecedente = document.createElement("p");
					antecedente.innerHTML = `Antecedente: ${dadosPersonagens[indice].antecedente}`


					let cd = document.createElement("p");
					cd.innerHTML = `CD: ${dadosPersonagens[indice].cd_magia}`;

					let ca = document.createElement("p");
					ca.innerHTML = `CA: ${dadosPersonagens[indice].ca}`;				

					info2.append(antecedente, cd, ca);
					

					console.log(dadosPersonagens[indice]);

				} catch (error)	 {
					console.error("Erro no código: ", error);
				}
					
					
			};

		
		})(i));
		} else {
			divCard[i].classList.add("text-center");
			let addPersonagem = document.createElement("p");
			addPersonagem.classList.add("text-center", "mb-5");
			addPersonagem.innerHTML = "Adicionar Personagem";

			let buttonAdd = document.createElement("button");
			buttonAdd.setAttribute("title", "Novo Personagem");
			buttonAdd.classList.add("openModalBtn");			

			let buttonIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			buttonIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
			buttonIcon.setAttribute("width", "50px");
			buttonIcon.setAttribute("height", "50px");
			buttonIcon.setAttribute("viewBox", "0 0 24 24");						
			buttonIcon.classList.add("btnAdd");
			
			let path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
			path1.setAttribute("d", "M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z");
			path1.setAttribute("stroke-width", "1.5");

			let path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
			path2.setAttribute("d", "M8 12H16");
			path2.setAttribute("stroke-width", "1.5");

			let path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
			path3.setAttribute("d", "M12 16V8");
			path3.setAttribute("stroke-width", "1.5");

			buttonIcon.append(path1, path2, path3);
			buttonAdd.appendChild(buttonIcon);
			divCard[i].append(addPersonagem, buttonAdd);
		}
		
	};
	//botao de mostrar mais do texto história
	let historyHTML = document.getElementById("historiaPerson");
	let buttonLerMais = document.getElementById("lerMais");
	buttonLerMais.style.display = "block";
	buttonLerMais.addEventListener('click', function() {		
		historyHTML.classList.toggle('clicked');
		if (historyHTML.classList.contains('clicked')) {			
			buttonLerMais.innerHTML = "Mostrar menos";
		} else {			
			buttonLerMais.innerHTML = "Mostrar mais";
		}
	});
	
	//exclusão de personagens criados.
	let botoesExclui = document.querySelectorAll('.exclui-person');
	botoesExclui.forEach(function(botao) {
		botao.addEventListener('mouseover', function() {
			this.classList.add('fa-bounce');			
		});
		botao.addEventListener('mouseout', function() {
			this.classList.remove('fa-bounce');
		});
		botao.addEventListener('click', function() {
			let excluiId = this.getAttribute('data-id');
			Swal.fire({
				title: 'Tem certeza da exclusão desse personagem?',
				text: 'Esta ação não pode ser desfeita!',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Sim, exclua!'
			  }).then((result) => {
				if (result.isConfirmed) {
					fetch(`../php/excluir-personagem.php?id=${excluiId}`, {
						method: 'DELETE',
					})
					.then(response => response.json())
					.then(data => {
						if (data.success) {
							location.reload();
						} else {
							console.log("deu ruim");
						}
					})
					.catch(error => console.log('Erro: ', error));
				};
			  });
			
		});
	});

});
function mostrarPersonagem() {
	let divCard = document.getElementsByClassName("card-personagem");
	for (i = 0; i < dadosPersonagens.length; i++) {
		divCard[i].addEventListener("click", function () {
		let pagePersonagem = document.querySelector("[data-page='personagem']");
		pagePersonagem.classList.remove("disable");
		pagePersonagem.classList.add("ativo");
				
		let pageInicio = document.querySelector("[data-page='início']");
		if (pageInicio.classList.contains("disable")) {
			pageInicio.classList.remove("disable");		
		} else {
			pageInicio.classList.add("disable");
			pageInicio.classList.remove("ativo");			
		}
		
		});
	}
	

}
mostrarPersonagem();

//modal de criação de personagem
document.addEventListener("DOMContentLoaded", function () {
    const openModalBtns = document.querySelectorAll(".openModalBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const modal = document.getElementById("modal");

	openModalBtns.forEach(function (openModalBtn) {
        openModalBtn.addEventListener("click", function () {
            modal.classList.add("active");
			modal.style.display = "block";
		//descrições no formulário de criação de personagem
			
			//descrições sobre raças
			let select = document.getElementById("raca");
			let textoRaca = document.getElementById("descricao-raca");
			

			select.addEventListener("change", mostrarTextoRaca);


 			function mostrarTextoRaca() {
				let opcaoSelect = select.options[select.selectedIndex].value;
				const textoDescricaoraca = {
					"nada selecionado": "",
					"Anão da Montanha": "Seu valor de Constituição e de Força aumentam em 2.",
					"Anão da Colina": "Seu valor de Constituição aumenta em 2 e de Sabedoria aumenta em 1.",
					"Alto Elfo": "Seu valor de Destreza aumenta em 2 e de Inteligência aumenta em 1.",
					"Elfo da Floresta": "Seu valor de Destreza aumenta em 2 e de Sabedoria aumenta em 1.",
					"Elfo Negro": "Seu valor de Destreza aumenta em 2 e de Carisma aumenta em 1.",
					"Halfling Pés Leves": "Seu valor de Destreza aumenta em 2 e de Carisma em 1.",
					"Halfling Robusto": "Seu valor de Destreza aumenta em 2 e de Constituição em 1.",
					"Humano": "Todos os seus valores de habilidade aumentam em 1.",
					"Gnomo da Floresta": "Seu valor de Inteligência aumenta em 2 e de Destreza em 1.",
					"Gnomo das Rochas": "Seu valor de Inteligência aumenta em 2 e de Constituição em 1.",
					"Meio-Elfo": "Seu valor de Carisma aumenta em 2 e outros dois valores de habilidade, à sua escolha, aumentam em 1.",
					"Meio-Orc": "Seu valor de Força aumenta em 2 e seu valor de Constituição aumenta em 1.",
					"Draconato": "Seu valor de Força aumenta em 2 e seu valor de Carisma aumenta em 1.",
					"Tiefling": "Seu valor de Inteligência aumenta em 1 e seu valor de Carisma aumenta em 2.",
				};
				textoRaca.innerHTML = textoDescricaoraca[opcaoSelect] || "";
			
			};
			//descrições sobre classes
			let selectClasse = document.getElementById("classe");
			let textoClasse = document.getElementById("descricao-classe");
		

			selectClasse.addEventListener("change", mostrarTextoClasse);


			function mostrarTextoClasse() {
				let opcaoSelectClasse = selectClasse.options[selectClasse.selectedIndex].value;
				const textoDescricaoclasse = {
					"nada selecionado": "",
					"Barbaro": "Dado de Vida: 1d12 por nível de bárbaro. Pontos de Vida no 1° Nível: 12 + seu modificador de Constituição. Pontos de Vida nos Níveis Seguintes: 1d12 (ou 7) + seu modificador de Constituição por nível de bárbaro após o 1°",
					"Bardo": "Dado de Vida: 1d8 por nível de bardo. Pontos de Vida no 1° Nível: 8 + seu modificador de Constituição. Pontos de Vida nos Níveis Seguintes: 1d8 (ou 5) + seu modificador de Constituição por nível de bardo após o 1°.",
					"Bruxo": "Dado de Vida: 1d8 por nível de bruxo.	Pontos de Vida no 1° Nível: 8 + seu modificador de Constituição. Pontos de Vida nos Níveis Seguintes: 1d8 (ou 5) + seu modificador de Constituição por nível de bruxo após o 1°",
					"Clerigo": "Dado de Vida: 1d8 por nível de clérigo. Pontos de Vida no 1° Nível: 8 + seu modificador de Constituição. Pontos de Vida nos Níveis Seguintes: 1d8 (ou 5) + seu modificador de Constituição por nível de clérigo após o 1°",
					"Druida": "Dado de Vida: 1d8 por nível de druida. Pontos de Vida no 1° Nível: 8 + seu modificador de Constituição. Pontos de Vida nos Níveis Seguintes: 1d8 (ou 5) + seu modificador de Constituição por nível de druida após o 1°",
					"Feiticeiro": "Dado de Vida: 1d6 por nível de feiticeiro. Pontos de Vida no 1° Nível: 6 + seu modificador de Constituição. Pontos de Vida nos Níveis Seguintes: 1d6 (ou 4) + seu modificador de Constituição por nível de feiticeiro após o 1°",
					"Guerreiro": "Dado de Vida: 1d10 por nível de guerreiro. Pontos de Vida no 1° Nível: 10 + seu modificador de Constituição. Pontos de Vida nos Níveis Seguintes: 1d10 (ou 6) + seu modificador de Constituição por nível de guerreiro após o 1°",
					"Ladino": "Dado de Vida: 1d8 por nível de ladino. Pontos de Vida no 1° Nível: 8 + seu modificador de Constituição. Pontos de Vida nos Níveis Seguintes: 1d8 (ou 5) + seu modificador de Constituição por nível de ladino após o 1°",
					"Mago": "Dado de Vida: 1d6 por nível de mago. Pontos de Vida no 1° Nível: 6 + seu modificador de Constituição. Pontos de Vida nos Níveis Seguintes: 1d6 (ou 4) + seu modificador de Constituição por nível de mago após o 1°",
					"Monge": "Dado de Vida: 1d8 por nível de monge.	Pontos de Vida no 1° Nível: 8 + seu modificador de Constituição. Pontos de Vida nos Níveis Seguintes: 1d8 (ou 5) + seu modificador de Constituição por nível de monge após o 1°",
					"Paladino": "Dado de Vida: 1d10 por nível de paladino. Pontos de Vida no 1° Nível: 10 + seu modificador de Constituição. Pontos de Vida nos Níveis Seguintes: 1d10 (ou 6) + seu modificador de Constituição por nível de paladino após o 1°",
					"Patrulheiro": "Dado de Vida: 1d10 por nível de patrulheiro. Pontos de Vida no 1° Nível: 10 + seu modificador de Constituição. Pontos de Vida nos Níveis Seguintes: 1d10 (ou 6) + seu modificador de Constituição por nível de patrulheiro após o 1°",				
				};
				textoClasse.innerHTML = textoDescricaoclasse[opcaoSelectClasse] || "";
			
			};
        });
    });
    closeModalBtn.addEventListener("click", function () {
        modal.classList.remove("active");
		modal.style.display = "none";

    });    
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.remove("active");
			modal.style.display = "none";

        }
    });
});

//envio assíncrono dos dados do personagem
document.addEventListener("DOMContentLoaded", function () {
    const modalForm = document.getElementById("modalForm");

    modalForm.addEventListener("submit", function (e) {
        e.preventDefault();        
        const formData = new FormData(modalForm);
		
        const selectRaca = document.getElementById("raca");
        formData.append("raca", selectRaca.value);
		
        const selectClasse = document.getElementById("classe");
        formData.append("classe", selectClasse.value);

		fetch("../php/cria-personagem.php", {
			method: "POST",
			body: formData
		})
		.then(response => response.json())
		.then(data => {
			console.log(data.arquivo);
			if (data.success) {
				Swal.fire({
					title: 'Personagem Criado! Parabéns',
					text: 'Seu Personagem foi criado. A página irá recarregar agora.',
					icon: 'success',					
					confirmButtonColor: '#3085d6',					
					confirmButtonText: 'Legal!'
				  }).then((result) => {					
					if (result.isConfirmed) {
						console.log("criado");
						location.reload();
					}
				});				
			} else {
				Swal.fire({
					title: 'Eita, deu ruim!',
					text: 'Aconteceu alguma coisa e seu personagem não foi criado =(. Tenta de novo...',
					icon: 'error',					
					confirmButtonColor: '#3085d6',					
					confirmButtonText: 'Aff!!'
				  }).then((result) => {					
					if (result.isConfirmed) {
						location.reload();
					}
				});	
			}
		})		
		
		

        
    });
});



//navegação pelas abas
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () { 

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
		pages[i].classList.remove("disable");
        pages[i].classList.add("ativo");
        navigationLinks[i].classList.add("ativo");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("ativo");
		pages[i].classList.add("disable");
        navigationLinks[i].classList.remove("ativo");
		
      }
    }

  });
}




//função de logout
function logout() {

    window.location.href = "../Login/logout.php";
}


//modal do inventário
    $(document).ready(function() {
        $('.item').hover(function() {
            $(this).tooltip('hide');
            $(this).tooltip('disable');
            $(this).tooltip('dispose');
            $(this).tooltip({
                trigger: 'manual',
                placement: 'top',
                title: 'Clique para ver o item',
                animation: false
            });
            $(this).tooltip('show');
        }, function() {
            $(this).tooltip('hide');
        });

        // Ativa o modal e preenche as informações do item quando o item é clicado
        $('.item').click(function() {
            var title = $(this).data('title');
            var description = $(this).data('description');
            var modalId = $(this).data('target');
            $(modalId + ' .modal-title').text(title);
            $(modalId + ' .modal-body p').text(description);
        });
    });


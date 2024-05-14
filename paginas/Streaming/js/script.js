let num_cards_GLOBAL = 5;
import cards from './cards.js';

let cast = [
    {
        picture:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.scdn.co%2Fimage%2F338040ea81df8012c152cfa65a4c1b440a94a1bc&f=1&nofb=1",
        square: 1000,
        name: "Will Smith"
    },
    {
        picture:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsiskiyou.sou.edu%2Fwp-content%2Fuploads%2F2014%2F10%2FRobin.jpg&f=1&nofb=1",
        square: 2000,
        name: "Robin Williams"
    },
    {
        picture:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.byrdie.com%2Fthmb%2FaSjYcUqubm-ucpugLMuN8m-nvdU%3D%2F796x700%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2Fcdn.cliqueinc.com__cache__posts__237400__jennifer-lawrence-hairstyles-237400-1506716140954-main.700x0c-af3f438528ea44f0aa9c3c1fe3ef8c64.jpg&f=1&nofb=1",
        square: 700,
        name: "Jennifer Lawrence"
    }
];

const IsMobile = () => {
    let width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.getElementsByTagName("body")[0].clientWidth;

    if (width <= 736) {
        return true;
    } else {
        return false;
    }
};

window.CheckSizeAttributes = () => {
    let width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.getElementsByTagName("body")[0].clientWidth;

    let carousels = document.getElementsByClassName("card-carousel");

    let old_num_cards = num_cards_GLOBAL;
    let new_num_cards;

    if (width > 1501) {
        new_num_cards = 5;
    } else if (width <= 1500 && width > 1100) {
        new_num_cards = 4;
    } else if (width <= 1100 && width > 520) {
        new_num_cards = 3;
    } else if (width <= 520) {
        new_num_cards = 2;
    }

    for (let i = 0; i < carousels.length; i++) {
        if (carousels[i].children.length > 2) {
            for (let j = 1; j < carousels[i].children.length - 1; j++) {
                carousels[i].children[j].style.display = "none";
            }
            for (let j = 1; j < new_num_cards + 1; j++) {
                carousels[i].children[j].style.display = "flex";
            }
        }
    }

    num_cards_GLOBAL = new_num_cards;
};

window.ResizeHeader = () => {
    let width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.getElementsByTagName("body")[0].clientWidth;

    if (width <= 815) {
        if (document.getElementsByClassName("hamburger").length <= 0) {
            let header = document.getElementsByClassName("header")[0];
            let main_nav = header.getElementsByClassName("main-nav")[0];
            let right_nav = header.getElementsByClassName("right-nav")[0];

            let hamburger = document.createElement("div");
            hamburger.classList.add("hamburger");
            hamburger.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>`;
            main_nav.remove();
            right_nav.remove();

            let bottom_header = document.createElement("div");
            bottom_header.classList.add("header-bottom");
            bottom_header.append(main_nav, right_nav);
            bottom_header.style.display = "none";

            hamburger.addEventListener("click", function () {
                if (bottom_header.style.display == "none") {
                    bottom_header.style.display = "flex";
                    header.style.paddingBottom = "9px";
                    header.style.paddingTop = "9px";
                } else {
                    bottom_header.style.display = "none";
                    header.style.paddingBottom = "0px";
                    header.style.paddingTop = "0px";
                }
            });

            header.classList.add("header-change");

            let top_header = document.createElement("div");
            top_header.classList.add("header-top");
            top_header.append(header.children[0], hamburger);

            header.innerHTML = "";
            header.append(top_header, bottom_header);
        }
    } else {
        if (document.getElementsByClassName("hamburger").length > 0) {
            let header = document.getElementsByClassName("header")[0];
            let main_nav = header.getElementsByClassName("main-nav")[0];
            let right_nav = header.getElementsByClassName("right-nav")[0];
            let brand = header.getElementsByClassName("brand")[0];

            header.classList.remove("header-change");
            header.children[0].remove();
            header.children[0].remove();
            header.append(brand, main_nav, right_nav);
        }
    }
};




let divCerta;




window.AddCards = () => {
    let carousel_width = document.getElementsByClassName("card-carousel")[0].clientWidth; //retorna a largura dos elementos com classe card-carousel
	

    let btn_width =
        document.getElementsByClassName("carousel-btn")[0].clientWidth +
        document.getElementsByClassName("carousel-btn")[1].clientWidth;

    let num_cards = num_cards_GLOBAL;
    let card_margin = 2;
    let initial_width = 1920;
    let initial_height = 1080;

    let scale = (100 * ((carousel_width - btn_width) / num_cards - card_margin * 2)) / initial_width;

    let content_titles = document.getElementsByClassName("content-title");
	

    for (let i = 0; i < content_titles.length; i++) {
        content_titles[i].style.marginLeft = `${card_margin}px`;
    }

    let carousels = document.getElementsByClassName("card-carousel");
    for (let i = 0; i < carousels.length; i++) {//contando as linhas com carouseis - i final será igual a quantidade de elementos com card-carousel dentro do html
		
		
        
		let not_chosen = [];
		

        for (let c = 0; c < cards.length; c++) { //contando quantos objetos tem no cards - c final será igual a quantidade de filmes cadastrados
			
            not_chosen.push(c);
			
		
        }

        for (let j = 0; j < cards.length; j++) {			
            let chosen_index = Math.floor(Math.random() * not_chosen.length);
			
			
			let chosen_card = cards[not_chosen[chosen_index]];
			
			
			//tratamento do genero do filme. variavel generoFiltrado se torna um array com os generos dos filmes e é usada para apresentar os generos no html
			
			let objeto = chosen_card;//aqui ta pegando o card da vez
			
			let { gen1, gen2, gen3, gen4 } = objeto.genero;	//aqui to pegando os generos dos filmes
			let filterGen = [gen1, gen2, gen3, gen4].filter(Boolean);// aqui to tirando os elementos vazios do array, se tiver. É o objeto com as propriedades do chosen_card
			let generoFiltrado = filterGen.join(', ');//aqui to adicionando os elementos e separando por vírgula, criando uma string.
			let lowercaseGen1 = filterGen[0].toLowerCase();//aqui to passando o primeiro elemento adicionado(gen1) para tudo minúsculo. É o genero do gen1.
			

            not_chosen.splice(chosen_index, 1); //prevenir repetição dos filmes na mesma linha
			
			//tentar colocar a logica de separação por genero a partir daqui.
			
			
			//preciso usar a variável lowercaseGen1 para escolher os cards que vão para cada carousel de cada genero....
			//variavel filterGen possui o array com todos os generos do chosen_card
			//divCerta seleciona a div com o mesmo primeiro genero do chosen_card

			let card = document.createElement("div");
			card.classList.add("card");
			card.id = lowercaseGen1;
			card.style.backgroundImage = `url(${chosen_card.background})`;

			//If image doesn't load
			card.style.backgroundColor = `#242424`;

			card.style.width = initial_width * (scale / 100) + "px";
			card.style.height = initial_height * (scale / 100) + "px";
			card.style.margin = `0px ${card_margin}px`;
			card.style.minWidth = initial_width * (scale / 100) + "px";
			card.style.minHeight = initial_height * (scale / 100) + "px";

			//config dos botões card pequeno

			let overlay = document.createElement("div");
			overlay.classList.add("overlay");

			let title = document.createElement("h4");			
			title.innerText = chosen_card.title.toUpperCase();
			let subtitle = document.createElement("h6");
			subtitle.innerText = chosen_card.subtitle;
			let description = document.createElement("p");
			description.innerText = `${chosen_card.duration} - ${generoFiltrado}`;

			let button_container = document.createElement("div");
			button_container.classList.add("button-container");



			let button1 = document.createElement("div");
			button1.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
			  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
			  </svg>`;
			button1.classList.add("watch");

			button1.addEventListener("click", function () {

				window.location.href = `./watch/watch.html?src=${encodeURIComponent(chosen_card.src)}&title=${encodeURIComponent(chosen_card.title)}&subtitle=${encodeURIComponent(chosen_card.subtitle)}`;
			});



			let button2 = document.createElement("div");
			button2.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
			  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
			  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
			</svg>`;
			button2.classList.add("queue");

			button2.addEventListener("click", function () {
				ToggleWatchLater(`${chosen_card.title} - ${chosen_card.subtitle}`);
			});



			let button3 = document.createElement("div");
			button3.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
			  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
			</svg>`;
			button3.classList.add("star");
			button3.classList.add("queue");

			button3.addEventListener("click", function () {
				if (button3.children[0].style.color != "rgb(255, 255, 87)") {
					button3.children[0].style.color = "rgb(255, 255, 87)";
				} else {
					button3.children[0].style.color = "white";
				}
			});



			let button4 = document.createElement("div");
			button4.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
			  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
			  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
			</svg>`;
			button4.classList.add("star");
			button4.classList.add("queue");


			button4.addEventListener("click", function () {//---------------------------criação do modal--------------
				if (document.getElementsByClassName("movie-desc").length > 0) {
					// If the modal exists
					document.getElementsByClassName("movie-desc")[0].remove();
				} else {
					let modal = document.createElement("div");
					modal.classList.add("movie-desc");

					let modal_content = document.createElement("div");
					modal_content.classList.add("modal-content");

					let bg_image = document.createElement("div");
					bg_image.classList.add("desc-image");
					bg_image.style.backgroundImage = `url(${chosen_card.background})`;
					let image_cover = document.createElement("div");

					let close_btn = document.createElement("div");
					close_btn.classList.add("close-btn");
					close_btn.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>`;

					close_btn.addEventListener("click", function () {
						this.parentElement.parentElement.parentElement.parentElement.remove();
					});

					image_cover.append(close_btn);
					bg_image.append(image_cover);

					let top_info = document.createElement("div");
					top_info.classList.add("desc-top");
					let title = document.createElement("h1");
					title.innerText = chosen_card.title.toUpperCase();
					let subtitle = document.createElement("h3");
					subtitle.classList.add("subtitulo");
					subtitle.innerText = chosen_card.subtitle;

					let btn_selection = document.createElement("div");
					btn_selection.classList.add("button-selection");

					let btn_watch = document.createElement("div");
					btn_watch.classList.add("watch");
					btn_watch.innerHTML = `<h3>Play</h3>
							<svg fill="currentColor" viewBox="0 0 16 16">
								<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
								<path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
							</svg>`
					btn_watch.addEventListener("click", function (){



						window.location.href = `./watch/watch.html?src=${encodeURIComponent(chosen_card.src)}&title=${encodeURIComponent(chosen_card.title)}&subtitle=${encodeURIComponent(chosen_card.subtitle)}`;
					});


					let btn_watchLater = document.createElement("div");
					btn_watchLater.classList.add("queue");					
					btn_watchLater.innerHTML = `<h3>Assistir mais tarde</h3>
							<svg fill="currentColor" viewBox="0 0 16 16">
								<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
								<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
							</svg>`;


					btn_selection.append(btn_watch, btn_watchLater);                   

					top_info.append(title, subtitle, btn_selection);





					let mid_gen = document.createElement("div");
					mid_gen.classList.add("gen-mid");
					mid_gen.innerHTML = `<p>"${generoFiltrado}"</p>`;

					let mid_info = document.createElement("div");
					mid_info.classList.add("desc-mid");
					mid_info.innerHTML = `<p>${chosen_card.description}</p>`;

					let bottom_info = document.createElement("div");
					bottom_info.classList.add("desc-bottom");

					let cast_slider = document.createElement("div");
					cast_slider.classList.add("cast");

					bottom_info.append(cast_slider);

					modal_content.append(
						bg_image,
						top_info,
						mid_gen,
						mid_info,
						bottom_info
					);
					modal.append(modal_content);

					document.body.append(modal);

					document.body.addEventListener("click", function (event) {
						if (!event.target.classList.contains("modal-content")) {
							//modal.remove();
							console.log(1);
						}
					});

					// Set the height for the modal image
					let total_width = document.getElementsByClassName("modal-content")[0].clientWidth;
					let large_scale = (100 * total_width) / 1920;
					document.getElementsByClassName("desc-image")[0].style.height = `${1080 * (large_scale / 100)}px`;

					// Set image for cast
					for (let c = 0; c < cast.length; c++) {
						let cast_block = document.createElement("div");
						cast_block.classList.add("cast-card");
						cast_block.style.backgroundImage = `url("${cast[c].picture}")`;
						cast_block.style.width = 100 / cast.length - 5 + "%";
						cast_block.style.height = `calc(${
							document.getElementsByClassName("cast")[0]
								.clientWidth / cast.length
						}"px" - 5%)`;
						cast_slider.append(cast_block);
					}
				}
			});
			
			//adicionando os cards gerados aos lugares certos.

            button_container.append(button1, button2, button3, button4);
			
            overlay.append(title, subtitle, description, button_container);
			
            card.append(overlay);	
			
			const allDivId = [
			document.getElementById('ação'),
			document.getElementById('suspense'),
			document.getElementById('comédia'),
			document.getElementById('drama'),
			document.getElementById('alta'),
			document.getElementById('lançamento'),
			document.getElementById('terror'),
			document.getElementById('marvel'),
			document.getElementById('dc'),
			document.getElementById('animação'),
			document.getElementById('romance')
				
			];
			
						
			
            if (j < num_cards) {
				
				carousels[i].insertBefore(card, carousels[i].children[carousels[i].children.length - 1]);
					
			} else {
				card.style.display = "none";
				carousels[i].insertBefore(card, carousels[i].children[carousels[i].children.length - 1]);
				//allDivId[i].insertBefore(card, allDivId[i].children[carousels[i].children.length - 1]);
			}
        } //final do for para contagem dos filmes
    }//final do for para contagem das linhas do carousel
};

window.CheckCards = () => {
    let carousels = document.getElementsByClassName("card-carousel");

    for (let i = 0; i < carousels.length; i++) {
        let carousel_width = carousels[i].clientWidth;

        let btn_width =
            carousels[i].getElementsByClassName("carousel-btn")[0].clientWidth +
            carousels[i].getElementsByClassName("carousel-btn")[1].clientWidth;

        let num_cards = num_cards_GLOBAL;
        let card_margin = 2;
        let initial_width = 1920;
        let initial_height = 1080;

        let scale =
            (100 *
                ((carousel_width - btn_width) / num_cards - card_margin * 2)) /
            initial_width;

        let cards = carousels[i].getElementsByClassName("card");

        for (let i = 0; i < cards.length; i++) {
            cards[i].style.width = initial_width * (scale / 100) + "px";
            cards[i].style.height = initial_height * (scale / 100) + "px";
            cards[i].style.margin = `0px ${card_margin}px`;
            cards[i].style.minWidth = initial_width * (scale / 100) + "px";
            cards[i].style.minHeight = initial_height * (scale / 100) + "px";
        }

        if (IsMobile()) {
            carousels[i].style.height =
                1.6 * (initial_height * (scale / 100)) + "px";
        } else {
            carousels[i].style.height = "auto";
        }
    }
};

window.AddCarouselButtons = () => {
    let carousels = document.getElementsByClassName("card-carousel");
    for (let i = 0; i < carousels.length; i++) {
        let btn1 = document.createElement("div");
        btn1.classList.add("carousel-btn");
        btn1.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16" onclick="Previous(this);">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>`;


        let btn2 = document.createElement("div");
        btn2.classList.add("carousel-btn");

        btn2.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16" onclick="Next(this);">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>`;

        carousels[i].append(btn1, btn2);
    }
};


window.ScrollFunction = () => {
    let header = document.getElementsByClassName("header")[0];
    if (document.documentElement.scrollTop > 1) {
        header.classList.add("header-active");
    } else {
        header.classList.remove("header-active");
    }
};

window.MakeJumbotron = () => {
    let height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.getElementsByTagName("body")[0].clientHeight;

    document.getElementsByClassName("top")[0].style.height = `${height}px`;
};

let slide_index = 0;
let slideInterval;
window.IntervalSet = () => {
	if(!slideInterval){
		slideInterval = setInterval(AutoSlideShow, 7000);
	}
};
window.AutoSlideShow = () => {
    let slide_area = document.getElementsByClassName("top")[0];
	
    let container = slide_area.children[0];

    //container.classList.add("fadeIn");
	slide_area.style.animationName = 'fadeIn';
    slide_area.style.animationDuration = '1s'; // Duração da animação: 2 segundos    
    slide_area.style.animationIterationCount = '1'; // Contagem de iterações: 1 (apenas uma vez)


    let bg_display = [];
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].background) {
            bg_display.push(i);
        }
    }

    slide_index++;
    if (slide_index > bg_display.length - 1) {
        slide_index = 0;
    }

    slide_area.style.backgroundImage = `url("${cards[bg_display[slide_index]].background }")`;
	
	slide_area.getElementsByTagName("h1")[0].innerHTML = cards[bg_display[slide_index]].title.toUpperCase();
	slide_area.getElementsByTagName("h3")[0].innerHTML = cards[bg_display[slide_index]].subtitle;
    slide_area.getElementsByTagName("p")[0].innerHTML = cards[bg_display[slide_index]].description;
	let btnPrinc = document.getElementById("btnPrinc");
	let objPrinc = cards[bg_display[slide_index]];
	

	btnPrinc.addEventListener("click", function(){

		window.location.href = `./watch/watch.html?src=${encodeURIComponent(chosen_card.src)}&title=${encodeURIComponent(chosen_card.title)}&subtitle=${encodeURIComponent(chosen_card.subtitle)}`;
	});

    //container.classList.add("fadeOut");
    setTimeout(() => {
        slide_area.style.animationName = 'fadeOut';
        slide_area.style.animationDuration = '1s'; // Duração da animação: 1.5 segundos
//        container.style.animationDelay = '4s'; // Atraso antes de iniciar a animação: 1 segundo
        slide_area.style.animationIterationCount = '1'; // Contagem de iterações: 1 (apenas uma vez)
    }, 6000); // Tempo para esperar antes de iniciar a animação de fadeOut (2000 milissegundos = 2 segundos)
	

};



window.SmoothScroll = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "center" });
};

window.Next = (elem) => {
    let carousel = elem.parentElement.parentElement;
    let first_elem = carousel.children[1];
    let next_elem;

    for (let i = 0; i < carousel.children.length; i++) {
        if (carousel.children[i].style.display == "none") {
            next_elem = carousel.children[i];
            break;
        }
    }

    first_elem.style.display = "none";
    first_elem.remove();
    carousel.insertBefore(
        first_elem,
        carousel.children[carousel.children.length - 1]
    );

    next_elem.style.display = "flex";
};

window.Previous = (elem) => {
    let carousel = elem.parentElement.parentElement;
    let last_display_item;
    let prev_elem = carousel.children[carousel.children.length - 2];

    for (let i = 0; i < carousel.children.length; i++) {
        if (
            carousel.children[i].style.display != "none" &&
            !carousel.children[i].classList.contains("carousel-btn")
        ) {
            last_display_item = carousel.children[i];
        }
    }

    last_display_item.style.display = "none";

    carousel.insertBefore(prev_elem, carousel.children[1]);

    prev_elem.style.display = "flex";
};

window.ToggleWatchLater = (movie = "", activate = true) => {
    let modal = document.getElementsByClassName("watch-later-modal")[0];

    if (movie != "") {
        modal.getElementsByClassName("movie")[0].innerText = movie;
    }

    if (activate) {
        modal.style.display = "flex";
    } else {
        modal.style.display = "none";
	}
};



window.visivel = () => {
	const divBusca = document.getElementById("buscaResult") 
	divBusca.classList.remove("invisivel");
	divBusca.style.display = "flex";
};
window.pesquisar = () => {
	const termoBusca = document.getElementById('busca').value.toLowerCase();
	const resultados = cards.filter(objeto => objeto.title.toLowerCase().includes(termoBusca));
	
	exibirResultado(resultados);
	
};

function exibirResultado(resultados){
	const modalResult = document.getElementById('buscaResult');
	modalResult.innerHTML = '';
	
	if (resultados.length === 0) {		
		modalResult.textContent = "Nenhum Filme encontrado.";
	} else {
		resultados.forEach(resultado => {
			let num_cards = num_cards_GLOBAL;
			let carousel_width = document.getElementsByClassName("card-carousel")[0].clientWidth;
			let btn_width = document.getElementsByClassName("carousel-btn")[0].clientWidth + document.getElementsByClassName("carousel-btn")[1].clientWidth;
			let card_margin = 2;
			let initial_width = 1920;
			let initial_height = 1080;
			let scale = (100 * ((carousel_width - btn_width) / num_cards - card_margin * 2)) / initial_width;
			
			
			
			let { gen1, gen2, gen3, gen4 } = resultado.genero;
			let filterGen = [gen1, gen2, gen3, gen4].filter(Boolean);
			let generoFiltrado = filterGen.join(', ');
			
			
			
			let card_resultado = document.createElement('div');
			card_resultado.classList.add("resultado");
			card_resultado.style.backgroundImage = `url(${resultado.background})`;
			card_resultado.style.backgroundColor = `#242424`;
			card_resultado.style.width = initial_width * (scale / 100) + "px";
			card_resultado.style.height = initial_height * (scale / 100) + "px";
			card_resultado.style.margin = `0px ${card_margin}px`;
			card_resultado.style.minWidth = initial_width * (scale / 100) + "px";
			card_resultado.style.minHeight = initial_height * (scale / 100) + "px";
			
			let overlay = document.createElement("div");
			overlay.classList.add("overlay");
			
			let titulo = document.createElement("h4");
			titulo.innerText = resultado.title;
			let description = document.createElement("p");
			description.innerText = resultado.duration + " - " + generoFiltrado;
			
			let button_container = document.createElement("div");
			button_container.classList.add("button-container");
			
			let button1 = document.createElement("div");
			button1.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
			  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
			  </svg>`;
			button1.classList.add("watch");

			button1.addEventListener("click", function () {

				window.location.href = `./watch/watch.html?src=${encodeURIComponent(resultado.src)}`;
			});
			
			let button2 = document.createElement("div");
			button2.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
			  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
			  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
			</svg>`;
			button2.classList.add("queue");

			button2.addEventListener("click", function () {
				ToggleWatchLater(`${resultado.title}`);
			});
			
			let button3 = document.createElement("div");
			button3.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
			  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
			</svg>`;
			button3.classList.add("star");
			button3.classList.add("queue");
			button3.addEventListener("click", function () {
				if (button3.children[0].style.color != "rgb(255, 255, 87)") {
					button3.children[0].style.color = "rgb(255, 255, 87)";
				} else {
					button3.children[0].style.color = "white";
				}
			});
			
			let button4 = document.createElement("div");
			button4.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16">
			  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
			  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
			</svg>`;
			button4.classList.add("star");
			button4.classList.add("queue");
			
			button4.addEventListener("click", function () {//---------------------------criação do modal--------------
				if (document.getElementsByClassName("movie-desc").length > 0) {
					// If the modal exists
					document.getElementsByClassName("movie-desc")[0].remove();
				} else {
					let modal = document.createElement("div");
					modal.classList.add("movie-desc");

					let modal_content = document.createElement("div");
					modal_content.classList.add("modal-content");

					let bg_image = document.createElement("div");
					bg_image.classList.add("desc-image");
					bg_image.style.backgroundImage = `url(${resultado.background})`;
					
					let image_cover = document.createElement("div");

					let close_btn = document.createElement("div");
					close_btn.classList.add("close-btn");
					close_btn.innerHTML = `<svg fill="currentColor" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>`;

					close_btn.addEventListener("click", function () {
						this.parentElement.parentElement.parentElement.parentElement.remove();
					});
					
					image_cover.append(close_btn);
					bg_image.append(image_cover);
					
					let top_info = document.createElement("div");
					top_info.classList.add("desc-top");
					let title = document.createElement("h1");
					title.innerText = resultado.title;
					
					let btn_selection = document.createElement("div");
					btn_selection.classList.add("button-selection");
					
					let btn_watch = document.createElement("div");
					btn_watch.classList.add("watch");
					btn_watch.innerHTML = `<h3>Play</h3>
							<svg fill="currentColor" viewBox="0 0 16 16">
								<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
								<path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
							</svg>`;
					btn_watch.addEventListener("click", function (){
						window.location.href= `./watch/watch.html?src=${encodeURIComponent(resultado.src)}`
						
					});
					
					let btn_watchLater = document.createElement("div");
					btn_watchLater.classList.add("queue");
					btn_watchLater.innerHTML = `<h3>Assistir mais tarde</h3>
							<svg fill="currentColor" viewBox="0 0 16 16">
								<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
								<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
							</svg>`;
					
					btn_selection.append(btn_watch, btn_watchLater);
					top_info.append(title, btn_selection);
					
					let mid_gen = document.createElement("div");
					mid_gen.classList.add("gen-mid");
					mid_gen.innerHTML = `<p>"${generoFiltrado}"</p>`;

					let mid_info = document.createElement("div");
					mid_info.classList.add("desc-mid");
					mid_info.innerHTML = `<p>${resultado.description}</p>`;

					let bottom_info = document.createElement("div");
					bottom_info.classList.add("desc-bottom");
					
					modal_content.append(
						bg_image,
						top_info,
						mid_gen,
						mid_info,
						bottom_info
					);
					modal.append(modal_content);

					document.body.append(modal);
					
					document.body.addEventListener("click", function (event) {
						if (!event.target.classList.contains("modal-content")) {
							//modal.remove();
							console.log(1);
						}
					});
					
					let total_width = document.getElementsByClassName("modal-content")[0].clientWidth;
					let large_scale = (100 * total_width)/1920;
					document.getElementsByClassName("desc-image")[0].style.height = `${1080 * (large_scale / 100)}px`;
			
			
				}
			
			
			
		});
			 button_container.append(button1, button2, button3, button4);
			
            overlay.append(titulo, description, button_container);
			
            card_resultado.append(overlay);
			modalResult.appendChild(card_resultado);
			
			
		
	});
	
};
}
// JavaScript Document
const cards = [
	{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpostergami.com%2Fwp-content%2Fuploads%2F2022%2F01%2Fposter-wallpaper-coringa-6.jpg&f=1&nofb=1&ipt=d4c9f8c9d057c889db130497df99dfc4a909fdcea0a0c3c87622d41c6c25f587&ipo=images",
		title: "Coringa",
		subtitle: "",
		description: "Isolado, intimidado e desconsiderado pela sociedade, o fracassado comediante Arthur Fleck inicia seu caminho como uma mente criminosa após assassinar três homens em pleno metrô. Sua ação inicia um movimento popular contra a elite de Gotham City, da qual Thomas Wayne é seu maior representante.",
		src: "https://drive.google.com/file/d/1tMwP8k3avVdbYss69eFtn68jCiGRH59r/preview",
		duration: "2h 2m",
		genero: {
			gen1:"Drama",
			gen2:"Crime",
			gen3:"",
			gen4:""
		}
	},
	{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.clarin.com%2F2020%2F09%2F21%2Fa4dGJ21A8_1200x0__1.jpg&f=1&nofb=1&ipt=93b33ad7ddef45c3105aeb7161be1658c06744f990c5f0f02ffbac510751aaf1&ipo=images",
		title: "Sr Sra Smith",
		subtitle: "",
		description: "John e Jane Smith aparentemente parecem formar um casal normal, mas na realidade ambos mantêm um segredo. Os dois são assassinos de aluguel contratados por empresas rivais. A verdade só vem à tona quando John e Jane, sem saber, recebem uma missão para eliminar o mesmo alvo e mais tarde descobrem que devem matar um ao outro.",
		src: "https://drive.google.com/file/d/1bJsB7wjvU7WWuFSJzwcz0VKQ6vz2UMlA/preview",
		duration: "1h 59m",
		genero: {
			gen1:"Ação",
			gen2:"Romance",
			gen3:"Comédia",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcinepop.com.br%2Fwp-content%2Fuploads%2F2021%2F05%2Fgladiador.jpg&f=1&nofb=1&ipt=9fbc2b361204696c9e7290cb2ca0f1003d010fb83568beffac519b3ce7a65bd3&ipo=images",
		title: "Gladiador",
		subtitle: "",
		description: "Maximus é um poderoso general romano, amado pelo povo e pelo imperador Marcus Aurelius. Antes de sua morte, o Imperador desperta a ira de seu filho Commodus ao tornar pública a sua predileção em deixar o trono para Maximus. Sedento pelo poder, Commodus mata seu pai, assume a coroa e ordena a morte de Maximus, que consegue fugir antes de ser pego, e passa a se esconder como um escravo e gladiador enquanto vai atrás de vingança.",
		src: "https://drive.google.com/file/d/1mWnDcsfr7EysUhrQE1gLKL7-ngUU_Pga/preview",
		duration: "2h 35m",
		genero: {
			gen1:"Ação",
			gen2:"Drama",
			gen3:"",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FyUiXA68FfQeA8cRBhd0Ao0jIRZt.jpg&f=1&nofb=1&ipt=d25dd44c7076de2504be1afe53a29373780df495b72ae0551e667b06c8e46c17&ipo=images",
		title: "Star Wars 4",
		subtitle: "Uma Nova Esperança",
		description: "A princesa Leia é mantida refém pelas forças imperiais comandadas por Darth Vader. Luke Skywalker e o capitão Han Solo precisam libertá-la e restaurar a liberdade e a justiça na galáxia.",
		src: "https://drive.google.com/file/d/1vZDRk35V-NbMKFXvH7ps5SsUKB3xJr48/preview",
		duration: "2h 01m",
		genero: {
			gen1:"Ficção Científica",
			gen2:"Ação",
			gen3:"",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FyHzArdxaRF478ZT9qzqeZbrjVbo.jpg&f=1&nofb=1&ipt=ad87b2e484c0552f09574eff63ddc9b0f87803f807d9492ca05ad21e58150fdb&ipo=images",
		title: "Star Wars 5",
		subtitle: "O Império Contra-Ataca",
		description: "Yoda treina Luke Skywalker para ser um cavaleiro Jedi. Han Solo corteja a Princesa Leia enquanto Darth Vader retorna para combater as forças rebeldes que tentam salvar a galáxia.",
		src: "https://drive.google.com/file/d/1fgV62Bx6e3jhk-SjyU9LiY5aJZUxZFAJ/preview",
		duration: "2h 4m",
		genero: {
			gen1:"Ficção Científica",
			gen2:"Ação",
			gen3:"",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FqDEvctVfAheD7x9Rzz8xcFRAGAU.jpg&f=1&nofb=1&ipt=8bae5d3c6d18da241dd8e9da28b6ba561409ae140567a5bd81107e49bcd2c02a&ipo=images",
		title: "Star Wars 1",
		subtitle: "A Ameaça Fantasma",
		description: "Obi-Wan e seu mentor embarcam em uma perigosa aventura na tentativa de salvar o planeta das garras de Darth Sidious. Durante a viagem, eles conhecem um habilidoso menino e decidem treiná-lo para se tornar um Jedi. Mas o tempo irá revelar que as coisas nem sempre são o que aparentam ser.",
		src: "https://drive.google.com/file/d/1loRP8o2o3rPMPQ8Iii-ICyIaHhsgIrld/preview",
		duration: "2h 11m",
		genero: {
			gen1:"Ficção Científica",
			gen2:"Ação",
			gen3:"",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.themoviedb.org%2Ft%2Fp%2Foriginal%2FdNt5q68BBkddBxlvrHDa1apyBy8.jpg&f=1&nofb=1&ipt=564c5a7e21f2d68270362afdbe117856ea788b69d18b0f2eae4e14c2f8cdede1&ipo=images",
		title: "Star Wars 2",
		subtitle: "O Ataque dos Clones",
		description: "Dez anos após o primeiro encontro, Anakin Skywalker vive um romance proibido com Padmé, enquanto Obi-Wan investiga uma tentativa de assassinato do senador e descobre um exército secreto de clones criado para tentar destruir os Jedi.",
		src: "https://drive.google.com/file/d/1YY5yLfAntg-aHblpgGiLYvKmnVnhKU5J/preview",
		duration: "2h 22m",
		genero: {
			gen1:"Ficção Científica",
			gen2:"Ação",
			gen3:"",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fcharlize-theron-in-the-old-guard_bGVtbW2UmZqaraWkpJRobWllrWdpZWU.jpg&f=1&nofb=1&ipt=0a3d050850b421ad6d4bc08e2bf2b200b89eb4d3927b20491337163130626302&ipo=images",
		title: "The old Guard",
		subtitle: "",
		description: "Um grupo de mercenários com o dom da imortalidade protege a humanidade há séculos e faz de tudo para manter sua identidade em segredo. Mas tudo muda quando alguém descobre seu segredo e eles passam a ser caçados.",
		src: "https://drive.google.com/file/d/1EBOyldegcJk4Xh2dVyCyuBz4QRsRP6hH/preview",
		duration: "2h 5m",
		genero: {
			gen1:"Ação",
			gen2:"Fantasia",
			gen3:"",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fcaptain-marvel-2019_a2lmaG2UmZqaraWkpJRmbmdlrWZlbWU.jpg&f=1&nofb=1&ipt=a78735c85fd20178cf6eab36c5d78f252086dbfbeea4feecf6de3f6ecd2348d2&ipo=images",
		title: "Capitã Marvel",
		subtitle: "",
		description: "Capitã Marvel é uma alienígena Kree que se encontra no meio de uma batalha entre seu povo e os Skrulls. Com a ajuda de Nick Fury, ela tenta impedir uma invasão na Terra, descobrir os segredos de seu passado e pôr um fim ao antigo conflito.",
		src: "https://drive.google.com/file/d/1Zi4GcLlnPwlnWiOmtL1HkDi2czK9uEhj/preview",
		duration: "2h 4m",
		genero: {
			gen1:"Ação",
			gen2:"Super-Herói",
			gen3:"Marvel",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fs99xiwbOo9uVwD4kn1x6sPrWA3k.jpg&f=1&nofb=1&ipt=00071e5d95cb17767378e99cb44f1559387078fd7910922776942c6998b3f9fc&ipo=images",
		title: "Homem de Ferro 2",
		subtitle: "",
		description: 'Em um mundo ciente da existência do Homem de Ferro, o inventor bilionário Tony Stark sofre pressão de todos os lados para compartilhar sua tecnologia com as forças armadas. Ele resiste para divulgar os segredos de sua inigualável armadura, com medo de que estas informações caiam nas mãos erradas. Com a bela Pepper Potts e o amigo "Rhodey" Rhodes ao seu lado, Tony precisa forjar novas alianças e confrontar um inimigo poderoso.',
		src: "https://drive.google.com/file/d/1NESARf5orL9bHF8j-fSMyAXhFsTmCsNG/preview",
		duration: "2h 5m",
		genero: {
			gen1:"Ação",
			gen2:"Super-Herói",
			gen3:"Marvel",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages8.alphacoders.com%2F377%2Fthumb-1920-377609.jpg&f=1&nofb=1&ipt=6eb1096e4521a665d599569470f473efd4a0142412b97de88cea8e130b833b9e&ipo=images",
		title: "Homem de Ferro 3",
		subtitle: "",
		description: "Depois de um inimigo reduzir o mundo de Tony Stark a destroços, o Homem de Ferro precisa aprender a confiar em seus instintos para proteger aqueles que ama, especialmente sua namorada, e lutar contra seu maior medo: o fracasso.",
		src: "https://drive.google.com/file/d/1F6CTOYdqIjAM7KkVwxJpm7ljWLTU3H3m/preview",
		duration: "2h 10m",
		genero: {
			gen1:"Ação",
			gen2:"Super-Herói",
			gen3:"Marvel",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsobresagas.com.br%2Fwp-content%2Fuploads%2F2022%2F06%2FSessao-da-Tarde-Hoje-Classico-da-comedia-Esposa-de-Mentirinha-e-destaque-nessa-segunda-feira-20.jpg&f=1&nofb=1&ipt=f2035ce7d471adbad5741d43c6bfc3cb98c078f6f8e3d93278636717b9f8bda6&ipo=images",
		title: "Esposa de Mentirinha",
		subtitle: "",
		description: "Infeliz em sua tentativa de casamento, Danny passa a vivenciar relacionamentos sem compromisso para driblar a carência. Assim, ele toca sua vida como cirurgião plástico bem-sucedido, tendo sua melhor amiga Katherine, mãe solteira de um casal, como fiel escudeira. Quando conhece a jovem Palmer e a paixão toma conta de ambos, ele inventa, para tentar conquistá-la, que é marido de Katherine, pai das crianças e que vai se separar.",
		src: "https://drive.google.com/file/d/1--I4LM6zwHpQGkoooD29-MghhTDw6Gj-/preview",
		duration: "1h 57m",
		genero: {
			gen1:"Comédia",
			gen2:"Romance",
			gen3:"",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fprogrammi.sky.it%2Fimages%2Fcc%2Fupload%2Fc_scale%2Cw_1920%2Ff_webp%2Fv1%2Fbackground%2Fbackground-50-volte-il-primo-bacio&f=1&nofb=1&ipt=a807e2b8d49cb6fb3f9528c51235adea2634958e493b07f34bb75b28cc019244&ipo=images",
		title: "Como se Fosse a Primeira Vez",
		subtitle: "",
		description: "Henry Roth é um veterinário paquerador que vive no Havaí e famoso pelo grande número de turistas que conquista. Seu novo alvo é Lucy Whitmore, que mora no local e por quem Henry se apaixona perdidamente. No entanto, Lucy sofre de falta de memória de curto prazo e se esquece rapidamente de fatos que acabaram de acontecer. Assim, Henry é obrigado a conquistá-la, dia após dia, para ficar ao seu lado.",
		src: "https://drive.google.com/file/d/1-1n95EkY7mwplqUPNfsO6B-BsU0V7lqG/preview",
		duration: "1h 39m",
		genero: {
			gen1:"Comédia",
			gen2:"Romance",
			gen3:"",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F_HMy37ytch4s%2FTRc16yfY_SI%2FAAAAAAAABzU%2Foihfq_Ps0k4%2Fs1600%2Fpar.jpg&f=1&nofb=1&ipt=98c62144d08b06cdf43e1a66216c3b3ac562e1644dd4d0472c26501d3045c364&ipo=images",
		title: "Par Perfeito",
		subtitle: "",
		description: "A vida tranquila de Jen e Spencer começa a mudar quando ela descobre que o marido é um assassino profissional.",
		src: "https://drive.google.com/file/d/1OjlaP1AzngmeP9MXU2OwuHMih5XCLwlQ/preview",
		duration: "1h 40m",
		genero: {
			gen1:"Comédia",
			gen2:"Ação",
			gen3:"Romance",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages4.alphacoders.com%2F909%2Fthumb-1920-909855.jpg&f=1&nofb=1&ipt=808eb61f927a2aacb88321ce4b31e42dd326882d5b6e274fa6b5dff71ffcc5be&ipo=images",
		title: "Operação Red Sparrow",
		subtitle: "",
		description: "Outrora talentosa bailarina, Dominika Egorova é convencida a se tornar uma Sparrow, ou seja, uma sedutora treinada na melhor escola de espionagem russa. Após passar pelo árduo processo de aprendizagem, ela se torna a mais talentosa espiã do país e precisa lidar com o agente da CIA Nathaniel Nash. Os dois, no entanto, acabam desenvolvendo uma paixão proibida que ameaça não só suas vidas, mas também as de outras pessoas.",
		src: "https://drive.google.com/file/d/1_rf2oh6ZQLZvWpQ-FNjWE8xnn0fI_q8t/preview",
		duration: "2h 20m",
		genero: {
			gen1:"Suspense",
			gen2:"Ação",
			gen3:"",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhdqwalls.com%2Fdownload%2F2017-jumanji-welcome-to-the-jungle-movie-5k-zt-1920x1080.jpg&f=1&nofb=1&ipt=3fcbfa96fd39cb75e518e79a296a0b9747d45e29c362c0d5f7c0e5efd0acda56&ipo=images",
		title: "Jumanji",
		subtitle: "Bem Vindo a Selva",
		description: "Quatro adolescentes encontram um videogame cuja ação se passa em uma floresta tropical. Empolgados com o jogo, eles escolhem seus avatares para o desafio, mas um evento inesperado faz com que eles sejam transportados para dentro do universo fictício, transformando-os nos personagens da aventura.",
		src: "https://drive.google.com/file/d/1j5puYj2JzBgDcH0QKIR__UY1o1Zvs022/preview",
		duration: "1h 59m",
		genero: {
			gen1:"Aventura",
			gen2:"Ação",
			gen3:"Comédia",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcloud.filmfed.com%2Fmovies%2Fimages%2Fl_5da5f130-021b-41bb-8ea5-f341b0a87575.jpg&f=1&nofb=1&ipt=65c52b90c30f0c12e1994c82c8541867e334a6aa2d813a9bb1f9e35a7371e9f6&ipo=images",
		title: "No Coração do Mar",
		subtitle: "",
		description: "A tripulação do barco baleeiro Essex precisa fazer o impossível para sobreviver em uma ilha deserta após sofrer brutal ataque de uma baleia gigantesca.",
		src: "https://drive.google.com/file/d/1USqKAwKU6-JRGLVUDv2gDilJPKvRRk5F/preview",
		duration: "2h 2m",
		genero: {
			gen1:"Suspense",
			gen2:"Drama",
			gen3:"Aventura",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2019%2F09%2F102090-jack-the-giant-slayer.jpg&f=1&nofb=1&ipt=61936a6c479dce22a380a28099feb819022680b1e2fa6018897dd72dcd8a97da&ipo=images",
		title: "Jack",
		subtitle: "O Caçador de Gigantes",
		description: "Jack é um pobre fazendeiro que abre um portal entre o mundo real e o universo de uma terrível raça de gigantes, desencadeando uma guerra. A situação obriga Jack a lutar para deter os gigantes e salvar a raça humana.",
		src: "https://drive.google.com/file/d/1NVAm9qplZ6frGCfb-rO-Y5lov_ztZhJE/preview",
		duration: "1h 54m",
		genero: {
			gen1:"Fantasia",
			gen2:"Aventura",
			gen3:"",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-OKObxFvSFmE%2FWIfxjLHW3CI%2FAAAAAAAADyk%2FpzYswL0RPwUzZxnzhc1luok4usgeapFhgCLcB%2Fs1600%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=25e6c357be6db04d3340fb70ff452c7529394a3eb37a40b1a432faee6a330956&ipo=images",
		title: "Beleza Oculta",
		subtitle: "",
		description: "Howard entra em depressão após uma tragédia pessoal e passa a escrever cartas para a Morte, o Tempo e o Amor, algo que preocupa seus amigos. Mas o que parece impossível se torna realidade quando estas três partes do universo decidem responder. Morte, Tempo e Amor tentam agora ensinar o valor da vida para Howard.",
		src: "https://drive.google.com/file/d/1a4o5nOSOgtVip1rmoi3gbOf82NsnrmhO/preview",
		duration: "1h 37m",
		genero: {
			gen1:"Drama",
			gen2:"Romance",
			gen3:"",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.themoviedb.org%2Ft%2Fp%2Foriginal%2FpqECkkF9Eiv5GC5dmvM5VMgH66U.jpg&f=1&nofb=1&ipt=f45fb54b8cb6799e5cb170858a952b7377d852b33240d09c5c1fd570cacd9acf&ipo=images",
		title: "As Crônicas de Nárnia",
		subtitle: "O Leão, A Feiticeira e o Guarda-Roupa",
		description: "Durante os bombardeios da Segunda Guerra Mundial de Londres, quatro irmãos ingleses são enviados para uma casa de campo onde eles estarão seguros. Um dia, Lucy encontra um guarda-roupa que a transporta para um mundo mágico chamado Nárnia. Depois de voltar, ela logo volta a Nárnia com seus irmãos, Peter e Edmund, e sua irmã, Susan. Lá eles se juntam ao leão mágico, Aslan, na luta contra a Feiticeira Branca.",
		src: "https://drive.google.com/file/d/1yfawrjalXd6g7OPg258P_SfYHSlCYtCm/preview",
		duration: "2h 30m",
		genero: {
			gen1:"Fantasia",
			gen2:"Aventura",
			gen3:"",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F9pBv1BOSloAUgAkF0meJWdnbV4Q.jpg&f=1&nofb=1&ipt=6c209f53ccd7a0f7a4ee9f1137bee0b2dc82426a7c7c3a0c36998445e821a4aa&ipo=images",
		title: "As Crônicas de Nárnia",
		subtitle: "Príncipe Caspian",
		description: "Um ano após a sua última aventura, os irmãos Pevensie regressam à terra mágica de Nárnia e descobrem que 1300 anos se passaram. Nárnia está em guerra novamente e os irmãos unem forças com o Príncipe Caspian para derrotar o maldoso Rei Miraz e restaurar a paz.",
		src: "https://drive.google.com/file/d/1QTuiHDqlaez2Zgeyr4zQE5__jMBU_DTx/preview",
		duration: "2h 30m",
		genero: {
			gen1:"Fantasia",
			gen2:"Aventura",
			gen3:"",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F10wallpaper.com%2Fwallpaper%2F1440x900%2F1107%2FThe_Chronicles_of_Narnia_3_The_Voyage_of_the_Dawn_Treader_Movie_Wallpapers_12_1440x900.jpg&f=1&nofb=1&ipt=d13ffd297d10d2b27b374aa5e36dd03ac2df4b654b464ed4480078dc95c749e5&ipo=images",
		title: "As Crônicas de Nárnia",
		subtitle: "A Viagem do Peregrino da Alvorada",
		description: 'Lucy, Edmund e Eustace se encontram com o rei Caspian e outros amigos e começam uma nova aventura a bordo do navio "O Peregrino da Alvorada" para encontrar os Lordes Desaparecidos de Telmar. Lá, encaram guerreiros, dragões, anões e tritões e tentam salvar a terra mágica.',
		src: "https://drive.google.com/file/d/18Vf0d5dsP0QNFwfirjtzKnoE6rSLIj2B/preview",
		duration: "1h 53m",
		genero: {
			gen1:"Fantasia",
			gen2:"Aventura",
			gen3:"",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Foq3IOr7QvEmei0eXsXacqaMPqlV.jpg&f=1&nofb=1&ipt=0b941b5aaab3d17e759d3901a216067b916d36c9530832ea39e6c542927db0ab&ipo=images",
		title: "As Panteras",
		subtitle: "",
		description: "Três detetives particulares de elite, lindas, sensuais e brilhantes trabalham para Charlie. Especialistas em artes marciais, estão armadas com alta tecnologia e veículos de alto desempenho. Usando uma série de disfarces, elas utilizam suas habilidades para resgatar um futuro bilionário que foi sequestrado, tentando evitar que seu software secreto de identificação de voz caia em mãos erradas.",
		src: "https://drive.google.com/file/d/101Dn13FS0PJ93wkPDfpfSbz-WtRsLDbi/preview",
		duration: "1h 38m",
		genero: {
			gen1:"Ação",
			gen2:"Comédia",
			gen3:"",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fea%2F9f%2F49%2Fea9f4955e3fb3e967d60216f4f365359.jpg&f=1&nofb=1&ipt=2f265396cc92d2190e54df0af3a580baca78fc730acaafe5eb99b391d810e36d&ipo=images",
		title: "As Panteras",
		subtitle: "Detonando",
		description: "Um arquivo do sistema de proteção a testemunhas é roubado do governo estadunidense e, em seguida, cinco participantes do programa são assassinados. A Agência de Detetives Charles Townsend é contratada para desvendar o caso, e o trio Natalie, Dylan e Alex é destacado para a investigação. A principal suspeita dos crimes é uma ex-pantera que trocou a agência pelo mundo do crime.",
		src: "https://drive.google.com/file/d/1LNZuQzTj5lciJRdOVIqT0dH-JBmK6VrP/preview",
		duration: "1h 52m",
		genero: {
			gen1:"Ação",
			gen2:"Comédia",
			gen3:"",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F-IskQidAPKBg%2FU9ZcYyxL5GI%2FAAAAAAAAAu8%2FQu_rKe1KvwE%2Fs1600%2FFree-Divergent-movie-Desktop-Themes-wallpapers.jpg&f=1&nofb=1&ipt=87ec79446ad9e42463d92d9026ba6a7bb94c3f3d9b6feeb21d41835e1fb615e4&ipo=images",
		title: "Divergente",
		subtitle: "",
		description: "Na futurística cidade de Chicago, ao completar 16 anos, Beatrice precisa escolher entre as diferentes facções em que a cidade está dividida. Cada uma representa um valor diferente e, ao contrário de sua família, a jovem opta pela facção dos destemidos, a Audácia. Ela então se torna Tris e inicia uma jornada para afastar seus medos e descobrir quem realmente é. Durante essa jornada, acaba conhecendo o jovem Quatro, um rapaz experiente que tem o dom de intrigá-la e de encantá-la ao mesmo tempo.",
		src: "https://drive.google.com/file/d/1ot-xsUBc77ZXbJm7H5kzrg_YEArWMad4/preview",
		duration: "2h 19m",
		genero: {
			gen1:"Ação",
			gen2:"Ficção Científica",
			gen3:"",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhdqwalls.com%2Fdownload%2Fthe-divergent-series-allegiant-2016-movie-1920x1080.jpg&f=1&nofb=1&ipt=e59eaf982df7460718a3d86aac92b2f121cf7450ba5240c769ad2ff9c97a00cd&ipo=images",
		title: "Insurgente",
		subtitle: "",
		description: "Tris e Quatro agora são fugitivos perseguidos por Jeanine e os demais membros ambiciosos da Erudição, facção disposta a fazer tudo para capturá-los. O casal busca aliados e respostas nas ruínas da cidade de Chicago, tentando descobrir o que os familiares de Tris sacrificaram suas vidas para proteger. Tris aceita sua Divergência, mesmo sem saber exatamente o que pode perder ao fazê-lo. Em tempos de guerra, segredos emergem e as escolhas se tornam mais determinantes.",
		src: "https://drive.google.com/file/d/1dLKEn0wrt_NebffGm3mAv12ORavpwC1d/preview",
		duration: "1h 59m",
		genero: {
			gen1:"Ação",
			gen2:"Ficção Científica",
			gen3:"",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftrecobox.com.br%2Fwp-content%2Fuploads%2F2022%2F03%2Ffilme-the-batman.png&f=1&nofb=1&ipt=93cf34cdee07352aaa4995c381c63fb907a413a95ff49e2f38896145b24edeae&ipo=images",
		title: "Batman",
		subtitle: "O Cavaleiro das Trevas",
		description: "Batman tem conseguido manter a ordem em Gotham com a ajuda de Jim Gordon e Harvey Dent. No entanto, um jovem e anárquico criminoso, conhecido apenas como Coringa, pretende testar o Cavaleiro das Trevas e mergulhar a cidade em um verdadeiro caos.",
		src: "https://drive.google.com/file/d/1146J0pg5alhED9xfYS4g1vynWA_VMt6E/preview",
		duration: "2h 32m",
		genero: {
			gen1:"Ação",
			gen2:"Suspense",
			gen3:"DC",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcloud.filmfed.com%2Fmovies%2Fimages%2Fl_8d650682-811a-482e-8524-61af9d77328b.jpg&f=1&nofb=1&ipt=547967e92aad84e496adbad378971012a2cf97fd65a997c697b26ef265ee1048&ipo=images",
		title: "As Branquelas",
		subtitle: "",
		description: "Dois irmãos agentes do FBI, Marcus e Kevin Copeland, acidentalmente evitam que bandidos sejam presos em uma apreensão de drogas. Como castigo, eles são forçados a escoltar um par de socialites nos Hamptons. Quando as meninas descobrem o plano da agência, elas se recusam a ir. Sem opções, Marcus e Kevin, dois homens negros, decidem fingir que são as irmãs e se transformam em um par de loiras.",
		src: "https://drive.google.com/file/d/1avm4yXd2tg1lZKy00yZRknboNv2Dxqpi/preview",
		duration: "1h 49m",
		genero: {
			gen1:"Comédia",
			gen2:"Ação",
			gen3:"",
			gen4:""
		}
	},
	{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.filmofilia.com%2Fwp-content%2Fuploads%2F2012%2F08%2FThe-Perks-of-Being-a-Wallflower_13.jpg&f=1&nofb=1&ipt=e1aaf0deb7b840abf7e5cc087c36a40c5d6a27c0b5598d2b7033a6491e5f1765&ipo=images",
		title: "As Vantagens de ser invisível",
		subtitle: "",
		description: "Um jovem tímido se esconde em seu próprio mundo até conhecer dois irmãos que o ajudam a viver novas experiências. Embora esteja feliz nessa nova fase, ele não esquece as tristezas do passado, que têm origem em uma chocante revelação.",
		src: "https://drive.google.com/file/d/12cnRyPwcXDTbbU26MF7wXhz9cnotdEoX/preview",
		duration: "1h 45m",
		genero: {
			gen1:"Drama",
			gen2:"Romance",
			gen3:"",
			gen4:""
		}
	},
	{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cafecomfilme.com.br%2Fmedia%2Fk2%2Fgalleries%2F46%2F06.jpg&f=1&nofb=1&ipt=b8781ed855e6ca7a7ecfc1d0c00bfad2c9bb40fb1d71599f60f0301f6e531786&ipo=images",
		title: "A Mentira",
		subtitle: "",
		description: "Estimulada pela popular melhor amiga a revelar detalhes de seu fim de semana entediante, Olive, uma adolescente certinha, decide apimentar um pouco os detalhes contando uma pequena mentira sobre a perda de sua virgindade. Quando a bisbilhoteira da escola ouve a conversa e espalha para todo o campus, Olive fica famosa repentinamente, mas pelas razões erradas.",
		src: "https://drive.google.com/file/d/1fCLpDLk_U1_OFzGcYxR_UZMtAUoS4CZJ/preview",
		duration: "1h 32m",
		genero: {
			gen1:"Comédia",
			gen2:"Romance",
			gen3:"",
			gen4:""
		}
	},
    {
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fportalpopline.com.br%2Fwp-content%2Fuploads%2F2024%2F01%2Fmeninas-malvadas.webp&f=1&nofb=1&ipt=558410a02a5e50885849bd339451c15eda06b43091bce6d6c58084f9aacd017e&ipo=images",
		title: "Meninas Malvadas",
		subtitle: "O Musical",
		description: "Uma nova aluna do ensino médio enfrenta a ira de uma garota popular e de seus amigos.",
		src: "https://drive.google.com/file/d/1SVH0UjmeRTKi4KEHu7PDJ_clFxY7CRXG/preview",
		duration: "1h 53m",
		genero: {
			gen1:"Comédia",
			gen2:"Musical",
			gen3:"",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hdwallpapers.in%2Fdownload%2Fbrad_pitt_in_ad_astra_5k-1920x1080.jpg&f=1&nofb=1&ipt=fde51e7bcfc1168b426a8d438e27db6b37f057284088dc1aeb365f6d1ec9e7a4&ipo=images",
		title: "Ad Astra",
		subtitle: "",
		description: "Um homem viaja pelo interior de um sistema solar sem lei para encontrar seu pai desaparecido, um cientista renegado que representa uma ameaça à humanidade.",
		src: "https://drive.google.com/file/d/1Odx1C3GCjfO0SqGu_BYmu4hfWxGGtH47/preview",
		duration: "2h 03m",
		genero: {
			gen1:"Ficção Científica",
			gen2:"Aventura",
			gen3:"",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.themoviedb.org%2Ft%2Fp%2Foriginal%2FeShw0LB5CkoEfYtpUcXPD85oz5Q.jpg&f=1&nofb=1&ipt=6cc4970fa184f3e5e43fe0f0644d7f9d7b18606b6b3d89f6e2f6158ece943067&ipo=images",
		title: "Freaky",
		subtitle: "No corpo de um Assassino",
		description: "Um punhal místico faz com que Millie, uma garota de 17 anos, e um serial killer troquem de corpo. A jovem descobre que possui apenas 24 horas para ter seu corpo de volta antes que a troca se torne permanente e ela fique presa na forma de um maníaco de meia-idade para sempre. O grande problema é que, agora, ela parece uma psicopata imponente que é alvo de uma caçada humana por toda a cidade.",
		src: "https://drive.google.com/file/d/1916cSKK_WgIgAhixkCmnTG6mCW_Hhxuf/preview",
		duration: "1h 42",
		genero: {
			gen1:"Comédia",
			gen2:"Terror",
			gen3:"",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F42%2Ffa%2F0f%2F42fa0ff0e44f77bf12ebb35dd0b48cbe.jpg&f=1&nofb=1&ipt=7ebfd8b657b84a95e5f64857bdb2ea14730c935583ea833606f0311fad10b692&ipo=images",
		title: "Efeito Borboleta",
		subtitle: "",
		description: "O estudante universitário Evan Treborn está aflito com dores de cabeça tão fortes que frequentemente desmaia. Enquanto está inconsciente, Evan pode viajar de volta no tempo para momentos de dificuldades na infância. Ele também pode alterar o passado para os amigos, como Kayleigh, que foi molestada pelo pai. Porém ao mudar o passado, ele pode alterar o presente, o que leva Evan a se encontrar em um pesadelo de realidades alternativas, incluindo uma onde ele está preso.",
		src: "https://drive.google.com/file/d/1aE2DlzYcggiBH41rG-ZfU_oAtzGUBEyo/preview",
		duration: "1h 59m",
		genero: {
			gen1:"Suspense",
			gen2:"Ficção Científica",
			gen3:"",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fobservatoriodatv.uol.com.br%2Fwp-content%2Fuploads%2F2019%2F08%2Fcropped-blogd-kong-ilha-da-caveira.jpg&f=1&nofb=1&ipt=86987ecaad1f2f87983d2d4b580a88ee9367f9e3dd1f2311d9d1082a2356f760&ipo=images",
		title: "Kong",
		subtitle: "A ilha da Caveira",
		description: "Um ex-militar viaja com um grupo de desbravadores até a mítica Ilha da Caveira, onde seu irmão desapareceu. A equipe de exploradores se aventura nas profundezas da ilha desconhecida, sem saber que está entrando nos domínios do mítico Kong.",
		src: "https://drive.google.com/file/d/1jjYvUOIhnyhNkO4ulbKWI8U82rXerPxC/preview",
		duration: "1h 58m",
		genero: {
			gen1:"Ação",
			gen2:"Aventura",
			gen3:"",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-9mtvxDVQfvY%2FU3Va12hNxJI%2FAAAAAAAAJr0%2FIgnfFe90mNM%2Fs2560%2Fgodzilla-2014-picture-movie-hd-1920x1080.jpg&f=1&nofb=1&ipt=e5485de2b1c71a7e13ad643ee22417068c0e7fbbdb3ef5760bbe2820f6b83fc7&ipo=images",
		title: "Godzilla",
		subtitle: "",
		description: "Um especialista em bombas da marinha norte-americana acaba de se reunir com a família em São Francisco, Estados Unidos, quando é forçado a ir para o Japão para ajudar seu pai. Logo, os dois se deparam com um grande acontecimento: Godzilla, o rei dos monstros, surge do mar para combater criaturas inimigas. Em uma luta pela supremacia, os monstros ameaçam a sobrevivência da humanidade. Por onde passam, deixam um rastro de destruição, rumo ao local da batalha final: São Francisco.",
		src: "https://drive.google.com/file/d/1fHasj8EbVXToBIth-YxiiWBJDc4MBMyv/preview",
		duration: "2h 03m",
		genero: {
			gen1:"Ação",
			gen2:"Ficção Científica",
			gen3:"",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.oantena.com.br%2Fwp-content%2Fuploads%2F2023%2F09%2FPoster-Oficial-1-scaled-e1695338835358.jpeg&f=1&nofb=1&ipt=be4e1261326e5f1213c2b8b68e3a1f9704f602d45aba613300a7f6f8eae2b46b&ipo=images",
		title: "Jogos Vorazes",
		subtitle: "A Cantiga dos Passaros e das Serpentes",
		description: "Anos antes de se tornar o presidente tirânico de Panem, Coriolanus Snow, de 18 anos, vê uma chance de mudar sua sorte quando se torna o mentor de Lucy Gray Baird, o tributo feminino do Distrito 12.",
		src: "https://drive.google.com/file/d/1bFkzQ7AuB_A_ySyX7JB9v3G8QTuna0MV/preview",
		duration: "2h 37m",
		genero: {
			gen1:"Ação",
			gen2:"Suspense",
			gen3:"",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Faodisseia.b-cdn.net%2Fwp-content%2Fuploads%2F2015%2F11%2FJogos-Vorazes-scaled.jpg&f=1&nofb=1&ipt=d646cd3ab39e524b51b20e18b54a9bed69b6d9a866517029e4d3e41eb5b134d1&ipo=images",
		title: "Jogos Vorazes",
		subtitle: "A Esperança - parte 2",
		description: "Katniss e seus amigos Peeta, Gale e Finnick embarcam em sua última missão: organizar uma resistência contra o presidente e libertar o povo de Panem. A coragem de Katniss faz renascer a esperança em um país disposto a se livrar da opressão.",
		src: "https://drive.google.com/file/d/1UquFsUSu4iJAu75FqxPiZzsTkTvjWvTE/preview",
		duration: "2h 16m",
		genero: {
			gen1:"Ação",
			gen2:"Suspense",
			gen3:"Ficção Científica",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs2.glbimg.com%2FEATpCIuUlOorUhNzqPEqmHxAIGU%3D%2Fsmart%2Fe.glbimg.com%2Fog%2Fed%2Ff%2Foriginal%2F2014%2F09%2F13%2Fabre_j-law-esperanca-parte-1-cartaz.jpg&f=1&nofb=1&ipt=b4e733f906c64bf16e4f22cf94365c10d81d8609fe73fb84c3606c23ab70b8fe&ipo=images",
		title: "Jogos Vorazes",
		subtitle: "A Esperança - parte 1",
		description: 'Após sobreviver à temível arena dos Jogos Vorazes, Katniss Everdeen está desanimada e destruída. Depois que a Capital reduziu o Distrito 12 a destroços, ela se refugiou no Distrito 13. Peeta Mellark foi submetido a uma lavagem cerebral, e agora está sob o domínio de Snow. Então, a presidência quer que Katniss lidere uma "resistência" e mobilize a população em uma empreitada que irá colocá-la no centro da trama para desmascarar Snow.',
		src: "https://drive.google.com/file/d/1yOHRP2ZT6nr5HjoThQQAkLYuaCCpKa0j/preview",
		duration: "2h 02m",
		genero: {
			gen1:"Ação",
			gen2:"Ficção Científica",
			gen3:"Suspense",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.entrandonumafria.com.br%2Fwp-content%2Fuploads%2F2013%2F10%2FJogos-Vorazes-Em-Chamas-destaque-01.jpg&f=1&nofb=1&ipt=3f88a3928ce6a41e1ba692728014f3766754c65ea1e9a82a0de82beb5251e103&ipo=images",
		title: "Jogos Vorazes",
		subtitle: "Em Chamas",
		description: "Após saírem vencedores da última edição dos Jogos Vorazes, as atitudes desafiadoras de Katniss e Peeta acabam inspirando uma rebelião contra a opressiva Capital. No entanto, os dois são obrigados a participarem de uma edição especial do torneio, o Massacre Quaternário, que acontece apenas a cada 25 anos, e reúne vencedores das edições anteriores.",
		src: "https://drive.google.com/file/d/16o3licpSEwrWlQDuAgEHLmLmXR_UYbGf/preview",
		duration: "2h 26m",
		genero: {
			gen1:"Ação",
			gen2:"Ficção Científica",
			gen3:"Suspense",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcapricho.abril.com.br%2Fwp-content%2Fuploads%2F2017%2F01%2Fjennifer-lawrence-jogos-vorazes.jpg&f=1&nofb=1&ipt=5945bf07178de9aa5c708b89b1f36131ef1cb5cfe7ed7a56c6d3b3408378f71c&ipo=images",
		title: "Jogos Vorazes",
		subtitle: "",
		description: "Na região antigamente conhecida como América do Norte, a Capital de Panem controla 12 distritos e os força a escolher um garoto e uma garota, conhecidos como tributos, para competir em um evento anual televisionado. Todos os cidadãos assistem aos temidos jogos, no qual os jovens lutam até a morte, de modo que apenas um saia vitorioso. A jovem Katniss Everdeen, do Distrito 12, confia na habilidade de caça e na destreza com o arco, além dos instintos aguçados, nesta competição mortal.",
		src: "https://drive.google.com/file/d/1BMXk1Z3oSvJyLmVM4Lc_pEQph6oa-Kt-/preview",
		duration: "2h 22m",
		genero: {
			gen1:"Ação",
			gen2:"Suspense",
			gen3:"Ficção Científica",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fuploads.alternativanerd.com.br%2Fwp-content%2Fuploads%2F2020%2F08%2FAfter-Movie-Poster-Cropped-1536x768.jpg&f=1&nofb=1&ipt=7bf6a8a8f4a9fb9be1739e17fe44d3293d830e6e41f16d0c3592065139496db7&ipo=images",
		title: "After",
		subtitle: "Para Sempre",
		description: "Hardin precisa terminar seu livro, mas está sofrendo com um bloqueio criativo total. Ainda ligado ao passado, ele descobre que Tessa está em Portugal e parte para encontrá-la. Mas ele logo percebe que deve mudar de atitude se quiser recuperá-la.",
		src: "https://drive.google.com/file/d/1jksPTMGdFNiN7Dm3bFgpn_p9qnuhD8Q1/preview",
		duration: "1h 33m",
		genero: {
			gen1:"Romance",
			gen2:"Suspense",
			gen3:"",
			gen4:""
		}
	},{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fosfilmesdokacic.files.wordpress.com%2F2022%2F11%2Fa-baleia_os-filmes-do-kacic_critica_review_xlg.jpg&f=1&nofb=1&ipt=81f1ae94178a1530b9f2ef60368d205c6c524ac6ff3a19557d1cc53aba2f53e6&ipo=images",
		title: "A Baleia",
		subtitle: "",
		description: "Homem obeso e solitário busca se reconectar com filha adolescente em uma última chance de redenção.",
		src: "https://drive.google.com/file/d/1z5dHSZXyRmtxLo3l8EKwvmTRR3k0643F/preview",
		duration: "1h 56m",
		genero: {
			gen1:"Drama",
			gen2:"",
			gen3:"",
			gen4:""
		}
	},
    {
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fwww.meugamer.com%2Fwp-content%2Fuploads%2F2018%2F08%2F55eNvuXNumZ3oDmtcsJvzGhKyLZ.jpg%3Ffit%3D2560%252C1440%26ssl%3D1&f=1&nofb=1&ipt=734d18ab37d4cbde3e9939a26acdaa97794fa5283bfcd9f6d2c0655358ac6aa2&ipo=images",
		title: "O Protetor 2",
		subtitle: "",
		description: "Criminosos assassinam Susan Plummer, a melhor amiga de Robert McCall e sua ex-colega de trabalho. Obcecado, Robert pensa apenas em eliminar o bando de assassinos profissionais que destruiu sua vida.",
		src: "https://drive.google.com/file/d/1OKbHkwocijzOwUv11v712z5tL0bsbRgM/preview",
		duration: "2h 1m",
		genero: {
			gen1:"Ação",
			gen2:"Suspense",
			gen3:"",
			gen4:""
		}
	},
	{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.guiadasemana.com.br%2FcontentFiles%2Fsystem%2Fpictures%2F2014%2F9%2F120583%2Foriginal%2Fprotetor-b.jpg&f=1&nofb=1&ipt=1b72d2f5ee87bd76a8cc86eb4a3f44d9fd82fda575239725556a95e3b9b6a1b5&ipo=images",
		title: "O Protetor",
		subtitle: "",
		description: "O ex-agente secreto Robert McCall acredita que seu passado ficou para trás e tenta viver uma nova vida. Ele conhece Alina, uma jovem que está sob poder de uma quadrilha russa, e simplesmente não consegue ignorá-la. Munido de suas extraordinárias habilidades, ele ressurge como um verdadeiro anjo vingador. Longe da aposentadoria e com um novo desejo de fazer justiça, McCall decide ajudar quem foi brutalizado e oprimido.",
		src: "https://drive.google.com/file/d/1CiXc7BVMOQVCtXe71Hr3979C18qo7Adk/preview",
		duration: "2h 12m",
		genero: {
			gen1:"Ação",
			gen2:"Suspense",
			gen3:"",
			gen4:""
		}
	},
    {
		background:"https://pbs.twimg.com/media/GKBy6CoXwAAgVup.jpg:large",
		title: "Megamente",
		subtitle: "Contra O Sindicato da Perdição",
		description: "Megamente precisa manter as más aparências até conseguir reunir seus amigos para impedir que seus antigos companheiros de equipe malígnos levem Metro City para a lua.",
		src: "https://drive.google.com/file/d/129lxcBaJKxAMAEN6DHbl8ltQkN1B0Z8f/preview",
		duration: "1h 25m",
		genero: {
			gen1:"Animação",
			gen2:"Comédia",
			gen3:"",
			gen4:""
		}
	},
    {
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.1zoom.me%2Fbig2%2F241%2F263052-Sepik.jpg&f=1&nofb=1&ipt=4ab668457e1b8487e8b2dac30e7ace5967e2d0470487c8d2cb895e2dc539a7cb&ipo=images",
		title: "Megamente",
		subtitle: "",
		description: "O vilão Megamente finalmente derrota seu rival, mas percebe que sua vida perdeu sentido sem ninguém para enfrentá-lo. Agora, ele terá que encontrar um novo propósito.",
		src: "https://drive.google.com/file/d/1VkhYc45C26xISAja7s6KsYEuFMhexw-7/preview",
		duration: "1h 35m",
		genero: {
			gen1:"Animação",
			gen2:"Comédia",
			gen3:"",
			gen4:""
		}
	},
    {
		background:"https://cinemacomrapadura.com.br/imagens/2020/03/20200327-seven-critica.jpg",
		title: "Seven",
		subtitle: "Os sete crimes capitais",
		description: "A ponto de se aposentar, o detetive William Somerset pega um último caso, com a ajuda do recém-transferido David Mills. Juntos, descobrem uma série de assassinatos e logo percebem que estão lidando com um assassino que tem como alvo pessoas que ele acredita representar os sete pecados capitais.",
		src: "https://drive.google.com/file/d/1tpDCk2AQ1Vqxg-N-BQdVfWZ1Lj146wLa/preview",
		duration: "2h 07m",
		genero: {
			gen1:"Suspense",
			gen2:"Crime",
			gen3:"Mistério",
			gen4:""
		}
	},
    {
		background:"https://epipoca.com.br/wp-content/uploads/2021/06/Stephen-Amell-e-Robbie-Amell-em-Code-8-Renegados.jpg",
		title: "Code 8",
		subtitle: "Renegados - Parte 2",
		description: "Em uma cidade onde pessoas com superpoderes são vigiadas e oprimidas, um ex-criminoso se une a um traficante para proteger uma adolescente de um policial corrupto.",
		src: "https://drive.google.com/file/d/1KlI6MA-cUTT2thodBQstKk8i1ezuNVfs/preview",
		duration: "1h 40m",
		genero: {
			gen1:"Ação",
			gen2:"Suspense",
			gen3:"Super poderes",
			gen4:""
		}
	},
    {
		background:"https://epipoca.com.br/wp-content/uploads/2021/06/Stephen-Amell-e-Robbie-Amell-em-Code-8-Renegados.jpg",
		title: "Code 8",
		subtitle: "Renegados",
		description: "Em um mundo em que 4% da população nasce com poderes sobrenaturais, um jovem usa seu dom para cometer uma série de pequenos crimes, mas é caçado por uma força policial militarizada.",
		src: "https://drive.google.com/file/d/1JCiiYuVCrN7_4SJXf5ue9EMoxwZoqOa2/preview",
		duration: "1h 38m",
		genero: {
			gen1:"Ação",
			gen2:"Ficção Científica",
			gen3:"Super poderes",
			gen4:""
		}
	},
    {
		background:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmy5EMC2HhYpo4DNKTWM0abdYOUEexlgrIYP-aQ7V8usflH5l6SZQzrvzRAtVWDgOvfF4EqG--iWbbOddTLY2JYpR3ctCeE_cEkIW9HWKarP0mzsf1ENkogqRSo4brDfjYbQgvpbpzSkgCgr_0mTNnAACDI4ZU5g1NApGUte1bevkAYnzN2V762ZI2Gg/s1200/jenna-ortega-x.jpg",
		title: "X - A Marca da Morte",
		subtitle: "",
		description: "Em 1979, um grupo de jovens cineastas partiu para fazer um filme adulto na zona rural do Texas, mas quando seus anfitriões os pegam em flagrante, o elenco logo se vê em uma luta desesperada por suas vidas.",
		src: "https://drive.google.com/file/d/1xNVtrMddYTOia21OOxN1opSdxH9hVdyV/preview",
		duration: "1h 45m",
		genero: {
			gen1:"Terror",
			gen2:"Suspense",
			gen3:"Slasher",
			gen4:""
		}
	},
    {
		background:"https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZUOCWVLjOuLYQTE-1XDkofLwC8J_FDleJCBmnh9XpNlUFGLxbKA4fR6Qzy5VlI6ZzjDEnUbEbygcgMw9oPqW4yOM1w1_AxeIXI7.jpg?r=6ff",
		title: "Donzela",
		subtitle: "",
		description: "O casamento de uma jovem com um príncipe encantado se transforma em uma luta por sobrevivência quando ela é oferecida em sacrifício a um dragão",
		src: "https://drive.google.com/file/d/1q_YilO701nCgPzGdBoc8qWw7eHU4BQWr/preview",
		duration: "1h 49m",
		genero: {
			gen1:"Ação",
			gen2:"Aventura",
			gen3:"",
			gen4:""
		}
	},
    {
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fzk9ic7HDN5TsyGkfcMZxSiFcAr8.jpg&f=1&nofb=1&ipt=ab0a60ce92070ae9c0f7489f578e3c0af6dfda00de8f63cfa48c338ad9f310ae&ipo=images",
		title: "Maze Runner",
		subtitle: "A Cura Mortal",
		description: "Thomas parte em uma missão para encontrar a cura de uma doença mortal e descobre que os planos da C.R.U.E.L podem trazer consequências catastróficas para a humanidade.",
		src: "https://drive.google.com/file/d/1SxL-7m1TI-iG2O-S9oTeadhay7Gqjc4F/preview",
		duration: "2h 23m",
		genero: {
			gen1:"Ficção Científica",
			gen2:"Ação",
			gen3:"",
			gen4:""
		}
	},
    {
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cafecomfilme.com.br%2Fmedia%2Fk2%2Fgalleries%2F1973%2F04.jpg&f=1&nofb=1&ipt=76b0b19e672611bc86f7e08742636554d72e1a90dc0ed4944d08d15745610054&ipo=images",
		title: "Maze Runner",
		subtitle: "Prova de Fogo",
		description: "Depois de escapar do labirinto, Thomas e os garotos que o acompanharam em sua fuga encontram uma realidade bem diferente: a superfície da Terra foi queimada pelo Sol e eles precisam lidar com criaturas disformes chamadas Cranks.",
		src: "https://drive.google.com/file/d/1jLmSmAyDNsRtAh8O9uGC3U3ninLl15LS/preview",
		duration: "2h 11m",
		genero: {
			gen1:"Ficção Científica",
			gen2:"Ação",
			gen3:"",
			gen4:""
		}
	},
     {
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.themoviedb.org%2Ft%2Fp%2Foriginal%2FdlCvY72YBKxFSUk7ZOqasocoKWr.jpg&f=1&nofb=1&ipt=afc65c2edd91754b1b726181f84db1c930cb4271213c90550f8b319c716f7c1a&ipo=images",
		title: "Maze Runner",
		subtitle: "Correr ou Morrer",
		description: "Em um futuro apocalíptico, o jovem Thomas é escolhido para enfrentar o sistema. Ele acorda dentro de um escuro elevador em movimento e não consegue se lembrar nem de seu nome. Na comunidade isolada em que foi abandonado, Thomas conhece outros garotos que passaram pela mesma situação. Para conseguir escapar, ele precisa descobrir os sombrios segredos guardados em sua mente e correr muito.",
		src: "https://drive.google.com/file/d/1vE8bOHRd10dzVchyJI60tajEtpWHtkrQ/preview",
		duration: "1h 53m",
		genero: {
			gen1:"Ficção Científica",
			gen2:"Ação",
			gen3:"",
			gen4:""
		}
	},
    {
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.online-idol.com%2Fwp-content%2Fuploads%2F2023%2F12%2Fwc-38011-anyone-but-you-2023-synopsis.webp&f=1&nofb=1&ipt=8ab44c7411d816acd999905162c2f61ea2abd74c74656092dd39cbddfa154c16&ipo=images",
		title: "Todos menos você!",
		subtitle: "",
		description: "Bea e Ben, dois antigos colegas de faculdade, são forçados a conviver quando recebem o convite do casamento de um amigo em comum. Porém, quando descobrem que seus respectivos ex-namorados também vão à cerimônia, os dois decidem fingir ser um casal.",
		src: "https://drive.google.com/file/d/1lj1JXn2bTsvGbapCjobeCuj82Zyu-EbZ/preview",
		duration: "1h 43m",
		genero: {
			gen1:"Comédia",
			gen2:"Romance",
			gen3:"",
			gen4:""
		}
	},
    {
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.indianexpress.com%2F2024%2F02%2FArgylle-1600.jpg&f=1&nofb=1&ipt=829ef67ceef2f40d33d65a289648c26ccd4adc9bfdb4717ec374390af1284299&ipo=images",
		title: "Argylle",
		subtitle: "",
		description: "Uma autora reclusa que escreve romances de espionagem sobre um agente secreto e um sindicato global de espiões percebe que o enredo do novo livro que ela está escrevendo começa a espelhar eventos do mundo real, em tempo real.",		
		src: "https://drive.google.com/file/d/1L1JdL_izynjLRqqHEWenFkjkbCW3Efox/preview",
		duration: "2h 18m",
		genero: {
			gen1:"Suspense",
			gen2:"Ação",
			gen3:"",
			gen4:""
		}
	},
    {
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.olhardigital.com.br%2Fwp-content%2Fuploads%2F2021%2F10%2Fduna.jpg&f=1&nofb=1&ipt=c6a829559b69bb054e07a5812893005038ec1d637fe51cd6c97aed3ac569e62e&ipo=images",
		title: "Duna",
		subtitle: "",
		description: "Paul Atreides é um jovem brilhante, dono de um destino além de sua compreensão. Ele deve viajar para o planeta mais perigoso do universo para garantir o futuro de seu povo.",		
		src: "https://drive.google.com/file/d/1dbNMU0Fnru8yixXGQbZyHch4A7DVJhuW/preview",
		duration: "2h 34m",
		genero: {
			gen1:"Ficção Científica",
			gen2:"Ação",
			gen3:"Aventura",
			gen4:""
		}
	},
    {
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Funiversoheroico.com.br%2Fwp-content%2Fuploads%2F2021%2F09%2FFilme-Aquaman-2.jpg&f=1&nofb=1&ipt=bae8fed4ade9055f85abae8f5452ea86082539cd2fc8657a7d08631db218409f&ipo=images",
		title: "Aquaman 2",
		subtitle: "",
		description: "Um antigo poder é libertado e o herói Aquaman precisa fazer um perigoso acordo com um aliado improvável para proteger Atlântida e o mundo de uma devastação irreversível.",		
		src: "https://drive.google.com/file/d/1h0OyUDXZUrp0p7WWhdyLYpjTYVcP89M_/preview",
		duration: "Leg - 2h 04m",
		genero: {
			gen1:"DC",
			gen2:"Ação",
			gen3:"Fantasia",
			gen4:"Super Herói"
		}
	},
    {
		background:"https://img59.tokyvideo.com/videos/493/493076/previews/previews_0012_custom_1707528560.6635.jpg",
		title: "Upgrade",
		subtitle: "As cores do amor",
		description: "Ana, uma aspirante a estagiária de arte que é convidada para uma viagem de trabalho de última hora a Londres por seu chefe e acaba conhecendo o belo e rico William no avião.",		
		src: "https://drive.google.com/file/d/1asYDH3uOd0XOXECJC_LrkW1yMgU-BN13/preview",
		duration: "1h 45m",
		genero: {
			gen1:"Romance",
			gen2:"Comédia",
			gen3:"Lançamento",
			gen4:"Prime Video"
		}
	},
	{
        background:"https://i0.wp.com/oquartonerd.com.br/wp-content/uploads/2020/07/Thumbnail.jpg?fit=1920%2C1080&ssl=1",
        title: "Jogador Número 1",
		subtitle: "",
        description:"Em 2045, Wade Watts, assim como o resto da humanidade, prefere a realidade virtual do jogo OASIS ao mundo real. James Halliday, o excêntrico criador do jogo, morre e deixa sua fortuna inestimável para a primeira pessoa que descobrir a chave de um quebra-cabeça diabólico que ele arquitetou. Para vencer, Watts precisa abandonar a existência virtual e experimentar o amor e a realidade.",        
        src: "https://drive.google.com/file/d/1ogehUC8CXWagoPDKANzBZFT4KqxTu_TW/preview",
        duration: "2h 20m",
        genero: {
			gen1:"Ficção Científica",
			gen2:"Ação",
			gen3:"",
			gen4:""
		}
        
    },
	{
        background:"https://image.tmdb.org/t/p/original/yOm993lsJyPmBodlYjgpPwBjXP9.jpg",
        title: "Wonka",
		subtitle: "",
        description:"O jovem chocolateiro Willy Wonka tenta mudar o mundo com um delicioso pedaço de cada vez.",        
        src: "https://drive.google.com/file/d/1xwE81U7TF1VYCZoXew_y_nmBphJvm8zr/preview",
        duration: "1h 56m",
        genero: {
			gen1:"Fantasia",
			gen2:"Musical",
			gen3:"",
			gen4:""
		}
        
    },  
    {
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FTFTfzrkX8L7bAKUcch6qLmjpLu.jpg&f=1&nofb=1&ipt=cac02230e84e6b57e041e7b2cadbd7bbf4b4fcf6be359274cc38afc11da7b28c&ipo=images",
		title: "Missão Impossível",
		subtitle: "Acerto de Contas - Parte 1",
		description: "Ethan Hunt e sua equipe devem rastrear uma nova arma que pode ameaçar toda a humanidade se cair em mãos erradas. Com o destino do mundo em jogo, se inicia uma corrida mortal ao redor do globo. Confrontado por um inimigo misterioso e poderoso, Ethan é forçado a considerar que talvez nada importe mais do que a missão, nem mesmo as vidas daqueles com quem ele mais se importa.",		
		src: "https://drive.google.com/file/d/1hzxcRpOMzKccYTgjkrFPXUVURxrZ6uw-/preview",
		duration: "2h 43m",
		genero: {
			gen1:"Lançamento",
			gen2:"Ação",
			gen3:"Suspense",
			gen4:"Alta"
		}
	},
    {
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fthedisinsider.com%2Fwp-content%2Fuploads%2F2022%2F06%2Fimage0-2022-06-14T092638.174.jpeg%3Ffit%3D3264%252C1836%26ssl%3D1&f=1&nofb=1&ipt=8ae7d225eab372370b3c41a610c1879cf9ea482901003dc023ae2105a794c1ab&ipo=images",
		title: "The Marvels",
		subtitle: "",
		description: 'Quando suas obrigações a levam a uma fenda espacial anômala ligada a um revolucionário Kree, os poderes de Carol Danvers, a Capitã Marvel, se entrelaçam aos de Kamala Khan, a Ms. Marvel, e aos da sobrinha de Carol, a astronauta da S.A.B.E.R., Capitã Monica Rambeau. Juntas, esse trio improvável deve se unir para salvar o universo como "As Marvels".',		
		src: "https://drive.google.com/file/d/1hdBaMOEc-9DmaRYQVxvxr8Efa2bFFQVf/preview",
		duration: "1h 46m",
		genero: {
			gen1:"Marvel",
			gen2:"Super Herói",
			gen3:"Ação",
			gen4:"Aventura"
		}
	},
    {
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthemoviespace.de%2Fwp-content%2Fuploads%2F2021%2F03%2FZS-Justice-League-01-scaled.jpeg&f=1&nofb=1&ipt=998a363e1007aa578ad80bdde05af9fa93422d9745b45bb812999797312cabcf&ipo=images",
		title: "Liga da Justiça",
		subtitle: "Versão do Diretor Zack Snyder",
		description: "Impulsionado pela restauração de sua fé na humanidade e inspirado pelo ato altruísta do Superman, Bruce Wayne convoca sua nova aliada Diana Prince para o combate contra um inimigo ainda maior, recém-despertado. Juntos, Batman e Mulher-Maravilha buscam e recrutam com agilidade um time de meta-humanos, mas mesmo com a formação da liga de heróis sem precedentes o ataque ao planeta ainda pode ser catastrófico.",		
		src: "https://drive.google.com/file/d/1-k3rhJUWNF1htmeqtgHY4xLTkaPkRHDP/preview",
		duration: "4h 02m",
		genero: {
			gen1:"Alta",
			gen2:"Ação",
			gen3:"Aventura",
			gen4:"DC"
		}
	},    
    {
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fhn5TleW44PcZCejyz0BHdLch5yy.jpg&f=1&nofb=1&ipt=1b12df4fc13832960f1ca49b7313a9d295ec61530a454a1b3d8f574fcd8dd62a&ipo=images",
		title: "Homem-Aranha",
		subtitle: "Sem Volta pra Casa",
		description: "Peter Parker tem a sua identidade secreta revelada e pede ajuda ao Doutor Estranho. Quando um feitiço para reverter o evento não sai como o esperado, o Homem-Aranha precisa enfrentar inimigos de todo o multiverso.",		
		src: "https://drive.google.com/file/d/1-8aB2F3DILZLHOXBaYQJlitJsyOUBow7/preview",
		duration: "2h 28m",
		genero: {
			gen1:"Marvel",
			gen2:"Ação",
			gen3:"Ficção Científica",
			gen4:"Super Heroi"
		}
	},
	{
		background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.themoviedb.org%2Ft%2Fp%2Foriginal%2Fy2Ca1neKke2mGPMaHzlCNDVZqsK.jpg&f=1&nofb=1&ipt=51341d6c3ac1b3fd081f72923f7efce597680ed5f2b210be8d7e007cd703529e&ipo=images",
		title: "Trem-Bala",
		subtitle: "",
		description: "Em um trem-bala indo rapidamente de Tóquio a Morioka, cinco assassinos profissionais descobrem que possuem o mesmo objetivo",		
		src: "https://drive.google.com/file/d/17POcLiptxNITJe0vuYgQFQ0NVTnI0BUW/preview",
		duration: "2h 06m",
		genero: {
			gen1:"Ação",
			gen2:"Comédia",
			gen3:"",
			gen4:""
		}
	},
    {
        background: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fspotlight-br.cdn.telefonica.com%2Fcustomer%2Fv1%2Fsource%3Fimage%3Dhttp%3A%252F%252Fmedia.gvp.telefonica.com%252Fstoragearea0%252FIMAGES%252F00%252F16%252F70%252F16709971_8BC9045FC637EE58.jpg%26width%3D1400%26height%3D787%26resize%3DCROP%26format%3DJPEG&f=1&nofb=1&ipt=9ac4593379acb74f117941efb36264f25fe5fcad1b397259e2b92ca1fb5541f3&ipo=images",
        title: "Que Horas Eu Te Pego",
		subtitle: "",
        description: "Desesperada por dinheiro, uma mulher concorda em namorar o filho introvertido e desajeitado de 19 anos de um casal rico.",
        src: "https://drive.google.com/file/d/1hFctLD5GqlaG4uaZFeSxr3ufCimrSnIo/preview",
        duration: "1h 43m",
        genero: {
			gen1:"Comédia",
			gen2:"Romance",
			gen3:"",
			gen4:""
		}
    },
    {
        background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.themoviedb.org%2Ft%2Fp%2Foriginal%2FdjS3XxneEFjCM6VlCiuuN8QavE6.jpg&f=1&nofb=1&ipt=bd09333a354cc1fab3944c00393306a91b7710df541aa3b9efa62e9810f3fa68&ipo=images",        
        title: "Interestelar",
		subtitle: "",
        description: "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.",		
		src: "https://drive.google.com/file/d/1AENYKs3RgjwsMi0Y5-tv57DFNfnnAOJ_/preview",
		duration: "2h 50m",
        genero: {
			gen1:"Ação",
			gen2:"Drama",
			gen3:"Ficção científica",
			gen4:"Espaço"
		}
    },
    {
        background: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jornadageek.com.br%2Fwp-content%2Fuploads%2F2020%2F05%2FLiga-da-Justi%25C3%25A7a-Sombria-Guerra-de-Apokolips-imagem-2-scaled.jpg&f=1&nofb=1&ipt=dae4613fc976bb88c3488fa21dd23a2a6429e3bf11a0947c5c9864f30ffea4a2&ipo=images",
        title: "Liga da Justiça Sombria",
		subtitle: "Guerra Apokolips",
        description: "A Liga da Justiça sempre foi a primeira e última defesa da Terra, mas, com a chegada iminente de Darkseid, tudo está para mudar. Após a destruição da Terra, o grupo se reune para derrubar o tirano e salvar os membros remanescentes da equipe.",		
		src: "https://drive.google.com/file/d/14e0ij22Ekbj44qMQFh0-7NEtBH-zqVAG/preview",
		duration: "1h 30m",
        genero: {
			gen1:"DC",
			gen2:"Animação",
			gen3:"Ação",
			gen4:"Super Heroi"
		}
		
    },
    {
        background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpapersafari.com%2F41%2F1%2Fhj197K.jpg&f=1&nofb=1",
        title: "Vingadores",
		subtitle: "Ultimato",
        description:"Após Thanos eliminar metade das criaturas vivas, os sobreviventes têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o Titã louco.",		
		src: "https://drive.google.com/file/d/1kOzLxs0czJH75RUqMlTRzMdJ9ia6o1jh/preview",
		duration: "3h 00m",
        genero: {
			gen1:"Marvel",
			gen2:"Ação",
			gen3:"Super Heroi",
			gen4:""
		}
    },   
    {
        background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FrPpxrz8o0svAPCLucjsEdMXoDfX.jpg&f=1&nofb=1",
        title: "Venom",
		subtitle: "",
        description:"O jornalista investigativo Eddie Brock é possuído por uma forma alienígena simbionte, ganhando poderes-sobre humanos. Perverso, sombrio e alimentado pela raiva, Venom tenta controlar os novos e perigosos poderes inebriantes de Eddie.",		
		src: "https://drive.google.com/file/d/1PE_9Le9jjPrgeErtnL7MAK60Y8VmZ0G2/preview",
		duration: "1h 52m",
        genero: {
			gen1:"Marvel",
			gen2:"Ação",
			gen3:"Vilão",
			gen4:""
		}
    },
    {
        background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis3-ssl.mzstatic.com%2Fimage%2Fthumb%2Fn-SDGISRHduIj8VQVFjnHQ%2F2000x1125.jpg&f=1&nofb=1&ipt=6d7144229f000f25827a6c2ba596a75ab2a78ece24899efe93a51917fd2ab087&ipo=images",
        title: "O Senhor dos Aneis",
		subtitle: "As Duas Torres",
        description:"Após a captura de Merry e Pippy pelos orcs, a Sociedade do Anel é dissolvida. Frodo e Sam seguem sua jornada rumo à Montanha da Perdição para destruir o anel e descobrem que estão sendo perseguidos pelo misterioso Gollum. Enquanto isso, Aragorn, o elfo e arqueiro Legolas e o anão Gimli partem para resgatar os hobbits sequestrados e chegam ao reino de Rohan, onde o rei Theoden foi vítima de uma maldição mortal de Saruman.",		
		src: "https://drive.google.com/file/d/1I3HOyzouUFnJkdX1jAnchCoMZEM7YBlKVQ/preview",
        duration: "3h 55m",
        genero: {
			gen1:"Fantasia",
			gen2:"Aventura",
			gen3:"",
			gen4:""
		}
    },
	{
        background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fprod-ripcut-delivery.disney-plus.net%2Fv1%2Fvariant%2Fdisney%2F78808440059F7561ECAC91F356492B3A575A836A3A7641F359D98E946C8B4F0F%2Fscale%3Fwidth%3D1200%26aspectRatio%3D1.78%26format%3Djpeg&f=1&nofb=1&ipt=535c8d489f455af6bf13db2c15be400d9e0b731ae4c3ca8015d0f88c5244d35e&ipo=images",
        title: "Vingadores",
		subtitle: "Guerra Infinita",
        description:"Homem de Ferro, Capitão América, Thor, Hulk e os Vingadores se unem para combater o maligno Thanos. Em uma missão para coletar todas as seis joias do infinito, Thanos planeja usá-las para equilibrar a balança cósmica e fazer o que ele acredita ser o melhor para o universo.",		
		src: "https://drive.google.com/file/d/1cTsvQoeIvZhYxDgaewOdDJV2J4HciCQP/preview",
		duration: "2h 30m",
        genero: {
			gen1:"Marvel",
			gen2:"Ação",
			gen3:"Super Heroi",
			gen4:""
		}
    },
    {
        background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis3-ssl.mzstatic.com%2Fimage%2Fthumb%2FVideo123%2Fv4%2Fc9%2F29%2F90%2Fc92990e3-da89-bf54-2002-7bf25c06b8bb%2FNANA_1920x1080.jpg%2F1200x675.jpg&f=1&nofb=1&ipt=9e2a870a9d4d236837368b10971c6a41c83e0bbc612ab9b303f9a56b7ad055ff&ipo=images",
        title: "Nana",
		subtitle: "",
        description:"Duas garotas chamadas Nana se encontram em um trem rumo a Tóquio por acaso. Depois de uma série de coincidências, elas acabam vivendo juntas em um apartamento de número 707",		
		src: "https://drive.google.com/file/d/1VP4Rv-gVQv9lSGfa8Xv_krMgOt-qf41I/preview",
		duration: "2h 30m",
        genero: {
			gen1:"Romance",
			gen2:"Musical",
			gen3:"Japones",
			gen4:""
		}
    },
    {
        background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis2-ssl.mzstatic.com%2Fimage%2Fthumb%2FZ2Vypr5b9sc2w51Mjn0b1A%2F2000x1125.jpg&f=1&nofb=1&ipt=cb8de5688f4727bfffea37e78bd07dc0130c4e414cc77eaf115f141852e61206&ipo=images",
        title: "Drácula",
		subtitle: "A Historia Nunca Contada",
        description:"Os habitantes da Transilvânia sempre travaram batalhas épicas contra o Império Otomano até que foi feito um acordo no qual o rei local aceitou entregar centenas de crianças, dentre elas o filho de Vlad. Após dez anos, o rei turco exige mais crianças, só que, dessa vez, Vlad, agora nomeado príncipe, recusa-se a entregá-las, dando início a uma nova guerra. Mesmo sendo famoso por sua ferocidade nas batalhas, Vlad vai atrás de um ser das trevas para ganhar poderes sobre-humanos.",       
        src: "https://drive.google.com/file/d/0B_h5c5Md422hYnRsMDB3bXBsN3M/preview?resourcekey=0-AsTC4uGN7s6WUOaqTL_BTQ",
        duration: "1h 32m",
        genero: {
			gen1:"Ação",
			gen2:"Terror",
			gen3:"",
			gen4:""
		}        
    },
    {
        background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finmagi.sfo2.digitaloceanspaces.com%2Fmedia%2F457644%2Fyir5430WblZSZuIMd9C6pIZerfA.jpg&f=1&nofb=1&ipt=898606c5bf792c880f1287dc8e82819261cc086be6e1006f0c9f07932e4b7773&ipo=images",
        title: "Em Ritmo de Fuga",
		subtitle: "",
        description:"O talentoso motorista de fuga Baby confia nas batidas de sua própria trilha sonora para ser o melhor que existe. A música silencia um zumbido que o perturba desde um acidente na infância. Após conhecer a mulher dos seus sonhos, ele reconhece uma oportunidade de se livrar do estilo de vida questionável e recomeçar do zero. Obrigado a trabalhar para um chefão do crime, Baby lida com a música ao mesmo tempo em que um golpe fadado ao fracasso ameaça sua vida, seu amor e sua liberdade.",        
        src: "https://drive.google.com/file/d/0B_4lGDbhNmrDeXpuWlFMckVxcVk/preview?resourcekey=0-V-2JJYKmeQAc9m8E6402pA",
        duration: "1h 55m",
        genero: {
			gen1:"Ação",
			gen2:"Suspense",
			gen3:"",
			gen4:""
		}
        
    },
    {
        background:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-LzKy7BHV45Q%2FYQkHkBr_lVI%2FAAAAAAAAAKw%2FqQgUyPldRrcnDrH9o45hpmlr01L-jPMQgCLcBGAsYHQ%2Fs1920%2Fposter.jpg&f=1&nofb=1&ipt=164a1ed0e8d6df34f8c65978a568f23e98ea29c2ed29409a74e81f17a22e40d2&ipo=images",
        title: "Tempo",
		subtitle: "",
        description:"Uma família passa as férias em uma praia isolada, mas descobre que o local acelera o processo de envelhecimento, reduzindo o tempo de vida de todos a poucos dias.",        
        src: "https://drive.google.com/file/d/1ve34N2EvgvffaDei7JkWcIAWPmSjtzWc/preview",
        duration: "1h 48m",
        genero: {
			gen1:"Suspense",
			gen2:"Terror",
			gen3:"",
			gen4:""
		}
        
    },
    {
        background:"https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeTXUuPKirfRvhmqhLKluwgnzOI8xqn1IF3GGUtKQhVWS4r8zJ_R-ifeDF1dQu2NYfzi47M-hweOknNjrxMitxO1Rx_0odYEHPkV.jpg?r=615",
        title: "Ponte para Terabítia",
		subtitle: "",
        description:"Jess sente-se um estranho na escola e até mesmo em sua família. Durante todo o verão ele treinou para ser o garoto mais rápido da escola, mas seus planos são ameaçados por Leslie, que vence uma corrida que deveria ser apenas para garotos.",        
        src: "https://drive.google.com/file/d/1lGNHpX5XUBGWArq0eP-kMAwUTZdM0fSy/preview",
        duration: "1h 36m",
        genero: {
			gen1:"Fantasia",
			gen2:"Infântil",
			gen3:"Drama",
			gen4:""
		}
        
    }, 
    {   
        background: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcms.dmpcdn.com%2Fmovie%2F2019%2F04%2F29%2F8eab6b5f-a16a-4ffc-9f0e-dbf580f02229_original.jpg&f=1&nofb=1&ipt=2c662ba7fe99e3ee41f1924cecefe92156880a3ef83e916beceed6961a02fa23&ipo=images",
        title: "Escape Room",
		subtitle: "",
        description: "Seis estranhos estão em circunstâncias fora de controle e devem usar sua inteligência e encontrar as pistas para escapar ou morrer na tentativa.",        
        src: "https://drive.google.com/file/d/1KM4lBk8iCXTTBSHnV3z4vqbMV4zn9vNP/preview",
        duration: "1h 40m",
        genero: {
			gen1:"Suspense",
			gen2:"Terror",
			gen3:"",
			gen4:""
		}
        
        
    }    
    
	
];

export default cards;
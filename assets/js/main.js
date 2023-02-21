const jogadasCertas = [

	[0,1,2],
	[3,4,5],
	[6,7,8],

	[0,3,6],
	[1,4,7],
	[2,5,8],

	[0,4,8],
	[2,4,6],
];

const jogadorUm = "X";
const jogadorDois = "O";
let jogador = 1;
let endJogo = false;

let caixaJogadasUm = [];
let caixaJogadasDois = [];





const botoes = document.querySelectorAll(".btn");






botoes.forEach(function (btns, ind) {

	btns.addEventListener("click", (e) => {

		escreverJogada(e.target, ind);

		if (endJogo) {
			reniciar();
			return;
		}
	});


});











function escreverJogada (btn, btnInd) {

	switch (jogador) {
		case 1:
			if (btn.value.length > 0) {
				break;
			}

			btn.innerText = jogadorUm;
			btn.value = jogadorUm;
			++jogador;

			caixaJogadasUm.push(btnInd);

			if (caixaJogadasUm.length >= 3) {
				ganhou(caixaJogadasUm);
			}

			break;
		case 2:
			if (btn.value.length > 0) {
				break;
			}
			btn.innerText = jogadorDois;
			btn.value = jogadorDois;
			--jogador;
			caixaJogadasDois.push(btnInd);

			if (caixaJogadasUm.length >= 3) {
				ganhou(caixaJogadasUm);
			}

			break;
		default:
			alert("Error");
	}

	return 0;
}


function ganhou (jogadasJogador) {

	let ganho = false;

	for (let i = 0, c = 0; i < jogadasCertas.length; i++) {
		jogadasJogador.forEach(function (elements) {
			if (jogadasCertas[i].includes(elements)) {
				c += 1;
			}
		});

		if (c === 3) {
			alert(`ganhou`);
			endJogo = true;
			break;
		}

		c = 0;
	}
}



function reniciar () {

	botoes.forEach(function (btns, ind) {
		btns.value = "";
		btns.innerText = "";
	});

	caixaJogadasUm = [];
	caixaJogadasDois = [];

	jogador = 1;

	endJogo = false;
}





















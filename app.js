let imagem = document.getElementById("principal__container__imagem")
// let screenWidth = window.innerWidth;
let screenWidth = screen.width;

function alterarId(tag, texto1) {
	let campo = document.getElementById(tag);
	campo.innerHTML = texto1;
}

function criptografarTexto(texto) {
	let textoTemp = [];
	for (let i = 0; i < texto.value.length; i++) {
		if (texto.value[i] == "e") {
			textoTemp.push("enter");
		}
		else if (texto.value[i] == "i") {
			textoTemp.push("imes");
		}
		else if (texto.value[i] == "a") {
			textoTemp.push("ai");
		}
		else if (texto.value[i] == "o") {
			textoTemp.push("ober");
		}
		else if (texto.value[i] == "u") {
			textoTemp.push("ufat");
		}
		else {
			textoTemp.push(texto.value[i]);
		}

	}
	// console.log(texto.value.length)
	return textoTemp.join("");
}

function descriptografarTexto(texto) {
	let textoTemp = [];
	for (let i = 0; i < texto.value.length; i++) {
		if (texto.value[i] == "e" && texto.value[i + 1] == "n" && texto.value[i + 2] == "t" && texto.value[i + 3] == "e" && texto.value[i + 4] == "r") {
			textoTemp.push("e");
			i = i + 4;
		}
		else if (texto.value[i] == "i" && texto.value[i + 1] == "m" && texto.value[i + 2] == "e" && texto.value[i + 3] == "s") {
			textoTemp.push("i");
			i = i + 3;
		}
		else if (texto.value[i] == "a" && texto.value[i + 1] == "i") {
			textoTemp.push("a");
			i = i + 1;
		}
		else if (texto.value[i] == "o" && texto.value[i + 1] == "b" && texto.value[i + 2] == "e" && texto.value[i + 3] == "r") {
			textoTemp.push("o");
			i = i + 3;
		}
		else if (texto.value[i] == "u" && texto.value[i + 1] == "f" && texto.value[i + 2] == "a" && texto.value[i + 3] == "t") {
			textoTemp.push("u");
			i = i + 3;
		}
		else {
			textoTemp.push(texto.value[i]);
		}

	}
	// console.log(texto.value.length)
	return textoTemp.join("");
}

function validacao(textoTemp) {
	let valido = true;
	for (let i = 0; i < textoTemp.value.length; i++) {
		if (textoTemp.value[i] != " " && (textoTemp.value[i] < "a" || textoTemp.value[i] > "z")) {
			valido = false;
			return valido;
		}
	}
	return valido;
}


function resetar() {
	alterarId("saida__paragrafo", "Seu texto criptografado aparecerá aqui quando você fornecer dados de entrada!");
	// imagem.style.visibility = "visible";
	imagem.style.display = "block";
}

function criptografar() {
	let texto = document.getElementById("principal__container__entrada");
	if (texto.value.length > 0) {
		if (validacao(texto)) {
			let textoCriptografado = criptografarTexto(texto);
			alterarId("saida__paragrafo", textoCriptografado);
			// let imagem = document.getElementById("principal__container__imagem")
			// imagem.style.visibility = "hidden";
			if (screenWidth > 1100) {
				imagem.style.display = "none";
		}
		}
		else {
			alterarId("saida__paragrafo", "Somente letras minúsculas e espaços serão aceitos, sem caracteres especiais ou acentuação gráfica!");
			// let imagem = document.getElementById("principal__container__imagem")
			// imagem.style.visibility = "visible";
			if (screenWidth > 1100) {
				imagem.style.display = "block";
			}
		}
	}
	else {
		resetar();
	}


}

function descriptografar() {
	let texto = document.getElementById("principal__container__entrada");
	if (texto.value.length > 0) {
		if (validacao(texto)) {
			let textoDescriptografado = descriptografarTexto(texto);
			alterarId("saida__paragrafo", textoDescriptografado);
			// let imagem = document.getElementById("principal__container__imagem")
			// imagem.style.visibility = "hidden";
			if (screenWidth > 1100) {
				imagem.style.display = "none";
			}
		}
		else {
			alterarId("saida__paragrafo", "Somente letras minúsculas e espaços serão aceitos, sem caracteres especiais ou acentuação gráfica!");
			// let imagem = document.getElementById("principal__container__imagem")
			// imagem.style.visibility = "visible";
			console.log(screenWidth);
			if (screenWidth > 1100) {
				imagem.style.display = "block";
			}
		}
	}
	else {
		resetar();
	}

}

function copiar() {
	let temp = document.getElementById("saida__paragrafo");
	// temp.select();
	navigator.clipboard.writeText(temp.innerHTML);
}

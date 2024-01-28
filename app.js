function alterarId (tag, texto1) {
	let campo = document.getElementById(tag);
	campo.innerHTML = texto1;
}

function criptografarTexto(texto) {
	let textoTemp = [];
	for (let i=0; i < texto.value.length; i++ ) {
		if (texto.value[i] == "e"){
			textoTemp.push("enter");
		}
		else if (texto.value[i] == "i"){
			textoTemp.push("imes");
		}
		else if (texto.value[i] == "a"){
			textoTemp.push("ai");
		}
		else if (texto.value[i] == "o"){
			textoTemp.push("ober");
		}
		else if (texto.value[i] == "u"){
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
	for (let i=0; i < texto.value.length; i++ ) {
		if (texto.value[i] == "e" && texto.value[i+1] == "n" && texto.value[i+2] == "t" && texto.value[i+3] == "e" && texto.value[i+4] == "r"){
			textoTemp.push("e");
			i = i + 4;
		}
		else if (texto.value[i] == "i" && texto.value[i+1] == "m" && texto.value[i+2] == "e" && texto.value[i+3] == "s"){
			textoTemp.push("i");
			i = i + 3;
		}
		else if (texto.value[i] == "a" && texto.value[i+1] == "i"){
			textoTemp.push("a");
			i = i + 1;
		}
		else if (texto.value[i] == "o" && texto.value[i+1] == "b" && texto.value[i+2] == "e" && texto.value[i+3] == "r"){
			textoTemp.push("o");
			i = i + 3;
		}
		else if (texto.value[i] == "u" && texto.value[i+1] == "f" && texto.value[i+2] == "a" && texto.value[i+3] == "t"){
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



function criptografar() {
	let texto = document.getElementById("principal__container__entrada");
	// console.log(texto.value)
	let textoCriptografado = criptografarTexto(texto);
	alterarId("principal__container__saida", textoCriptografado);
}

function descriptografar() {
	let texto = document.getElementById("principal__container__entrada");
	// console.log(texto.value)
	let textoDescriptografado = descriptografarTexto(texto);
	alterarId("principal__container__saida", textoDescriptografado);
}



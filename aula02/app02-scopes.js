function scopes1() {
	"use strict"
	
	var x = 62972;
	for (var index = 0; index < 2; index++) {
		// xpto = 77; // ERRO de compilação. Falta: var, let ou const 
		var aux = "Ola";
		console.log(x + " " + aux);
	}
	console.log(x + " " + aux);
}

function scopes2() { // TEXAS
	var x = 62972;
	for (index2 = 0; index2 < 2; index2++) {
		aux2 = "Ola"; // DA ERRO em modo Strict
		console.log(x + " " + aux2);
	}
	console.log(x + " " + aux2);
}

function scopes3() {
	"use strict" // SEM strict dá erro de compilação porque não permite usar o LET sem strict
	
	var x = 62972;
	for (let index3 = 0; index3 < 2; index3++) {
		let aux3 = "Ola"; 
		console.log(x + " " + aux3);
	}
	console.log(x);
	// console.log(aux3); // aux3 desconhecido fora do bloco for
}



scopes1();
// console.log(x + " " + aux); // ERRO: Fora do Scope da função scopes

scopes2();
console.log(index2 + " " + aux2)

scopes3()
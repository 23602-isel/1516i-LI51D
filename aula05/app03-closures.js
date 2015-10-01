"use strict";

let funcs = []

for (let index = 0; index < 3; index++) {
	funcs.push(function(){
		console.log("I am index = " + index)
	})
}

funcs.forEach(elem => elem())

console.log("------------------------------------")

let i
for (i = 0; i < 3; i++) {
	funcs[i] = function(){
		console.log("I am index = " + i)
	}
}

funcs.forEach(elem => elem())

console.log("------------------------------------")

for (var x = 0; x < 3; x++) {
	funcs[x] = function(){
		console.log("I am index = " + x)
	}
}

funcs.forEach(elem => elem())



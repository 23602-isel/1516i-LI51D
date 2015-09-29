"use strict";

function f1() { console.log('f1') }
let refF1 = f1

let refF2 = function f2 () { console.log('f2') }

let refF3 = function () { console.log('f3')  } // Função anónima 

let refF4 = () => console.log('f4') // Arrow function -- Função anónima

console.log("------------------------------------------------")

f1()
refF1()
// f2() // f2 not defined
refF2()
refF3()
refF4()

console.log("------------------------------------------------")

console.log(f1.name)
console.log(refF2.name)
console.log(refF3.name)
console.log(refF4.name)

console.log("------------------------------------------------")

setTimeout(() => console.log("Ola1"), 2000) // passagem de uma função por parametro

setTimeout(function () {console.log("Ola2")}, 2500)
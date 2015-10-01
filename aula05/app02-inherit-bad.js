"use strict";

function Person() {}
Person.prototype.jump = function () { // 
		console.log("Jumping....")
}

function Student(nr, name){
	this.nr = nr
	this.name = name
}
Student.prototype.print = function () { // 
		console.log(this.nr + ": " + this.name)
}

let p2 = new Person()
let s3 = new Student(725371, 'Rosa Maria')

p2.jump()
// s3.jump() // excepção
s3.print()

// SO influenca os proximos objectos criados!!!!
// !!!! Não fazer
// s3 mantem-se igual
Student.prototype = new Person()  

p2.jump()
// s3.jump() // excepcao 
s3.print()  

// s4 e s5 tem o novo prototye
let s4 = new Student(657657, 'Jose fonseca')
let s5 = new Student(657657, 'Maria Papoila')
s4.jump()
// s4.print() // o novo prototype não tem o print()

// Adicionar comportamento a todos os objectos de um determinado tipo 
// em tempo de execução.
//
Student.prototype.dance = function() {console.log("Dancing...")}
s4.dance()
s5.dance()

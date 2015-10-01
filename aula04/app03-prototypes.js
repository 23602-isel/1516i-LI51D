"use strict";

let obj = {}

console.log(Object.getPrototypeOf(obj).toString())

function Student(nr, name){
	this.nr = nr
	this.name = name
	//  this.print = function() { console.log(this.nr + ": " + this.name) 	}
}

/* 
 * print é partilhado por todos os objectos criados a partir do
 * ctor Student
 */
Student.prototype.print = function printStudent() { // 
		console.log(this.nr + ": " + this.name)
}

let s1 = new Student(514341, 'Jose Manel')
let s2 = new Student(725371, 'Rosa Maria')

console.log(s1)
console.log(s2)

s1.print()     // lookup do método: 1) objecto 2) prototipo
// <=>
s1.constructor.prototype.print.call(s1) 

console.log("s1.print == s2.print: " + (s1.print == s2.print))

console.log("s1 instanceof Student: " + (s1 instanceof Student))


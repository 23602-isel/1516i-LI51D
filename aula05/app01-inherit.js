"use strict";

function Person() {}
Person.prototype.jump = function () { // 
		console.log("Jumping....")
}

function Student(nr, name){
	this.nr = nr
	this.name = name
}
Student.prototype = new Person()
Student.prototype.print = function () { // 
		console.log(this.nr + ": " + this.name)
}

let p1 = new Person()
let s1 = new Student(514341, 'Jose Manel')
let s2 = new Student(725371, 'Rosa Maria')

p1.jump()
s1.jump()
s1.print()

console.log("p1 instanceof Person: " + (p1 instanceof Person))
console.log("p1 instanceof Student: " + (p1 instanceof Student))

console.log("s1 instanceof Person: " + (s1 instanceof Person))
console.log("s1 instanceof Student: " + (s1 instanceof Student))


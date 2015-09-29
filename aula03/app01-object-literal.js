"use strict";

function makeStudent(nr, name) {
	return {
		nr: nr,
		name: name,
		print: function printStudent(){
			console.log(this.nr + ": " + this.name)
		}
	}
}

let s1 = makeStudent(514341, 'Jose Manel')
let s2 = makeStudent(725371, 'Rosa Maria')
s2.sports = ['football']

s1.print();
s2.print();

console.log("------------------------------------------------")
console.log("-------- Print s1 ------------------------------")

for (let prop in s1) {
	console.log(prop + " = "  + s1[prop])
}

console.log("------------------------------------------------")
console.log("-------- Print s2 ------------------------------")

for (let prop in s2) {
	console.log(prop + " = "  + s2[prop])
}

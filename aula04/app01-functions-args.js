"use strict";

function foo(p1, p2) {
	console.log(p1)
	console.log(p2)
	if(arguments.length > 2)
		console.log(arguments[2])
}

console.log('--------- 1 arg ---------------------')
foo("ola") // p2 fica undefined
console.log('--------- 2 arg ---------------------')
foo("ola", 8638763)
console.log('--------- 2 arg ---------------------')
foo(undefined, 8638763)
console.log('--------- 3 arg ---------------------')
foo("ola", 8638763, {nr: 825836832})
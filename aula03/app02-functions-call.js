"use strict";

let refFoo = function foo(){  // First-class object
	console.log(this)
} 

refFoo.id = 65736521
refFoo.sports = 'surf'
refFoo.sayOle = function () { console.log('Ole') }

console.log("------------------------------------------------")
console.log("-------- Print refFoo ------------------------------")

for (let prop in refFoo) {
	console.log(prop + " = "  + refFoo[prop])
}

console.log("------------------------------------------------")
console.log("-------- Call sayOle()  ------------------------------")

refFoo.sayOle()

console.log("------------------------------------------------")
console.log("-------- Invoke as a Function  -----------------")

refFoo()

console.log("------------------------------------------------")
console.log("-------- Invoke as a Method  -----------------")

let obj = {dummy : 'xpto'}
obj.bar = refFoo
obj.bar()

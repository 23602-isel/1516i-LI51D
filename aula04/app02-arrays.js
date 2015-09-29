"use strict";

let arr1 = ["abc", "abcd", "abcde", "abcdef"]

arr1.push("abcdefg")
arr1.push({})
arr1[9] = "abcdefghijkl"

console.log("arr length = " + arr1.length)

console.log('--------- All elements ---------------------')

arr1
	.forEach( s => console.log(s))

console.log('--------- Filter ---------------------')

arr1
	.filter( s => s.length % 2 == 0)
	.forEach( s => console.log(s))

console.log('--------- Removing  ---------------------')

arr1.splice(2,4)
arr1
	.forEach( s => console.log(s))
console.log(arr1.length)

console.log('--------- Removing  ---------------------')

// arr1[9] = undefined
arr1.pop()
console.log("arr length = " + arr1.length)

arr1
	.forEach( s => console.log(s))
	
console.log(undefined % 2) 
console.log(NaN == 0)




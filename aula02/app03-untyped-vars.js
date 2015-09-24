var x = 786876 // Number
console.log(x + " " + (typeof x))
x = true // Boolean
if(x) console.log(x + " " + (typeof x))
x = "Ola" // String
console.log(x + " " + (typeof x))
x = { nr: 78663, name: "Jose"} // Object
console.log(x)
console.log((typeof x))

x = () => console.log("ola") // Um objecto
console.log(x + " " + (typeof x))
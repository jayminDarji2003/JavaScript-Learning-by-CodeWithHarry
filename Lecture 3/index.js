// ? All about :- Let , Var , Const
// ? Let : let is a block scope 
// ? Var : var is global scope
// ? Const : once we declare, we can't change it
// ! Note :- Var is much used in JavaScript now days because it gives a Bug in out code.It is used before ES6.

console.log("All about Let, Var and Const");
var a = 45
var b = "jaymin"
let d = "dad"
const author = "darji jaymin"

console.log(b);
{
    let b = "this"
    console.log(b)
    let d = "jayy"
    console.log(d)
}

console.log(b)
console.log(d)
console.log(author)



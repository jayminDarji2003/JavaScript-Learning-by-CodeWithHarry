// ? All about Primitive Data types and Objects
// * There are 7 Primitive Data types
// ! Short Hand to remember this data types is as follows :-
    // NN BB SS U
    // * N : Number
    // * N : Null
    // * S : String
    // * S : Symbol
    // * B : Boolean 
    // * B : BigInt
    // * U : Undefined

// ! Syntax 
let a = 444; // number
let b = null; // null also be treated as object
let c = "Aditya"; // string
let d = Symbol("I'm a very good symbol"); // symbol
let e = true; // boolean, also be false
let f = BigInt("999999999999"); // bigInt
let g = undefined; // undefined

// printing all data
console.log("-------- Printing primitive data type -------")
console.log(a, b, c, d, e, f, g);  

// check which type of data Variable hold
console.log("------------ Printing type of Data of variable ------------")
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);


// ? Objects : Non-Primitive data type
const item = {
    jaymin : "jaymin - Darji",
    deep : "deep - patel",
    jeel : "jeel - prajapati",
    aditya : "aditya - patel"
}

console.log("----------- Printing objects Key value ----------");
console.log(item["jaymin"]);
console.log(item["deep"]);
        // Both are same to print or take value of Key.
console.log(item.jeel);
console.log(item.aditya);

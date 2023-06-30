// Lec 11 :- All about Function in js.

let a = 10
let b = 20
let c = 30

// Normal way of creating function
function average(x, y) {
    return (x + y) / 2;
}

// Arrow function method
const average2 = (x, y) => {
    return (x + y) / 2;
}

const hello = () =>{
    console.log("hello world!! , I'm jaymin darji");
    return "hii from jaymin";
}

// way 1
console.log("------------ way 1 -------------")
console.log("Average of a and b is : ", (a + b) / 2);
console.log("Average of b and c is : ", (b + c) / 2);
console.log("Average of a and c is : ", (a + c) / 2);

// way 2
console.log("------------ way 1 -------------")
console.log("Average of a and b is : ", average(a, b));
console.log("Average of b and c is : ", average(b, c));
console.log("Average of a and c is : ", average(a, c));
console.log("Average of a and c is : ", average2(a, c));

let h = hello();
console.log(h);


// Chapter 3 : Practice set

// Q.1
const obj = {
    jaymin: 99,
    deep: 98,
    jeel: 97,
    dev: 99,
    poonam: 90,
    gopi: 100,
    ayushi: 110
}

console.log("---------- Q.1 ------------")
for (let i = 0; i < Object.keys(obj).length; i++) {
    console.log("The marks of " + Object.keys(obj)[i] + " is " + obj[Object.keys(obj)[i]]);
}


// Q.2
console.log("---------- Q.2 ------------")
for (let key in obj) {
    console.log("The marks of " + key + " is ", obj[key]);
}


// Q.3
console.log("---------- Q.3 ------------")
/*
let cNumber = 76;
let i;
while (i != cNumber) {
    i = prompt("Enter a number :- ")
    console.log("Try again");
}
console.log("you have entered correct number");
*/

// Q.4
console.log("---------- Q.4 ------------")
const mean = (a, b, c, d, e) => {
    return (a + b + c + d + e) / 5;
}

console.log(mean(10, 20, 30, 40, 50));
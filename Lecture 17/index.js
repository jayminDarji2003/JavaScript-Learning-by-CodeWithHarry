// Array methods
let arr = [1, 2, 3, 43, 56, 76, 90];
console.log("--------- Array ----------");
console.log(arr);

// 1. toString()
// array converting to string
console.log("------- toString method -------");
let b = arr.toString();
console.log(b); 

// 2. join()
// join method join array item with a given symbol or num or character.
console.log("------- join method -------");
let c = arr.join("-")
console.log(c);
console.log("Type of c : " , typeof c);

// 3. pop()
// Pop method remove the last element of an array
// also return temoved element.
console.log("------- pop method -------");
let rem = arr.pop();
console.log(rem);
console.log(arr);

// 4. push()
// Pop method adds new element to the last of an array
// also return new length of an array.
console.log("------- push method -------");
let pp = arr.push(656);
console.log(pp);
console.log(arr);

// 5.shift()
// Shift method removes first element of an array
// also return it
console.log("------- shift method -------");
let st = arr.shift();
console.log(st);
console.log(arr);

// 6.unshift()
// Unshift method adds new element to the beginning of an array.
// also return new length of an array
console.log("------- unshift method -------");
let us = arr.unshift(654);
console.log("new array length is : " , us);
console.log(arr);
// Looping in Array.
let arr = [1, 2, 3, 4, 5];

// For loop : classical for loop
console.log("\n--------- for loop ---------");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// For in loop
console.log("\n--------- for in loop ---------");
for (let ele in arr) {
    console.log(ele);
}

// For of loop
console.log("\n--------- for of loop ---------");
for (let x of arr) {
    console.log(x);
}


// For each loop
// for each loop perform some operation through function
console.log("--------- for each loop ---------");
arr.forEach((element) => {
    console.log(element * element);  // logic of for each loop
});


// Array.from()
// convert any other type to array
let name = "jaymin";
console.log(typeof name);  // String
let aName = Array.from(name);
console.log(typeof aName); // array - object
console.log(aName);

// after converting to Array we can perform some operation
aName.sort();
console.log(aName);

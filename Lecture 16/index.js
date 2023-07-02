// Arrays in JS
// Array :- Arrays are variable which can hold more than one value.
// Array can hold all type of data.

const obj = {
    jaymin : 76,
    deep : 78,
    dev : 72,
    jeel : 65,
    kartik : 65
}

let marks_bca_4 = [61, 42, 63, 54, 65, null, false, "not present", obj];

console.log("------ Printing all the item of array -----")
console.log(marks_bca_4);
console.log("The length of arr is : ", marks_bca_4.length);

console.log("------ Printing specific item of array -----")
console.log(marks_bca_4[marks_bca_4.length-1]); // this will return object

marks_bca_4[7] = 70;
// console.log(marks_bca_4)
console.log(marks_bca_4[7]);

// Array is Object.
console.log(typeof marks_bca_4)

// Quick quize
console.log("------ Printing array value using For loop ------");
for(let i=0; i<marks_bca_4.length; i++){
    console.log(marks_bca_4[i]);
}

console.log("------ Printing array value using For of loop ------");
for(let arr in marks_bca_4){
    console.log(arr);
}
// Array advance methods
let arr = [211, 314, 65, 8, 287, 199];
console.log("------- array -------");
console.log(arr);

// 1. delete
// delete is an Operator which is used to delete an element of an Array.
console.log("--------- delete operator ----------");
let rEle = delete arr[3];
// console.log(rEle);  
// console.log(typeof rEle);
console.log(arr);

// 2. concate()
// Concate method concates arrays and make a new array

let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [7, 8, 9];
let newArr = a1.concat(a2, a3);
let newArr2 = a1.concat(a2);
let newArr3 = a1.concat("454", "tytyt", "797", false, 877, 787);
console.log(newArr);
console.log(newArr2);
console.log(newArr3);

// 3. sort()
// this method sort an array
// sort an Alphabatically order
console.log("--------- sort method ----------");
arr.sort();  // sort in ascending order
console.log("Sort alphabatically \n", arr);

// if we want to sort in Descending order then we have to make function
const compare = (a, b) => {
    return b - a;
}
const compare2 = (a, b) => {
    return a - b;
}
arr.sort(compare);
console.log("Sort descending order :- \n", arr);

arr.sort(compare2);
console.log("Sort ascending order :- \n", arr);

/*
 Logic are same for both 
    ascending order : a-b
    descending order : b-a
*/

// 4. reverse()
// this method reverse array
console.log("--------- reverse method ----------");
arr.reverse();
console.log(arr);


// ! Most important methods
// ? Slice() and Splice()

// 5. splice()
// If we want to remove and insert new items in an Array then this method used.
// * takes three arguments
// (a , b, c)
// a. where to start removing elements
// b. how many elements you want to delete
// c. add new elements

console.log("--------- splice method ----------");
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let deletedValues = num.splice(3, 3, 888, 999, 1000);
console.log(num);
console.log(deletedValues);
// explain 
/*
    start from : 3
    remove elements after start : 3
    add new elements : 888 , 999 , 1000
*/

// 6. slice()
// slice is used to slicing in our array.
// if we want to get so array then this method used.
// it returns sliced array means new array.
// * takes two arguments
// slice(X,Y)
// x : starting index
// y : ending index

console.log("--------- slice method ----------");
let numm = [1,2,3,4,5,6,7,8,9,18,28,];
let sliceArr = numm.slice(3,9);
let sliceArr2 = numm.slice(3)
console.log(numm);
console.log(sliceArr);
console.log(sliceArr2);

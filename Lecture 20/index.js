// All about Map , Filter and Reduce

let arr = [20, 22, 24];

// 1. Map()
// Map creates new Array performing some operation.
console.log("---------- map method ------------");
let newArr = arr.map((element, index, array) => {
    console.log(element, index, array)
    return element + 1;  // operation
})
console.log(newArr);  // print new array



// 2. Filter()
// Filter is a simple function which is used to perform some operations.
// also create a new array.
console.log("---------- filter method ------------");
let arr2 = [5, 4, 3, 7, 9, 20, 25, 58];
let newArr2 = arr2.filter((value) => {
    return value < 10;  // return the value which is smaller than 10.
})
console.log(newArr2)


// 3. Reduce()
console.log("---------- reduce method ------------");
let arr3 = [1, 2, 3, 4, 5, 6, 7];
let newArr3 = arr3.reduce((value1, value2) => {
    return value1 + value2;
})
console.log(newArr3);
// Practice Set - Arrays

// Q.1
console.log("--------- Q.1 ---------");
// const numbers = [1,2,3,4,5,6,7,8,9];
// let num = prompt("Enter a number : ");
// num = Number.parseInt(num);
// numbers.push(num);
// console.log(numbers);

// Q.2
console.log("--------- Q.2 ---------");
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let num;
// do{
//     num = prompt("Enter a number : ");
//     num = Number.parseInt(num);
//     numbers.push(num);
// }while (num != 0); 
// console.log(numbers);

// Q.3
console.log("--------- Q.3 ---------");
const numbers = [10, 2, 30, 40, 5, 60, 7, 8, 90];
let num = numbers.filter((n) => n % 10 == 0);
console.log(num);

// Q.3
console.log("--------- Q.4 ---------");
const numbers2 = [10, 2, 30, 40, 5, 60, 7, 8, 90];
let sqNums = numbers2.map((num) => num * num)
console.log(sqNums);

// Q.4
console.log("--------- Q.5 ---------");
let numb = [1, 2, 3, 4, 5];
let n = numb.reduce((x1, x2) => {
    return x1 * x2;
})
console.log(n);


// All about While loops and do-while loops

// While loop
let n = prompt("Enter the value of n :- ");
n = Number.parseInt(n);
let i = 0;
while (i < n) {
    console.log(i);
    i++;
}


// do-while loop
let m = prompt("Enter the value of m :- ");
m = Number.parseInt(m);
let j = 0;
do {
    console.log(j);
    j++;
} while (j < m);
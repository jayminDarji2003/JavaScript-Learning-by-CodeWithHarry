// ! Lecture 8 :- Practice Set.

// ? Q.1
console.log("------ Q.1 --------")
let age = 117;
if(age > 10 && age < 20){
    console.log("Age lies between 10 and 20")
}else{
    console.log("Age does not lies between 10 and 20")
}

// ? Q.2
console.log("------ Q.2 --------")
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}


// ? Q.3
console.log("------ Q.3 --------")
let num = 12;
if(num % 2 == 0 && num % 3 == 0){
    console.log("Num is divisible by 2");
}
else{
    console.log("Num is not divisible by 2 and 3");
}

// ? Q.4
console.log("------ Q.4 --------")
let num2 = 12;
if(num2 % 2 == 0 || num2 % 3 == 0){
    console.log("Num is divisible by 2");
}
else{
    console.log("Num is not divisible by 2 and 3");
}


// ? Q.5
console.log("------ Q.5 --------")
let age2 = 12;
console.log("YOU CAN" ,age2 > 18 ? "DRIVE" : "NOT DRIVE")
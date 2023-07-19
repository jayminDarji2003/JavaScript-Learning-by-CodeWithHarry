// Exercise 1 :- Guess the number
let Input;
let a = Math.floor(Math.random() * 100);
let count = 0;

do {
  Input = prompt("Enter the number");

  // case 1
  if (Input == a) {
    console.log("Its match");
    break;
  } 
  
  // case 2
  else if (a < Input) {
    console.log("Enter Smaller number");
    count++;
  }
  
  // case 3
  else {
    console.log("Enter Greater number")
    count++;
  }
} while (a != Input);

console.log("Your score : ", 100-count , "%");

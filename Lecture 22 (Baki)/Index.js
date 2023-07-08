// /guess the number
let Input;
let a = Math.floor(Math.random() * 100);
let flag = 0;
do {
  Input = prompt("Enter the number");
  if (Input == a) {
    console.log("Its match");
    break;
  } else if (a < Input) {
    console.log("Its actual nummber less than", "It requires more number "); //);
    flag++;
  } else {
    console.log("Its actual nummber graeter than", "It enough number "); // a - Input);
    flag++;
  }
} while (a != Input);
if (flag == 0) console.log(" Its an outstanding performance");
else if (flag < 10) console.log("You can score 50 points ");
else if (flag == 10) console.log("You can score 90 points");
else if (flag > 10 && flag != 100) console.log("You can score 95 points");
else if (flag == 100) {
  console.log("You cant play again");
} else {
  console.log("Default value");
}

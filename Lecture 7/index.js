// ! Lecture 7 :- Conditional Expression
// * One thing to rember is that if we take prompt from the user then the datatype is always be "String".
// ? There are three types of if Statements
    // a) if
    // b) if..else
    // c) if..elseif..else
// ? Additional one is Switch Case

// let a = prompt("Hey, what's your age..?")
// console.log(typeof a)
// a = Number.parseInt(a);  // converting String to number
// console.log(typeof a)

// if statement
// if (a > 0) {
//   alert("This is valid age ")
// }


// if else statement
// if (a > 0) {
//   alert("This is valid age ")
// }else{
//   alert("This is an inValid age")
// }

//if elseif statement
// if (a < 0) {
//   alert("This is Invalid age")
// }
// else if(a < 9){
//   alert("you are a kid you cannot even think of drive a car")
// }
// else if(a > 9 && a < 18){
//   alert("you are a kid you can think of drive a car")
// }
// else{
//  alert("you can drive car") 
// }


// About Switch Statements
//let day = prompt("Enter number between (1 to 7)");  // This prompt is not work in VS Code
// day = Number.parseInt(day)

switch(day){
  case 1 :
    console.log("Monday")
    break
  case 2 :
    console.log("Tuesday")
    break
  case 3 :
    console.log("Wednesday")
    break
  case 4 :
    console.log("Thursday")
    break
  case 5 :
    console.log("Friday")
    break
  case 6 :
    console.log("Saturday")
    break
  case 7 :
    console.log("Sunday")
    break
  default :
      console.log("Invalid day number")
}


console.log("my name is jaymin")
// alert, prompt and conform method in js

// alert()
// show message in mini window
alert("Please fill some details!!");

// prompt()
// take input from user in string
let num = prompt("Enter your full name : ");


// confirm()
let ans = confirm("Do you want to write it to your page")
if(ans){
    document.write(num);
}else{
    document.write("Please allow me to write")
}

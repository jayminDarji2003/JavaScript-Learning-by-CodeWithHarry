// Practice set on Strings

// Q.1 
console.log("------------- Q.1 -------------");
console.log("her\"".length);

// Q.2
console.log("------------- Q.2 -------------");
// about - include fnx
// include = search (in simple words)
// include is one type of search in a string. If word is meet in sentence then it returns True else return False. 
let sentence = "Hii there, I'm jaymin darji from gujarat";
let word = "jaymin";
console.log("Includes fnx :- " , sentence.includes(word))

// about startWith fnx
// startWith is also same as include but difference is it search from start or given index.
const str1 = 'Saturday night plans';
console.log("startsWith fnx :- " , str1.startsWith('Sat'));
console.log("startsWith fnx :- " ,str1.startsWith('Sat', 3));  // 3 indicates the position

// about startWith fnx
// endsWith is also same as include but difference is it search from ends or given index.
const str2 = 'Saturday night plans';
console.log("endsWith fnx :- " ,str2.endsWith('plans'));
console.log("endsWith fnx :- " ,str2.endsWith('Sat',3));  // 3 indicates the position

// Q.3
console.log("------------- Q.3 -------------");
let myName = "JAYMIN DARJI";
console.log(myName.toLowerCase())

// Q.4
console.log("------------- Q.4 -------------");
// The question is to extract 1000 from the string
let str3 = "Please give Rs 1000";
let amount = str3.slice("Please give Rs ".length);
            // or 
let amount2 = str3.slice(15);
console.log(amount);  // the type is String we have to convert to number
console.log("Type of amount : " , typeof amount)
amount = Number.parseInt(amount);
console.log("Type of amount : " , typeof amount)
console.log(amount2);

// Q.5
console.log("------------- Q.5 -------------");
let friend = "shubham";
friend[3] = "d";  // strings are immutable so we can not change the string  
console.log(friend)
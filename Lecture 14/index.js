// Methods of Strings

let name = "jaymin";

// 1. length
console.log(name.length);  // return length

// 2. toUpperCase()
console.log(name.toUpperCase());

// 3. toLowerCase()
console.log(name.toLowerCase());

// 4. slice()
console.log(name.slice(0,3));  // 3 is exclusive
console.log(name.slice(3));  // start from 3 and go till the end of the stringq

// 5. replace()
let fullName = "Darji Jaymin Satishkumar";
let newName = fullName.replace("Jaymin" , "Devang")
console.log(fullName);
console.log(newName);

// 6. concate()
let first = "jaymin";
let last = "darji";
console.log(first+last);  // default way of concate
let newStr = first.concat(last); // using concate method
console.log(newStr);


// 7. trim()
// this function remove the space of our string
let frd = "        pinki           ";
console.log(frd.trim());
// DOM manipulation
// Topic : Accessing children
/*
    There are three type to access children
        1. first child
        2. last child
        3. child Node
*/

// accessing first child
console.log(document.body.firstChild);

// accessing last child
console.log(document.body.lastChild);

// accessing all child
// childNode is look like array but it is not an Array
// if we want to convert in array then
let arr = Array.from(document.body.childNodes);
console.log(arr);

// check if child exist or not
console.log(document.body.hasChildNodes() ? "We have child" : "We don't have childs");
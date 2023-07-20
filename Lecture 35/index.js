let t = document.body.firstElementChild.firstElementChild
console.log(t);

// get row
console.log(t.rows);

// get caption
console.log(t.caption);

// get table head
console.log(t.tHead);

// get table body
console.log(t.tBodies);

// get table foot
console.log(t.tFoot);

t.tHead.firstElementChild.firstElementChild.style.color = "red";
t.tHead.firstElementChild.lastElementChild.style.color = "red";



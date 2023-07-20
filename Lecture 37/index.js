// All about Matches, Closet and Contains methods

let id1 = document.getElementById("id1")
let id2 = document.getElementById("id2")

console.log(id1);
console.log(id2);

console.log(id1.matches(".class"));
console.log(id1.matches(".box"));

let sp1 = document.getElementById("sp1");
console.log(id1.closest(".box"));

console.log(id1.contains(sp1));
console.log(sp1.contains(sp1));
console.log(sp1.contains(id1));
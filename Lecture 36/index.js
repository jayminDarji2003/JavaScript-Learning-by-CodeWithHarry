// change card title color

// const cardTitle = document.getElementsByClassName("card-title")[0]; 
// const cardTitle = document.getElementById("card-title");
// cardTitle.style.color = "blue";

let allTitles = document.querySelectorAll(".card-title");
allTitles.forEach(title =>{
    title.style.color = "red";
})
console.log(allTitles);

let link = document.querySelector(".myLink");
link.style.background = "red";
link.style.color = "white";

console.log(document.getElementsByTagName("a"));


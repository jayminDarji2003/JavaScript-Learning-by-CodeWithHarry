let b = document.body;
console.log(b.firstChild);
console.log(b.firstElementChild);

const changeBody = () =>{
    document.body.firstElementChild.style.background = "gray"
}

changeBody()
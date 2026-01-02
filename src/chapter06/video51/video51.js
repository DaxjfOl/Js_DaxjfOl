console.log("This is video 51 from chapter 6.video51");

const element = document.getElementById("daxjfBtn");

const handlerClickBtn = () => {
    console.log("You clicked the button!");
}

element.addEventListener("click", handlerClickBtn);
console.log(element);
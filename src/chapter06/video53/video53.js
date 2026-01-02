console.log("This is video 53 from chapter 6.");


const myBtnElement = document.getElementById("myBtn");
const myTextElement = document.getElementById("myText");
const backBtnElement = document.getElementById("btnBack");

myBtnElement.addEventListener("click", () => {
    console.log("You clicked the button!");
    myTextElement.style.color = "red";
    myTextElement.classList.add("daxjfOl", "fjdlsjfls");
});

backBtnElement.addEventListener("click", () => {
    console.log("You clicked the button!");
    myTextElement.style.color = "black";
});
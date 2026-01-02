console.log("Video 52")

const myBtnElement = document.getElementById("myBtn");
const backBtnElement = document.getElementById("myBtnBack");
const myTextElement = document.getElementById("myText");

myBtnElement.addEventListener("click", () => {
    console.log("Button clicked");
    // myTextElement.innerText = "Button was clicked!";
    myTextElement.innerHTML = "<strong>Chào bạn,</strong> <em>học lập trình với hoidanit!</em>";
})

backBtnElement.addEventListener("click", () => {
    myTextElement.innerText = "Video 52";
})
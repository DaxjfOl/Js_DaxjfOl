console.log("This is video 55 from chapter 6.");

const btn = document.getElementById("submitBtn");
const input = document.getElementById("name");


const last = document.getElementById("lastName");
const lastNameDay = localStorage.getItem("daxjfOl");
if (lastNameDay) {
    last.innerHTML = `<b>${lastNameDay}</b>`;
}
btn.addEventListener("click", () => {
    localStorage.setItem("daxjfOl", input.value);
    document.getElementById("message").innerHTML = `<b>${input.value}</b>`;

});
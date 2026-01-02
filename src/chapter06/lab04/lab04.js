console.log("Lab 04")

const loginBtn = document.getElementById("loginBtn");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

loginBtn.addEventListener("click", () => {
    if (usernameInput.value === "daxjfol@gmail.com" && passwordInput.value === "123456") {
        window.location.href = "success.html";
    }
    else {
        usernameInput.style.borderColor = "red";
        passwordInput.style.borderColor = "red";
        alert("Invalid credentials. Please try again.");
    }
});
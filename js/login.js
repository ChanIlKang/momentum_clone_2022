const loginForm = document.querySelector(".login-form");
const userId = document.querySelector(".username");
const userPassword = document.querySelector(".password")

function login() {


    const username = userId.value;
    const password = userPassword.value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
}

loginForm.addEventListener("submit", login);

if (localStorage.getItem("username") != null) {

    window.location.href = "../html/index.html";

}
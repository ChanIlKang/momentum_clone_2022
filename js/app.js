const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector('#greeting')

const HIDDEN_CLASSNAME = "hidden";

const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

function drawGreeting() {
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function loginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    greeting.innerText = `Hello ${username}!`;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    drawGreeting();
}

if (savedUsername == null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmit);
}
else {
    drawGreeting();
    greeting.innerText = `Good day ${savedUsername}!`;
}
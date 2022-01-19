const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASS);
  username = loginInput.value;
  greeting.innerText = `Hello ${username}`;
  localStorage.setItem(USERNAME_KEY, username);
  greeting.classList.remove(HIDDEN_CLASS);
}

function paintGreeting() {
  greeting.innerText = `Hello ${savedUsername}`;
  greeting.classList.remove(HIDDEN_CLASS);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  loginForm.classList.add(HIDDEN_CLASS);
  paintGreeting();
}

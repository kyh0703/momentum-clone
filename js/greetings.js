const USERNAME_KEY = "username";
const HIDDEN_CLASS = "hidden";

const login = document.querySelector(".screen-login");
const loginInput = login.querySelector(".screen-login input");

const main = document.querySelector(".screen-main");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");

function onLoginSubmit() {
  username = loginInput.value;
  if (username === "") {
    return;
  }
  greeting.innerText = `Hello ${username}`;
  localStorage.setItem(USERNAME_KEY, username);
  main.classList.remove(HIDDEN_CLASS);
  login.classList.add(HIDDEN_CLASS);
}

function paintGreeting() {
  greeting.innerText = `Hello! ${savedUsername}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log("saved User Name", savedUsername);
if (savedUsername === null) {
  // show the form
  login.classList.remove(HIDDEN_CLASS);
  main.classList.add(HIDDEN_CLASS);
  login.addEventListener("submit", onLoginSubmit);
} else {
  main.classList.remove(HIDDEN_CLASS);
  login.classList.add(HIDDEN_CLASS);
  paintGreeting();
}

loginInput.addEventListener("keyup", (event) => {
  if (event.keyCode == 13) {
    onLoginSubmit();
  }
});

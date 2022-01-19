const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");

function onLoginBtnClick() {
  const username = loginInput.value;
  console.log(username);
  // validate 1. 방식 JS 보단 Form에서 해결할수있으면 해결
  // if (username === "") {
  //   alert("please write your name");
  // } else if (15 < username.length) {
  //   alert("Your name is too long.");
  // }
}

loginBtn.addEventListener("click", onLoginBtnClick);

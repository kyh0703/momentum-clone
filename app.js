// class name
const title1 = document.getElementsByClassName("hello");

// css selector
// 첫번째꺼만 가져온다
const title = document.querySelector(".hello h1");

// css selector
// 첫번째꺼만 가져온다
const titleAll = document.querySelectorAll(".hello h1");

function handleTitleClick() {
  title.style.color = "blue";
}

function handleMouseEnter() {
  title.innerText = "mouse is hear!";
}

function handleMouseLeave() {
  title.innerText = "mouse is gone!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

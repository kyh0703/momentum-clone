const h1 = document.querySelector("div.hello:first-child h1");

// == 연산자는 작업자가 원치 않는 강제 형변환을 실행하고 그것이 다른 언어의 ==연산자와는 차이가 있는 동작이므로 ==를 ===로 컴파일한다는 것이다.
function handleTitleClick() {
  const clickedClass = "clicked";
  if (h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
}

h1.addEventListener("click", handleTitleClick);

const h1 = document.querySelector("div.hello:first-child h1");

// == 연산자는 작업자가 원치 않는 강제 형변환을 실행하고 그것이 다른 언어의 ==연산자와는 차이가 있는 동작이므로 ==를 ===로 컴파일한다는 것이다.
// ClassList는 전체를 다 변경하지 않고 HTML element 의 클래스 리스트를 가져옴
function handleTitleClick() {
  // const clickedClass = "clicked";
  // if (h1.classList.contains(clickedClass)) {
  //   h1.classList.remove(clickedClass);
  // } else {
  //   h1.classList.add(clickedClass);
  // }
  // => toggle
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);

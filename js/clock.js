const today = document.querySelector(".fa-calendar-alt span");
const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  today.innerText = `${year}-${month}-${day}`;
  clock.innerText = `${hour}:${min}:${sec}`;
}

getClock();
setInterval(getClock, 1000);

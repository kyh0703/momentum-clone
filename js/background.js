const bg = document.querySelector("main");
const PONYO_URI = "https://www.ghibli.jp/gallery/ponyo";
const todayRandomImage = Math.floor(Math.random() * 50) + 1; // 1 ~ 50
const paddingNum = todayRandomImage.toString().padStart(3, "0");
const ponyoImage = `${PONYO_URI}${paddingNum}.jpg`;
bg.style.backgroundImage = `url(${ponyoImage})`;

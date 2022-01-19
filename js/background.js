// const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];
// quote.innerText = todayQuotes.quote;
// author.innerText = todayQuotes / author;

const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const todayBgImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${todayBgImage}`;
document.body.appendChild(bgImage);

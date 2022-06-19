const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const bgImage = document.querySelector("body");

function drawBg() {
    const img = new Image();
    img.src = `./img/${images[Math.floor(Math.random() * images.length)]}`;
    img.classList.add("background-img");
    bgImage.appendChild(img);
}

drawBg();
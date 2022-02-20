const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.classList.add("background");
bgImage.src = `images/${chosenImage}`;
bgImage.style.width = "100%";
bgImage.style.height = "100%";

document.body.appendChild(bgImage);
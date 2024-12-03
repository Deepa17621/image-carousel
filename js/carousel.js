const carouselWrapper = document.querySelector(".carousel-wrapper");
const progressBars = [
    document.querySelector("#bar1"),
    document.querySelector("#bar2"),
    document.querySelector("#bar3"),
    document.querySelector("#bar4"),
    document.querySelector("#bar5")
];

const images = [
    document.querySelector("#image-1"),
    document.querySelector("#image-2"),
    document.querySelector("#image-3"),
    document.querySelector("#image-4"),
    document.querySelector("#image-5")
]
let currentIndex = 0;

if (currentIndex == 0) {

    displayImage(images, currentIndex);
    currentIndex++;

    // Increase progress every 40 milliseconds
    let intervalForProgress = setInterval(increaseProgress, 46);
    let value = 0;

    function increaseProgress() {
        if (value < 100) {
            value++;
            progressBars[currentIndex - 1].value = value;
        } else {
            clearInterval(intervalForProgress);
        }
    }
    const interval = setInterval(changeImage, 5000);
}

function changeImage(params) {
    if (currentIndex >= images.length) {
        currentIndex = 0;
        return;
    }
    // Increase progress every 40 milliseconds
    let intervalForProgress = setInterval(increaseProgress, 45);
    let value = 0;

    function increaseProgress() {
        if (value < 100) {
            value++;
            progressBars[currentIndex - 1].value = value;
        } else {
            clearInterval(intervalForcurrentIndex);
        }
    }
    displayImage(images, currentIndex);
    currentIndex++;
}

function displayImage(images, currentIndex) {
    images.forEach((img, index) => {
        img.style.display = currentIndex === index ? "block" : "none";
        img.setAttribute("onclick", `clickedImage("${img}", "${currentIndex}")`);
    });
}



const carouselWrapper = document.querySelector(".carousel-wrapper");
let interval;
let intervalForProgress;

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
function clickedImage(params) {
    
}
if (currentIndex == 0) {

    displayImage(images, currentIndex);
    currentIndex++;

    // Increase progress every 40 milliseconds
    intervalForProgress = setInterval(increaseProgress, 46);
    let value = 0;

    function increaseProgress() {
        if (value < 100) {
            value++;
            progressBars[currentIndex - 1].value = value;
        } else {
            clearInterval(intervalForProgress);
        }
    }
    interval = setInterval(changeImage, 5000);
}

function changeImage(params) {
    if (currentIndex >= images.length) {
        // currentIndex = 0;
        clearInterval(interval)
        return;
    }
    // Increase progress every 40 milliseconds
    intervalForProgress = setInterval(increaseProgress, 45);
    let value = 0;

    function increaseProgress() {
        if (value < 100) {
            value++;
            progressBars[currentIndex - 1].value = value;
        } else {
            clearInterval(intervalForProgress);
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





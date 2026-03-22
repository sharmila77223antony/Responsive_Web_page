// ===============================
// IMAGE CAROUSEL FUNCTIONALITY
// ===============================

const track = document.querySelector(".carousel-track");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;

// Next button
nextBtn.addEventListener("click", () => {
    const totalItems = document.querySelectorAll(".carousel-item").length;

    if (index < totalItems - 1) {
        index++;
        moveCarousel();
    }
});

// Previous button
prevBtn.addEventListener("click", () => {
    if (index > 0) {
        index--;
        moveCarousel();
    }
});

// Move function
function moveCarousel() {
    const item = document.querySelector(".carousel-item");
    const itemWidth = item.offsetWidth + 20;
    track.style.transform = `translateX(-${index * itemWidth}px)`;
}
"use strict";

const leftArrow = document.querySelector(".left-arrow button");
const rightArrow = document.querySelector(".right-arrow button");
const cardList = document.querySelector(".card-list");
const dots = document.querySelectorAll(".card-dots li");
const positionValue = cardList.style.transform;

let xTranslation = 0;
const cardWidth = 400;
const noOfCards = document.querySelectorAll(".card-item").length;
const firstCard = 0;
const lastCard = -(cardWidth * (noOfCards - 1));

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const slideIndex = Number(dot.dataset.slide);
    xTranslation = -(slideIndex * cardWidth);
    updateCarousel();
  });
});

function updateDots() {
  dots.forEach((dot) => dot.classList.remove("active"));

  const activeIndex = Math.abs(xTranslation) / cardWidth;
  if (dots[activeIndex]) {
    dots[activeIndex].classList.add("active");
  }
}

function updateCarousel() {
  cardList.style.transform = `translateX(${xTranslation}px)`;
  updateDots();
}

leftArrow.addEventListener("click", () => {
  if (xTranslation === firstCard) {
    xTranslation = lastCard;
  } else {
    xTranslation += cardWidth;
  }
  updateCarousel();
});
rightArrow.addEventListener("click", () => {
  if (xTranslation === lastCard) {
    xTranslation = firstCard;
  } else {
    xTranslation -= cardWidth;
  }
  updateCarousel();
});

setInterval(() => {
  if (xTranslation === lastCard) {
    xTranslation = firstCard;
  } else {
    xTranslation -= cardWidth;
  }
  updateCarousel();
}, 5000);

updateDots();

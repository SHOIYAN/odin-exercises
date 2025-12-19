'use strict';

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const cardList = document.querySelector('.card-list');
const positionValue = cardList.style.transform

let val = 0;

function getTranslateX(element) {
  const style = window.getComputedStyle(element);
  const matrix = new DOMMatrix(style.transform);
  return matrix.m41;
}

leftArrow.addEventListener('click',() => {
    val = getTranslateX(cardList);
    if (val === 0) return;
    cardList.style.transform = `translateX(${val + 400}px)`;
    
})
rightArrow.addEventListener('click',() => {
    val = getTranslateX(cardList);
    if (val === -1600) return;
    cardList.style.transform = `translateX(${val - 400}px)`;
})
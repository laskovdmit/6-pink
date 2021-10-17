"use strict";


// Слайдер отзывов
const prevReview = document.querySelector('.reviews__prev'),
      nextReview = document.querySelector('.reviews__next'),
      sliderReview = document.querySelector('.reviews__wrapper'),
      itemReview = document.querySelectorAll('.reviews__item'),
      toggleReview = document.querySelectorAll('.reviews__toggle');

let currentItem = 0;

function showReview() {
  if (currentItem < 0) {
    currentItem = itemReview.length - 1;
    console.log(currentItem);
  }

  if (currentItem > itemReview.length - 1) {
    currentItem = 0;
  }

  itemReview.forEach(item => {
    item.classList.remove('reviews__item--active');
    item.classList.add('reviews__item--disactive');
  });

  itemReview[currentItem].classList.remove('reviews__item--disactive');
  itemReview[currentItem].classList.add('reviews__item--active');
}

showReview(currentItem);

prevReview.addEventListener('click', () => {
  currentItem = currentItem - 1;
  showReview();
});

nextReview.addEventListener('click', () => {
  currentItem = currentItem + 1;
  showReview();
});

toggleReview.forEach((item, i) => {
  item.addEventListener('click', () => {
    currentItem = i;
    showReview();

    toggleReview.forEach(toggle => {
      toggle.classList.remove('slider__toggle--active');
    });
    item.classList.add('slider__toggle--active');
  });
});

//Слайдер таблицы
const togglePrice = document.querySelectorAll('.price__toggle'),
      sliderPrice = document.querySelector('.price');

function showTogglePrice(i) {
  togglePrice.forEach(toggle => {
    toggle.classList.remove('slider__toggle--active');
  });
  togglePrice[i].classList.add('slider__toggle--active');
}

togglePrice[0].addEventListener('click', () => {
  sliderPrice.style.justifyContent = 'flex-start';
  showTogglePrice(0);
});

togglePrice[1].addEventListener('click', () => {
  sliderPrice.style.justifyContent = 'center';
  showTogglePrice(1);
});

togglePrice[2].addEventListener('click', () => {
  sliderPrice.style.justifyContent = 'flex-end';
  showTogglePrice(2);
});

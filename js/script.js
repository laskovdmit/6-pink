"use strict";

const header = document.querySelector('.header'),
      headerWrapper = document.querySelector('.header__wrapper'),
      burger = document.querySelector('.header__burger'),
      navigation = document.querySelector('.header__navigation'),
      main = document.querySelector('.page__main');

burger.classList.remove('header__burger--nojs');
headerWrapper.classList.remove('header__wrapper--nojs');

burger.addEventListener('click', () => {
  if (header.classList.contains('header--closed')) {
    header.classList.remove('header--closed');
    header.classList.add('header--opened');

    main.style.paddingTop = navigation.style.height;
  } else {
    header.classList.remove('header--opened');
    header.classList.add('header--closed');

    main.style.paddingTop = "0";
  }
});

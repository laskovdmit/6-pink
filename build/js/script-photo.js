"use strict";

//Переключение инструментов редактора
const tools = document.querySelectorAll('.editor__tool--radio'),
      toolsSlider = document.querySelectorAll('.editor__size');

tools.forEach((item, i) => {
  item.addEventListener('click', () => {
    if (!toolsSlider[i].classList.contains('editor__size--active')) {
      toolsSlider.forEach(item => {
        item.classList.remove('editor__size--active');
      });
      toolsSlider[i].classList.add('editor__size--active');
    }
  });
});


//Лайки под фото
const likeBtn = document.querySelectorAll('.comment__like-count');

likeBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('comment__like-count--like')) {
      btn.classList.remove('comment__like-count--like');
    } else {
      btn.classList.add('comment__like-count--like');
    }
  });
});

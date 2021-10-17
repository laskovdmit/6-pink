"use strict";

// Уведомление об отправке формы
const form = document.querySelector('.form'),
      sucsessMessage = document.querySelector('.popup--done'),
      errorMessage = document.querySelector('.popup--error'),
      messageWrapper = document.querySelector('.popup__wrapper'),
      surnameField = document.querySelector('#surname'),
      nameField = document.querySelector('#name'),
      emailField = document.querySelector('#email'),
      closeBtn = document.querySelectorAll('.popup__button');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (nameField.value.length > 1 && surnameField.value.length > 1 && emailField.value.length > 1) {
    sucsessMessage.style.display = "flex";
    nameField.style.borderColor = "inherit";
    surnameField.style.borderColor = "inherit";
    emailField.style.borderColor = "inherit";
  } else {
    errorMessage.style.display = "flex";
    nameField.style.borderColor = "red";
    surnameField.style.borderColor = "red";
    emailField.style.borderColor = "red";
  }
});


// Закрытие окон с уведомлениями
sucsessMessage.addEventListener('click', (e) => {
  if (e.target === sucsessMessage) {
    sucsessMessage.style.display = "none";
  }
});

errorMessage.addEventListener('click', (e) => {
  if (e.target === errorMessage) {
    errorMessage.style.display = "none";
  }
});

closeBtn.forEach(item => {
  item.addEventListener('click', () => {
    errorMessage.style.display = "none";
    sucsessMessage.style.display = "none";
  });
});


//Теоретический вопрос

/*Опишите своими словами разницу между функциями setTimeout() и setInterval().
Что произойдет, если в функцию setTimeout() передать нулевую задержку? Сработает ли она мгновенно, и почему?
Почему важно не забывать вызывать функцию clearInterval(), когда ранее созданный цикл запуска вам уже не нужен?*/

//Ответ:
/*
setTimeout() устанавливает задержку перед вызовом переданной фунуции, а setInterval() многократно вызывает переданную функцию через заданный интервал.
setTimeout() мгновенно вызовет функцию, но только после выполнения основного кода программы.
setTimeout() и setInterval() получают при вызове свой id и продолжают "присутствовать" на странице, и могут дальше продолжать свою работу, хотя нам это уже не нужно, по сути, становятся "рабочим мусором" в коде. Поэтому важно приостанавливать их работу когда нам это уже не нужно.
*/
"use strickt";

// 
const images = document.querySelectorAll(".image-to-show");
let j = 0;
let timeToShow = 3000;
let timerIdShowImage = null;
let timerIdTimeToShow = null;

// Решение

// Обработчик для вывода изображений
const showImage = function () {
  if (images[j - 1]) {
    images[j - 1].style.display = "none";
  }
  if (!images[j]) {
    j = 0;
  }
  images[j].style.display = "block";
  timerIdShowImage = setTimeout(showImage, 3000);
  return j++;
};

// Функция для приостановки вывода изображений
function stopShowing() {
  clearInterval(timerIdShowImage);
  clearInterval(timerIdTimeToShow);
  btn_start.disabled = false;
  btn_stop.disabled = true;
  images[j - 1].style.animationPlayState = "paused";
}

// Функция для возобновления вывода изображений
function continueShowing() {
  timeToShow = 0;
  displayTimeLeft();
  images[j - 1].style.animationPlayState = "running";
  showImage();
  btn_start.disabled = true;
  btn_stop.disabled = false;
  
}

// Функция Таймера
function displayTimeLeft() {
  if (timeToShow === 0) {
  timeToShow = 3000;
  return displayTimeLeft(timeToShow);
  }
  timer.innerHTML = `${Math.floor(timeToShow / 1000)} sec ${
    timeToShow % 1000
  } mls`;
  timeToShow -= 100;
  timerIdTimeToShow = setTimeout(displayTimeLeft, 100);
}

// Исполнение
document.addEventListener("DOMContentLoaded", showImage);
document.addEventListener("DOMContentLoaded", displayTimeLeft);

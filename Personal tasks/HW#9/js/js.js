"use strickt";

//Обявления переменных для сокращения кода
let contentLists = document.querySelectorAll(".tabs-content>li");

//Функция отката стилей для tabs
function remover() {
  document.body.querySelector(".tabs-title.active").classList.remove("active");
}

//Функция для изменения стиля tab при клике
function addTabActive(event) {
  remover();
  event.target.classList.add("active");
}

//Функция очистки контента
function clearContent() {
  document
    .querySelector(".tabs-content>li.show_on_page")
    .classList.remove("show_on_page");
}

//Итоговый Обработчик для события "click"
function showContent(event) {
  addTabActive(event);
  clearContent();
  for (list of contentLists) {
    if (list.dataset.marker === event.target.dataset.marker)
      return list.classList.add("show_on_page");
  }
}

//Выполнение кода
document.querySelector(".tabs").addEventListener("click", showContent);

//
"use strickt";
//

// Объявление переменных
const themOptions = document.querySelectorAll("input");

//Смена стилей
function switchTheme(event) {
  if (event.target.hasAttribute("data-js_marker")) {
    document
      .getElementById("js_link_style")
      .setAttribute("href", `${event.target.value}`);
  }
}

//Активация при загрузке страницы сохраненной темы
function displaySavedTheme() {
  if (localStorage.getItem("theme")) {
    document
      .getElementById("js_link_style")
      .setAttribute("href", `${localStorage.theme}`);
  }
  for (let option of themOptions) {
    if (option.value === localStorage.theme) {
      option.checked = true;
    }
  }
}

//Запись выбранной темы в Local Storage при перезагрузке или закрытии страницы
function saveTheme() {
  localStorage.setItem(
    "theme",
    `${document.getElementById("js_link_style").getAttribute("href")}`
  );
}

//Выполнение кода
document
  .querySelector(".inputs_container")
  .addEventListener("click", switchTheme);
document;
document.addEventListener("DOMContentLoaded", displaySavedTheme);
window.addEventListener("unload", saveTheme);

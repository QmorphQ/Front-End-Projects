// Теоретический вопрос

// Опишите своими словами, как Вы понимаете, что такое обработчик событий.
// Ответ:
/* Обработчик событий - это функция, код которой инициализируется событием на странице. Событие "прослушивается" в указанном элементе или по всей странице специальным методом, который запускает указанную функцию при наступлении отслеживаемого события.
*/


("use strict");

// Объявление переменных и создания вспомогательных функций

let userInput = document.querySelector(".input_user_price");
let elementToAdjustPopSpan = document.querySelector(".input_wrapper");


//Functions
// Функция для создания и вставки span-элементов в зависимости от валидности введенных данных
function createSpanPopElem() {
  if (userInput.value > 0) {
    elementToAdjustPopSpan.insertAdjacentHTML(
      "beforebegin",
      `<div class="container_span_pop">
    <span class="span_pop">Current price is: ${Number(userInput.value).toFixed(
      2
    )}</span>
    <span class="close-btn"></span>
    </div>`
    );
    return (userInput.style.color = "green");
  } else {
    userInput.classList.add("input_user_price-br_red");
    elementToAdjustPopSpan.insertAdjacentHTML(
      "afterend",
      `
  <span class="alert_span_pop">Please enter correct price!</span>
  </span>
  `
    );
    
  }
}

// Функция для возврата поля input к исходному состоянию (цвет текста и обнуление поля ввода, удаление оповещения Alert)
function backToDefaultInput() {
  userInput.style.color = "blue";
  userInput.classList.remove("input_user_price-br_red");
  if (document.querySelector(".alert_span_pop")) {
   document.querySelector(".alert_span_pop").remove();
 }
 return (userInput.value = "");
}


// Функция для удаления span с ценой при нажатии на крестик
function removeParent(event) {
  event.target.closest(".container_span_pop").remove();
  backToDefaultInput();
  return (userInput.value = "0.00");
}

// Обработчик для родительского элемента (для ".input_container")
function remover() {
  let closeBtns = document.querySelectorAll(".close-btn");
  if (closeBtns) {
    for (let closeBtn of closeBtns) {
      closeBtn.addEventListener("click", removeParent);
    }
  }
}

// Основной код.

userInput.addEventListener("blur", createSpanPopElem);
userInput.addEventListener("focus", backToDefaultInput);
document.querySelector(".input_container").addEventListener("click", remover);


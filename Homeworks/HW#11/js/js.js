//Теоретический вопрос:
//Почему для работы с input не рекомендуется использовать события клавиатуры?
//Ответ:
/*
Поскольку на сегодняшний день есть другие способы ввода данных в поле инпут (голосом, что уже более актуальго в мире тотальной "мобилизации"), использовать события ввода с клавиатуры - плохой вариант и не охватывает всех возможностей. Для этого исползуются другие события.
 */

//Решение
//Объявление исходных переменных
const allButtons = document.querySelectorAll(".btn-wrapper>button");

//Функция-обработчик
function btnSwitchColor(event) {
  allButtons.forEach((button) => {
    return button.dataset.kcode === event.code
      ? (button.style.backgroundColor = "blue")
      : (button.style.backgroundColor = "black");
  });
}

// Прослушиваем и выполняем
document.addEventListener("keydown", btnSwitchColor);

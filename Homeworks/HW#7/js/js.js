// Теоретический вопрос

// Опишите своими словами, как Вы понимаете, что такое Document Object Model (DOM)

// Ответ:
/*DOM представляет собой дерево узлов-элементов, к которому могут обращаться программы для обработки страницы, предоставляя полную свободу для кода влиять на его содержимое. По сути - это интерфейс для доступа к самому документу.
 */
// Исходный массив
"use strickt";
const citiesOfUkraine = [
  "Cherkasy",
  "Vinnytsia",
  "Kiev",
  "Kharkiv",
  "Odessa",
  "Lviv",
  "Chernihiv",
  ["Brovary", "White Church"],
];

// Функция создания произвольного тега

function createSomeTag(x = "a") {
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<${(x)} id ='myTag'></${(x)}>`
  );
}

// Функция создания строки HTML

function arrayToHtml(someArray) {
  return `<ul>${someArray
    .map((item) => {
      return !Array.isArray(item) ? `<li>${item}</li>` : arrayToHtml(item);
    })
    .join("")}</ul>`;
}

// Функция для добавления на страницу

function arrayToList(someArray, parent = document.body) {
  parent.insertAdjacentHTML("afterbegin", arrayToHtml(someArray));
}

// Исполнеие
createSomeTag((x = "p"));
arrayToList(citiesOfUkraine, myTag);

// Timer and clearing
let timeslap = 4;
function timer() {
  timeslap = timeslap - 1;
  if (timeslap <= 0) {
    clearInterval(counter);
    document.body.innerHTML = "";
    return;
  }

  document.getElementById("timer").innerHTML = timeslap + " secs";
}

let counter = setInterval(timer, 1000);

timer();

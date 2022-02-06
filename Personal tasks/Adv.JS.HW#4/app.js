//==============    .....
"use strict"; //+  \{^_^}/
//==============    _|||_

//-------------------------
// Теоретический вопрос:
// Обьясните своими словами, что такое AJAX и чем он полезен при разработке на Javascript.

//-------------------------
//Ответ:
// AJAX - это комбинаций лучших на свое время технологий по обработке процессов запрос.ответ в интернете, которая получила со временем широкое распространение и развитие (JQuery, axios). Поскольку необходимость этих инструментов салала очевидной, был разработан нативный API для реализации всех этих подходов, хотя упомянутые библиотеки по прежнему развиваются и являются одной из альтернатив/дополнением. AJAX позволяет осуществлять асинхронные процессы обработки запросов, ускоряет работу страниц (в боьшинстве случаев нет необходимости для перезагрузки всей страницы и осуществления нового запроса, многие процессы осуществляются на стороне пользователя).

//===================================================
// Задание
// Получить список фильмов серии Звездные войны, и вывести на экран список персонажей для каждого из них.

// Технические требования:
// Отправить AJAX запрос по адресу https://ajax.test-danit.com/api/swapi/films и получить список всех фильмов серии Звездные войны
// Для каждого фильма получить с сервера список персонажей, которые были показаны в данном фильме. Список персонажей можно получить из свойства characters.
// Как только с сервера будет получена информация о фильмах, сразу же вывести список всех фильмов на экран. Необходимо указать номер эпизода, название фильма, а также короткое содержание (поля episode_id, title и opening_crawl).
// Как только с сервера будет получена информация о персонажах какого-либо фильма, вывести эту информацию на экран под названием фильма.
//===================================================

//-------------------------
//Pressets:
let url = "https://ajax.test-danit.com/api/swapi/films";
let method = "GET";
//-------------------------

//-------------------------
//Partiual pressets:
let btn = document.querySelector(".btn");
let elemToAddList = document.querySelector(".root");

//===================================================
//Module functions:

//-------------------------
//Function to convert array of objects to html string to add on page:
function arrayToHtml(someArray, marker) {
  return `<ul class="film" data-marker="${marker}">${someArray
    .map((item) => {
      return `<li>${item}</li>`;
    })
    .join("")}</ul>`;
}

//-------------------------
//Fuction to add elements on page:
function htmlStringOnPage(
  targetSelector,
  htmlStringToAdd,
  position = "beforeend"
) {
  document
    .querySelector(`${targetSelector}`)
    .insertAdjacentHTML(`${position}`, `${htmlStringToAdd}`);
}

//-------------------------
//Function to form request:
function sendRequest(method, url) {
  return fetch(url).then((response) => {
    return response.json();
  });
}

//===================================================
//Function to send request and process response:
async function sendReq() {
  return (
    sendRequest(method, url)
      //-------------------------
      //Get response data:
      .then((data) => {
        return data;
      })

      //-------------------------
      //Getting list of [element.id, element.name, element.openingCrawl] and load on page; getting list of links for "characters":
      .then(function (data) {
        let arrayOfTargetProperties = [];
        let arrayOfTargetLinks = [];
        data.forEach((element) => {
          arrayOfTargetProperties.push(
            arrayToHtml(
              [element.id, element.name, element.openingCrawl],
              element.id
            )
          );
          arrayOfTargetLinks.push(element.characters);
        });
        //------------
        //Load on page:
        htmlStringOnPage(
          ".root",
          `<ul class="films-list">${arrayOfTargetProperties.join("")}</ul>`
        );

        //-------------------------
        //Load spinner on page:
        document.querySelectorAll(`.film>li:last-child`).forEach((element) => {
          element.insertAdjacentHTML(
            "beforebegin",
            `<div class="spinner"></div>`
          );
        });
        //-----------
        //Getting array of links:
        return arrayOfTargetLinks;
      })

      //-------------------------
      //Sending request for characters names using "arrayOfTargetLinks":
      .then(async function (arr) {
        for (let i = 0; i < arr.length; i++) {
          await arr[i].forEach(function (e) {
            sendRequest(method, e)
              //-------------------------
              //Load on page response data:
              .then((data) =>
                document
                  .querySelector(
                    `.film[data-marker="${i + 1}"]>li:nth-child(2)`
                  )
                  .insertAdjacentHTML(
                    "afterend",
                    `<li>Character: ${data.name}</li>`
                  )
              )

              //--------------------------
              //Removing spinner on loaded characters names per "film" element:
              .then((data) => {
                if (document.querySelector(`ul:nth-child(${i + 1})>div`)) {
                  document.querySelector(`ul:nth-child(${i + 1})>div`).remove();
                }
              });
          });
        }
      })
  );
};

//Buttons "btn" "send request" event on click:
btn.onclick = (event) => {
  this.onclick = "";
  sendReq();
  setTimeout((value) => {
    btn.innerHTML = "RELOAD";
    btn.onclick = () => location.reload();
  }, 2000);
};
//===================================================

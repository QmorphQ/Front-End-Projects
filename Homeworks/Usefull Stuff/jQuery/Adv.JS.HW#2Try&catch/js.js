//===============
"use strict"; //+
//===============

//--------------------
//Теоретический вопрос:
//Приведите пару примеров, когда уместно использовать в коде конструкцию try...catch.

//Ответ:
/*Конструкция "try&catch" используется для корректной работы кода в случае возникновения ошибок. В основном источником ошибок и последующего "падения" кода (так как при возникновении ошибки интерпритатор JS приостанавливает выполнение программы) является некорректные данные получаемые извне в качестве исходных данных кода (неправильно введенные пользователем данные, непредусмотренные кодом форматы данных и т.д.). "try&catch" позволяет предусмотреть и предотвратить подобные ситуации. Примеры: некорректній ввод данных пользователем (мы можем сгенерировать свою собственную ошибку с помощью оператора "throw" и запустить отладчик ошибки, если это необходимо), сбои при передачи данных с сервера, когда просто необходимо дождаться получения корректных данных или выполнить альтернативный поиск, когда просто нужно скрыть ошибки от пользователя и завершить выполнение кода,
например при переходе по ссылке пользователем адрес может оказаться неверным и возможно предусмотреть альтернативный поиск по введенным данным, скрывая при этом ненужные выводы ошибки "неверный адресс" и т.д.*/


//--------------------
//Pressets:


//--------------------
//Module functions:

//Array of objects to list on page:
function arrayOfObjectTo_list(array) {

    let list_arr = ["<ul>"];
    //-----------------------
    for (let item of array) {
      let list_obj = [`<li><ul>`];
      //-----------------------
      for (let prop in item) {
        list_obj.push(`<li>${prop}: ${item[prop]}</li>`);
      };
      //-----------------------
      list_obj.push("</ul></li>");
      list_arr.push(list_obj.join(""));
    };
    //-----------------------
    list_arr.push("</ul>");
    return list_arr.join("");
};

//Add elements on page:
function htmlStringOnPage(targetSelector, htmlStringToAdd, position = 'beforeend'){
    document.querySelector(`${targetSelector}`).insertAdjacentHTML(`${position}`, `${htmlStringToAdd}`)
};

//Validator :
function testObj(obj, log = false, ...properties) {
    let test;
    for (let prop of properties) {
      if (!Object.keys(obj).includes(prop)) {
      if(log) {console.log(`%cIn item "${Object.entries(obj)}" missed: ` + prop, "background-color: yellow; color: red;");}
        test = false;
      } else continue;
    };
    return (test === undefined);
  };

//--------------------
//Data:
const books = [
  {
    author: "Скотт Бэккер",
    name: "Тьма, что приходит прежде",
    price: 70,
  },
  {
    author: "Скотт Бэккер",
    name: "Воин-пророк",
  },
  {
    name: "Тысячекратная мысль",
    price: 70,
  },
  {
    author: "Скотт Бэккер",
    name: "Нечестивый Консульт",
    price: 70,
  },
  {
    author: "Дарья Донцова",
    name: "Детектив на диете",
    price: 40,
  },
  {
    author: "Дарья Донцова",
    name: "Дед Снегур и Морозочка",
  },
];

//--------------------
//Partial pressets:
let data = books;
let validProperties = ["author", "name", "price"];
let htmlStringToAddOnPage = '<div id="root"></div>';
let selectorToAddOnPage = '#root';

//===========================================================================
//Code:

//--------------------
//Add div on page:
htmlStringOnPage("html", htmlStringToAddOnPage);

//--------------------
//Try&catch:
try{
    data.forEach((book) => {
       if (!testObj(book, false, ...validProperties)){
            throw new Error ("Missing some data.");
       } 
    });
    htmlStringOnPage(selectorToAddOnPage, arrayOfObjectTo_list(books));
} catch(error) {
    if (error.name === "Error"){
        console.log("%c" + error.message + "Trying to resolve the problem.", "background-color: yellow; color: blue;")};
        htmlStringOnPage("#root", arrayOfObjectTo_list(data.filter((book) => testObj(book, true, ...validProperties))));
};





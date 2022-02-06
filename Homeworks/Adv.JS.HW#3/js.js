//===============
"use strickt";//+
//===============

//Теоретический вопрос
//Обьясните своими словами, как вы понимаете, что такое деструктуризация и зачем она нужна.

/*Ответ: процессуально это специальный синтаксис использующий структуру данных (массивы, объекты, миксы) как карту для внутренних данных, с помощбю которой можно присваивать, заменять, разделять, комбинировать внутреннии данные и "упаковывать" их в новую структуру не меняя исходные объекты. "Деструктуризировать" означает не уничтожение структуры, а "вскрытие" структуры для доступа к данным.
*/

//----------------
//Service functions:
//Console log:
const log = (value) => {return console.log(value)};

//----------------
//Module functions:

//Tasks:
//=================================================================================================================
//1.)
//Создать один массив, который будет представлять собой объединение двух массив без повторяющихся фамилий клиентов.

//----------------
//Data:
const clients1 = ["Гилберт", "Сальваторе", "Пирс", "Соммерс", "Форбс", "Донован", "Беннет"];
const clients2 = ["Пирс", "Зальцман", "Сальваторе", "Майклсон"];

//----------------
//Solution:

let allNames = [...new Set ([...clients1, ...clients2])]; 
log(["Task 1", allNames]);

//=================================================================================================================
//2.)
//Создайтm charactersShortInfo, состоящий из объектов, в которых есть только 3 поля - name, lastName и age.

//----------------
//Data:
const characters = [
    {
      name: "Елена",
      lastName: "Гилберт",
      age: 17, 
      gender: "woman",
      status: "human"
    },
    {
      name: "Кэролайн",
      lastName: "Форбс",
      age: 17,
      gender: "woman",
      status: "human"
    },
    {
      name: "Аларик",
      lastName: "Зальцман",
      age: 31,
      gender: "man",
      status: "human"
    },
    {
      name: "Дэймон",
      lastName: "Сальваторе",
      age: 156,
      gender: "man",
      status: "vampire"
    },
    {
      name: "Ребекка",
      lastName: "Майклсон",
      age: 1089,
      gender: "woman",
      status: "vempire"
    },
    {
      name: "Клаус",
      lastName: "Майклсон",
      age: 1093,
      gender: "man",
      status: "vampire"
    }
  ];

//----------------
//Solution:

//charactersShortInfo:
let justMajor = ({name, lastName, age, ...rest}) => [name, lastName, age];
let charactersShortInfo = characters.map((character) => {return justMajor(character)});
log (["Task 2", charactersShortInfo]);

//=================================================================================================================
//3.)
//Написать деструктурирующее присваивание, которое: свойство name присвоит в переменную name, свойство years присвоит в переменную age, свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства). Выведите переменные на экран.

//----------------
//Data:
const user1 = {
  name: "John",
  years: 30
};

//----------------
//Solution:

let {name: name, years: age, isAdmin: isAdmin = false} = user1;

log(["Task 3", name, age, isAdmin]);

document.querySelector("html").insertAdjacentHTML("beforeend", `<div style="border: 3px green solid; width: 300px; margin: 8% auto 0 auto; font: bold 2em/2em sans-serif; text-align: center">${name}, ${age}, ${isAdmin}</div>`);

//=================================================================================================================
//4.)
//Три объекта - satoshi2018, satoshi2019, satoshi2020. Объединить данные из этих трех объектов в один объект - fullProfile.Учтите, что некоторые поля в объектах могут повторяться. В таком случае в результирующем объекте должно сохраниться значение, которое было получено позже. Изменять объекты satoshi2018, satoshi2019, satoshi2020 нельзя.

//----------------
//Data:
const satoshi2020 = {
  name: 'Nick',
  surname: 'Sabo',
  age: 51,
  country: 'Japan',
  birth: '1979-08-21',
  location: {
    lat: 38.869422, 
    lng: 139.876632
  }
};

const satoshi2019 = {
  name: 'Dorian',
  surname: 'Nakamoto',
  age: 44,
  hidden: true,
  country: 'USA',
  wallet: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
  browser: 'Chrome'
};

const satoshi2018 = {
  name: 'Satoshi',
  surname: 'Nakamoto', 
  technology: 'Bitcoin',
  country: 'Japan',
  browser: 'Tor',
  birth: '1975-04-05'
};

//----------------
//Solution:
fullProfile = {...satoshi2018, ...satoshi2019, ...satoshi2020 };
log(["Task 4", fullProfile]);

//=================================================================================================================
//5.)
//Дан массив книг. Вам нужно добавить в него еще одну книгу, не изменяя существующий массив (в результате операции должен быть создан новый массив).

//----------------
//Data:
const books = [{
  name: 'Harry Potter',
  author: 'J.K. Rowling'
}, {
  name: 'Lord of the rings',
  author: 'J.R.R. Tolkien'
}, {
  name: 'The witcher',
  author: 'Andrzej Sapkowski'
}];

const bookToAdd = {
  name: 'Game of thrones',
  author: 'George R. R. Martin'
};

//----------------
//Solution:
const newArrayOfBooks = [...books, {...bookToAdd}];
log(["Task 5", newArrayOfBooks]);

//=================================================================================================================
//6.)
//Дан обьект employee. Добавьте в него свойства age и salary, не изменяя изначальный объект (должен быть создан новый объект, который будет включать все необходимые свойства). Выведите новосозданный объект в консоль.

//----------------
//Data:
const employee = {
  name: 'Vitalii',
  surname: 'Klichko'
};

//----------------
//Solution:

const newEmployee = {...employee, age: 50, salary: "Budget of Kiev"};
log(["Task 6", newEmployee]);

//=================================================================================================================
//7.)
//Дополните код так, чтоб он был рабочим.

//----------------
//Data:

//----------------
//Solution:
const array = ['value', () => 'showValue'];

// Допишите ваш код здесь:
const [value, showValue] = [...array];
alert(value); // должно быть выведено 'value'
alert(showValue());  // должно быть выведено 'showValue'
//=================================================================================================================
// Теоретические вопросы.
// 1.) Опишите своими словами, что такое метод обьекта.
/* 
Метод объекта - это функция встроенная в тело объекта, имеющая доступ к свойствам и значениям этого объекта, прои этом не 
зависящая от стальной части кода напрямую (инкапсуляция). Служит для обработки и модификации свойств и их значений внутри объекта.
*/

//  'use strict'; - в строгом режиме не работает ("newUser is not defined" - 20 строчка)

// Функция "createNewUser"
function createNewUser() {
  let firstName = prompt(`Please, enter your first name`, "First name");
  let lastName = prompt(`Please, enter your second name`, "Second name");
  while (firstName === "First name" || lastName === "Second name") {
    alert(`Please, enter correctly`);
    firstName = prompt(`Please, enter your first name`, "First name");
    lastName = prompt(`Please, enter your second name`, "Second name");
  }

  return {
    firstName,
    lastName,
    getLogin() {
      return this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
    },
  };
}

const newUser = createNewUser();

console.log(newUser.getLogin());

// Необязательное задание

Object.defineProperty(newUser, "firstName", {
  configurable: true,
  writable: false,
  value: newUser.firstName,
});
Object.defineProperty(newUser, "lastName", {
  configurable: true,
  writable: false,
  value: newUser.lastName,
});

newUser.setFirstName = function (newFName) {
  Object.defineProperty(newUser, "firstName", {
    value: newFName,
  });
};

newUser.setLastName = function (newLName) {
  Object.defineProperty(newUser, "lastName", {
    value: newLName,
  });
};

// Test

console.log(newUser); //Исходный объект

newUser.firstName = "LoL";
newUser.lastName = "BoB";

console.log(newUser); // (Test 1) Тест после присвоения

newUser.setFirstName("LoL");
newUser.setLastName("BoB");

console.log(newUser); // (Test 2) Тест после использования методов

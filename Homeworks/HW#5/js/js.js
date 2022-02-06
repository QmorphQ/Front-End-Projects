// Теоретический вопрос
// Опишите своими словами, что такое экранирование, и зачем оно нужно в языках программирования.

/*Ответ: Экранирование - это сбособ использовать спецсимволы ("\", ".", "'" и т.д.) как простые символы. Например alert("This \"something\" is not necessary" => This "something" is not necessary).
Используется для доступа к спецсимволу, как обычному символу, например, чтобы найти его в сторке.
alert( "/".match(/\//) ) => '/'.
*/

"use strict";

function createNewUser() {
  let firstName = prompt(`Please, enter your first name`, "First name");
  let lastName = prompt(`Please, enter your second name`, "Second name");
  while (firstName === "First name" || lastName === "Second name") {
    alert(`Please, enter correctly`);
    firstName = prompt(`Please, enter your first name`, "First name");
    lastName = prompt(`Please, enter your second name`, "Second name");
  }
  let birthday = prompt(
    `Please, enter the date of your birth according to positions:`,
    "dd.mm.yyyy "
  );
  while (
    birthday === null ||
    birthday.length > 11 ||
    birthday === "dd.mm.yyyy " ||
    birthday.slice(0, 2) > 31 ||
    birthday.slice(3, 5) > 12 ||
    (birthday.slice(6, 10) > 2005 && birthday.slice(6, 10) < 1900) ||
    birthday == ""
  ) {
    alert(`Please, enter the date correctly`);
    birthday = prompt(
      `Please, enter the date of your birth according to positions:`,
      "dd.mm.yyyy "
    );
  }
  return {
    firstName,
    lastName,
    birthday,
    getLogin() {
      return this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
    },
    getAge() {
      return Math.floor(
        (new Date() -
          Date.parse(
            `${this.birthday.slice(6, 10)}-${this.birthday.slice(
              3,
              5
            )}-${this.birthday.slice(0, 2)}`
          )) /
          31557600000
      );
    },
    getPassword() {
      return (
        this.firstName[0].toUpperCase() +
        this.lastName.toLowerCase() +
        this.birthday.slice(6, 10)
      );
    },
  };
}

const newUser = createNewUser();
console.log(newUser);

console.log(newUser.getLogin());

console.log(newUser.getAge());

console.log(newUser.getPassword());

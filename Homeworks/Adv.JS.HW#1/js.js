//===============
"use strict"; //+
//===============
//Теоретический вопрос
//Обьясните своими словами, как вы понимаете, как работает прототипное наследование в Javascript.

/*Ответ: прототипное наследование в JS - это механизм создания нового объекта на базе родительского ("Prototype") с теми же свойствами и доступом к методам родителя. При необходимости мы можем изменить, дополнить или модифицировать свойства и методы в объекте. 
*/

document.addEventListener("DOMContentLoaded", (event) => {
  //====================================================//

  //Class Employee:
  class Employee {
    //Properties:
    constructor(firstName, secondName, salary, birthYear) {
      this._firstName = firstName;
      this._secondName = secondName;
      this._birthYear = birthYear;
      this._salary = salary;
    }
    //-----------

    //Methods:
    //getters:
    get name() {
      return this._firstName + " " + this.__secondName;
    }
    get firstName() {
      return this._firstName;
    }
    get secondName() {
      return this._secondName;
    }
    get salary() {
      return this._salary;
    }
    get age() {
      let currentYear = new Date().getFullYear();
      return currentYear - this.birthYear;
    }
    get birthYear() {
      return this._birthYear;
    }
    //-----------

    //setters:
    set firstName(value) {
      let str = value.trim();
      return (this._firstName =
        str[0].toUpperCase() + str.slice(1).toLowerCase());
    }
    set secondName(value) {
      let str = value.trim();
      return (this._secondName =
        str[0].toUpperCase() + str.slice(1).toLowerCase());
    }
    set salary(value) {
      return (this._salary = value);
    }
    set birthYear(value) {
      return (this._birthYear = value);
    }
  }
  //====================================================//

  // Class Programmer:
  class Programmer extends Employee {
    constructor(firstName, secondName, salary, birthYear, lang) {
      super(firstName, secondName, salary, birthYear);
      this._lang = lang;
    }
    //-----------

    //Methods:
    //Getters:
    get lang() {
      return this._lang;
    }
    get salary() {
      return this._salary * 3;
    }
    //-----------

    //Setters:
    set lang(value) {
      return (this._lang = value);
    }
    set salary(value) {
      return (this._salary = value);
    }
    //-----------
    //Additional methods:
    addLang(value) {
      return (this._lang = this._lang + ", " + value.trim());
    }
  }
  //====================================================//

  //Create Objects:
  const Mark = new Programmer(
    "Mark",
    "Steel",
    5000,
    1990,
    "Java Script, Phyton, Java"
  );
  //--------------------------
  const Fred = new Programmer(
    "Fred",
    "White",
    3000,
    2000,
    "Java Script,Phyton, PHP"
  );
  //--------------------------
  const John = new Programmer(
    "John",
    "Snow",
    6000,
    1960,
    "Java Script, Phyton, Coffee Script, Basic C++"
  );
  //--------------------------
  console.log(Mark);
  console.log(Fred);
  console.log(John);
  //====================================================//
});

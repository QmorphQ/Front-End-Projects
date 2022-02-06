//===============
"use strict"; //+
//===============

class Employee {
  //Properties:
  constructor(firstName, secondName, salary, birthYear) {
    this.__firstName = firstName;
    this.__secondName = secondName;
    this.__birthYear = birthYear;
    this.__salary = salary;
  }
  //=================================
  //Methods:
  //--------------
  //getters:
  get name() {
    return (this.__firstName + ' ' + this.__secondName);
  }
  get firstName() {
    return this.__firstName;
  }
  get secondName() {
    return this.__secondName;
  }
  get salary() {
    return this.__salary;
  }
  get age() {
    let currentYear = new Date().getFullYear();
    return (currentYear - this.birthYear);
  }
  get birthYear() {
    return this.__birthYear;
  }
  //--------------
  //setters:
  set firstName(value) {
    if(/[^A-Za-z]/g.test(value)) {
    return  console.log("%c Plese, enter correct value.", "background-color: orange; color: blue;");
    }
    let str = value.trim();
    return (this.__firstName = str[0].toUpperCase() + str.slice(1).toLowerCase());
  }
  set secondName(value) {
    if(/[^A-Za-z]/g.test(value)) {
    return console.log("%c Plese, enter correct value.", "background-color: orange; color: blue;");
    }
    let str = value.trim();
    return (this.__secondName = str[0].toUpperCase() + str.slice(1).toLowerCase());
  }
  set salary(value) {
    if(!(typeof value === 'number')) {
    return  console.log("%c Please, enter correct value.", "background-color: orange; color: blue;");
    }
    return (this.__salary = value);
  }
  set birthYear(value) {
    if(!(typeof value === 'number')) {
    return  console.log("%c Please, enter correct value.", "background-color: orange; color: blue;");
    }
    return (this.__birthYear = value);
  }
  //--------------
  //Additional methods:
  lockProp(property) {
    let prop = "__" + [`${property}`];
  }
  unlockProp(property) {
    let prop = "__" + this[`${property}`];
  }
  
  //================================
};

//===============
"use strict"; //+
//===============

class Programmer extends Employee {
    constructor(firstName, secondName, salary, birthYear, lang){
        super (firstName, secondName, salary, birthYear);
        this.__lang = lang;
    }  
    //-----------
    //Methods:
    //Getters: 
    get lang (){
        return this.__lang;
    }
    get salary(){
      return  (this.__salary * 3);
    }
    //-----------
    //Setters:
    set lang (value){
        return this.__lang = value;
    }
    set salary(value){
        return this.__salary = value;
    }
    //-----------
    //Additional methods:
    addLang(value) {
       return (this.__lang = this.__lang + ', ' + value.trim());
    }
}
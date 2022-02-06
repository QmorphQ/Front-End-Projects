//===============
"use strict"; //+
//===============

document.addEventListener("DOMContentLoaded", (event) => {
  //====================================================//
  const Mark = new Programmer ('Mark', 'Steel', 5000, 1990, 'Java Script')
  console.log(Mark);
  Mark.salary = 7000;
  console.log(Mark.salary);
  console.log(Mark.lang);
  console.log(Mark.addLang('Java'));
  console.log(Mark.lang);
  
});

//-----------
"use strickt";
//-----------
const a =require('./js1.js');
//Замыкание ("Closure"):
//----------------------------
function findSum(a) {
  function result(b) {
    return console.log(a + b);
  }
  return result;
}
let v = findSum(5);
v(78);
a.sayHi('Vlad');
//----------------------------

//========================================================

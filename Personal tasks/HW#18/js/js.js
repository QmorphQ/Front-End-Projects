"use strict";
// Некий условный объект
let someObj = {
  firstName: "Nick",
  age: 18,
  height: "180 см",
  weight: "70 кг",
  hobbies: [
    "games",
    "sport",
    "tv show",
    [1, 2, 3, , 4, 5],
    12,
    14,
    15,
    "lolo",
    "bobo",
    { ha: 1, jo: 2, si: [1, 2, 3, 4, 5] },
  ],
  table: {
    math: 7,
    english: 10,
    physic: 8,
    sport: { yoga: 8, sprint: 7, jump_around: [6, 7, {a: 1, b: 2}] },
    null: null,
  },
  hopeless: null,
};

console.log(someObj); // Initial Object

//Function for Array property
function makeArrayClone(a) {
  let b = [];
  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] !== "object" || a[i] === null) {
      b[i] = a[i];
      continue;
    } else if (Array.isArray(a[i])) {
      b[i] = makeArrayClone(a[i]);
    } else {
      b[i] = makeObjCloneOf(a[i]);
    }
  }
  return b;
}
// Function to create a clone of an Object
function makeObjCloneOf(someObj) {
  let newObj = {};
  for (let key in someObj) {
    if (typeof someObj[key] !== "object" || someObj[key] === null) {
      newObj[key] = someObj[key];
      continue;
    } else if (Array.isArray(someObj[key])) {
      newObj[key] = makeArrayClone(someObj[key]);
    } else {
      newObj[key] = makeObjCloneOf(someObj[key]);
    }
  }
  return newObj;
}

//Creation of the new Object
let newObj = makeObjCloneOf(someObj);
console.log(newObj);

//Tests
console.log(newObj === someObj); //false
console.log(newObj.age === someObj.age); //true
console.log(newObj.hobbies === someObj.hobbies); //false
console.log(newObj.table === someObj.table); //false
console.log(someObj.table.sport.jump_around === newObj.table.sport.jump_around); //false
console.log(newObj.hobbies[3] === someObj.hobbies[3]); //false
console.log(newObj.table.sport.jump_around[2] === someObj.table.sport.jump_around[2]);
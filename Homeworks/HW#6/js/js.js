// Теоретический вопрос
// Опишите своими словами как работает цикл forEach.

/* Цикл forEach проходит по всем элементам массива и вызывает для каждого из них callbackFunction(),
в которую в качестве аргумента подставляет элемент массива. Сам по себе цикл никаких действий и модификаций над массивом не производит.
*/

"use strickt";
// Исходный условный массив
const initArray = [
  23,
  56,
  "12",
  "LoL",
  "BoB",
  null,
  undefined,
  Symbol(),
  true,
  21415n,
  { a: 1, b: 2, c: 3 },
  [4, 5, 6],
];
// Массив типов данных
const types = [
  "number",
  "boolean",
  "bigint",
  "string",
  "null",
  "undefined",
  "symbol",
  "object",
];

// Вспомогательная функция

function trueTypeOf(x) {
  return x === null ? 'null' : typeof(x)
}

//"forEach"

function filterBy(someArray, valueType) {
  let newArray = [];
  someArray.forEach((element) => {
    if (trueTypeOf(element) !== valueType) {
      newArray.push(element);
    }
  });
  return newArray;
}
types.forEach(function (type, index) {
  console.log(index + 1, type);
});
types.forEach((type, index) => {
  console.log(index + 1, filterBy(initArray, type));
});

//"Filter"

function filterBy(someArray, valueType) {
  return someArray.filter((element) => trueTypeOf(element) !== valueType);
}

types.forEach((type, index) => {
  console.log(index + 1, filterBy(initArray, type));
});

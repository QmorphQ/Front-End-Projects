/* Задание
Создать объект студент "студент" и проанализировать его табель. Задача должна быть реализована на языке javascript, без использования фреймворков и сторонник библиотек (типа Jquery).
Технические требования:

Создать пустой объект student, с полями name и lastName.
Спросить у пользователя имя и фамилию студента, полученные значения записать в соответствующие поля объекта.
В цикле спрашивать у пользователя название предмета и оценку по нему. Если пользователь нажмет Cancel при n-вопросе о названии предмета, закончить цикл. Записать оценки по всем предметам в свойство студента tabel(as array[...]).
Посчитать количество плохих (меньше 4) оценок по предметам. Если таких нет, вывести сообщение Студент переведен на следующий курс.
Посчитать средний балл по предметам. Если он больше 7 - вывести сообщение Студенту назначена стипендия.*/

"use strict";

function getTable() {
  const n = 15;
  let appraisal = [];
  for (let i = 0; i <= n - 1; i++) {
    let subject = prompt(`Enter the subject`, " ");
    if (subject === null) {
      break;
    }
    appraisal[i] = +prompt(`Enter the number`, "0");
    console.log(appraisal[i]);
  }
  return appraisal;
}
function createStudent() {
  const firstName = prompt(`Please, enter your first name`, " ");
  const lastName = prompt(`Please, enter your last name`, " ");

  return {
    firstName,
    lastName,
    table: getTable(),
  };
}
let average = (array) => array.reduce((a, b) => a + b) / array.length;

let students = createStudent();
console.log(students.table);
let sum = students.table.reduce((sum, a) => (a < 4 ? sum + 1 : sum), 0);
sum === 0 ? alert(`Студент переведен на следующий курс.`) : console.log(`Колличество плохих оценок ${sum}`);
console.log(`Средний балл ${average(students.table)}`);

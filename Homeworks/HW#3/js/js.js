// Ответы на теоретические вопросы.
/* 1.) Описать своими словами для чего вообще нужны функции в программировании.
   2.) Описать своими словами, зачем в функцию передавать аргумент.
   3.) Напишите как вы понимаете рекурсию. Для чего она используется на практике?

1.) Функции позволяют существенно упростить написние кода, сворачивая однотипный набор действий в одно действие - вызов функции, при этом над достаточно задать аргументы для функции при ее вызове. Функции могут быть вложенными, вызывать сами себя, работать с любыми типами данным, что дает нам возможность решать "сложное" "просто".
2.) Функция сама по себе представляет часть кода, который можно использовать в разных местах общего кода, когда это нужно. "чистая" функция сама по себе никак не влияет на ее окружение, она просто дает на выходе результат действий. При вызове функции без аргументов (значений параметров) ничего не произойдет (только у функций с сайд эффектами). Функция - это просто инструмент, совершающий типовые для нашего кода действия и передача аргументов функции это, собственно, ее предназначение - выполнить код для данных значений получаемых из другого места и выдать результат.
3.) Рекурсия - это вызов функции самой себя. Используется для упрощения решения задач, если это возможно. Общую запись искомого разбивают на более простую, и так далее, пока ход самовызова не доходит до очевидного случая, записанного в теле функции. Затем функция делает обратный ход, просто сворачиваясь из стека в стек. Если в общем - рекурсия это способ решения математических задач на основе возможностей языка программирования, как бы обходя сами математические решения.
*/

// Math function

"use strict";
// Function
function calcNumbers(a, b, c) {
  switch (c) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "/":
      return a / b;
    case "*":
      return a * b;
  }
}

let firstOperand = +prompt(`Enter the first number`, '');
let secondOperand = +prompt(`Enter the second operand`, '');
while (
  isNaN(firstOperand) ||
  isNaN(secondOperand) ||
  firstOperand == "" ||
  secondOperand == ""
) {
  alert(`Please, enter numbers correctly`, '');
  firstOperand = +prompt(`Enter the first number`, '');
  secondOperand = +prompt(`Enter the second number`, '');
}

let userOperator = prompt(`Enter the operator`, 'Choose from: +, -, /, *');
while (
  userOperator != "+" &&
  userOperator != "-" &&
  userOperator != "/" &&
  userOperator != "*"
) {
  alert(`Please, enter the operator correctly`);
  userOperator = prompt(`Enter the operator`, 'Choose from: +, -, /, *');
}

console.log(calcNumbers(firstOperand, secondOperand, userOperator));

// Factorial (n!, где n - натуральное число)

let number = +prompt(`Enter the number`, '');
while (
  isNaN(number) ||
  number == "" ||
  !Number.isInteger(number) ||
  number <= 0
) {
  alert(`Please, enter number correctly`, '');
  number = +prompt(`Enter the number`, '');
}
// Function
function findFactorial(k) {
  return (k <= 1) ? k : k * findFactorial(k - 1);
}
alert(findFactorial(number));

// Fibonacci

let firstNumber = +prompt(`Enter the first number`, '');
let secondNumber = +prompt(`Enter the second number`, '');
while (
  isNaN(firstNumber) ||
  firstNumber == "" ||
  !Number.isInteger(firstNumber) ||
  isNaN(secondNumber) ||
  secondNumber == "" ||
  !Number.isInteger(secondNumber)
) {
  alert(`Please, enter number correctly`, '');
  firstNumber = +prompt(`Enter the first number`, '');
  secondNumber = +prompt(`Enter the second number`, '');
}

let thirdNumber = +prompt(`Enter the third number`, '');
while (
  isNaN(thirdNumber) ||
  thirdNumber == "" ||
  !Number.isInteger(thirdNumber) ||
  thirdNumber < 0
) {
  alert(`Please, enter number correctly`, '');
  thirdNumber = +prompt(`Enter the third number`, '');
}

function findNumber(fo, f1, n) {
  if (n <= 0) {
    return fo;
  } else if (n <= 1) {
    return f1;
  } else {
    return findNumber(fo, f1, n - 1) + findNumber(fo, f1, n - 2);
  }
}

alert(findNumber(firstNumber, secondNumber, thirdNumber));

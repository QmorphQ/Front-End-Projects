// Ответы на теоретические вопросы.

/* Зачем нужны циклы?

Циклы позволяют обрабатывать крупные массивы значений при различных заданных начальных условиях тем, или иным способом, давая нам возможность управлять этим процессои и реализовывать решения задач путем многократного выполнения команд.
Просто многократно выплняет код пока сохраняются условия, либо для заданного кооличества итераций.
*/



// Part 1

'use strict';

let n = 0;
let m = Number(prompt(`Please, enter the number`, ''));
 while (isNaN(m) || m <= 0 || !Number.isInteger(m))
{
    alert(`Please, enter correctly`);
    m = Number(prompt(`Please, enter the number`, ''));
}
if (m < 5)
{
    alert(`Sorry, no numbers`);
} else for ( n = n + 1 ; n <= m ; n++)
{
    if (n % 5 === 0)
    {
        console.log(`${n} multiple 5`);
    }
}



///// Part 2

let a = Number(prompt(`Enter first value`));
let b = Number(prompt(`Enter second value`));

while (
  a <  0 ||
  b <= 0 ||
  b <= a ||
  !Number.isInteger(a) ||
  isNaN(a) ||
  !Number.isInteger(b) ||
  isNaN(b)
) {
  alert(`Please, enter correctly`);
  a = Number(prompt(`Enter the first value`, ""));
  b = Number(prompt(`Enter the second value`, ""));
}
primeNumber: for (a = a + 1; a < b; a++) {
  for (let k = 2; k < a; k++) {
    if (a % k === 0) {
      continue primeNumber;
    }
  }
  console.log(a);
}

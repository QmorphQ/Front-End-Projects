/*Ответы на теоретичесуие вопросы.

1.) Переменная var объявляется еще до выполнения кода и присвоения значения в начале функции или скрипта и имеет значение undefined, в то время, как переменные let и const объявляются по ходу выполнения скрипта.
2,) Использование var приводит к неудобствам в написании и выполнении кода из-за своих "врожденных особенностей": переменная var загружается еще до выполнения кода; область видимости ограничена функцией или глобальным скриптом, т.е. значение var сохраняется и вне блоков и приходится использовать новые переменные, в то время как переменная let не видна за пределами блока, что облегчает работу, например, с циклами. Переменные let и const удобны и предсказуемы, работают там, где это установлено разработчиком и были введены специально на замену var.*/

'use strict';
let firstName = prompt('What is your name?', '');
while (firstName == "" || firstName.length > 10)
{
    alert("Please, enter your name correctly");
    firstName = prompt('What is your name?', '');
}
let age = Number(prompt('How old are you?', ''));
while (isNaN(age) || age > 100 || age == '')
{
    alert("Please, enter your age correctly");
    age = prompt('How old are you?', '');
}
if (age < 18 ) 
{
    alert("You are not allowed to visit this website.");
} 
else if (age < 22 && !confirm("Are you sure you want to continue?"))
{
    
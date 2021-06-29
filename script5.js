'use strict';

/* 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
      Обязательно использовать оператор return. 
*/

let x = 10, y = 20;

function amount(x, y) {
    return (x + y);
}
let amt = amount(x, y);


function difference(x, y) {
    return (x - y);
}
let dif = difference(x, y);


function division(x, y) {
    return (x / y);
}
let dvs = division(x, y);


function multiplication(x, y) {
    return (x * y);
}
let mtp = multiplication(x, y);


// проверяем:
amount(x, y);
alert(amt);

// результат: 30
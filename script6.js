'use strict';

/* 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов,
operation – строка с названием операции.В зависимости от переданного значения операции выполнить одну из арифметических операций(использовать функции из пункта 5) и вернуть полученное значение(использовать switch). */

var x = +prompt(`Введите первое число: `);
var y = +prompt(`Введите второе число: `);
var operation = prompt(`Какую операцию производим с числами (сложение, вычитание, умножение, деление)`);


function matchOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложение':
            return amount(arg1, arg2);
        case 'вычитание':
            return defference(arg1, arg2);
        case 'умножение':
            return multuplication(arg1, arg2);
        case 'деление':
            return devicePixelRatio(arg1, arg2);
    }
}


function amount(x, y) {
    return (x + y);
}
let amt = amount(x, y)


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


alert(`Результат выбранной операции ${operation}: ${matchOperation(x, y, operation)}`);
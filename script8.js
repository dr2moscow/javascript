'use strict';

// 8. С помощью рекурсии организовать функцию возведения числа в степень.Формат: function power(val, pow), где val – заданное число, pow – степень. //

let val = 2, pow = 3;

function power(val, pow) {
    return pow ? val * power(val, pow - 1) : 1;
}

alert(`Число ${val} возведено в степено ${pow}, результат = ${power(2, 3)}`);

// Результат: 8
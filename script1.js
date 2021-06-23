// 1. С помощью цикла вывести все простые числа в промежутке от 0 до 100.

// *Простое число, большее 1, если оно ни на что не делиться, кроме себя и 1


let num = 100; // диапазон в котором ищем простое число

nextCheck:
for (a = 2; a <= num; a++) { // перебираем числа от 2
    for (b = 2; b < a; b++) { // проверям делится ли число
        if (a % b == 0) continue nextCheck // если не делиться, то берем следующие
    }
    console.log(a); // выводим простые числа в консольы
}

// Результат: 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97
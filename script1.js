'use strict';

/* 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать
любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом,
т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8,
столбцы – латинскими буквами A, B, C, D, E, F, G, H. */


var figuresBoard = ["&#9823;", "&#9820;", "&#9822;", "&#9821;", "&#9819;", "&#9818;", "&#9821;", "&#9822;", "&#9820;"];
var letBoard = ["", "A", "B", "C", "D", "E", "F", "G", "H", ""];
var numBoard = ["", 8, 7, 6, 5, 4, 3, 2, 1, ""];

var table = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.fontSize = "24px";

function renderBoard() {
    for (var i = 0; i < 10; i++) {
        var tr = document.createElement("tr");
        table.append(tr);
        for (var j = 0; j < 10; j++) {
            var td = document.createElement("td");
            td.style.textAlign = "center";
            td.style.width = "60px";
            td.style.height = "60px";

            if (i == 0 || i == 9) {
                td.innerHTML = letBoard[j];
                td.style.transform = i == 0 ? "rotate(180deg)" : "";
            } else if (j == 0 || j == 9) {
                td.innerHTML = numBoard[i];
                td.style.transform = j == 9 ? "rotate(180deg)" : "";
            } else {
                if (i % 2 == 0) {
                    j % 2 == 0 ? td.style.backgroundColor = "#9E9E9E" : td.style.backgroundColor = "#616161";
                } else {
                    j % 2 == 0 ? td.style.backgroundColor = "#616161" : td.style.backgroundColor = "#9E9E9E";
                }
                td.style.fontSize = "40px";
                td.style.border = "1px solid #616161";

                if (i == 1 || i == 8) {
                    td.innerHTML = figuresBoard[j];
                } else if (i == 2 || i == 7) {
                    td.innerHTML = figuresBoard[0];
                }
                td.style.color = (i == 1 || i == 2) ? "#000" : "#FFF";
            }

            tr.append(td);
        }
    }
    document.querySelector("#chessboard").append(table);
}

renderBoard();
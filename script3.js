'use strict';

/* 3*. Сделать так, чтобы товары в каталоге выводились при помощи JS:
3.1. Создать массив товаров (сущность Product);
3.2. При загрузке страницы на базе данного массива генерировать вывод из него.
HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога
генерируется JS.
*/

const product = [
    {
        id_product: 101,
        product_name: 'Карандаш',
        price: 10.5,
        quantity: 1,
        weight: 10,
        discount: 10,
        image: 'https://marketprezent.ru/images/oasiscatalog/1/6/164a5042313fd819.jpg'
    },
    {
        id_product: 102,
        product_name: 'Ручка',
        price: 120,
        quantity: 2,
        weight: 20,
        discount: 0,
        image: 'https://cdn1.ozone.ru/s3/multimedia-k/6013838852.jpg'
    },
    {
        id_product: 103,
        product_name: 'Тетрадь',
        price: 7,
        quantity: 10,
        weight: 50,
        discount: 20,
        image: 'https://nicom-market.ru/upload/iblock/e87/e8735ee8f7e28720a9cb149e6aed2f72.jpg'
    }
];

for (var i = 0; i < product.length; i++) {
    var div = document.createElement("div");
    div.className = "catalogProduct";
    div.innerHTML = `<h2> ${product[i].product_name} </h2><p>Цена: ${product[i].price} руб.<br>Вес: ${product[i].weight} гр. </p><img src="${product[i].image}" alt="${product[i].product_name}">`;
    document.getElementById("catalog").appendChild(div);
}

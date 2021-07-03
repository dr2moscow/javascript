'use strict';

/* 2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре.
Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
2.1. Пустая корзина должна выводить строку «Корзина пуста»;
2.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
*/

const basket = {
    goods: [
        {
            id_product: 101,
            product_name: 'Карандаш',
            price: 10.5,
            quantity: 1,
            weight: 10,
            discount: 10
        },
        {
            id_product: 102,
            product_name: 'Ручка',
            price: 120,
            quantity: 2,
            weight: 20,
            discount: 0
        },
        {
            id_product: 103,
            product_name: 'Тетрадь',
            price: 7,
            quantity: 10,
            weight: 50,
            discount: 20
        }
    ],

    countBasketPrice() {
        return this.goods.reduce((totalPrice, cartItem) => totalPrice + (cartItem.price - (cartItem.price / 100 * cartItem.discount)) * cartItem.quantity, 0);
    }
};

var basketMessage = document.createElement("p");

if (Object.keys(basket.goods).length == 0) {
    basketMessage.innerText = "Корзина пуста";
} else {
    basketMessage.innerText = `В корзине ${Object.keys(basket.goods).length} товаров на сумму ${basket.countBasketPrice()} рублей`;
}

document.getElementById("basket").appendChild(basketMessage);

// Результат: В корзине 3 товаров на сумму 305.45 рублей
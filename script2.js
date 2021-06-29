//'use strict';

/* 2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
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

console.log(basket.countBasketPrice())

// Результат: 305.45
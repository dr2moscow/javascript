'use strict';

/* 3.* Подумать над глобальными сущностями. 
К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога.
Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта,
но в разных местах давал возможность вызывать разные методы.
*/


// Сущеность "Продукт"
class Product {
    constructor({ article, product, price, weight, color, image, discount }) {
        this.article = article;
        this.product = product;
        this.price = price;
        this.weight = weight;
        this.color = color;
        this.image = image;
    }

    // Проверяем скидку?
    hasDiscount() {
        return Boolean(this.discount);
    }

    // Возвращает размер скидки
    getDiscount() {
        return this.discount;
    }

    // Устанавливает скидку на товар
    setDiscount(discount) {
        this.discount = discount;
    }

    // Возвращает цену товара
    getPrice() {
        return this.price;
    };

    // Возвращает цену с учетом скидки
    getTotalPrice() {
        return this.discount ? this.price * (100 - this.discount) / 100 : this.price;
    };

};

// Создаем товар
const stationery = new Product({
    article: 101,
    product: 'Карандаш',
    price: 10.5,
    weight: 10,
    color: 'черный',
    image: 'https://marketprezent.ru/images/oasiscatalog/1/6/164a5042313fd819.jpg'
});

stationery.setDiscount(10);

console.log(`[Артикул ${stationery.article}] ${stationery.product} ${stationery.color} со скидкой ${stationery.getDiscount()}%!`);
console.log(`Всего за ${stationery.getTotalPrice()} рублей`);

/* Результат:
[Артикул 101] Карандаш черный со скидкой 10%!
script3.js:61 Всего за 9.45 рублей
*/


'use strict';

/* 1. 1. Доработать модуль корзины.
a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы
b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида

2 *У товара может быть несколько изображений. Нужно:
a. Реализовать функционал показа полноразмерных картинок товара в модальном окне
b. Реализовать функционал перехода между картинками внутри модального окна ("листалка")
*/

const catalog = {
    catalogBlock: null,
    cart: null,
    list: [
        {
            id_product: 101,
            product_name: 'Карандаш',
            price: 10.5,
            quantity: 1,
            weight: 10,
            discount: 10,
            image: './img/101.jpg'
        },
        {
            id_product: 102,
            product_name: 'Ручка',
            price: 120,
            quantity: 2,
            weight: 20,
            discount: 0,
            image: './img/102.jpg'
        },
        {
            id_product: 103,
            product_name: 'Тетрадь',
            price: 7,
            quantity: 10,
            weight: 50,
            discount: 20,
            image: './img/103.jpg'
        }
    ],

    /**
     * Инициальзация каталога.
     * @param catalogBlockClass - класс блока каталога
     * @param cart - корзина
     */
    init(catalogBlockClass, cart) {
        this.catalogBlock = document.querySelector(`.${catalogBlockClass}`);
        this.cart = cart;
        this.render();
        this.addEventHandlers();
    },

    /**
     * Рендер каталога
     */
    render() {
        if (this.getCatalogListLength() > 0) {
            this.renderCatalogList();
        } else {
            this.renderEmptyCatalog();
        }
    },

    /**
     * Добавляем обработку событий
     */
    addEventHandlers() {
        this.catalogBlock.addEventListener('click', event => this.addToBasket(event));
    },

    /**
     * Метод добавления в корзину
     */
    addToBasket(event) {
        if (!event.target.classList.contains('product__add-to-cart')) return;
        const id_product = +event.target.dataset.id_product;
        const productToAdd = this.list.find((product) => product.id_product === id_product);
        this.cart.addToBasket(productToAdd);
    },

    /**
     * Метод получения количества товаров в каталоге
     * @returns {number}
     */
    getCatalogListLength() {
        return this.list.length;
    },

    /**
     * Рендер списка товаров
     */
    renderCatalogList() {
        this.catalogBlock.innerHTML = '';
        this.list.forEach(item => {
            this.catalogBlock.insertAdjacentHTML('beforeend', this.renderCatalogItem(item));
        });
    },

    /**
     * Рендер отдельного товара из списка
     * @param item - товар
     * @returns {string} - сгенерированая строка разметки
     */
    renderCatalogItem(item) {
        return `<div class="product">
                <h3>${item.product_name}</h3>
                <p>Артикул: ${item.id_product}</p>
                <p>Цена: ${item.price} руб.</p>
                <img src=${item.image}>
                <button class="product__add-to-cart" data-id_product="${item.id_product}">В корзину</button>
            </div>`;
    },

    /**
     * Рендер пустого каталога
     */
    renderEmptyCatalog() {
        this.catalogBlock.innerHTML = '';
        this.catalogBlock.textContent = 'Каталог товаров пуст.';
    },
};

/**
 *  Объект корзины
 */
const cart = {
    cartBlock: null,
    clrCartButton: null,
    goods: [
         {
             id_product: 103,
             product_name: 'Тетрадь',
             price: 7,
             quantity: 1,
        },
    ],

    /**
     * Метод инициальзации корзины
     * @param cartBlockClass - класс блока корзины
     * @param clrCartButton - класс кнопки очистки корзины
     */
    init(cartBlockClass, clrCartButton) {
        this.cartBlock = document.querySelector(`.${cartBlockClass}`);
        this.clrCartButton = document.querySelector(`.${clrCartButton}`);

        this.addEventHandlers();
        this.render();
    },

    /**
     * Метод установки обработчиков событий
     */
    addEventHandlers() {
        this.clrCartButton.addEventListener('click', this.dropCart.bind(this));
    },

    /**
     * Метод очистки корзины
     */
    dropCart() {
        this.goods = [];
        this.render();
    },

    /**
     * Рендер корзины
     */
    render() {
        // if (this.goods.length) {
        if (this.getCartGoodsLength() > 0) {
            this.renderCartList();
        } else {
            this.renderEmptyCart();
        }
    },

    /**
     * Добавить товар
     */
    addToBasket(product) {
        if (product) {
            const findInBasket = this.goods.find((item) => product.id_product === item.id_product);
            if (findInBasket) {
                findInBasket.quantity++;
            } else {
                this.goods.push({ ...product, quantity: 1 });
            }
            this.render();
        } else {
            alert('Ошибка добавления!');
        }
    },

    /**
     * Получение количества товаров в корзине
     * @returns {number}
     */
    getCartGoodsLength() {
        return this.goods.length;
    },

    /**
     * Рендер пустой корзины
     */
    renderEmptyCart() {
        this.cartBlock.innerHTML = '';
        this.cartBlock.textContent = 'Корзина пуста.';
    },

    /**
     * Рендер списка товаров в корзине
     */
    renderCartList() {
        this.cartBlock.innerHTML = '';
        this.goods.forEach(item => {
            this.cartBlock.insertAdjacentHTML('beforeend', this.renderCartItem(item));
        });
    },

    /**
     * Рендер отдельного товара в корзине
     * @param item - товар
     * @returns {string} - сгененрированая строка разметки
     */
    renderCartItem(item) {
        return `<div>
                <div><h3>${item.product_name}</h3></div>
                <div>Цена: ${item.price} руб.<div>
                <div>Количество: ${item.quantity} шт.</div>
                <div>Сумма: ${item.price * item.quantity} шт.<div>
            </div>`;
    },
};

/**
 * Подключение каталога и корзины
 */
catalog.init('catalog', cart);
cart.init('cart', 'clr-cart');
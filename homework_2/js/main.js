'use strict';

/*const products = [
    {id: 1, title: 'Notebook', price: 2000, src: '001'},
    {id: 2, title: 'Mouse', price: 20, src: '002'},
    {id: 3, title: 'Keyboard', price: 200, src: '003'},
    {id: 4, title: 'Gamepad', price: 50, src: '004'},
];

const renderProduct = (title ='product', price = '1', src = '000') => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <img src='./img/${src}.jpg'></img>
                <p>${price}<span class="rub">&#8399</span></p>
                <button class="buy-btn">Купить</button>
            </div>`
};

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price, item.src));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);

    let images =  document.querySelectorAll('img');
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('width', '220px');
    }
    */

class Products {
    costructor(wrapper = '.products') {
        this.wrapper = wrapper;
        this.renderedGoods = [];
        this.renderGoods();
    }
    goods = [
        {id: 1, title: 'Notebook', price: 2000, src: '001'},
        {id: 2, title: 'Mouse', price: 20, src: '002'},
        {id: 3, title: 'Keyboard', price: 200, src: '003'},
        {id: 4, title: 'Gamepad', price: 50, src: '004'},
    ];
    renderGoods() {
        const block = document.querySelector(this.wrapper);
        for (let goodsItem of this.goods) {
            const product = new Product(goodsItem);
            this.renderedGoods.push(product);
            block.insertAdjacentHTML('beforeend', product.render());
        }
    }
}

class Product {
    constructor(goodsItem) {
        this.id = goodsItem.id;
        this.title = goodsItem.title;
        this.price = goodsItem.price;
        this.src = goodsItem.src;
    }
    render() {
        return `<div class="product-item">
                <h3>${title}</h3>
                <img src='./img/${src}.jpg'></img>
                <p>${price}<span class="rub">&#8399</span></p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new Products();
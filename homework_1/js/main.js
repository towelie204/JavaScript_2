'use strict';

const images = [img];
img

const products = [
    {id: 1, title: 'Notebook', price: 2000, img: document.createElement('img.src='../img/48515.jpg'')},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];

const renderProduct = (title, price, img) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                ${img}
                <button class="buy-btn">Купить</button>
            </div>`
};

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price, item.img));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);
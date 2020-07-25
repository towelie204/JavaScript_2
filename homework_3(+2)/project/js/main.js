'use strict';

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class GoodsList {
    constructor() {
        this.goods = [];
        this.allProducts = [];
        this.fetchGoods();
        this.render();
        this.getSum();
        this.getGoods() 
            .then(data => {
                this.goods = [...data];
                this.render();
            });
    }
   
    getGoods() {
        return fetch(`${API}/catalogData.json`)
        .then(result => result.json())
        .catch(error => {
            console.log(error);
        })
    }
    
    }
    render() {
        for(let product of this.goods) {
            const item = new GoodsItem(product);
            this.allProducts.push(item);
            document.querySelector('.products').insertAdjacentHTML("beforeend", item.render());
        }
    }
    
    getSum() {
        let sum = 0;
        for(let product of this.goods) {
            sum += product.price;
        }
        console.log(sum);
    }
}

class GoodsItem {
    constructor(product) {
        this.id-product = product.id_product;
        this.product_name = product.product_name;
        this.price = product.price;
        this.src = product.src;
    }
    render() {
        return `<div class="product-item">
                <h3>${this.product_name}</h3>
                <img src='./img/${this.src}.jpg'></img>
                <p>${this.price}<span class="rub">&#8399</span></p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let basketWindow = document.querySelector('.basketWindow');
let basketButton = document.querySelector('.btn-cart');
let buttonArrow = document.querySelector('.buttonArrow');

basketButton.addEventListener('click', function () {
    if (basketWindow.classList.contains('hidden')) {
        basketWindow.classList.remove('hidden');
        buttonArrow.classList.remove('fa-chevron-down');
        buttonArrow.classList.add('fa-chevron-up');
    } else {
        basketWindow.classList.add('hidden');
        buttonArrow.classList.add('fa-chevron-down');
        buttonArrow.classList.remove('fa-chevron-up');
    }
})

class Busket {
    addGoods {

    }
    removeGoods {

    }
    changeGoods {

    }
}

class BusketElement {

}
/*
function makeGETrequest(url, callback) {
    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            callback(xhr.responseText);
        }
    }

    xhr.open('GET', url, true);
    xhr.send();
}
*/





const list = new GoodsList();
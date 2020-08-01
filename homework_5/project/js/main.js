'use strict';

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        imgCatalog: 'img/001.jpg',
        filteredProducts: [],
        searcField: '',
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result =>
                    result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product) {
            console.log(product.id_product);
        },
        showHideBasket() {
            let basketWindow = document.querySelector('.basketWindow');
            let buttonArrow = document.querySelector('.buttonArrow');
            if (basketWindow.classList.contains('hidden')) {
                basketWindow.classList.remove('hidden');
                buttonArrow.classList.remove('fa-chevron-down');
                buttonArrow.classList.add('fa-chevron-up');
            } else {
                basketWindow.classList.add('hidden');
                buttonArrow.classList.add('fa-chevron-down');
                buttonArrow.classList.remove('fa-chevron-up');
            }
        },
        filterProducts() {
			const filter = new RegExp(this.searchLine, 'i');
			this.filteredProducts = this.products.filter(product => filter.test(product.title));
		},
    },
    mounted() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filteredProducts.push(el);
                }
            })
    },
})

/*isProductsEmty(products) {
    if (products.lenght == 0) {
        document.querySelector(.products).insertAdjacentHTML("beforeend", <div>Нет данных</div>);
    }
}*/


//console.log(app);


/*filter(value) {
    const regexp = new RegExp(value, 'i');
    this.filtered = this.allProducts.filter(product => regexp.test(product.product_name));
    this.allProducts.forEach(el => {
        const block = document.querySelector(`.product-item[data-id="${el.id_product}"]`);
        if (!this.filtered.includes(el)) {
            block.classList.add('invisible');
        } else {
            block.classList.remove('invisible');
        }
    })
}*/






/*
class GoodsList {
    constructor(container = '.products') {
        this.container = container;
        //this.list = list;
        this.goods = [];
        this.allProducts = [];
        this.getSum();
        this._getGoods()
            .then(data => {
                this.goods = [...data];
                this.render();
            });
        this.render();
    }

    handleData(data) {
        this.goods = [...data];
        this.render();
    }

    _getGoods() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        let block = document.querySelector(this.container);
        for (let product of this.goods) {
            let imageSrc = 0;
            this.goods.forEach((item) => {
                item.imageSrc = ++imageSrc;
            });
            const item = new GoodsItem(product);
            this.allProducts.push(item);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }

    getSum() {
        let sum = 0;
        for (let product of this.goods) {
            sum += product.price;
        }
        console.log(sum);
    }
}

class GoodsItem {
    constructor(product) {
        this.id = product.id;
        this.name = product.name;
        this.price = product.price;
        //this.src = 1;
        this.imageSrc = product.imageSrc;

    }

    render() {
        return `<div class="product-item">
                <h3>${this.product_name}</h3>
                <img src='./img/00${this.imageSrc}.jpg'></img>
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
*/



/*class Busket {
    addGoods {

    }
    removeGoods {

    }
    changeGoods {

    }
}

class BusketElement {

}*/
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





//const list = new GoodsList();
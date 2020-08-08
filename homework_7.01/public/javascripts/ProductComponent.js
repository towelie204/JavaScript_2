Vue.component('products', {
    data() {
        return {
            catalogUrl: '../db/products.json',
            products: [],
            filteredProducts: [],
        }
    },
    methods: {
        filterProducts(userSearch) {
            let filterRegExp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(product => filterRegExp.test(product.product_name));
        }
    },
    mounted() {
        this.$parent.getJson(this.catalogUrl)
            .then(data => {
                for (let product of data) {
                    this.products.push(product);
                    this.filteredProducts.push(product);
                }
            });
    },
    template: `<div class="products">
                   <product v-for="product of filteredProducts" :key="product.id_product" :img="img" :product="product">
                   </product>
               </div>`
});

Vue.component('product', {
    props: ['product'],
    template: `<div class="product product-transformer">
                    <a href="/transformer"><img src="img/tr1.jpg" alt="трансформер" width="134" height="200" class="catalog-picture" /></a>
                    <br/>
                    <a class="link" href="/transformer">Мольберт трансформер</a>
                    <button class="buy-btn" v-on:click="$parent.$emit('add-product', product)">Купить</button>
                </div>`

   /* template: `<div class="product-item">
                   <img :src="product.img" alt="Some_img">
                   <div class="desc">
                       <h3>{{product.title}}</h3>
                       <p>{{product.price}}</p>
                       <button class="buy-btn" v-on:click="$parent.$emit('add-product', product)">Купить</button>
                   </div>
               </div>`*/
});
Vue.component('products', {
    data() {
        return {
            catalogUrl: '/catalogData.json',
            products: [],
            imgCatalog: 'img/001.jpg',
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
        this.$parent.getJson(`${API + this.catalogUrl}`)
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
    props: ['product', 'imgCatalog'],
    template: `<div class="product-item">
                   <img :src="imgCatalog" alt="Some_img">
                   <div class="desc">
                       <h3>{{product.product_name}}</h3>
                       <p>{{product.price}}</p>
                       <button class="buy-btn" v-on:click="$parent.$emit('add-product', product)">Купить</button>
                   </div>
               </div>`
});
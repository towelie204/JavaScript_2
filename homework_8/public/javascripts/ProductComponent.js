Vue.component('products', {
    data() {
        return {
            catalogUrl: '/catalogData.json',
            products: [],
            filteredProducts: [],
        }
    },
    methods: {
        filterProducts(userSearch) {
            let filterRegExp = new RegExp(userSearch, 'i');
            this.filteredProducts = this.products.filter(product => filterRegExp.test(product.title));
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
                   <product v-for="product of filteredProducts" :key="product.id" :img="img" :product="product">
                   </product>
               </div>`
});

Vue.component('product', {
    props: ['product'],
    template: `<div class="product-item">
                    <a href="#"><img v-bind:src="product.img" alt="" width="134" height="200" class="catalog-picture" /></a>
                    <br/>
                    <a class="link product__title" href="#">{{product.title}}</a>
                    <span class="product-page__price">{{product.price}}</span><br/>
                    <button class="buy-btn" @click="$parent.$parent.$refs.cart.addProduct(product)">Купить</button>
                </div>`

   /* template: `<div class="product-item">
                   <img :src="product.img" alt="Some_img">
                   <div class="desc">
                       <h3>{{product.title}}</h3>
                       <p>{{product.price}}</p>
                       <button class="buy-btn" v-on:click="$parent.$emit('add-product', product)">Купить</button>
                   </div>
               </div>`
               
@click="$parent.$parent.$refs.cart.addProduct(product)

               */
});

export default Vue.component;
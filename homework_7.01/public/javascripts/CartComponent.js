Vue.component('cart', {
    data() {
        return {
            cartItems: [],
            cartUrl: '/getBasket.json',
            imgCart: 'img/001.jpg',
            cartShow: false,
        }
    },
    methods: {
        addProduct (product) {
            this.$parent.getJson(`${API}/addToBasket.json`)
            .then(data => {
                if(data.result === 1){
                    let find = this.cartItems.find(el => el.id_product === product.id_product);
                    if(find){
                        find.quantity++;
                    } else {
                        let prod = Object.assign ({quantity: 1}, product)
                        this.cartItems.push (prod)
                    }
                } else {
                    console.log('Some error')
                }
            })
        }, 
        remove (product) {
            this.$parent.getJson(`${API}/deleteFromBasket.json`)
            .then(data => {
                if(data.result){
                    if (product.quantity > 1) {
                        product.quantity-- 
                    } else {
                        this.cartItems.splice (this.cartItems.indexOf (product), 1)
                    }
                }
            })
        },
    },
    mounted() {
            this.$parent.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for (let product of data.contents) {
                     this.cartItems.push(product);
                }
            })
    },
    template: `<div>
                   <div class="cart-block" v-show="cartShow">
                       <cartItem v-for="product of cartItems"
                       :key="product.id_product"
                       :img="imgCart"
                       :cartItem="product"></cartItem>
                   </div>
               </div>`
});

Vue.component('cartItem', {
    props: ['product'],
    template: `<div class="cart-item">
                   <div class="product-bio">
                       <img :src="img" alt="Some image">
                       <div class="product-desc">
                           <p class="product-title">{{ cart_item.product_name }}</p>
                           <p class="product-quantity">Quantity: {{ cart_item.quantity }}</p>
                           <p class="product-single-price">$ {{ cart_item.price }} each</p>
                       </div>
                   </div>
                   <div class="right-block">
                       <p class="product-price">{{ cart_item.quantity * cart_item.price }}</p>
                       <button class="del-btn" @click="$root.$refs.cart.remove(cart_item)">&times;</button>
                   </div>
               </div>`
});
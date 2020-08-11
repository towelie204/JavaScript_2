Vue.component('cart', {
    data() {
        return {
            cart: [],
            cartUrl: '/getBasket.json',
            cartShow: false,
        }
    },
    methods: {
        addProduct (product) {
            this.$parent.getJson(`${API}/addToBasket.json`)
            .then(data => {
                if(data.result === 1) {
                    let founded = this.cart.find(elem => elem.title === product.title);
                    if(founded) {
                        founded.count++;
                    } else {
                        let prod = Object.assign ({count: 1}, product);
                        this.cart.push (prod);
                    }
                } else {
                    console.log('error')
                }
            });
        }, 
        removeProduct (product) {
            this.$parent.getJson(`${API}/deleteFromBasket.json`)
            .then(data => {
                if(data.result){
                    if (product.count > 1) {
                        product.count-- 
                    } else {
                        this.cart.splice (this.cart.indexOf (product), 1)
                    }
                }
            });
        },
    },
    mounted() {
            this.$parent.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for (let product of data.contents) {
                     this.cart.push(product);
                }
            })
    },
    template: `<div>
                   <div class="cart-block" v-show="cartShow">
                       <cartItem v-for="item of cart"
                       :key="item.title"
                       :img="item.img"
                       :product="item"
                       @removeProduct="removeProduct"></cartItem>
                   </div>
               </div>`
});

Vue.component('cartItem', {
    props: ['product'],
    template: `<div class="cart-item">
                   <div class="product-bio">
                       <div class="product-desc">
                           <p class="product-title">{{product.title}}</p>
                           <p class="product-quantity">count: {{product.count}}</p>
                           <p class="product-single-price"> {{product.price}} р</p>
                       </div>
                   </div>
                   <div class="right-block">
                       <p class="product-price">{{product.count * product.price}}</p>
                       <button class="del-btn" @click="$root.$refs.cart.removeProduct(product)">&times;</button>
                   </div>
               </div>`
});

export default Vue.component;
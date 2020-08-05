Vue.component('search', {
    props: ['searchLine'],
    template: `<form action="#" class="search-form" @submit.prevent="$emit('filter')">
                    <input type="text" class="search-field" v-model="searchLine">
                    <button class="btn-search" type="submit" v-on:click="filterProducts">
                        <i class="fa fa-search"></i>
                    </button>
                </form>`
})
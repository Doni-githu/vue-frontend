<template>
    <div>
        <Product v-if="data" :data="data" />
    </div>
</template>
<script>
import Product from '../components/Product.vue';
import { mapState } from "vuex"
export default {
    components: { Product },
    computed: {
        ...mapState({
            data: state => state.product.data
        })
    },
    mounted(){
        this.$store.dispatch('getUserProducts')
    }
}
</script>
<style></style>
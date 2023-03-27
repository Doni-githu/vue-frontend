<template>
    <div>
        <p class="fs-1 text-center">Add product</p>
        <form @submit.prevent class="w-50 text-center mx-auto">
            <Input v-model="title" :type="'text'" :label="'Title'" />
            <Input v-model="description" :type="'text'" :label="'Description'" />
            <Input v-model="image" :type="'text'" :label="'Image'" />
            <div class="input-group mt-16px">
                <span class="input-group-text">$</span>
                <div class="form-floating">
                    <input v-model="price" type="number" class="form-control" id="floatingInputGroup1" placeholder="Price">
                    <label for="floatingInputGroup1">Price</label>
                </div>
            </div>
            <button class="btn btn-primary" @click="AddProduct" :disabled="isLoading">Add product</button>
        </form>
    </div>
</template>
<script>
import { getItem } from '../helpers/Storage.js'
import { mapState } from 'vuex'
export default {
    data() {
        return {
            title: '',
            description: '',
            image: '',
            price: ''
        }
    },
    computed: {
        ...mapState({
            isLoading: state => state.control.isLoading
        })
    },
    methods: {
        AddProduct() {
            if (!this.title || !this.description || !this.image || !this.price) {
                alert("All fields are required")
                return
            }
            const obj = {
                title: this.title,
                description: this.description,
                image: this.image,
                price: this.price
            }
            this.$store.dispatch('add', obj).then(()=>{
                this.$router.push('/')
            })
            this.title = ''
            this.description = ''
            this.image = ''
            this.price = ''
        }
    },
}
</script>
<style>
.mt-16px {
    margin-top: 16px;
    margin-bottom: 16px;
}
</style>
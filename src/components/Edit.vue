<template>
    <div>
        <p class="fs-1 text-center">Edit product</p>
        <form @submit.prevent class="w-50 text-center mx-auto">
            <Input v-model="title2" :type="'text'" :label="'Title'" />
            <Input v-model="description2" :type="'text'" :label="'Description'" />
            <Input v-model="image2" :type="'text'" :label="'Image'" />
            <div class="input-group mt-16px">
                <span class="input-group-text">$</span>
                <div class="form-floating">
                    <input v-model="price2" type="number" class="form-control" id="floatingInputGroup1" placeholder="Price">
                    <label for="floatingInputGroup1">Price</label>
                </div>
            </div>
            <button class="btn btn-primary" @click="EditProduct">Edit product</button>
        </form>
    </div>
</template>
<script>
export default {
    props: {
        detail: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            title2: this.detail.title,
            description2: this.detail.description,
            image2: this.detail.image,
            price2: this.detail.price,
        }
    },
    methods: {
        EditProduct() {
            if (!this.title2 || !this.description2 || !this.image2 || !this.price2) {
                alert("All fields are required")
                return
            }
            const obj = {
                title: this.title2,
                description: this.description2,
                image: this.image2,
                price: this.price2
            }
            this.$store.dispatch('editArticle', { id: this.$route.params.id, article: obj })
                .then((res) => {
                    this.$router.push("/")
                })
        }
    }
}
</script>
<style></style>
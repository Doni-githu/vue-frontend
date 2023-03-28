<template>
    <div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col" v-for="article in data" :key="article._id">
                <div class="card car shadow-sm">
                    <img :src="article.image">
                    <p class="fs-5">{{ article.title }}</p>
                    <div class="card-body">
                        <div class="d-flex justify-content-end align-items-center">
                            <small class="text-muted">{{ momentJS(article.createdAt) }}</small>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-outline-primary"
                                @click="Detail(article._id)">Detail</button>
                            <template v-if="isLoggIn && user._id === article.user">
                                <button type="button" class="btn btn-outline-secondary"
                                    @click="EditArticle(article._id)">Edit</button>
                                <button type="button" :disabled="isLoading" @click="Delete(article._id)"
                                    class="btn btn-outline-danger">Delete</button>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
import moment from "moment"
export default {
    props: {
        data: {
            type: Array,
            required: true
        }
    },
    computed: {
        ...mapState({
            isLoggIn: state => state.auth.isLoggIn,
            user: state => state.auth.user,
            isLoading: state => state.control.isLoading
        })
    },
    methods: {
        momentJS(date) {
            return moment(date).format("DD, MMM, YYYY")
        },
        Delete(id) {
            this.$store.dispatch("delete", id)
            this.$store.dispatch('getProducts')
        },
        Detail(id) {
            this.$router.push(`/detail/${id}`)
        },
        EditArticle(id) {
            this.$router.push(`/edit/${id}`)
        }
    }
}
</script>
<style>
.car p {
    width: 90%;
    margin: 20px auto;
}
</style>
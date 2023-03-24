<template>
    <div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col" v-for="article in data">
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
                            <button type="button" class="btn btn-outline-primary">Detail</button>
                            <button type="button" class="btn btn-outline-secondary">Edit</button>
                            <button type="button" class="btn btn-outline-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import moment from "moment"
export default {
    props: {
        data: {
            type: Array,
            required: true
        }
    },
    methods:{
        momentJS(date){
            return moment(date).format("DD, MMM, YYYY")
        }
    }
}
</script>
<style>
.car p{
    width: 90%;
    margin: 20px auto;
}
</style>
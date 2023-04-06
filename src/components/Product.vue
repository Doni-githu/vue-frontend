<template>
    <div>
        <div>
            <div class="row cols row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col" v-for="article in data" :key="article._id">
                    <div class="card car shadow-sm">
                        <img :src="article.image">
                        <div class="title">
                            <p class="fs-5">{{ article.title }}</p>
                        </div>
                        <div class="card-body">
                            <div class="flex">
                                <div>
                                    <p class="text-muted">Author: <span class="text-dark">{{ article.user.firstName
                                    }}</span></p>
                                </div>
                            </div>
                            <div>
                                <p class="text-dark">
                                    {{ article.description }}
                                </p>
                            </div>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">{{ momentJS(article.createdAt) }}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import moment from 'moment';
export default {
    props: {
        data: {
            type: Array,
            required: true
        }
    },
    methods: {
        momentJS(date) {
            return moment(date).format("DD MMM YYYY")
        }
    }
}
</script>
<style scoped>
.flex {
    display: flex;
    flex-direction: column;
}

.cols {
    width: 90%;
    margin: 0 auto;
    display: flex;
    gap: 50px;
    justify-content: space-between;
    flex-wrap: wrap;
}

.col {
    width: 450px;
}

.title {
    width: 90%;
    margin: 0 auto;
    display: flex;
    height: 50px;
    justify-content: flex-start;
}

.title p {
    line-height: 50px;
    height: 100%;
}

.car img {
    height: 350px;
}

@media only screen and (max-width:1875px) {
    .cols {
        justify-content: center;
    }
}

@media only screen and (max-width:622px) {
    .cols {
        width: 100% !important;
    }
}

@media only screen and (max-width:552px) {
    .col {
        width: 350px;
    }
}

@media only screen and (max-width:390px){
    .car img{
        width: 100%;
        object-fit: cover;
    }
}
</style>    
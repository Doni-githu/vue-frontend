<template>
    <div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col" v-for="article in data">
                <div class="card shadow-sm">
                    <img :src="article.image">
                    <p class="fs-5">{{ article.title }}</p>
                    <div class="card-body">
                        <div class="d-flex justify-content-end align-items-center">
                            <small class="text-muted">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        data: {
            type: Array,
            required: true
        }
    }
}
</script>
<style></style>
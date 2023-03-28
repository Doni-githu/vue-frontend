<template>
    <div class="context">
        <div class="context-center">
            <img :src="detail.image" />
            <h1>{{ detail.title }}</h1>
            <div>
                <span>{{ detail.price }}</span>
                <p>{{ detail.description }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        detail: {
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>
.context{
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
}
.context-center{
    width: 60%;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
</style>
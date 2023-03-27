<template>
    <div>
        <Register />
    </div>
</template>
<script>
import Register from '../components/Register.vue';
import { getItem } from '../helpers/Storage';

export default {
    components: { Register },
    mounted() {
        if (getItem('token')){
            return this.$router.push('/')
        }
    }
}
</script>
<style></style>
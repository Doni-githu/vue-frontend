<template>
    <div>
        <Login />
    </div>
</template>
<script>
import Login from '../components/Login.vue';
import { getItem } from '../helpers/Storage';
export default {
    components: { Login },
    mounted() {
        if (getItem('token')) {
            return this.$router.push('/')
        }
    }
}
</script>
<style></style>
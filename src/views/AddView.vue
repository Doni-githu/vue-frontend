<template>
    <Add />
</template>
<script>
import Add from '../components/Add.vue';
import { getItem } from '../helpers/Storage';

export default {
    components: { Add },
    mounted() {
        if (!getItem('token')) {
            return this.$router.push('/login')
        }
    }
}
</script>
<style></style>
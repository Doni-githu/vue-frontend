<template>
    <div>
        <Edit v-if="detail" :detail="detail" />
    </div>
</template>
<script>
import { mapState } from 'vuex';
import Edit from '../components/Edit.vue';
export default {
    components: {
        Edit
    },
    computed: {
        ...mapState({
            detail: state => state.control.detail
        })
    },
    mounted() {
        this.$store.dispatch('detail', this.$route.params.id)
    }
}
</script>
<style></style>
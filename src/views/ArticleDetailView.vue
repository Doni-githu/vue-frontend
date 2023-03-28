<template>
    <div>
        <ArticleDetail v-if="detail" :detail="detail" />
    </div>
</template>
<script>
import { mapState } from 'vuex';
import ArticleDetail from '../components/ArticleDetail.vue';

export default {
    components: { ArticleDetail },
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
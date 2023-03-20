<template>
  <div>
    <Cards :data="data" v-if="data" />
  </div>
</template>
<script>
import Cards from '../components/Cards.vue';
import { mapState } from "vuex"
export default {
  components: { Cards },
  computed: {
    ...mapState({
      data: state => state.product.data
    })
  },
  mounted() {
    this.$store.dispatch('getProducts')
  }
}
</script>
<style></style>
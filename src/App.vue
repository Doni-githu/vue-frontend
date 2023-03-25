<template>
  <div class="conteiner">
    <Navbar />
    <RouterView />
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';
import { getItem } from "./helpers/Storage"
export default {
  components: {
    Navbar
  },
  mounted() {
    if (getItem("token")) {
      console.log("Token bor");
      this.$store.dispatch('getUserByToken')
    }
  }
}
</script>
<style>
.conteiner {
  width: 90%;
  margin: 0 auto;
}
</style>
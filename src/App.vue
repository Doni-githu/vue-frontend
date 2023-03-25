<template>
  <div class="conteiner">
    <Navbar />
    <RouterView />
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';
export default {
  components: {
    Navbar
  },
}
</script>
<style>
.conteiner {
  width: 90%;
  margin: 0 auto;
}
</style>
<template>
  <div class="conteiner">
    <Navbar />
    <RouterView />
  </div>
</template>
<script setup>
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';
</script>
<style>
.conteiner{
  width: 90%;
  margin: 0 auto;
}
</style>
<template>
  <div id="app">
     <NavBar />
    <router-view/>
  </div>
</template>

<script  setup lang="ts" >
import NavBar from './components/nav.vue'  
</script>
<style lang="scss">
@import './assets/styles/init.scss';
</style>

<template>
  <div class="main flex-center">
    <div class="flex-w">
      <h1 class="roboto-mono-b font-52">404</h1>
      <h2 class="roboto-mono-m">are you lost?</h2>
      <router-link
          class="btn-div about-btn font-28 roboto-m clickable "
          to="/about"
          >click to go home</router-link
        >
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '@/assets/styles/init.scss';
@import '@/assets/styles/flexbox.scss';
.main {
  width: 100%;
  height: 100%;
}
.flex-w{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<template>
  <div class="stack-content">
    <div class="stack-item flex-center">
      <div class="font-16 roboto-mono-m">Vuejs</div>
    </div>
    <div class="stack-item flex-center">
      <div class="font-16 roboto-mono-m">NextJs</div>
    </div>
    <div class="stack-item flex-center">
      <div class="font-16 roboto-mono-m">ReactJs</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '../assets/styles/flexbox.scss';
.stack-content {
  width: auto;
  padding: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.stack-item {
  background-color: #f9fbfc;
  border-radius: 8px;
  height: 59px;
  padding: 0 24px;
}

@media screen and (max-width: 768px) {
  .stack-content {
    justify-content: center;
  }
  .stack-item {
    height: 32px;
    padding: 4 12px;
    font-size: 12px;
  }
}
</style>

<template>
  <div class="stack-content">
    <div class="stack-item flex-center">
      <a :href="website" class="font-16 roboto-mono-m clean-link">Website</a>
    </div>
    <div class="stack-item flex-center">
      <a :href="github" class="font-16 roboto-mono-m clean-link">Github</a>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  website: String,
  github: String,
});
</script>

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
.clean-link {
  text-decoration: none;
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

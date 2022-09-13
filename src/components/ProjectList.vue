<template>
  <div class="project-list">
    <ProjectItemVue v-for="item in items" :key="item.id"/>
  </div>
</template>

<script setup lang="ts">
import ProjectItemVue from './ProjectItem.vue';
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
let items = [
  { name: 'john', id: 0 },
  { name: 'jane', id: 1 },
];
</script>

<style lang="scss" scoped>
.project-list {
  display: flex;
  flex-direction: column;
  gap: 44px;
  margin: 0 12px 32px 12px;
}
</style>

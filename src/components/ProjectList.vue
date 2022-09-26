<template>
  <div class="project-list">
    <ProjectItemVue v-for="(step, index) in steps" :key="index" :step="step"/>
  </div>
</template>

<script setup lang="ts">
import ProjectItemVue from './ProjectItem.vue';
import type Showcase from '@/dataTemplates/showcase';
import { PropType } from 'vue';
const props = defineProps({
  steps: {
    type: [] as PropType<Showcase[]>,
  },
});
</script>

<style lang="scss" scoped>
.project-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 0 12px 32px 12px;
}
</style>

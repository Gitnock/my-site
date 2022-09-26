<template>
  <div class="project-info">
    <div class="top-title font-52 roboto-mono-b">{{project?.title}}</div>
    <div class="top-subtitle font-28 roboto-mono-m">
      {{project?.desc}}
    </div>
    <div class="skills-container">
      <Skills :tags="project?.tags" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Skills from './skills.vue';
import { PropType } from 'vue';
import type Project from '@/dataTemplates/project';

const props = defineProps({
  project:{
    type: Object as PropType<Project>,
    }
})

</script>

<style lang="scss" scoped>
.project-info {
  max-width: 664px;
  margin: 0 12px;
}
.top-title {
  text-align: center;
  margin-bottom: 35px;
}
.top-subtitle {
  text-align: center;
  margin-bottom: 30px;
}
.skills-container {
  display: flex;
  justify-content: center;
  margin-bottom: 78px;
}
</style>

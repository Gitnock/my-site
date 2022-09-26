<template>
  <div class="project-item-container">
    <img
      class="project-img"
      alt="image of project step"
      :src="step?.img"
    />
    <div class="font-12 roboto-mono-l desc" v-if="step?.desc">{{step.desc}}</div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import type Showcase from '@/dataTemplates/showcase';
  const props = defineProps({
    step:{type: Object as PropType<Showcase>},

  })
</script>

<style lang="scss" scoped>
.project-item-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.project-img {
  aspect-ratio: 3 / 4;
  object-fit: cover;
  background-color: #f9fbfc;
  border-radius: 8px;
  margin-bottom: 4px 0 0 0;
}
.desc{
  margin: 12px;
  color: black;
}

/* MOBILE */
@media only screen and (max-width: 902px) {
  .project-img {
    width: 100%;
    // height: 600px;
  }
  .project-item-container{
    width: 100%;
  }
}



</style>

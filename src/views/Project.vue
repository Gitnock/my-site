<template>
  <div class="project-main">
    <div class="project-top">
      <ProjectInfoVue/>
    </div> 
    <div class="project-bot">
      <ProjectListVue/>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import ProjectInfoVue from '../components/ProjectInfo.vue';
  import ProjectListVue from '../components/ProjectList.vue';
</script>
<style lang="scss" scoped>
@import '../assets/styles/flexbox.scss';
.project-main {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
/* TOP */
.project-top {
  display: flex;
  justify-content: center;
  margin: 200px 0 0 0;
}
.project-bot {
  max-width: 900px;
}
.top-content {
  max-width: 772px;
  padding: 12px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.top-subtitle {
  margin: 16px 0 0 0;
  width: 664px;
  text-align: center;
}
</style>

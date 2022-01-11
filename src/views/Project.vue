<template>
  <div class="project-main">
    <div class="project-top">
      <div class="top-content">
        <div class="top-title font-52 roboto-mono-b">App Title</div>
        <div class="top-subtitle font-28 roboto-mono-m">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate
          dapibus convallis
        </div>
        <div class="tech-content">
          <div class="tech-item">
            <div>css</div>
          </div>
          <div class="tech-item">
            <div>firestore</div>
          </div>
          <div class="tech-item">
            <div>vuejs</div>
          </div>
        </div>
      </div>
    </div>
    <div class="project-bot"></div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
@import '../assets/styles/flexbox.scss';
.project-main {
  height: 100%;
}
/* TOP */
.project-top {
  display: flex;
  justify-content: center;
  background-color: bisque;
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

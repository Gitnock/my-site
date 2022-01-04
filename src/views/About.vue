<template>
  <div class="p-main">
    <div class="p-top">
      <div class="top-container">
        <div class="info-content">fd3f</div>
        <div class="stack-content">dfdf</div>
      </div>

    </div>
    <!-- <section class="scroll-indicator-wrapper">
      <div class="indicator-container">
        <i class="bx bxs-circle bx-fade-down indicator"></i>
      </div>
    </section> -->
    <div class="about-bot">
      <h1>dff</h1>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import '../assets/styles/flexbox.scss';
.about-main {
  height: 100%;
}

/* TOP */
.about-top {
  height: 100% !important;
  background-color: blanchedalmond;
  display: flex;
  justify-content: center;
}
.top-container {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.info-content {
  width: 478px;
  height: 254px;
  background-color: cadetblue;
}
.stack-content {
  width: 459px;
  height: 193px;
  background-color: royalblue;
}
/* SCROLL */
.scroll-indicator-wrapper {
  display: flex;
  justify-content: center;
  height: 8% !important;
}
.indicator-container {
  background-color: black;
  height: 32px;
  display: flex;
  justify-content: center;
  padding: 4px 4px 4px 4px;
  border-radius: 12px;
}


/* BOTTOM */
.about-bot {
  height:900px;
}
</style>

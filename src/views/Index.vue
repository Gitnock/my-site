<template>
  <div class="p-main">
    <div class="p-top">
      <div class="top-container">
        <div class="top-content">
          <div class="top-title roboto-mono-m">Hello World!</div>
          <div class="top-subtitle mono-28">
            A Front End Developer with a passion for Design
          </div>
        </div>
      </div>
      <div class="scroll-indicator-wrapper">
        <div class="indicator-container">
          <div class="indicator-body">
            <i class="bx bxs-circle bx-fade-down indicator"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="index-bot">
      <div class="bot-container">
        <div class="bot-content" v-for="project in testData" :key="project.id">
          <div class="card-container">
            <div class="card" :style="{ background: project.color }">
              <div class="card-top"></div>
            </div>
            <div class="card" :style="{ background: project.color2 }">
              fdfddf
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let testData = [
  {
    name: 'projects',
    url: '/projects',
    color: '#eaf2fc',
    color2: '#7997aa',
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/holiday-card-default-snowflake-1-202111?wid=394&hei=430&fmt=jpeg&qlt=95&.v=1635286448000',
    img2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/holiday-card-default-magsafe-1-202111?wid=241&hei=384&fmt=jpeg&qlt=95&.v=1635286450000',
    id: 0,
  },
  {
    name: 'projects',
    url: '/projects',
    color: '#eeeffe',
    color2: '#8f8fad',
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/holiday-card-default-airtag-2-202111?wid=209&hei=388&fmt=jpeg&qlt=95&.v=1635286450000',
    img2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/holiday-card-default-airtag-2-202111?wid=209&hei=388&fmt=jpeg&qlt=95&.v=1635286450000',
    id: 1,
  },
];
</script>

<style lang="scss" scroped>
@import '../assets/styles/flexbox.scss';
@import '../assets/styles/init.scss';
// TOP
.top-container {
  padding: 48px 0;
  display: flex;
  justify-content: center;
  // overflow: hidden;
}
.top-content {
  padding: 60px 0;
}
.top-title {
  font-size: 80px;
  text-align: center;
  line-height: 1.1;
  margin: 0 0 12px 0;
}
.top-subtitle {
  max-width: 610px;
  margin: auto;
  text-align: center;
  margin-bottom: 8px;
}

// BOT
.index-bot {
  margin: 32px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
}
.bot-container {
}
.card-container {
  display: flex;
  overflow-x: auto;
}
.card {
  min-width: 442px;
  height: 628px;
  margin: 8px;
  border: none;
  border-radius: 16px;
  box-shadow: none;
}

// MOBILE
@media only screen and (max-width: 902px) {
  .top-content {
    padding: 48px 12px;
  }
  .top-title {
    font-size: 42px;
  }
  .top-subtitle {
    font-size: 24px;
  }
  .card {
    min-width: 300px;
    height: 418px;
  }
  .card-container {
    overflow-x: auto;
    width: auto;
    padding: 0 12px 12px;
    display: flex;
  }
  .bot-container {
    width: 100%;
  }
}
</style>

<template>
  <div class="p-main">
    <div class="p-top">
      <div class="top-container">
        <div class="top-content">
          <div class="top-title roboto-mono-m">Hello World!</div>
          <div class="top-subtitle roboto-mono-m font-48">
            A Software Developer with a passion for Design. WIP
          </div>
        </div>
      </div>
      <div class="scroll-indicator-wrapper">
        <h3 class="text-indicator font-16 roboto-mono-m">Featured Projects. WIP</h3>
      </div>
    </div>
    <div class="index-bot">
      <div class="bot-container">
        <div class="bot-content" v-for="project in testData" :key="project.id">
          <div class="card-container" v-if="project.id % 2 === 0">
            <div class="card card-line" :style="{ background: project.color }">
              <div class="card-top">
                <div class="img">fgfg</div>
              </div>
              <div class="card-bot">
                <div class="card-title roboto-mono-m">{{project.title}}</div>
                <div class="card-desc roboto-mono-b">
                  Information about the app I made
                </div>
                <router-link to="/project/123" class="card-btn roboto-mono-l"
                  >Learn more</router-link
                >
              </div>
            </div>
            <div class="card" :style="{ background: project.color2 , backgroundImage: project.img}">
              <img :src="project.img
              " alt="" class="img">
            </div>
          </div>
          <div class="card-container" v-else>
            <div class="card" :style="{ background: project.color2 }">
              app image
            </div>
            <div class="card card-line" :style="{ background: project.color }">
              <div class="card-top">
                <div class="img">image</div>
              </div>
              <div class="card-bot">
                <div class="card-title roboto-mono-m">app Title</div>
                <div class="card-desc roboto-mono-b">
                  Information about the app I made
                </div>
                <router-link
                  to="/project/123"
                  class="card-btn btn-div roboto-mono-l"
                  >Learn more</router-link
                >
              </div>
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
    title: 'app Title',
    desc:'',
    color: '#eaf2fc',
    color2: '#7997aa',
    img: 'https://cdn.dribbble.com/userupload/3597739/file/original-896f235c9ee484a4b0d0276ae7d9f064.png?compress=1&resize=1024x768&vertical=center',
    img2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/holiday-card-default-magsafe-1-202111?wid=241&hei=384&fmt=jpeg&qlt=95&.v=1635286450000',
    id: 0,
  },
  {
    title: 'app Title',
    desc:'',
    color: '#eeeffe',
    color2: '#8f8fad',
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/holiday-card-default-airtag-2-202111?wid=209&hei=388&fmt=jpeg&qlt=95&.v=1635286450000',
    img2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/holiday-card-default-airtag-2-202111?wid=209&hei=388&fmt=jpeg&qlt=95&.v=1635286450000',
    id: 1,
  },
];
</script>

<style lang="scss" scoped>
@import '../assets/styles/flexbox.scss';
@import '../assets/styles/init.scss';
/* TOP */
.top-container {
  padding: 48px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
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
  max-width: 836px;
  margin: auto;
  text-align: center;
  margin-bottom: 8px;
}

/* BOT */
.index-bot {
  margin: 32px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
}
.bot-content {
  display: flex;
  justify-content: center;
}
.card-container {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.img{
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.card {
  width: 442px;
  height: 628px;
  margin: 8px;
  border: none;
  border-radius: 16px;
  box-shadow: none;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}
.card-line{
  border: 4px solid black;
}
.card-top {
  display: flex;
  width: 100%;
  justify-content: center;
}
.card-bot {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0 62px 38px 38px;
  box-sizing: border-box;
}
.card-title {
  font-size: 16px;
  margin-bottom: 8px;
}
.card-desc {
  font-size: 21px;
  margin-bottom: 16px;
}
.card-btn {
  border-radius: 30px;
  font-size: 12px;
  width: 88px;
  padding: 12px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}
/* MOBILE */
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
    width: 300px;
    height: 418px;
  }
  .card-container {
    overflow-x: auto;
    width: auto;
    padding: 0 12px 12px;
    display: flex;
  }
  .card-bot {
    padding: 22px;
    padding: 0 32px 22px 22px;
  }
  .bot-container {
    width: 100%;
  }
}
</style>

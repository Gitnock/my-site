<template>
  <div class="p-main">
    <div class="p-top">
      <div class="top-container">
        <div class="top-content">
          <div class="top-title roboto-mono-m">Hello, Am Enock</div>
          <div class="top-subtitle roboto-mono-m font-48">
            A Frontend engineer with a for passion design.
          </div>
        </div>
      </div>
      <div class="scroll-indicator-wrapper" id="indicator">
        <div class="link-mask">
          <h3
            class="text-indicator font-16 roboto-mono-m link-title1 link"
          >
            Featured Projects
          </h3>
          <h3
            class="text-indicator font-16 roboto-mono-m link-title2 link clickable"
            @click="goto"
          >
            scroll Down
          </h3>
        </div>
      </div>
    </div>
    <div class="index-bot">
      <div class="bot-container">
        <div
          class="bot-content"
          v-for="(project, index) in store.getFeatured"
          :key="project.id"
        >
          <div class="card-container" v-if="index % 2 === 0">
            <div class="card card-line">
              <div class="card-top">
                <img :src="project.icon" alt="" class="icon card-line" />
              </div>
              <div class="card-bot">
                <div class="card-title roboto-mono-m">{{ project.title }}</div>
                <div class="card-desc roboto-mono-b">
                  {{ project.short_desc }}
                </div>
                <router-link
                  :to="`/project/${project.id}`"
                  class="card-btn btn-div roboto-mono-l"
                  >Learn more</router-link
                >
              </div>
            </div>
            <div class="card">
              <img :src="project.src" alt="" class="img" />
            </div>
          </div>
          <div class="card-container" v-else>
            <div class="card">
              <img :src="project.src" alt="" class="img" />
            </div>
            <div class="card card-line">
              <div class="card-top">
                <img :src="project.icon" alt="" class="icon card-line" />
              </div>
              <div class="card-bot">
                <div class="card-title roboto-mono-m">{{ project.title }}</div>
                <div class="card-desc roboto-mono-b">
                  {{ project.short_desc }}
                </div>
                <router-link
                  :to="`/project/${project.id}`"
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
import { useStore } from '@/store/index';
const goto = () => {
  const element = document.getElementById('indicator');
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
};

const store = useStore();
</script>

<style lang="scss" scoped>
@import '@/assets/styles/flexbox.scss';
@import '@/assets/styles/init.scss';
@import '@/assets/styles/linkAnim.scss';
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

.img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.icon {
  height: 286px;
  width: 286px;
  object-fit: cover;
  border-radius: 12px;
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
.card-line {
  border: 4px solid black;
}
.card-top {
  display: flex;
  justify-content: center;
  padding: 42px 98px;
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
  .icon {
    width: 143px;
    height: 143px;
  }
}
</style>

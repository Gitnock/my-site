<template>
  <div class="p-main">
    <div class="p-top">
      <div class="top-container flex-center">
        <div class="info-content">
          <div class="font-52 roboto-mono-b info-title">Who am I</div>
          <div class="font-28 roboto-mono-m info-subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            adipisci cum eaque?
          </div>
        </div>
        <div class="stack-content">
          <div class="stack-item flex-center">
            <div class="font-16 roboto-mono-m">Vuejs</div>
          </div>
          <div class="stack-item flex-center">
            <div class="font-16 roboto-mono-m">NextJs</div>
          </div>
          <div class="stack-item flex-center">
            <div class="font-16 roboto-mono-m">ReactJs</div>
          </div>
          <div class="stack-item flex-center">
            <div class="font-16 roboto-mono-m">PostgreSQL</div>
          </div>
          <div class="stack-item flex-center">
            <div class="font-16 roboto-mono-m">User Experience (UX)</div>
          </div>
        </div>
      </div>
      <div class="scroll-indicator-wrapper">
        <h3 class="text-indicator font-16 roboto-mono-m">Projects TimeLine</h3>
      </div>
    </div>
    <div class="about-bot">
      <div class="timeline">
        <div class="timeline--display">
          <div class="timeline__component">
            <div class="timeline__date timeline__date--right roboto-mono-r">
              August 30, 2017
            </div>
          </div>
          <div class="timeline__middle">
            <div class="timeline__point"></div>
          </div>
          <div class="timeline__component timeline__component--bg">
            <h2 class="timeline__title roboto-mono-m">Published First Video</h2>
            <p class="timeline__paragraph roboto-mono-m">
              My first YouTube video was a tutorial on how to build a
              client-server sockets app in Java.
            </p>
            <router-link to="/project/123" class="timeline__link roboto-mono-m">
              learn more
            </router-link>
          </div>
        </div>
        <div class="timeline--display">
          <div class="timeline__component timeline__component--bg">
            <h2 class="timeline__title roboto-mono-m">5,000,000 Subscribers Q&A</h2>
            <p class="timeline__paragraph roboto-mono-m">
              To celebrate 5,000 subscribers, I published a video answering some
              of the most popular questions which my viewers had asked me since
              starting my YouTube channel.
            </p>
            <router-link to="/project/123" class="timeline__link roboto-mono-m">
              learn more
            </router-link>
          </div>
          <div class="timeline__middle">
            <div class="timeline__point"></div>
          </div>
          <div class="timeline__component">
            <div class="timeline__date roboto-mono-r">February 25, 2019</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import '../assets/styles/flexbox.scss';
/* TOP */
.top-container {
  height: 100%;
  display: flex;
}
.info-content {
  width: 478px;
  padding: 12px 32px;
}
.info-subtitle {
  margin: 8px 0 0 0;
}
.stack-content {
  width: 459px;
  padding: 12px;
  display: flex;
  flex-wrap: wrap;
  // justify-content: flex-start;
  gap: 12px;
}
.stack-item {
  background-color: #f9fbfc;
  border-radius: 8px;
  height: 59px;
  padding: 0 24px;
}

/* BOTTOM */
.about-bot {
  height: 900px;
}
// timeline
.timeline {
  margin: 0 auto;
  max-width: 975px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  font-family: 'Fira Sans', sans-serif;
  color: black;
}
.timeline--display {
  display: grid;
  grid-template-columns: 1fr 3px 1fr;
}

.timeline__component {
  margin: 0 20px 20px 20px;
}

.timeline__component--bg {
  padding: 1.75em;
  background: #f9fbfc;
  border-radius: 10px;
}

/* LEAVE TILL LAST */
.timeline__component--bottom {
  margin-bottom: 0;
}

.timeline__middle {
  position: relative;
  background: black;
  width: 1.5px;
}

.timeline__point {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 8px;
  background: black;
  border-radius: 2px;
}

/* LEAVE TILL LAST */
.timeline__point--bottom {
  top: initial;
  bottom: 0;
}
.timeline__date{
  font-size: 12px;
}
.timeline__date--right {
  text-align: right;
}

.timeline__title {
  margin: 0;
  font-size: 16px;
}

.timeline__paragraph {
  font-size: 12px;
  line-height: 1.5;
}
.timeline__link {
  text-decoration: none;
  color: #3c74ff;
  font-size: 12px;
}

@media only screen and (max-width: 902px) {
  .top-container {
    flex-wrap: wrap;
    padding: 48px 0;
  }
  .p-top {
    padding: 0 0 42px 0;
  }
}

@media screen and (max-width: 768px) {
  .info-title {
    font-size: 32px;
    text-align: center;
  }
  .info-subtitle {
    font-size: 18px;
    text-align: center;
    margin: 12px 0 0 0;
  }
  .stack-content {
    justify-content: center;
  }
  .stack-item {
    height: 32px;
    padding: 4 12px;
    font-size: 12px;
  }
}
</style>

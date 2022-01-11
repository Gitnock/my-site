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
            <div class="font-16 roboto-mono-m">Firestore</div>
          </div>
          <div class="stack-item flex-center">
            <div class="font-16 roboto-mono-m">Cpp</div>
          </div>
          <div class="stack-item flex-center">
            <div class="font-16 roboto-mono-m">Python</div>
          </div>
          <div class="stack-item flex-center">
            <div class="font-16 roboto-mono-m">MySQL</div>
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
    <div class="about-bot"></div>
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

@media only screen and (max-width: 902px) {
  .top-container {
    flex-wrap: wrap;
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

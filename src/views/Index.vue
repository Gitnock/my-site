<template>
  <div class="index-main" ref="main">
    <div class="part1" ref="part1">
      <div class="part1-container">
        <div class="section-top">
          <div class="container-top">
            <h1 class="title-index roboto-b">Hello World</h1>
            <h2 class="subtitle-index roboto-r">
              A Front End Developer with a passion for Design
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="scroll-indicator-container">
      <div class="indicator-container">
        <i class="bx bxs-circle bx-fade-down indicator"></i>
      </div>
    </div>
    <div class="part2">
      <div class="section-bot" ref="sbot">
        <div class="container-bot">
          <div
            class="card-container"
            v-for="project in projects"
            :key="project.id"
          >
            <div class="card" :style="{background: project.color}">
                <div class="card-top">

                </div>
            </div>
            <div class="card" :style="{background: project.color2}">fdfddf</div>
          </div>
        </div>
      </div>

      <footer class="section-footer">
        <div class="container-footer roboto-mono-m">
          <div class="footer-rights">
            <p>© 2021 PartyApp.</p>
          </div>
          <div class="footer-legal">
            <div class="legal-Terms">
              <p>Terms & Conditions</p>
            </div>
            <div class="legal-Privacy">
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
let projects = [
  {
    name: 'projects',
    url: '/projects',
    color: '#eaf2fc',
    color2: '#eaf2fc',
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/holiday-card-default-snowflake-1-202111?wid=394&hei=430&fmt=jpeg&qlt=95&.v=1635286448000',
    img2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/holiday-card-default-magsafe-1-202111?wid=241&hei=384&fmt=jpeg&qlt=95&.v=1635286450000',
    id: 0,
  },
  {
    name: 'projects',
    url: '/projects',
    color: '',
    color2: '',
    img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/holiday-card-default-airtag-2-202111?wid=209&hei=388&fmt=jpeg&qlt=95&.v=1635286450000',
    img2: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/holiday-card-default-airtag-2-202111?wid=209&hei=388&fmt=jpeg&qlt=95&.v=1635286450000',
    id: 1,
  },
];
</script>

<style lang="scss" scoped>
@import '../assets/styles/init.scss';
//colors
.color-black {
  color: black;
}
.color-white {
  color: white;
}
.color-green {
  color: #00cd69;
}
.color-red {
  color: #ff5441;
}
.index-main {
  height: 94%;
  // overflow-y: auto;
  // scroll-behavior: smooth;
}

// PARTS
.part1 {
  height: 92% !important;
}
.part1-container {
  height: 100%;
  flex-direction: column;
  display: flex;
  // align-items: center;
  // justify-content: center;
}
.part2 {
  background-color: white;
}

.signup-btn {
  display: none;
}
.request-btn {
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  background-color: $c2_dark;
  color: white;
  transition: all 0.4s ease 0s;
  font-size: 16px;
}

// TOP
.section-top {
  padding: 48px 0;
  display: flex;
  justify-content: center;
}
.container-top {
  padding: 60px 90px 0px 90px;
  justify-content: center;
  align-items: center;
}
.title-index {
  font-size: 80px;
  text-align: center;
  line-height: 60px;
}
.subtitle-index {
  font-size: 48px;
  max-width: 610px;
  margin: auto;
  text-align: center;
  margin-bottom: 8px;
}
.subtitle-red {
}
.request-container {
  // background-color: wheat;
  display: flex;
  justify-content: center;
}
.request-input-container {
  width: 321px;
  height: 52px;
  border: none;
  background-color: #f4f7f8;
  border-radius: 8px;
  display: flex;
  padding: 8px;
  // margin: 32px;
}
.request-input {
  background-color: transparent;
  border: none;
  font-size: 16px;
  margin: 0 8px;
  // color: white;
  flex: 1 1 auto;
}
::placeholder {
  color: #464a65;
}
.request-btn-container {
  display: none;
}
.request-btn-desktop {
  padding: 8px 18px;
  border: none;
  border-radius: 6px;
  background-color: #195bff;
  color: white;
  transition: all 0.4s ease 0s;
  font-size: 14px;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 6px 20px rgba(25, 91, 255, 0.4);
  }
}
.request-btn-mobile {
  display: initial;
  align-items: center;
  width: 100%;
  width: 321px;
  height: 52px;
  border-radius: 8px;
  background-color: #195bff;
  border: none;
  color: white;
  font-size: 16px;
}
.border-Anime {
  animation: colorToDanger 2s 1;
}

// MID
.section-mid {
  margin: 0 0 32px;
  display: flex;
  justify-content: center;
}
.container-mid {
  max-width: 1248px;
}
.title-mid-container {
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
}
.title-mid {
  background-color: $c2_dark;
  border-radius: 8px;
  padding: 4px 12px;
  color: $c5_dark;
  font-size: 16px;
  display: inline-block;
}
.scroll-indicator-container {
  display: flex;
  justify-content: center;
  // margin: 142px 0px 12px;
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
.indicator {
  color: white;
  font-size: 16px;
}
.card-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  width: 321px;
  margin: 8px;
  border: none;
  border-radius: 16px;
  background-color: $c2_dark;
  box-shadow: none;
}
.card-top {
  display: inline;
}
.card-top-title {
  color: #464a65;
  font-size: 36px;
}
.card-mid {
  margin: 4px 0;
}
.card-mid-title {
  color: $c5_dark;
  font-size: 21px;
  text-align: left;
}

// BOT
.section-bot {
  padding: 60px 90px 0px 90px;
  padding: 48px 0;
  display: flex;
  justify-content: center;
}
.container-bot {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.subtitle-small-index {
  font-size: 20px;
  max-width: 454px;
  padding: 4px 12px;
  text-align: center;
  margin-bottom: 32px;
  color: $c3_dark;
}

.card-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.card {
  width: 482px;
  height: 648px;
}

//FOOTER
.section-footer {
  // display: flex;
  // justify-content: center;
}
.container-footer {
  color: $c1_dark;
  position: relative;
  max-width: 1248px;
  margin-right: auto;
  margin-left: auto;
  padding: 4rem 2rem 2rem;
  display: flex;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
}
.footer-legal {
  display: flex;
}
.legal-Terms {
  &:hover {
    color: $cg_front;
    text-decoration: underline;
  }
}
.legal-Privacy {
  margin-left: 32px;
  &:hover {
    color: $cg_front;
    text-decoration: underline;
  }
}

// THEME
// @mixin theme($theme-name, $c1, $c2, $c3,$c4,$title) {
//   .#{$theme-name} {
//     background: $c1;
//     transition: background-color 0.3s ease;
//     .title-index{
//        color: $title;
//        transition: color 0.3s ease;
//       }
//     .title-mid{
//       background-color: $c2;
//       transition: background-color 0.3s ease;
//     }
//     .card {
//       background-color: $c2;
//       transition: background-color 0.3s ease;
//       .card-top-title{
//         color: $c3;
//       }
//       .card-mid-title{
//         color: $c4;
//       }
//     }
//     .indicator-container{
//       background-color: $c2;
//       transition: background-color 0.2s ease;
//     }
//   }
// }
// @include theme(dark, $c1_dark, $c2_dark, $c4_dark,$c5_dark,white);
// @include theme(light, $c1_light, $c2_light, $c3_light,$c4_dark,black);

// MOBILE
@media only screen and (max-width: 705px) {
  // .part1 {
  //   height: auto !important;
  // }
  .title-index {
    font-size: 52px;
  }
  .request-btn-desktop {
    display: none;
  }

  .request-btn-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 6px 0px;
    animation: 0.3s ease-out 0s 1 slideInFromTop;
  }
}
@media only screen and (max-width: 607px) {
  // .part1 {
  //   height: auto !important;
  // }
  .auth-btn {
    margin-right: 0;
  }
  .nav-request-btn {
    display: none;
  }
  .signup-btn {
    display: block;
  }
  .signin-btn {
    display: none;
  }
  .title-index {
    font-size: 48px;
  }
  .container-top {
    padding: 32px 12px 0px;
  }
  .footer-legal {
    width: 100%;
    font-size: 12px;
    justify-content: space-between;
  }
  .footer-rights {
    display: none;
  }
}
@media screen and (max-height: 900px) {
  .part1 {
    height: auto !important;
  }
  .container-top {
    padding: 32px 12px 0px;
  }
  .scroll-indicator-container {
    margin-bottom: 32px;
  }
}
@media only screen and (max-width: 1028px) {
  .part1 {
    height: auto !important;
  }
}
</style>

<template>
  <header class="nav-main">
    <div class="nav-container">
      <div class="left-nav">
        <router-link class="btn-div clickable link-btn" to="/">
          <h2 class="roboto-b title-logo">Enock lubega</h2>
        </router-link>
      </div>
      <div class="right-nav">
        <router-link
          class="btn-div about-btn font-12 roboto-m clickable link-btn"
          to="/about"
          >about</router-link
        >
        <div class="social-links">
          <a
            class="btn-div git-button clickable link-btn"
            href="https://github.com/Gitnock"
          >
            <em class="bx bxl-github font-24"></em>
          </a>
          <a
            class="btn-div clickable link-btn"
            href="https://dribbble.com/Mulira"
          >
            <em class="bx bxl-dribbble font-24"></em>
          </a>
        </div>
        <div class="social-links-m">
          <button
            class="mobile-menu btn-div"
            id="show-modal"
            @click="showModal = true"
          >
            <h3 class="roboto-m">MENU</h3>
          </button>
        </div>
      </div>
    </div>
    <Teleport to="body">
      <!-- use the modal component, pass in the prop -->
      <MobileNav :show="showModal" @close="showModal = false">
        <template #body>
          <div class="mobile-nav-container">
            <router-link
              class="font-48 roboto-mono-m clickable link-btn nav-item"
              to="/"
              @click="showModal = !showModal"
              >Home</router-link
              
            >
            <router-link
              class="font-48 roboto-mono-m clickable link-btn nav-item"
              to="/about"
              @click="showModal = !showModal"
              >About</router-link
            >
            <a
              class="font-48 roboto-mono-m clickable link-btn nav-item"
              href="https://github.com/Gitnock"

              >Github</a
            >
            <a
              class="font-48 roboto-mono-m clickable link-btn nav-item"
              href="https://dribbble.com/Mulira"
              >Dribbble</a
            >
            
          </div>
        </template>
      </MobileNav>
    </Teleport>
  </header>
</template>

<script lang="ts" setup>
import MobileNav from '@/components/fullscreenModel.vue';
import { ref } from 'vue';

const showModal = ref(false);
</script>

<style lang="scss" scoped>
.nav-main {
  width: 100%;
  display: flex;
  justify-content: center;
}
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1359px;
  padding: 12px 24px;
}

// left nav
.title-logo {
  font-size: 21px;
  color: black;
}

// right nav
.right-nav {
  display: flex;
  align-items: center;
}
.about-btn {
  border-radius: 6px;
  width: 142px;
  height: 42px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.git-button {
  margin: 0 36px;
}
.social-links-m {
  display: none;
  margin: 0;
}
.mobile-menu {
  background: transparent;
  border-radius: 12px;
  padding: 0 12px;
  &:active {
    background: black;
    color: white;
  }
}

//mobile
.mobile-nav-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  align-items: center;
  gap: 12px;
}
.nav-item {
  color: white;
}
@media screen and (max-width: 700px) {
  .nav-container {
    width: 100%;
  }
  .about-btn {
    display: none;
  }
  .social-links {
    display: none;
    // padding: 12px 0 0 0
  }
  .social-links-m {
    display: flex;
    align-items: center;
    width: 100%;
  }
}
</style>

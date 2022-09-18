<script setup>
const props = defineProps({
  show: Boolean,
});
</script>

<template>
  <transition name="modal">
    <div  v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="full-close-container">
            <button
              class="close-circle btn-div clickable btn-drop"
              @click="$emit('close')"
            >
              <em class="bx bx-x close-icon" style="color: #ffffff"></em>
            </button>
          </div>
          <div class="full-content">
            <slot name="body"/>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>


<style  lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.modal-container {
  width: 100%;
  height: 100%;
  margin: 0px auto;
  padding: 12px;
  background-color: black;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  position: relative;
}
.full-content{
  height: 100%;
}

.full-close-container {
  position: absolute;
  bottom: 42px;
  right: 22px;
}
.close-circle {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
}
.close-icon {
  font-size: 54px;
}

/*
     * The following styles are auto-applied to elements with
     * transition="modal" when their visibility is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

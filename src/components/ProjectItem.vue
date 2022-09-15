<template>
  <div class="project-item-container">
    <img
      class="project-img"
      alt="image of project"
      src="https://images.unsplash.com/photo-1661638581169-88440e0f4fa5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    />
    <!-- <div class="font-12 roboto-mono-l">yo whats the food taste like homie</div> -->
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.project-item-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.project-img {
  width: 900px;
  height: 772px;
  background-color: #f9fbfc;
  border-radius: 8px;
  margin-bottom: 4px 0 0 0;
}

/* MOBILE */
@media only screen and (max-width: 902px) {
  .project-img {
    width: 514px;
    height: 600px;

  }
}

@media only screen and (max-width: 572px) {
  .project-img {
    width: 324px;
    height: 400px;
  }

}

</style>

<template>
  <div class="project-item-container">
    <img
      class="project-img"
      alt="image of project"
      src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
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
  aspect-ratio: 3 / 4;
  object-fit: cover;
  background-color: #f9fbfc;
  border-radius: 8px;
  margin-bottom: 4px 0 0 0;
}

/* MOBILE */
@media only screen and (max-width: 902px) {
  .project-img {
    width: 100%;
    // height: 600px;
  }
  .project-item-container{
    width: 100%;
    background-color: antiquewhite;
  }
}



</style>

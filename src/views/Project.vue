<template>
  <div class="project-main">
    <div class="project-top">
      <ProjectInfoVue :project="store.getProject" />
    </div>
    <div class="project-bot">
      <ProjectListVue :steps="showcase" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import ProjectInfoVue from '../components/ProjectInfo.vue';
import ProjectListVue from '../components/ProjectList.vue';
import type Showcase from '@/dataTemplates/showcase'
import { useRoute, useRouter } from 'vue-router';
import { useStore } from '@/store';

import { onMounted, ref } from 'vue';
import { collection, getDocs, orderBy, query,  } from '@firebase/firestore';
import { db } from '@/firebase';

const store = useStore();
const route = useRoute();
const router = useRouter();
const projectId = route.params.id.toString();
const showcase = ref<Showcase[]>([])

const getShowcase = async () => {
  const showcaseRef = collection(db, `projects/${projectId}/showcase`);
  const q = query(showcaseRef, orderBy("pos"))
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const showcaseData = doc.data() as Showcase;
    showcase.value.push(showcaseData);
    
  });
};

onMounted(() => {
  store.updateProjectId(projectId);
  getShowcase();
});
</script>
<style lang="scss" scoped>
@import '../assets/styles/flexbox.scss';
.project-main {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
/* TOP */
.project-top {
  display: flex;
  justify-content: center;
  margin: 200px 0 0 0;
}
.project-bot {
  max-width: 900px;
}
.top-content {
  max-width: 772px;
  padding: 12px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.top-subtitle {
  margin: 16px 0 0 0;
  width: 664px;
  text-align: center;
}
</style>

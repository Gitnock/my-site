<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { db } from '@/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { onMounted } from 'vue';
import NavBar from './components/nav.vue';
import { useStore } from '@/store/index';
import Project from './dataTemplates/project';

const store = useStore();

const getDocuments = async ()=>{
  const projectsRef = collection(db, "projects");
  const q = query(projectsRef, orderBy("date", "desc"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => store.addProject(doc.data() as Project));
}

onMounted(() => {
  getDocuments();
})

</script>
<style lang="scss">
@import './assets/styles/init.scss';
.router-view {
  // flex: 1;
  // height: 100%;
}
</style>

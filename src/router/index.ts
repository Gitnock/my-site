import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Index from '../views/Index.vue';
import About from '../views/About.vue';
import Project from '../views/Project.vue';
import ComingSoon from '../views/ComingSoon.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Index,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/project/:id',
    name: 'Project',
    component: Project,
  },
  {
    path: '/coming-soon',
    name: 'ComingSoon',
    component: ComingSoon,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});

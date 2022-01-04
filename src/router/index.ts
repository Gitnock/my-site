import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Index from '../views/Index.vue';
import About from '../views/About.vue';

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
    }
]

export default createRouter({
  history: createWebHistory(),
  routes
});

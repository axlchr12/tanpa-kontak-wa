import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import KebijakanPrivasiView from '../views/KebijakanPrivasiView.vue';
import TentangView from '../views/TentangView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/kebijakan-privasi',
    name: 'privasi',
    component: KebijakanPrivasiView,
  },
  {
    path: '/tentang',
    name: 'tentang',
    component: TentangView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

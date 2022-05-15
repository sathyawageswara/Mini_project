import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/HomePage.vue';
import Camp from '../views/BarangCamping.vue';
import Tenda from '../views/Tenda.vue';
import Login from '../components/LoginPages.vue';
import About from '../components/AboutPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/BarangCamping',
    name: 'BarangCamping',
    component: Camp,
  },
  {
    path: '/Tenda',
    name: 'Tenda',
    component: Tenda,
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/About',
    name: 'About',
    component: About,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

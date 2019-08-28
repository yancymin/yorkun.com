import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/officialWebsite',
      name: 'officialWebsite',
      component: () => import('./views/officialWebsite.vue'),
    },
    {
      path: '/article-1',
      name: 'article-1',
      component: () => import('./views/Article-1.vue'),
    },
    {
      path: '/motion',
      name: 'motion',
      component: () => import('./views/motion.vue'),
    },
    {
      path: '/onelogin',
      name: 'onelogin',
      component: () => import('./views/onelogin.vue'),
    },
    {
      path: '/gmake',
      name: 'gmake',
      component: () => import('./views/gmake.vue'),
    },
    {
      path: '/banana',
      name: 'banana',
      component: () => import('./views/banana.vue'),
    },
  ],
});

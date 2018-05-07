import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import AppLogin from './views/app-login.vue';
import AppSignup from './views/app-signup.vue';
import Apphome from './views/app-home.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/home',
      name: 'app-home',
      component: Apphome,
    },
    {
      path: '/login',
      name: 'app-login',
      component: AppLogin,
    },
    {
      path: '/signup',
      name: 'app-signup',
      component: AppSignup,
    },
  ],
});

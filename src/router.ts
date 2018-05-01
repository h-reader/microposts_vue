import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import AppLogin from './views/app-login.vue';
import AppSignup from './views/app-signup.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
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

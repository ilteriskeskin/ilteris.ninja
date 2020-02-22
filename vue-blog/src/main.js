import Vue from 'vue';
import App from './App.vue';

import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "./components/Home";
import Advices from "./components/Advices";
import About from "./components/About";

const router = new VueRouter({
  routes: [
    { path: '/', component: Home, name: 'Home' },
    { path: '/advices', component: Advices, name: 'Advices' },
    { path: '/about', component: About, name: 'About' },
  ],
  mode: 'history',
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});

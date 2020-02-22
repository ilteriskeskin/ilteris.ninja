import Vue from 'vue'
import App from './App.vue'

import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from './components/Home';

const router = new VueRouter({
  routes: [
    { path: '/', component: Home, name: 'Home' },
  ],
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});

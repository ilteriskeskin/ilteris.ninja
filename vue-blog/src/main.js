import Vue from 'vue'
import App from './App.vue'

import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from './components/Home';
import Foo from './components/Foo';
import Bar from './components/Bar';

const router = new VueRouter({
  routes: [
    { path: '/', component: Home, name: 'Home' },
    { path: '/foo', component: Foo, name: 'Foo' },
    { path: '/bar', component: Bar, name: 'Bar' },
  ],
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});

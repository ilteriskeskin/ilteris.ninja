import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Advices from "./components/Advices";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {path: '/', component: Home, name: 'Home'},
    {path: '/about', component: About, name: 'About'},
    {path: '/blog', component: Blog, name: 'Blog'},
    {path: '/advices', component: Advices, name: 'Advices'},
  ],
  mode: 'history',
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

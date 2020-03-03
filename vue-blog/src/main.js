import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import Home from "./components/Home";
import About from "./components/About";
import Advices from "./components/Advices";
import Post from "./components/Post";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {path: '/', component: Home, name: 'Home'},
    {path: '/about', component: About, name: 'About'},
    {path: '/advices', component: Advices, name: 'Advices'},
    {path: '/posts/:postId/post', component: Post, name: 'Post'},
  ],
  mode: 'history',
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

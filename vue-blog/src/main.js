import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import {routes} from './routes';
import Trend from "vuetrend";

Vue.use(Trend)
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});

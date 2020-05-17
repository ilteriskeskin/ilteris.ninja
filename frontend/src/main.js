import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import { routes } from './routes';
import Trend from "vuetrend";
import axios from 'axios'

let baseURL = 'https://api.ilteris.ninja/'
// let baseURL = 'http://localhost:5000/'

Vue.prototype.baseURL = baseURL;
Vue.prototype.$http = axios.create({
  baseURL: baseURL,
})

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

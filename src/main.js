import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import axios from 'axios'
import {store} from './store/store.js'

import {routes} from './routes'

//默认的请求地址
axios.defaults.baseURL = "https://wd5064150493qxwlim.wilddogio.com/"
//全局使用axios
Vue.prototype.http = axios

//使用路由
Vue.use(VueRouter)


//实例化路由
const router = new VueRouter({
  routes,
  mode : "history"
})



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

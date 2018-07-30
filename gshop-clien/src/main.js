import Vue from 'vue'
import App from './App.vue'


//引入路由模块
import  router from  './router/router.js'


//4、挂载路由
new Vue({
  el: '#app',
  router,   //注册挂载路由
            //注册挂载vuex
  render: h => h(App)
})



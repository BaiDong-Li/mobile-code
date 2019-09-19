import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
Vue.use(Router)

// 配置路由表
export default new Router({
  routes: [
    { name: 'login', path: '/login', component: Login }
  ]
})

// 导出路由实例 挂载到main上

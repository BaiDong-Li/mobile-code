import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Tabbar from '@/views/tabbar'
import home from '@/views/home'
Vue.use(Router)

// 配置路由表
export default new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { name: 'login', path: '/login', component: Login },
    {
      path: '/tabbar',
      component: Tabbar,
      children: [
        { name: 'home', path: '', component: home }
      ] }
  ]
})

// 导出路由实例 挂载到main上

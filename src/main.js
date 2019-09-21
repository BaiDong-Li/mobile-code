import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入全局样式 我引入的是css文件,他引入的是less
import './styles/index.css'
// 引入完整版验证规则
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
// 加载验证插件的语言包
import zhCN from 'vee-validate/dist/locale/zh_CN'
// 这个是所有的验证规则
import * as rules from 'vee-validate/dist/rules'
// 按需引入vant 插件
// 引入reques

import { Button, Field, NavBar, Toast, Cell,
  CellGroup, Tabbar, TabbarItem, Tab, Tabs,
  List
} from 'vant'

Vue.config.productionTip = false
// 配置全局的vant插件
Vue
  .use(Button)
  .use(Field)
  .use(NavBar)
  .use(Toast)
  .use(Cell)
  .use(CellGroup)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Tab)
  .use(Tabs)
  .use(List)

// 配置使用中文语言
for (let rule in rules) {
  extend(rule, {
    ...rules[rule], // add the rule
    message: zhCN.messages[rule] // add its message
  })
}
// 注册一个自定义校验规则
extend('mobile', {
  validate (value) { return /^1(3|4|5|6|7|8|9)\d{9}$/.test(value) },
  message: '这不是一个正确的手机号'
})
// 注册一个 自定义六位数验证码规则
extend('num', {
  validate (value) { return /^\d{6}$/.test(value) },
  message: '验证码位数不全'
})
// 将验证标签注册为全局
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app')

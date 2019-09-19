import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入全局样式 我引入的是css文件,他引入的是less
import './styles/index.css'
import { Button, Field, NavBar, Toast } from 'vant'

Vue.config.productionTip = false

Vue
  .use(Button)
  .use(Field)
  .use(NavBar)
  .use(Toast)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

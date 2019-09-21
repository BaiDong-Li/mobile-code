import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from '@/utils/storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getItem()
  },
  mutations: {
    // 用这个来函数来接受token 储存在仓库
    changetoken (state, tokenObj) {
      // console.log(state.token)
      state.token = tokenObj
      setItem(state.token)
      // console.log(state.token)
    }
  },
  actions: {

  }
})

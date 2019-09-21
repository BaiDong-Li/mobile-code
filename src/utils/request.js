import axios from 'axios'
import bigInt from 'json-bigint'
// 引入 仓库模块
import store from '@/store'

// 创建一个axios分身 用于实现不同路径分别请求 直接导出
// 还可以再创建多个分身,用于实现多种不同路径需求
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn'
})

request.interceptors.request.use(function (config) {
  // 解构赋值获取 token
  let { token } = store.state
  if (token) {
    config.headers.Authorization = `Bearer ${token.token}`
    return config
  } else {
    return config
  }
}, function (error) {
  return Promise.reject(error)
})
// 在响应拦截器之前,为分身的默认transfronResponse 设置大数字转换
request.defaults.transformResponse = [
  function (data) {
    try {
      return bigInt.parse(data)
    } catch (err) {
      return data
    }
  }
]
// 设置响应拦截器
export default request

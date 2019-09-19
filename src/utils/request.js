import axios from 'axios'
import bigInt from 'json-bigint'
// 创建一个axios分身 用于实现不同路径分别请求 直接导出
// 还可以再创建多个分身,用于实现多种不同路径需求
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn'
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

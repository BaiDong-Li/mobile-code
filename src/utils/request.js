import axios from 'axios'
// 创建一个axios分身 用于实现不同路径分别请求 直接导出
// 还可以再创建多个分身,用于实现多种不同路径需求
export default axios.create({
  baseURL: 'http://ttapi.research.itcast.cn'
})

// 这里封装跟token有关的三个方法
// 设置 token 在本地的方法
// 我这里写死了 令牌名字
export const setItem = (token) => {
  // 存储的时候 将 token 转换成 json字符串
  window.localStorage.setItem('Token', JSON.stringify(token))
}
// 获取 本地 token的方法
export const getItem = () => {
  // 提取的时候 再换回正常字符串
  return JSON.parse(window.localStorage.getItem('Token'))
}
// 移除本地token的方法

export const romoveItem = () => {
  window.localStorage.removeItem('Token')
}

import request from '@/utils/request'

// 设置请求全部频道列表
export const getChannle = () => {
  return request({
    url: '/app/v1_0/channels'
  })
}
// 通过id 查询 某个id下的全部内容
export const getAll = ({
  channel_id,
  timestamp,
  with_top
}) => {
  return request({
    url: ' /app/v1_1/articles',
    params: {
      channel_id,
      timestamp,
      with_top
    }

  })
}

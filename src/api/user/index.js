import axios from '@/utils/request'

export const login = ({ mobile, code }) => {
  return axios({
    url: '/app/v1_0/authorizations',
    method: 'post',
    data: {
      mobile,
      code
    }
  })
}

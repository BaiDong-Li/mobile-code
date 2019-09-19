<template>
  <div class="login">
    <!-- 头部导航栏 -->
    <van-nav-bar title="登陆" style="color:pink" />
    <!-- 下面是什么验证提示框 -->
    <van-cell-group>
      <!-- 上面的 -->
      <van-field required clearable label="手机号" placeholder="请输入手机号" v-model="formData.mobile"  />
      <!-- 下面的 -->
      <van-field type="password" label="验证码" placeholder="请输入验证码" required v-model="formData.code"  />
    </van-cell-group>
    <!-- 登录按钮 -->
    <div  class="btn">
      <van-button type="info" @click='getForm' >登录按钮</van-button>
    </div>
  </div>
</template>

<script>
import axios from '../../utils/request'
export default {
  name: 'login',
  data () {
    return {
      formData: {
        mobile: '',
        code: ''
      }
    }
  },
  methods: {
    async getForm () {
      let res = await axios({
        url: '/app/v1_0/authorizations',
        method: 'post',
        data: this.formData
      })
      console.log(res)
    }
  }
}
</script>

<style lang='less' scoped >
.login{
    .btn{
        margin-top:10px;
        height: 60px;
        padding:20px;
        .van-button {
            width:100%
        }
    }
}
</style>

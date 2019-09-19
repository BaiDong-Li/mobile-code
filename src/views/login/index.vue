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
// 引入 user下的 login api模块
import { login } from '@/api/user'

export default {
  name: 'login',
  data () {
    return {
      formData: {
        mobile: '15911111111',
        code: '246810'
      }
    }
  },
  methods: {
    async getForm () {
      try {
        let res = await login(this.formData)
        // 在这里操作令牌
      } catch (err) {
        if (err.response.status === 400) {
          this.$toast.fail('验证失败')
        }
      }
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

<template>
  <div class="login">
    <!-- 头部导航栏 -->
    <van-nav-bar title="登陆"/>
    <!-- 下面是什么验证提示框 -->
    <ValidationObserver tag='form' ref='loginForm' >
      <van-cell-group>
        <!-- 上面的 -->
        <ValidationProvider tag="div" rules="required|mobile" v-slot="{errors}" name="手机号">
          <van-field required clearable label="手机号" placeholder="请输入手机号" v-model="formData.mobile" :error-message='errors[0]'
           />
        </ValidationProvider>
        <!-- 下面的 -->
        <ValidationProvider tag="div" rules="required|num" v-slot="{errors}" name="验证码">
          <van-field
            type="password"
            label="验证码"
            placeholder="请输入验证码"
            required
            v-model="formData.code"
            :error-message='errors[0]'
          />
        </ValidationProvider>
      </van-cell-group>
    </ValidationObserver>

    <!-- 登录按钮 -->
    <div class="btn">
      <van-button type="info" @click="getForm" :loading="isLoading" loading-type="spinner">登录按钮</van-button>
    </div>
  </div>
</template>

<script>
// 引入 user下的 login api模块
import { login } from '@/api/user'
// 引入 mutaiton映射
import { mapMutations } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      isLoading: false,
      formData: {
        mobile: '15911111111',
        code: '246810'
      }

    }
  },
  methods: {
    //   引入仓库的存储方法
    ...mapMutations(['changetoken']),
    //   这个函数用于 提交登录信息
    async getForm () {
      // 通过flag判断全局验证是否通过
      let flag = await this.$refs.loginForm.validate()

      if (!flag) { return }
      // 按钮禁用状态修改为true 即禁用
      this.isLoading = true

      try {
        let { data } = await login(this.formData)
        // 将参数传进仓库
        this.changetoken(data.data)
        this.$router.push('/tabbar')
        // 已经通过 tokenObj这个变量 接收了token
      } catch (err) {
        if (err.response.status === 400) {
          this.$toast.fail('验证失败')
        }
      }
      this.isLoading = false
    }
  }
}
</script>

<style lang='less' scoped >
.login {
  .btn {
    margin-top: 10px;
    height: 60px;
    padding: 20px;
    .van-button {
      width: 100%;
    }
  }
}
</style>

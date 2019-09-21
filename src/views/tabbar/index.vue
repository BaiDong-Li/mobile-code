<template>
  <div name="tabbar">
    <!-- 头部搜索栏 -->
    <van-nav-bar title="搜索" />
    <!-- 子组件可视窗口 -->
    <router-view></router-view>
    <!-- 下面的导航区域 -->
    <div>
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">主页</van-tabbar-item>
        <van-tabbar-item icon="search">问答</van-tabbar-item>
        <van-tabbar-item icon="friends-o">请求</van-tabbar-item>
        <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style>
</style>

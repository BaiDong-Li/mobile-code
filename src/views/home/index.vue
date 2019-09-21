<template>
  <div class="home">
    <van-tabs v-model="active">
      <van-tab :title="item.name" v-for="item in chanList" :key="item.id">
          {{item.name}}
          <van-list
          class="son"
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell
    v-for="item in list"
    :key="item"
    :title="item"
  />
</van-list>
    </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getChannle, getAll } from '@/api/channle'
export default {
  name: 'homeIndex',
  methods: {
    //   获取全部分类列表
    async getChannles () {
      const { data } = await getChannle()
      // 获取全部频道列表
      this.chanList = data.data.channels
    },
    // 获取对应文章列表
    // async getAll () {
    //   let res = await getAll()
    // },
    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(i + 1)
        }
        this.loading = false
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
    }
    // onLoad () {
    //   // 异步更新数据
    //   setTimeout(() => {
    //     for (let i = 0; i < 10; i++) {
    //       this.list.push(this.list.length + 1)
    //     }
    //     // 加载状态结束
    //     this.loading = false

    //     // 数据全部加载完成
    //     if (this.list.length >= 40) {
    //       this.finished = true
    //     }
    //   }, 1000)
    // }
  },
  created () {
    this.getChannles()
  },
  data () {
    return {
      active: 0,
      // 全部频道列表
      chanList: [],
      list: [],
      loading: false,
      finished: false

    }
  }
}
</script>

<style lang='less'  >
.home{
    .son{
        margin-bottom:40px;
    }
}
</style>

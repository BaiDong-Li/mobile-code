<template>

<div id="app">

  <router-view style="width:200px;height:200px" ></router-view>
</div>
</template>

<script>
import axios from './utils/request'
export default {

  methods: {
    async  getList () {
      let res = await axios({
        url: '/app/v1_1/articles',
        params: {
          channel_id: 0,
          timestamp: Date.now(),
          with_top: 1
        }
      })
      console.log(res.data)
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style>

</style>

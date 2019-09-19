<template>

<div id="app">

  <router-view style="width:200px;height:200px" ></router-view>
</div>
</template>

<script>
import req from '@/utils/request'
export default {
  methods: {
    getList () {
      req({
        method: 'get',
        url: '/app/'
      }).then(res => console.log(res))
    }

  },
  created () {
    this.getList()
  }
}
</script>

<style>

</style>

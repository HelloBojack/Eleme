<template>
  <div class="filterNav">
    <div>综合排序<i class="iconfont icon-sanjiao"></i></div>
    <div>距离最近</div>
    <div><i class="iconfont icon-VIP"></i>会员领红包</div>
    <div>筛选<i class="iconfont icon-filter" style="font-size:12px;"></i></div>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
  }
</script>
<style lang="css" scoped>
  .filterNav{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 5px;
    position: sticky;
    top:60px;
    z-index: 999;
    background: #fff;
    padding: 5px 0;
  }
</style>
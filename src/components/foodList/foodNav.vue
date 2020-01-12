<template>
  <div class="foodNav">
    <router-link to="/shopMenu" tag="div"><span>点餐</span></router-link>
    <router-link to="/ShopRecommend" tag="div"><span>评价</span></router-link>
    <router-link to="/shopDetail" tag="div"><span>商家</span></router-link>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="css" scoped>
  .foodNav {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom:1px solid #ebebeb;
    height: 40px;
  }
  .foodNav div {
    width: 33%;
    height: 100%;
    font-size: 16px;
    color: #666;
  }
  .foodNav div span{
    width: 50%;
    height: 100%;
    line-height: 3;
    display: block;
    margin: 0 auto;
  }
  .router-link-exact-active.active span{
    border-bottom:3px solid #2395ff!important;
  }
</style>
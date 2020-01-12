<template>
  <div class="foodNav">
    <router-link to="/home" tag="div">点餐</router-link>
    <router-link to="/home" tag="div">评价</router-link>
    <router-link to="/home" tag="div">商家</router-link>
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
    font-size: 16px;
    color: #666;
  }
</style>
<template>
  <div class="footerNav">
    <router-link to="/home"><i class="iconfont icon-eleme"></i>首页</router-link>
    <router-link to="/discover"><i class="iconfont icon-discover"></i>发现</router-link>
    <router-link to="/orderTab"><i class="iconfont icon-order"></i>订单</router-link>
    <router-link to="/profile"><i class="iconfont icon-profile"></i>我的</router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>

<style lang="css" scope>
  .footerNav {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background-size: 100%;
    background: #fff;
    box-shadow: 0 -0.266667vw 0.533333vw rgba(0,0,0,.1);
    z-index: 10;
  }
  .footerNav a {
    width: 25%;
    height: 100%;
    display: block;
    color:#a0a0a0;
  }
  
  .footerNav i.iconfont{
    display: block;
    width: 16px;
    height: 16px;
    margin: 0 auto 5px;
    margin-top: 5px;
    color:#a0a0a0;
  }
  
  .router-link-exact-active.active,
  .router-link-exact-active.active i{
    color: #409EFF;
  }
</style>
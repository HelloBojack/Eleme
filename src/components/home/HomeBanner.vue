<template>
  <div class="homeBanner">
    <div style="float:left">
      <div class="bannerTitle">{{bannerInfo.title}}</div>
      <div class="desc">{{bannerInfo.desc}}</div>
      <div style="color:#af8260">立即抢购></div>
    </div>
    <div>
      <img :src="bannerInfo.img" alt="">
    </div>
  </div>
</template>
<script>
  export default {
    props: ['bannerInfo']
  }
</script>
<style lang="css">
  .homeBanner {
    width: 90%;
    margin: 10px auto;
    padding: 10px ;
    text-align: left;
    overflow: hidden;
    background: -webkit-gradient(linear, left bottom, left top, color-stop(5%, #f4f4f4), color-stop(95%, #fafafa));
    background: -webkit-linear-gradient(bottom, #f4f4f4 5%, #fafafa 95%);
    background: linear-gradient(0deg, #f4f4f4 5%, #fafafa 95%);
  }

  .homeBanner .bannerTitle {
    color: #333;
    font-weight: bold;
    font-size: 16px;
  }

  .homeBanner .desc {
    margin: 3px 0;
  }

  .homeBanner img {
    width: 141px;
    height: 94px;
    float: right;
    
  }
</style>
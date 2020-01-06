<template>
  <div class="shopCard">
    <div class="shopTop">
      <img :src="shopInfo.img" alt="">
      <div style="margin-left:10px;padding:10px 10px 0 0 ;width:100%">
        <div v-text="shopInfo.title" style="color:#333;font-weight:bold;font-size:14px;text-align:left"></div>
        <div style="display:flex;margin:5px 0;">
          <div v-text="shopInfo.score"></div>
          <div style="margin-left:5px">月销{{shopInfo.sales}}单</div>
        </div>
        <div style="display:flex;justify-content:space-between">
          <div style="display:flex">
            <div class="moneyLimit">￥{{shopInfo.moneyLimit}}起送</div>
            <div>配送￥{{shopInfo.expressFee}}</div>
          </div>
          <div style="display:flex">
            <div class="distanceWrap">{{shopInfo.distanceWrap}}km</div>
            <div>{{shopInfo.timeWrap}}分钟</div>
          </div>
        </div>
      </div>

    </div>
    <!-- <div v-text="shopInfo.tag"></div> -->
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    props: ['shopInfo']
  }
</script>
<style lang="css" scope>
  .shopTop {
    color: #666;
    padding: 10px 0 0 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .shopTop img {
    width: 60px;
    height: 60px;
  }

  .moneyLimit ,
  .distanceWrap{
    display: flex;
  }

  .moneyLimit::after,
  .distanceWrap::after {
    display: block;
    color: #ddd;
    content: "|";
    margin: 0 5px;
  }
</style>
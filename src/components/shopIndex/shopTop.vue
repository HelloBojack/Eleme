<template>
  <div class="shopTop">
    <div class="shopIndexTop">
      <div class="shopImg">
        <img :src="shopInfo.img" alt="">
      </div>
    </div>

    <div class="shopIndexBottom">
      <div style="display:flex;margin: 0 auto;width:80%;justify-content: center;font-size: 20px;align-items: center;">
        <div class="shopInfoTitle">{{shopInfo.title}}</div>
        <van-icon name="arrow" />
      </div>
      <div style="color:#666">
        <span>评价{{shopInfo.score}}</span>
        <span style="margin:0 20px;">月售{{shopInfo.sales}}单</span>
        <span >商家配送约{{shopInfo.timeWrap}}分钟</span>
      </div>
      <actTagList :actTagDateList=shopInfo.actTag />
      <div style="color:#999;width:80%;text-align:left;margin:0 auto">
        {{shopInfo.notice}}
      </div>
    </div>

  </div>
</template>
<script>
import actTagList from './actTagList'
  export default {
    props: ['shopInfo'],
    components:{
      actTagList
    }
  }
</script>
<style lang="css">
  .shopTop {
    width: 100%;
  }
  .shopIndexTop {
    width: 100%;
    height: 100px;
    background-image: linear-gradient(90deg, #0af, #0085ff);
    position: relative;
  }
  .shopImg{
    position: absolute;
    top:40px;
    left:50%;
    margin-left: -40px;
  }
  .shopImg img {
    width: 80px;
    height: 80px;
  }
  .shopIndexBottom{
    padding-top: 30px;
  }
  .shopInfoTitle{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 24px;
    font-weight: bold;
  }
</style>
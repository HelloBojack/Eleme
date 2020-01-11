<template>
  <div class="shopCard">
    <router-link :to="{name: 'shopIndex', params: {shopId: shopInfo.id}}" tag="div">
      <div class="shopTop">
        <div class="shopImg"><img :src="shopInfo.img" alt=""></div>
        <div style="margin-left:10px;width:100%">
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
            <div style="display:flex;padding-right:10px">
              <div class="distanceWrap">{{shopInfo.distanceWrap}}km</div>
              <div>{{shopInfo.timeWrap}}分钟</div>
            </div>
          </div>
        </div>
      </div>
      <ShopTag :tags="shopInfo.tags" />
      <ShopActivies :activies="shopInfo.activityList" />
    </router-link>
  </div>
</template>
<script>
  import ShopTag from './ShopTag'
  import ShopActivies from './ShopActivies'
  export default {
    data() {
      return {

      }
    },
    props: ['shopInfo'],
    components: {
      ShopTag,
      ShopActivies
    }
  }
</script>
<style lang="css" scope>
  .shopCard {
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }

  .shopTop {
    color: #666;
    padding: 10px 0 0 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

  }

  .shopTop .shopImg {
    width: 60px;
    height: 60px;
  }

  img {
    max-width: 100%;
  }

  .moneyLimit,
  .distanceWrap {
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
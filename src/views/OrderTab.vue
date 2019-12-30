<template>
  <div class="orderTab">
    <div class="orderInner">
      <div v-if="isLogin">
        <OrderCard v-for="item in orderList" :orderItem='item' :key="item.id"></OrderCard>
        <div class="orderTabFooter">
          查看三个月前的外卖订单
          <van-icon name="arrow-down" />
        </div>
      </div>
      <div v-else>

      </div>
    </div>
    <FooterNav></FooterNav>
  </div>
</template>
<script>
  import FooterNav from '../components/common/FooterNav.vue'
  import OrderCard from '../components/orderTab/orderCard.vue'

  export default {
    data() {
      return {
        orderList: [{
            name: '叫了个炸鸡(高新万达店)',
            img: 'https://cube.elemecdn.com/a/d9/31545d56d1f96e7d70366908af7cdjpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed',
            orderMoney: '28.88',
            orderStatus: '订单已送达',
            orderContent: '童子鸡+薯条+酱+饮料',
            orderTime: '1570616840'
          },
          {
            name: '叫了个炸鸡(高新万达店)',
            img: 'https://cube.elemecdn.com/a/d9/31545d56d1f96e7d70366908af7cdjpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed',
            orderMoney: '28.88',
            orderStatus: '订单已送达',
            orderContent: '童子鸡+薯条+酱+饮料',
            orderTime: '1570616840'
          },
          {
            name: '叫了个炸鸡(高新万达店)',
            img: 'https://cube.elemecdn.com/a/d9/31545d56d1f96e7d70366908af7cdjpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed',
            orderMoney: '28.88',
            orderStatus: '订单已送达',
            orderContent: '童子鸡+薯条+酱+饮料',
            orderTime: '1570616840'
          },
          {
            name: '叫了个炸鸡(高新万达店)',
            img: 'https://cube.elemecdn.com/a/d9/31545d56d1f96e7d70366908af7cdjpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed',
            orderMoney: '28.88',
            orderStatus: '订单已送达',
            orderContent: '童子鸡+薯条+酱+饮料',
            orderTime: '1570616840'
          },
          {
            name: '叫了个炸鸡(高新万达店)',
            img: 'https://cube.elemecdn.com/a/d9/31545d56d1f96e7d70366908af7cdjpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed',
            orderMoney: '28.88',
            orderStatus: '订单已送达',
            orderContent: '童子鸡+薯条+酱+饮料',
            orderTime: '1570616840'
          },
          {
            name: '叫了个炸鸡(高新万达店)',
            img: 'https://cube.elemecdn.com/a/d9/31545d56d1f96e7d70366908af7cdjpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed',
            orderMoney: '28.88',
            orderStatus: '订单已送达',
            orderContent: '童子鸡+薯条+酱+饮料',
            orderTime: '1570616840'
          },
          {
            name: '叫了个炸鸡(高新万达店)',
            img: 'https://cube.elemecdn.com/a/d9/31545d56d1f96e7d70366908af7cdjpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed',
            orderMoney: '28.88',
            orderStatus: '订单已送达',
            orderContent: '童子鸡+薯条+酱+饮料',
            orderTime: '1570616840'
          },
          {
            name: '叫了个炸鸡(高新万达店)',
            img: 'https://cube.elemecdn.com/a/d9/31545d56d1f96e7d70366908af7cdjpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed',
            orderMoney: '28.88',
            orderStatus: '订单已送达',
            orderContent: '童子鸡+薯条+酱+饮料',
            orderTime: '1570616840'
          },
        ],
      }
    },
    computed: {
      isLogin() {
        return this.$store.state.isLogin
      },
    },
    components: {
      FooterNav,
      OrderCard
    }
  }
</script>
<style lang="css">
  .orderTab {
    height: 94%;
  }

  .orderTab .orderInner {
    overflow-y: scroll;
    height: 100%;
  }

  .orderTab .orderTabFooter {
    padding: 10px 0;
    font-size: 12px;
    color: #999;
    /* display: flex;
    align-items: center;
    justify-content: center; */
  }

  /* .orderTab .orderTabFooter .van-icon.van-icon-arrow-down {
    font-size: 12px;
    
  } */
</style>
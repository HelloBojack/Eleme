<template>
  <div class="shopIndex">
    <shopTop :shopInfo="shopInfo"></shopTop>
  </div>
</template>
<script>
  import shopTop from './shopTop'
  export default {
    data() {
      return {
        shopInfo: {
          notice: '公告：凭订单小票到店内消费九折优惠',
          actTag: [{
              text: '45减9',
              background: '#fff',
              border: "#FFC9C1",
              color: "#FF4B33"
            },
            {
              text: '60减11',
              background: '#fff',
              border: "#FFC9C1",
              color: "#FF4B33"
            },
          ],
          id: '1',
          img: 'https://cube.elemecdn.com/0/13/37f072470501953a0f5783d489139jpeg.jpeg?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed',
          title: '小腚飘轻海鲜烧烤(原胖哥前程街店)',
          score: '4.5',
          sales: '1415',
          moneyLimit: '20',
          expressFee: '3',
          timeWrap: '33',
          distanceWrap: '2.49',
          tags: ['烧烤'],
          activityList: [{
              icon: '赠',
              icon_color: 'background:rgb(60, 199, 145)',
              desc: '饿了么新用户首单立减10元'
            },
            {
              icon: '减',
              icon_color: 'background:rgb(240, 115, 115)',
              desc: '满45元减7元，满60元减9元，满80元减11元，满100元减13元，满150元减18元'
            },
            {
              icon: '保',
              icon_color: 'background:rgb(102, 102, 102)',
              desc: '该商户食品安全已由国泰产险承担，食品安全有保障'
            },
          ]
        }
      }
    },
    components: {
      shopTop,
    },
    mounted() {
      console.log('====================================');
      console.log(this.$route.params.shopId);
      console.log('====================================');
    }
  }
</script>
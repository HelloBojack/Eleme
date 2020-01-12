<template>
  <div class="shopList">
    <div class="shoplist-title">推荐商家</div>
    <FilterNav />
    <ShopCard v-for="item in shopInfoList" :key="item.key" :shopInfo="item" />
  </div>
</template>
<script>
  import FilterNav from './FilterNav'
  import ShopCard from './ShopCard'
  export default {
    data() {
      return {
        shopInfoList: [{
            id:'1',
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
          },
          {
            img: 'https://cube.elemecdn.com/0/13/37f072470501953a0f5783d489139jpeg.jpeg?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed',
            title: '小腚飘轻海鲜烧烤(原胖哥前程街店)',
            score: '4.5',
            sales: '1415',
            moneyLimit: '20',
            expressFee: '3',
            timeWrap: '33',
            distanceWrap: '2.49',
            tags: ['烧烤', '夜宵'],
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
          },
          {
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
          },
          {
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
          },
          {
            img: 'https://cube.elemecdn.com/0/13/37f072470501953a0f5783d489139jpeg.jpeg?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed',
            title: '小腚飘轻海鲜烧烤(原胖哥前程街店)',
            score: '4.5',
            sales: '1415',
            moneyLimit: '20',
            expressFee: '3',
            timeWrap: '33',
            distanceWrap: '2.49',
            tags: ['烧烤','支持自取'],
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
          },
          {
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
        ]
      }
    },
    components: {
      FilterNav,
      ShopCard
    }
  }
</script>

<style lang="css" scoped>
  .shoplist-title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #000;

  }

  .shoplist-title::before,
  .shoplist-title::after {
    display: block;
    content: "";
    width: 5%;
    height: 1px;
    background-color: #999;
    margin-left: 5%;
    margin-right: 5%;
  }
</style>
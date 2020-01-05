<template>
  <div class="foodEntry">
    <FoodBut v-for='item in foodList' :foodItem='item' :key='item.id' />
    
  </div>
</template>
<script>
  import FoodBut from './FoodBut'
  
  export default {
    data() {
      return {
        foodList: [{
            img: 'https://cube.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed',
            title: '美食'
          },
          {
            img:
            'https://cube.elemecdn.com/9/21/60ac33f023d9074e13cd78f9b5964jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed',
            title: '夜宵'
          },
          {
            img:
            'https://cube.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed',
            title: '跑腿代购'
          },
          {
            img:
            'https://cube.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed',
            title: '汉堡披萨'
          },
          {
            img:
            'https://cube.elemecdn.com/0/1a/314b6da88ab6c7ae9828f91652d40jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed',
            title: '速食简餐'
          },
          {
            img:
            'https://cube.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed',
            title: '地方小吃'
          }
          ,
          {
          img:
          'https://cube.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed',
          title: '大牌惠吃'
          },
        ],
        
      }
    },
    components: {
      FoodBut,
    }
  }
</script>
<style lang="css">
  .foodEntry{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }
</style>
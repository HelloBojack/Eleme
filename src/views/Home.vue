<template>
  <div class="home">

    <div v-if="!isLogin||!isLocation" class="isLogin">
      <router-link to="/login"></router-link>
      <div class='title'>
        <div class="location">
          <i class="iconfont icon-location"></i>
          <div class="van-ellipsis">未能获取地址</div>
          <i class="iconfont icon-sanjiao"></i>
        </div>
        <van-field v-model="value" placeholder="搜索饿了么商家、商品名称" />
      </div>
      <div class="home_loading">
        <img src="../assets/img/home_loading.gif" alt="">
        <p>输入地址后才能订餐哦！</p>
        <van-button type="primary">手动选择地址</van-button>
      </div>
    </div>
    <div v-else>
      <img
        src="https://cube.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
        alt="">
    </div>




    <FooterNav></FooterNav>
  </div>
</template>
<script>
  import FooterNav from '../components/common/FooterNav.vue'
  export default {
    data() {
      return {
        value: '',
      }
    },
    computed: {
      isLogin() {
        return this.$store.state.isLogin
      },
      isLocation() {
        return this.$store.state.isLocation
      }
    },
    methods: {
      login() {
        this.$store.commit('login')
      }
    },
    components: {
      FooterNav
    }
  }
</script>

<style lang="css" scope>
  .isLogin {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .isLogin a {
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
    display: block;
  }

  .home {
    background-color: #fff;
    min-height: 100vh;
  }


  .home .title {
    height: 110px;
    background-image: linear-gradient(90deg, #0af, #0085ff);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .home .location {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    padding: 0 20px;
    height: 20px;
    padding-top: 30px;
  }

  i.icon-location {
    font-size: 20px;
  }

  .location div {
    margin-left: 5px;
  }

  .home .van-field {
    width: 90%;
    margin: 0 auto;
    height: 38px;
  }

  .home_loading img {
    width: 50%;
    margin: 0 auto;
  }

  .home_loading p {
    margin: 10px 0;
    text-align: center;
    font-size: 18px;

  }
</style>
<template>
  <div class="home">
    <div class="homeInner">
      <div v-if="!isLogin||!isLocation" class="isLogin">
        <router-link to="/login"></router-link>
        <div class='title'>
          <div class="location">
            <i class="iconfont icon-location"></i>
            <div class="van-ellipsis">未能获取地址</div>
            <i class="iconfont icon-sanjiao"></i>
          </div>
          <div>
            <van-field v-model="value" placeholder="搜索饿了么商家、商品名称" />
          </div>
        </div>
        <div class="home_loading">
          <img src="../assets/img/home_loading.gif" alt="">
          <p>输入地址后才能订餐哦！</p>
          <van-button type="primary">手动选择地址</van-button>
        </div>
      </div>
      <div v-else>
        <div class='title'>
          <div class="location">
            <i class="iconfont icon-location"></i>
            <div class="van-ellipsis">安邦·阳光尚城</div>
            <i class="iconfont icon-sanjiao"></i>
          </div>

        </div>
        <div class="home_search">
          <van-field v-model="value" placeholder="搜索饿了么商家、商品名称" />
        </div>
        <FoodEntry></FoodEntry>
        <HomeBanner :bannerInfo='bannerInfo' />
        <ShopList />
      </div>
      <FooterNav></FooterNav>
    </div>
  </div>
</template>
<script>
  import FooterNav from '../components/common/FooterNav.vue'
  import FoodEntry from '../components/home/FoodEntry.vue'
  import HomeBanner from '../components/home/HomeBanner'
  import ShopList from '../components/home/ShopList'
  export default {
    data() {
      return {
        value: '',
        bannerInfo: {
          title: '品质套餐',
          desc: '搭配齐全吃得好',
          img: 'https://cube.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?x-oss-process=image/format,webp/resize,w_282,h_188,m_fixed'
        }
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
      FooterNav,
      FoodEntry,
      HomeBanner,
      ShopList
    }
  }
</script>

<style lang="css" scoped>
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
    top: 0;
    left: 0;
    display: block;
  }

  .home {
    background-color: #fff;
    height: 94%;
  }

  .home .homeInner {
    overflow-y: scroll;
    height: 100%;
  }

  .home .home_search {
    width: 100%;
    height: 40px;
    background-image: linear-gradient(90deg, #0af, #0085ff);
    padding: 10px 0;
    position: sticky;
    z-index: 999;
    top: 0;
  }

  .home .title {
    height: 60px;
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
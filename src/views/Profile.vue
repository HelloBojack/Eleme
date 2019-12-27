<template>
  <div class="profile">
    <div v-if="!isLogin" class="isLogin" @click="login">
      <router-link to="/login"></router-link>
    </div>

    <div class='self' v-if="!isLogin">
      <div>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg==">
      </div>
      <div class="signlog">
        <div>登录/注册</div>
        <div><i class="iconfont icon-phone"></i>登录后享受更多特权</div>
      </div>
      <i class="iconfont icon-jiantou"></i>
    </div>
    <div class='self' v-else>
      <div>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg==">
      </div>
      <div class="signlog">
        <div>a8f34e630de</div>
        <div><i class="iconfont icon-phone"></i>155****5130</div>
      </div>
      <i class="iconfont icon-jiantou"></i>
    </div>




    <TabList1 :tabList='tabList1' v-if="!isLogin"></TabList1>
    <TabList1 :tabList='tabList0' v-else></TabList1>
    <TabList2 :tabList='tabList2'></TabList2>
    <TabList2 :tabList='tabList3'></TabList2>
    <TabList2 :tabList='tabList4'></TabList2>

    <div class="policy">
      隐私政策
    </div>

    <FooterNav></FooterNav>
  </div>
</template>
<script>
  import FooterNav from '../components/common/FooterNav.vue'
  import TabList1 from '../components/profile/TabList1'
  import TabList2 from '../components/profile/TabList2'



  export default {
    data() {
      return {

        tabList0: [{
            number: '8',
            style: 'color:#fe563c;width:100%',
            name: '红包'
          },
          {
            number: '100',
            style: 'color:#61ba2b;width:100%',
            name: '金币'
          }
        ],
        tabList1: [{
            icon: 'icon-redbag',
            style: 'backgroundColor:#fe563c;width:26px',
            name: '红包'
          },
          {
            icon: 'icon-coins',
            style: 'backgroundColor:#61ba2b;width:26px',
            name: '金币'
          }
        ],
        tabList2: [{
          icon: 'icon-location',
          style: 'color:#429be9',
          name: '我的地址'
        }],
        tabList3: [{
            icon: 'icon-shop',
            style: 'color:#8ad34f',
            name: '金币商场'
          },
          {
            icon: 'icon-gift',
            style: 'color:#fa714f',
            name: '分享拿20元现金'
          }
        ],
        tabList4: [{
            icon: 'icon-kefu',
            style: 'color:#459ce9',
            name: '我的客服'
          },
          {
            icon: 'icon-eleme',
            style: 'color:#459ce9',
            name: '下载饿了么APP'
          },
          {
            icon: 'icon-rule',
            style: 'color:#459ce9',
            name: '规则中心'
          }
        ],

      }
    },
    methods: {
      login() {
        this.$store.commit('login')
      }
    },
    computed: {
      isLogin() {
        return this.$store.state.isLogin
      }
    },
    components: {
      FooterNav,
      TabList1,
      TabList2
    },
    mounted() {

    },
  }
</script>
<style lang="css" scope>
.profile{
  width: 100%;height: 100%;
}
  .isLogin {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .self {
    height: 110px;
    background-image: linear-gradient(90deg, #0af, #0085ff);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .self img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  .signlog {
    width: 70%;
    text-align: left;
    color: #fff;
    margin-left: 15px;
  }

  .signlog div:first-child {
    font-size: 22px;
    font-weight: bold;

  }

  .profile .self i.iconfont {
    color: #fff;
    display: inline-block;
    font-size: 12px;
  }

  .policy {
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #0085ff;
    font-size: 16px;
    /* background: #fff; */
  }

  .isLogin a {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
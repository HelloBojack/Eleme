<template>
  <div class="orderCard">
    <div class="cardTop">
      <img :src="orderItem.img" alt="">
      <div class="cardTitle">
        <div>
          <div class="title" v-text="orderItem.name"></div>
          <div class="time" >{{orderItem.orderTime|formatDate}}</div>
        </div>
        <van-icon name="arrow" />
        <div class="status" v-text="orderItem.orderStatus"></div>
      </div>
    </div>
    <div class="orderCont">
      <div class="content" v-text="orderItem.orderContent"></div>
      <div class="money">{{'￥'+orderItem.orderMoney}}</div>
    </div>
    <div class="orderFoot">
      <van-button plain hairline type="info" size="small">再来一单</van-button>
    </div>
  </div>
</template>
<script>
  import {
    formatDate
  } from '../../assets/js/common/date'
  export default {
    data() {
      return {
        
      }
    },
    props:['orderItem'],
    filters: {
      formatDate(time) {
        return formatDate(time);
      }

    }
  }
</script>

<style lang="css" scoped>
  .orderCard {
    margin-top: 10px;
    background: #fff;
    padding: 20px 20px 10px;
    color: #000;
  }

  .orderCard .cardTop {
    display: flex;

  }

  .orderCard .van-icon.van-icon-arrow {
    color: #333;
    font-size: 12px;
    line-height: 20px;
  }

  .orderCard img {
    width: 30px;
    height: 30px;
  }

  .orderCard .cardTitle {
    margin-left: 10px;
    width: 100%;
    display: flex;
  }

  .orderCard .title {
    width: 150px;
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .orderCard .status {
    font-size: 12px;
    width: 100%;
    text-align: right;
  }

  .orderCard .time {
    text-align: left;
    color: #999
  }

  .orderCard .orderCont {
    font-size: 12px;
    display: flex;
    height: 50px;
    line-height: 50px;
    justify-content: space-between;
    padding-left: 40px;
  }

  .orderCard .money {
    font-weight: bold;
  }

  .orderCard .orderFoot {
    text-align: right;
  }
</style>
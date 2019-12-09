<template>
  <div class="tabList1">
    <ul>
      <li v-for="it in tabList" :key="it.id">
        <div :style="it.style">
          <i class="iconfont" :class="it.icon"></i>
        </div>
        <p v-text="it.name"></p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    props: {
      tabList: {
        tpye: Array,
        default: () => {

        }
      }
    }
  }
</script>

<style lang="css" scope="this api replaced by slot-scope in 2.5.0+">
  .tabList1 ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#fff; 
  }

  .tabList1 li {
    color: #fff;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 15px 0;
  }
  .tabList1 li:nth-child(odd){
    border-right: 1px solid #f5f5f5;
  }
  .tabList1 li i.iconfont{
    font-size:16px;
    color: #fff;
  }
  .tabList1 li div {
    width: 26px;
    height: 26px;
    line-height: 26px;
    border-radius: 50%;
  }
  .tabList1 li p{
    margin-top: 5px;
    width: 100%;
    text-align: center;
    color: black
  }
</style>
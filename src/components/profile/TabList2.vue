<template>
  <div class="tabList2">
    <ul>
      <li v-for="it in tabList" :key="it.id" :class="{'borderTop':tabList.length>=2}">
        <div >
          <i class="iconfont" :class="it.icon" :style="it.style"></i>
          <p v-text="it.name"></p>
        </div>
        
        <i class="iconfont icon-jiantou"></i>
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

<style lang="css" scoped>
  .tabList2{
    background-color:#fff;
    margin-top: 10px;
  }
  .tabList2 ul {
    width: 100%;
  }

  .tabList2 li {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
    /* flex-wrap: wrap; */
    /* padding: 20px 0; */

  }
  .tabList2 li i.iconfont{
    font-size:22px;
  }
  .tabList2 li div {
    display: flex;
    align-items: center;
    height: 32px;
    line-height: 32px;
    border-radius: 50%;
  }
  .tabList2 li p{
    font-size: 16px;
    margin-left: 10px;
    /* width: 100%; */
    text-align: left;
    color: black
  }
  .tabList2 li i.icon-jiantou {
    color: #c0c0c0;
    font-size:12px;
    float: right;
  }
  li.borderTop{
     border-top: 1px solid #f5f5f5;
  }
</style>
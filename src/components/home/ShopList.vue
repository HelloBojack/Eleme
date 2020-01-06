<template>
  <div class="shopList">
    <div class="shoplist-title">推荐商家</div>
    <FilterNav />
  </div>
</template>
<script>
  import FilterNav from './FilterNav'
  export default {
    data() {
      return {

      }
    },
    components: {
      FilterNav
    }
  }
</script>

<style lang="css">
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
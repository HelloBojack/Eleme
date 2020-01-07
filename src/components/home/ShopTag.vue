<template>
  <div class="shopTag">
    <div style="border:1px solid #ccc;padding:0 5px;margin-right:5px;" v-for="item in tags" :key="item.key">{{item}}</div>
  </div>
</template>
<script>
export default {
  props:['tags'],
}
</script>
<style lang="css">
  .shopTag{
    padding-left: 18%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 5px;
  }
</style>
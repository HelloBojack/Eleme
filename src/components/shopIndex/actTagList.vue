<template>
  <div class="actTagList">
    <div class="actTagList">
      <div v-for="it in actTagDateList" :key=it.key>
        <div style="margin:0 5px;padding:0 2.5px;" :style="{'color':it.color,'border':'1px solid'+ it.border}">
          {{it.text}}</div>
      </div>
    </div>
    <div style="color:#999">
      {{actTagDateList.length}}个优惠
      <van-icon name="arrow-down" />
    </div>
  </div>
</template>
<script>
  export default {
    props: ['actTagDateList']
  }
</script>
<style lang="css">
  .actTagList {
    width: 75%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 5px auto;
  }
</style>
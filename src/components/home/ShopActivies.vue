<template>
  <div class="shopActivies">
    <div v-for="it in activies" :key="it.key" style="width:50%;">
      <span class="act_icon" :style="it.icon_color">{{it.icon}}</span>
      <span class="act_desc">{{it.desc}}</span>
    </div>
    <div style="position: absolute;right:10px;top:0">{{activies.length}}个活动</div>
  </div>
</template>
<script>
  export default {
    props: ['activies']
  }
</script>
<style lang="css">

  .shopActivies {
    padding-left: 18%;
    text-align: left;
    margin-top: 10px;
    width: 79%;
    white-space: nowrap;
    position: relative;
    
  }

  .shopActivies .act_icon {
    color: #fff;
    padding: 0 2px;
    border-radius: 3px;
  }

  .shopActivies .act_desc {
    margin-left: 5px;
    width: 100%;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    vertical-align: middle;
  }
</style>
<template>
  <div>
    <div class="title">{{info.title}}</div>
    <div class="des">{{info.des}}</div>
    <slot name="des" class="des"></slot>
  </div>
</template>
<script>
export default {
  props:['info']
}
</script>
<style lang="css" scoped>
  
</style>
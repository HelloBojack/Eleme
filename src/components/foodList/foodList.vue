<template>
  <div class="foodList">
    <foodNav></foodNav>
    <router-view :shopInfo="shopInfo"></router-view>
  </div>
</template>
<script>
import foodNav from './foodNav'
export default {
  props:["shopInfo"],
  components:{
    foodNav
  },
  mounted() {
    
  },
}
</script>
<template>
  <div class="foodList">
    <foodNav></foodNav>
    <router-view></router-view>
  </div>
</template>
<script>
import foodNav from './foodNav'
export default {
  components:{
    foodNav
  }
}
</script>
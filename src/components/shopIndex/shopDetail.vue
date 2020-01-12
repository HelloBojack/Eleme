<template>
  <div class="shopDetail">
    <Cell :info="shopInfo" />
  </div>
</template>
<script>
import Cell from '../common/Cell'
export default {
  data() {
    return {
      
    }
  },
  props:['shopInfo'],
  components:{
    Cell
  },
  mounted() {
    console.log(this.shopInfo)
  },
}
</script>
<style lang="css" scoped>
  
</style>
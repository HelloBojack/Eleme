<template>
  <div class="foodBut">
    <img :src="foodItem.img" alt="">
    <p style="color:#666">{{foodItem.title}}</p>
  </div>
</template>
<script>
  export default {
    props: ['foodItem'],
    mounted() {

    },
  }
</script>
<style lang="css">
  .foodBut{
    width: 20%;
    margin-top: 10px;
  }
  .foodBut img {
    width: 40px;
    height: 40px;
  }
</style>
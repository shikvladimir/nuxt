<script setup>
import {ref } from "vue"

</script>
<template>
<div class="block">
  <p class="title">Поводок My Woof можно купить здесь</p>
  <div class="shops">
    <img src="/images/shops/zoobazar.png" alt="img">
    <img src="/images/shops/zoomarket.png" alt="img">
    <img src="/images/shops/garfild.png" alt="img">
    <img src="/images/shops/lolo.png" alt="img">
  </div>
</div>
</template>



<style scoped lang="scss">
.block {
  background-color: white;
  padding: 80px;
  .title {
    font-size: 16px;
    font-weight: 300;
    line-height: 22.62px;;
    color: var(--color-black);
    text-align: center;
    margin-bottom: 60px;
  }
  .shops {
    display: flex;
    justify-content: space-between;
    height: 140px;
    max-width: 1440px;
    img {
      //width: 80%;
    }
  }
}
</style>
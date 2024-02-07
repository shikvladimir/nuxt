<script setup>
import {onMounted, ref} from "vue";
import {useProducts} from "../composables/products";
import CardShop from "./CardShop";

const {salvation, classic} = useProducts();


// onMounted(() => {
//   typeClassic.value = classic
// })
</script>

<template>
<div class="block">
  <p class="title">Поводок MY WOOF</p>

  <CardShop :obj="salvation"/>

  <CardShop :obj="classic"/>

</div>
</template>



<style scoped lang="scss">
.block {
  .title {
    font-size: 88px;
    font-weight: 900;
    line-height: 79.2px;
    letter-spacing: -4.5%;
    color: white;
    margin: 80px;
  }
}
</style>
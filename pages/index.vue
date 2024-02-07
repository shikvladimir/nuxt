<script setup>
import Button from "../components/Button";
import Block1 from "../components/Block1";
import Block2 from "../components/Block2";
import Block3 from "../components/Block3";
import Shop from "../components/Shop";
import Block4 from "../components/Block4";
import Footer from "../components/Footer";
import Album from "../components/Album";
import Friend from "../components/Friend";


import {ref} from 'vue'
import {computed} from "vue";

import img from '/images/main.webp'

// const imgUrl = ref(require("../images/main.webp"))

</script>
<template>
  <div>
    <img src="/images/main.webp" alt="main">
    <!--    <img :src="imgUrl" alt="main">-->
  </div>
  <Block1/>
  <Block2/>
  <Block3/>
  <Shop />
  <Block4/>

  <Friend />
  <Album />
  <Footer />
</template>
<style scoped lang="scss">
img {
  width: 100%;
  height: 880px;
  object-fit: none;
}


</style>
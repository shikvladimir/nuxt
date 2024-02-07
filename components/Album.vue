<script setup>


</script>


<template>
<div class="album">
  <img src="/images/album/1.webp" alt="img">
  <img src="/images/album/2.webp" alt="img">
  <img src="/images/album/3.webp" alt="img">
  <img src="/images/album/4.webp" alt="img">
  <img src="/images/album/5.webp" alt="img">
  <img src="/images/album/6.webp" alt="img">
</div>
</template>



<style scoped lang="scss">
.album {
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: repeat(2, 506px);

  img {
    max-width: 640px;
    width: 100%;

  }
}
</style>
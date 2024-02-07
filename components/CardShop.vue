<script setup>
import product from '/images/product.webp';
import CircleButton from "./CircleButton";

const props = defineProps({
  obj: {type: Object, required: true}
})


</script>

<template>
<div class="wrapper">
  <div class="about">
    <img :src="product" alt="product">
    <div class="info">
      <p class="title">{{ props.obj.title }}</p>
      <p class="description">{{ props.obj.description }}</p>

      <div class="price-info">
        <div class="size">
          <CircleButton v-for="item in props.obj.sizes">
            <span class="circleBody">{{item.size}}</span>
          </CircleButton>
        </div>
        <div class="color">
          <CircleButton v-for="item in props.obj.colors">
            <span class="circleBody">{{item.color}}</span>
          </CircleButton>
        </div>
      </div>
    </div>
  </div>


</div>
</template>



<style scoped lang="scss">
.wrapper {
  margin-bottom: 80px;
  .about {
    display: flex;
    justify-content: space-between;
    max-width: 1440px;
    margin: 0 auto;
  }


  img {
    max-width: 420px;
    margin: 0 auto;
  }
  .info {
    max-width: 720px;
    color: var(--color-black);
    .title {
      font-size: 40px;
      font-weight: 500;
      line-height: 46.88px;
      letter-spacing: -4.5%;
      margin: 0;
    }
    .description {
      font-size: 24px;
      font-weight: 300;
      line-height: 33.94px;
    }
  }

  .price-info {
    .size, .color {
      display: flex;
      max-width: 360px;
      .circleBody{
        text-transform: uppercase;
        font-size: 24px;
        font-weight: 400;
        line-height: 28.13px;
      }
    }
    .color {

    }
  }
}
</style>
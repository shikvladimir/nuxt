<script setup>
import CardReview from "./CardReview";
import img from "/images/reviews/img.webp"
import img_1 from "/images/reviews/img_1.webp"
import img_2 from "/images/reviews/img_2.webp"


const reviews = [
  {
    title: "Я в шоке! Только что моя собака чуть не удавилась!",
    description: "Мы шли по торговому центру и я выронил поводок, который моментально намотался...",
    name: "Никита П",
    img: img
  },
  {
    title: "Однажды с моей Вишенкой случилось страшное",
    description: "Лифт закрылся, а Вишенка осталась по ту сторону, испугавшись незнакомого человека...",
    name: "Татьяна С",
    img: img_1
  },
  {
    title: "Мы с Джоном часто ездим за город на электричке",
    description: "Иногда туда просто не протиснуться. Несколько раз моя собака в моменты закрытия пыталась...",
    name: "Григорий Р",
    img: img_2
  },
]
</script>

<template>
<div class="review">
  <CardReview :obj="reviews"/>
</div>
</template>



<style scoped lang="scss">
.review {
  background-color: #8092C4;
  //height: 500px;
}
</style>
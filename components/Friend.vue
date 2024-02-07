<script setup>

</script>

<template>
<div class="friend">
  <p class="title">Давайте дружить!</p>
  <div class="description">
    <p class="text">
      <span>Подписывайтесь на наш Instagram </span>и присылайте нам ваших счастливых питомцев и мы их обязательно опубликуем
    </p>
    <p class="hashtag">@MyWoof</p>
  </div>
</div>
</template>



<style scoped lang="scss">
.friend {
  background-color: #FFDA53;
  padding: 80px;

  .title {
    font-size: 88px;
    font-weight: 900;
    line-height: 79.2px;;
    color: var(--color-black);
    margin: 20px 0;
  }

  .description {
    display: flex;
    align-items: center;

    .text {
      font-size: 30px;
      font-weight: 300;
      color: var(--color-black);
      line-height: 45.25px;
      span {
        font-weight: 500;
      }
    }

    .hashtag {
      font-size: 80px;
      font-weight: 500;
      line-height: 60.72px;
      color: var(--color-black);
    }
  }
}
</style>
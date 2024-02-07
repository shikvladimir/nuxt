<script setup>
import Fb from "./social/fb";
import Insta from "./social/insta";
import Tg from "./social/tg";

</script>

<template>
<div class="footer">
  <div class="info">
    <div class="social">
      <p class="title">Мы в сети</p>
      <div class="items">
        <Tg />
        <Insta />
        <Fb />
      </div>
      <p class="cc">© My Woof 2024. Все права защищены</p>
    </div>
    <div class="contacts">
      <p class="title">Контакты</p>
      <a href="" class="phone">+375 29 145 9272</a>
      <a href="" class="email">mywoof@gmail.com</a>
    </div>
  </div>
</div>
</template>



<style scoped lang="scss">
.footer {
  background-color: #EFEADA;
  padding: 100px 0 0 0;

  .info {
    display: flex;
    justify-content: center;
    max-width: 1440px;

    .social {
      display: flex;
      flex-direction: column;
      max-width: 720px;
      width: 100%;

      .items {
        display: flex;
        justify-content: space-between;
        max-width: 310px;
        width: 100%;
      }

      .cc {
        margin-top: 80px;
      }
    }

    .contacts {
      display: flex;
      flex-direction: column;

      .phone, .email {
        font-size: 32px;
        font-weight: 500;
        line-height: 37.5px;;
        color: var(--color-black);
        text-decoration: none;
      }
    }
  }
  margin: 0;
}
</style>
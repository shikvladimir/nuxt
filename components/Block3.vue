<script setup>
import Block3Item from "./Block3Item";
import Age from "./svg/Age";
import Move from "./svg/Move";
import Character from "./svg/Character";
import Pet from "./svg/Pet";
import Child from "./svg/Child";
import Lift from "./svg/Lift";

const list = [
  {logo: Pet, text: 'Щенячий возраст питомца'},
  {logo: Move, text: 'Поездки Активные Прогулки'},
  {logo: Character, text: 'Своенравный Характер Питомца'},
  {logo: Age, text: 'Пожилой Возраст Хозяина'},
  {logo: Child, text: 'Ребёнок Питомец Лифт'},
  {logo: Lift, text: 'Частое Пользование Лифтом'},
];

const subList = [
  {text: 'Неожиданная реакция питомца'},
  {text: 'Внешние раздражители (шум, другие животные)'},
  {text: 'Агрессивное поведение или боязливость'},
  {text: 'Невнимательность и потеря контроля'},
  {text: 'Пониженная реакция (алкоголь, седативы)'},
  {text: 'Слабо установленный контакт с питомцем'},
];

</script>

<template>
  <div class="block">
    <p class="title">
      В каких ситуациях нужен поводок My Woof?
    </p>
    <p class="subtitle">
      <span>В любых! </span>С поводком My Woof вы будете уверены, что Ваш питомец и Вы в безопасности
    </p>
    <Block3Item :obj="list"/>
    <div class="sub-situation">
      <p class="sub-situation__title">
        <span>Кроме того </span>My Woof будет полезен при:
      </p>
      <ul>
        <li v-for="item in subList">{{item.text}}</li>
      </ul>
    </div>

  </div>

</template>

<style scoped lang="scss">
.block {
  background-color: #B1E4ED;
  padding: 70px;

  .title {
    font-size: 88px;
    font-weight: 900;
    line-height: 79.2px;
    letter-spacing: -4.5%;
    color: white;
    margin: 0;
  }

  .subtitle {
    font-size: 24px;
    font-weight: 300;
    line-height: 33.94px;
    letter-spacing: -4.5%;
    color: var(--color-black);
    margin-bottom: 0;

    span {
      font-weight: 600;
    }
  }
  .sub-situation {
    font-size: 24px;
    font-weight: 300;
    line-height: 33.94px;
    color: var(--color-black);

    &__title {
      letter-spacing: -4.5%;
      margin: 0;

      span {
        font-weight: 600;
      }
    }
    ul {
      display: grid;
      grid-template-columns: repeat(2, 704px);
      grid-template-rows: repeat(3, 40px);
    }
  }
}
</style>
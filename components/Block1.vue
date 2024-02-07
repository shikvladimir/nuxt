<template>
  <div class="block">
    <div class="data">
      <p class="title">Лёгкое Освобождение</p>
      <p class="sub-tile">СУПЕРГЕРОЙ СРЕДИ ПОВОДКОВ</p>
      <p class="description">
        <span>Поводок с надёжным механизмом спасения</span> был разработан  для множества опасных ситуаций, в
        которых всё чаще и чаще оказываются хозяин и питомец. Когда предпринять что-либо уже поздно, My Woof сохранит
        жизнь любимца
      </p>
      <Button />
    </div>
    <div class="stat">
      <div class="item">
        <p>0,003</p>
        <span>секунды реагирования</span>
      </div>
      <div class="item">
        <p>100%</p>
        <span>срабатываемость механизма</span>
      </div>
      <div class="item">
        <p>11+</p>
        <span>спасённые жизни</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Block1"
}
</script>

<style scoped lang="scss">
.block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 885px;
  padding: 80px;
  
  @media (max-width: 500px) {
    flex-direction: column;
    padding: 24px;
  }

  .data {
    max-width: 864px;
    height: 565px;

    .title {
      font-size: 88px;
      font-weight: 900;
      line-height: 79.2px;
      letter-spacing: -4.5%;
      color: white;
      margin: 0;

      @media (max-width: 500px) {
        font-size: 48px;
        line-height: 32.4px;
      }
    }

    .sub-tile {
      font-size: 40px;
      font-weight: 500;
      line-height: 46.88px;
      color: var(--color-black);
    }

    .description {
      font-size: 24px;
      font-weight: 300;
      line-height: 33.94px;
      color: var(--color-black);

      span {
        font-size: 24px;
        font-weight: 500;
        line-height: 33.94px;
        color: var(--color-black);
      }
    }
  }

  .stat {
    max-width: 496px;
    width: 100%;
    height: 565px;
    background-color: white;
    padding: 48px 80px;

    .item {
      margin-bottom: 20px;

      p {
        font-size: 64px;
        font-weight: 700;
        line-height: 87.41px;
        color: var(--color-black);
        margin: 0;
      }

      span {
        font-size: 24px;
        font-weight: 400;
        line-height: 28.13px;
        color: var(--color-black);
      }
    }
  }
}
</style>
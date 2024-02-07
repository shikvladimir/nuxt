<script setup>
const props = defineProps({
  obj: {type: Array, required: true},
})
</script>

<template>
  <div class="situation">
    <div v-for="item in props.obj" class="item">
      <div class="logo">
        <component :is="{...item.logo}"/>
      </div>
      <p class="text">{{ item.text }}</p>
    </div>
  </div>
</template>


<style scoped lang="scss">
.situation {
  display: grid;
  grid-template-columns: repeat(2, 704px);
  grid-template-rows: repeat(2, 141px);
  gap: 48px;
  margin-top: 104px;
  margin-bottom: 104px;

  .item {
    display: flex;
    align-items: center;
    max-width: 504px;

    .logo {
      margin-right: 20px;
      max-width: 200px;
    }
    .text {
      text-transform: uppercase;
      font-size: 40px;
      font-weight: 500;
      line-height: 46.88px;
      color: var(--color-black);
      margin: 0;
      width: 180px;
    }
  }

}
</style>
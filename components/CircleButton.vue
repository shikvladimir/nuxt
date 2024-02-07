<script setup>
// const props = defineProps({
//   sizes: {type: Array, required: false}
// })
</script>

<template>
<div class="circle">
  <slot/>
</div>
</template>



<style scoped lang="scss">
.circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 1px solid white;
  cursor: pointer;
  margin-right: 40px;

  &:hover {
    background-color: white;
    color: var(--color-black);
  }
}
</style>
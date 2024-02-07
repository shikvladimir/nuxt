<template>
  <div class="button">
    <p>КУПИТЬ ПОВОДОК MY WOOF</p>

    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.3335 16H26.6668M26.6668 16L18.6668 8M26.6668 16L18.6668 24" stroke="#343948" stroke-width="1.5"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Button"
}
</script>

<style scoped lang="scss">
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid var(--color-black);
  max-width: 372px;
  height: 64px;
  border-radius: 100px;

  p {
    font-size: 16px;
    font-weight: 700;
    color: var(--color-black);
    line-height: 18.75px;
    margin-right: 10px;
  }
}
</style>
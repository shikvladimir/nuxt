<script setup>
const props = defineProps({
  obj: {type: Array, required: true},
})
</script>

<template>
  <div  class="wrapper">
    <div v-for="item in props.obj" class="card" >
      <img :src="item.img" alt="img">
      <p class="title">{{ item.title }}</p>
      <p class="description">{{ item.description }}</p>
      <p class="name">{{ item.name }}</p>

      <div class="logo">
        <svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29.5606 2.06888C31.3718 3.9886 32.3442 6.1417 32.3442 9.63194C32.3442 15.7736 28.0237 21.2784 21.7408 24L20.1705 21.5819C26.0349 18.4163 27.1814 14.3084 27.6386 11.7184C26.6944 12.2062 25.4582 12.3764 24.2466 12.2641C21.0744 11.971 18.5739 9.37223 18.5739 6.1417C18.5739 4.51282 19.2223 2.95065 20.3765 1.79886C21.5307 0.647068 23.0961 0 24.7284 0C25.6311 0.00787354 26.5232 0.194841 27.3528 0.550022C28.1824 0.905205 28.9329 1.42151 29.5606 2.06888ZM11.9762 2.06888C13.7874 3.9886 14.7598 6.1417 14.7598 9.63194C14.7598 15.7736 10.4393 21.2784 4.15636 24L2.58607 21.5819C8.45048 18.4163 9.59699 14.3084 10.0542 11.7184C9.1099 12.2062 7.87371 12.3764 6.66215 12.2641C3.48991 11.971 0.989403 9.37223 0.989403 6.1417C0.989403 4.51282 1.63783 2.95065 2.79203 1.79886C3.94623 0.647068 5.51167 0 7.14396 0C8.04664 0.00787354 8.93874 0.194841 9.76833 0.550022C10.5979 0.905205 11.3484 1.42151 11.9762 2.06888Z" fill="white"/>
        </svg>
      </div>


    </div>
  </div>
</template>



<style scoped lang="scss">
.wrapper {
  display: grid;
  grid-template-columns: repeat(3,353px);
  grid-template-rows: repeat(1, 532px);
  gap: 150px;
  padding: 160px 80px;

  .card {
    max-width: 353px;
    color: white;

    .title {
      text-transform: uppercase;
      font-size: 26px;
      font-weight: 500;
      line-height: 33.94px;
    }

    .description, .name {
      font-weight: 100;
      font-size: 18px;
    }

    img {
      width: 100%;
    }

    .logo {
      text-align: center;
      margin-top: 40px;
    }
  }
}

</style>
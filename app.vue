<script setup>
import Header from "./components/Header";

const head = () => {
  return {
    bodyAttrs: {
      class: 'reset-body'
    }
  }
}
</script>


<template>
  <div class="wrapper-w">
    <Header />

<!--    <the-navigation />-->
    <NuxtPage />
  </div>
</template>


<style>
.reset-body {
  margin: 0;
}
</style>
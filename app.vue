<template>
  <div>
<!--    <NuxtWelcome />-->

    <the-navigation />
    <NuxtPage />
  </div>
</template>
<script setup>
const config = useRuntimeConfig()
console.log(config.public.apiBaseUrl)
console.log(config.public.apiBaseToken)
console.log(config.apiSecretPath)
console.log(config.apiSecretKey)
</script>
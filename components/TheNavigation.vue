<template>
  <Menubar :model="items">
    <template #item="{ item, props, hasSubmenu, root, url }">
      <NuxtLink :to="item.path" class="flex align-items-center" v-bind="props.action" :url="item.path">
        <span class="ml-2">{{ item.label }}</span>
      </NuxtLink>
    </template>
  </Menubar>
</template>

<script>
import {ref} from "vue";

export default {
  name: "TheNavigation",

  setup(){
    const items = ref([
      {
        label: 'Home',
        icon: 'pi pi-home',
        path: '/'
      },
      {
        label: 'About',
        icon: 'pi pi-star',
        path: '/about'
      },
      {
        label: 'Me',
        icon: 'pi pi-star',
        path: '/me'
      },
    ]);

    return {items}
  }
}
</script>
<!--<script setup>-->
<!--import {ref} from "vue";-->

<!--const items = ref([-->
<!--  {-->
<!--    label: 'Home',-->
<!--    icon: 'pi pi-home',-->
<!--    path: '/'-->
<!--  },-->
<!--  {-->
<!--    label: 'About',-->
<!--    icon: 'pi pi-star',-->
<!--    path: '/about'-->
<!--  },-->
<!--  {-->
<!--    label: 'Me',-->
<!--    icon: 'pi pi-star',-->
<!--    path: '/me'-->
<!--  },-->
<!--]);-->
<!--</script>-->
<style>
ul {
  display: flex;
}

li {
  margin-right: 30px;
}
</style>
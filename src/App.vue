<template>
  <TheHeader />
  <aside>
    <Navigation />
  </aside>
  <RouterView />
</template>

<script setup>
import TheHeader from "./components/layout/TheHeader.vue";
import Navigation from "./components/layout/Navigation.vue";

</script>

<style>
li {
  list-style: none;
}
aside {
  width: 10rem;
  border: 0px solid red;
  position: fixed;
}
</style>

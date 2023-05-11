<template>
  <section>
    <ul>
      <li v-for="email in emails" :key="email.id" >
        <h4>{{ email.subject }}</h4>
        <p>{{ email.content }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup>

import {ref} from "vue";

import mock from "./MOCK_DATA.js";
const emails = ref(mock);

</script>

<style scoped>
section {
  border: 0px solid blue;
  margin-left: 10rem;
}
</style>

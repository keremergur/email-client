<template>
  <ul>
    <EmailItem v-for="email in emails" :key="email.id" />
  </ul>
</template>

<script>
import EmailItem from './EmailItem.vue';
export default {
  name: "EmailList.vue",
  components: {
    EmailItem
  },
  methods:
}
</script>

<style scoped>

</style>

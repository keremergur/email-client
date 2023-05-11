<template>
  <ul>
    <li><RouterLink to="/dashboard">Dashboard</RouterLink></li>
    <li><RouterLink to="/inbox">Inbox</RouterLink></li>
    <li><RouterLink to="/important">Important</RouterLink></li>
    <li><RouterLink to="/starred">Starred</RouterLink></li>
    <li><RouterLink to="/sent">Sent</RouterLink></li>
    <li><RouterLink to="/spam">Spam</RouterLink></li>
    <li><RouterLink to="/trash">Trash</RouterLink></li>
  </ul>
</template>

<script setup>

</script>

<style scoped>
ul {
  justify-content: center;
  padding: 0;
}
</style>

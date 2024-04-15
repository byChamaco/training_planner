<template>
  <NuxtLayout name="header"></NuxtLayout>
  <NuxtLink to="/list">Lista</NuxtLink>
  <NuxtPage />
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style>
  body {
    margin: 0px;
  }
</style>
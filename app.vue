<template>
  <NuxtLayout name="header"></NuxtLayout>
  <!-- <UBreadcrumb divider="/" :links="links"/> -->
  <!-- <NuxtLink to="/list">Lista</NuxtLink>
  <NuxtLink to="/login">Login</NuxtLink> -->
  <NuxtPage />
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
      }
    },
  }
</script>

<style>
  body {
    margin: 0px;
  }
</style>
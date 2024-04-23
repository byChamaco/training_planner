<template>
    <NuxtLayout name="default">
      <Header :mode="mode_theme"></Header>
      <NuxtPage />
    </NuxtLayout>
    <!-- <UBreadcrumb divider="/" :links="links"/> -->
    <!-- <NuxtLink to="/list">Lista</NuxtLink>
    <NuxtLink to="/login">Login</NuxtLink> -->
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        mode_theme: 'light',
      }
    },
    created() {
      // this.getUsers();
      // localStorage.setItem('mode_theme', 'dark');
      this.mode_theme = localStorage.getItem('mode_theme');
    },
    methods: {
      // async getUsers() {
      //   const response = await $fetch('/api/user/get')
      //   this.mode_theme = response[0].mode_theme;
      //   this.name_layout = 'default';
      //   // this.mode_theme = localStorage.getItem('mode_theme');
      // },
    },
  }
</script>

<style>
  body {
    margin: 0px;
  }
</style>
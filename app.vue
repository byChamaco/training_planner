<template>
    <NuxtLayout :name="name_layout" :mode="mode_theme"></NuxtLayout>
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
        mode_theme: 'light',
        name_layout: '',
      }
    },
    created() {
      this.getUsers();
    },
    methods: {
        async getUsers() {
            const response = await $fetch('/api/user/get')
            this.mode_theme = response[0].mode_theme;
            this.name_layout = 'header';
        },
        saveUser() {

        }
    },
  }
</script>

<style>
  body {
    margin: 0px;
  }
</style>
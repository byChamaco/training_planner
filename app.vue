<template>
  <!-- <ClientOnly fallback-tag="span" fallback="Loading comments..."> -->
    <NuxtLayout :name="name_layout" :mode="mode_theme" :key="component_key"></NuxtLayout>
    <!-- <UBreadcrumb divider="/" :links="links"/> -->
    <!-- <NuxtLink to="/list">Lista</NuxtLink>
    <NuxtLink to="/login">Login</NuxtLink> -->
    <NuxtPage />
    <button @click="getUsers">Usuarios</button>
  <!-- </ClientOnly> -->
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'App',
    data() {
      return {
        mode_theme: 'light',
        component_key: 0,
        can_use: false,
        name_layout: '',
      }
    },
    created() {
      this.getUsers();
    },
    methods: {
        async getUsers() {
          // axios.get('/api/users').then(function (response) {
          //   console.log('axios', response.data[0].mode_theme);
          // });
            // console.log(this.name, this.email, this.password)
            let response = await $fetch('/api/users', {
                method: 'POST'
            })

            // useColorMode().preference = response.data[0].mode_theme;
            // this.mode_theme = response.data[0].mode_theme;
            // this.name_layout = 'header';
            // this.component_key += 1;
            console.log(response[0].mode_theme);
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
<template>
    <div>
      <h1>Welcome to Our Website!</h1>
      <p>Get started by logging in or signing up:</p>
      <UButton @click="redirectToLogin">Log In</UButton>
      <UButton @click="redirectToSignIn">Sign In</UButton>
    </div>
  </template>
  
  <script>
  import UButton from '~/components/Button.vue'
  
  export default {
    name: 'Welcome',
    components: {
      UButton
    },
    methods: {
      redirectToLogin() {
        // Redirige a la página de inicio de sesión
        this.$router.push('/login');
      },
      redirectToSignIn() {
        // Redirige a la página de registro
        this.$router.push('/signin');
      }
    }
  }
  </script>
  
  <style>
  /* Estilos opcionales aquí */
  </style>
  
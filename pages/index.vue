<template>
    <div class="welcome-container">
      <h1>Welcome to Our Website!</h1>
      <img src="~/assets/img/welcomeDark.svg" alt="Welcome Image" class="welcome-image">
      <p>Get started by logging in or signing up:</p>
      <div class="button-container">
        <UButton @click="redirectToLogin" class="login-button">Log In</UButton>
        <UButton @click="redirectToSignIn" class="signin-button">Sign In</UButton>
      </div>
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
  
  <style scoped>
  .welcome-container {
    text-align: center;
    margin-top: 50px;
  }
  
  .welcome-image {
    max-width: 100%;
    margin: 20px auto;
    transform: scale(2.3); /* Aumenta el tamaño de la imagen en un 30% */
  }
  
  .button-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .login-button,
  .signin-button {
    margin: 0 10px;
  }
  </style>
  
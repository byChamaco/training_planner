<template>
<div class="welcome-container">
    <h1>Welcome to Our Website!</h1>
    <img :src="welcomeImage" alt="Welcome Image" class="welcome-image">
    <p>Get started by logging in or signing up:</p>
    <div class="button-container">
        <UButton @click="redirectToLogin" class="login-button">Log In</UButton>
        <UButton @click="redirectToSignIn" class="signin-button">Sign In</UButton>
    </div>
</div>
</template>

<script>
export default {
    name: 'Welcome',
    data() {
        return {
            welcomeImage: '~/assets/img/welcomeDark.svg' // Asumiendo que la imagen inicial es la oscura
        };
    },
    methods: {
        redirectToLogin() {
            // Redirige a la página de inicio de sesión
            this.$router.push({
                path: '/login'
            });
        },
        redirectToSignIn() {
            // Redirige a la página de registro
            this.$router.push({
                path: '/signin'
            });
        }
    }
}
</script>

<style scoped>
.welcome-container {
    text-align: center;
    margin-top: 50px;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* Centra horizontalmente */
    align-items: center;
}

.welcome-image {
    max-width: 100%;
    margin: 20px auto;
    transform: scale(2.3);
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

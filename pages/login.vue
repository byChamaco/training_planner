<template>
<div class="login-container">
    <div class="login-form">
        <p class="input-label">LOG IN</p>
        <UInput v-model="name" placeholder="Name" class="login-input" />
        <UInput v-model="email" placeholder="Email" class="login-input" />
        <UInput v-model="password" placeholder="Password" type="password" class="login-input" />
        <div class="login-button-container">
            <UButton @click="redirectToModesPage" class="login-button" style="width: auto;">Enter</UButton>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            name: null,
            email: null,
            password: null,
        }
    },
    methods: {
        redirectToModesPage() {
            // Redirige a la página modes.vue
            this.$router.push('/modes');
        }
    },
}
</script>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    /* Centra horizontalmente */
    align-items: center;
    /* Centra verticalmente */
    height: 100vh;
}

.login-form {
    width: 300px;
    padding: 20px;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    background-color: var(--bg-secondary);
}

.login-input {
    margin-bottom: 10px;
}

.input-label {
    margin-bottom: 5px;
    font-weight: bold;
    text-align: center;
    /* Centra el texto horizontalmente */
}

.login-button-container {
    text-align: center;
    /* Centra el botón horizontalmente */
}

.login-button {
    width: auto;
    /* Ajusta el ancho del botón al texto */
}
</style>

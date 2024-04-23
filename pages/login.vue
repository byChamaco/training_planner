<template>
    <div class="login-container">
        <UForm :validate="validate" :state="state" class="login-form" @submit="onSubmit">
            <UFormGroup label="Email" name="email">
                <UInput v-model="state.email" />
            </UFormGroup>

            <UFormGroup label="Password" name="password">
                <UInput v-model="state.password" type="password" />
            </UFormGroup>
            <div class="login-button-container">
                <UButton type="submit" class="login-button">
                    Submit
                </UButton>
            </div>
        </UForm>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            state: {
                email: undefined,
                password: undefined,
            }
        }
    },
    methods: {
        onSubmit(event) {
            // console.log(event);
        },
        validate() {
            const errors = []
            if (!this.state.email) errors.push({ path: 'email', message: 'Required' })
            if (!this.state.password) errors.push({ path: 'password', message: 'Required' })
            return errors
        },
        redirectToModesPage() {
            // Redirige a la página modes.vue
            this.$router.push('/modes');
        },

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
        height: 90vh;
    }

    .login-form {
        width: 300px;
        padding: 20px;
        border: 1px solid var(--border-color);
        border-radius: 5px;
        background-color: var(--bg-secondary);
    }

    .login-button-container {
        text-align: center;
        /* Centra el botón horizontalmente */
    }

    .login-button {
        width: auto;
        margin-top: 15px;
        /* Ajusta el ancho del botón al texto */
    }
</style>

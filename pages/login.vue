<template>
    <div class="login-container">
        <UForm :validate="validate" :state="state" class="login-form" @submit="onSubmit">
            <UAlert
                v-if="error"
                icon="i-heroicons-exclamation-triangle-16-solid"
                color="red"
                variant="solid"
                title="Error"
                description="Wrong password or email"
                :style="'margin-bottom: 15px;'"
                :close-button="{ icon: 'i-heroicons-x-mark-20-solid', color: 'gray', variant: 'link', padded: false}"
                @close="closeAlert"
            />
            <UFormGroup label="Email" name="email">
                <UInput v-model="state.email" type="email"/>
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
            },
            error: false,
        }
    },
    methods: {
        async onSubmit() {
            this.error = false;
            const response = await $fetch(
                '/api/user/search',
                { method: 'POST', body: { email: this.state.email, password: this.state.password }}
            );

            if (response && response.length > 0) {
                this.$router.push('/modes');
            } else {
                this.error = true;
            }
        },
        validate() {
            const errors = []
            if (!this.state.email) errors.push({ path: 'email', message: 'Required' })
            if (!this.state.password) errors.push({ path: 'password', message: 'Required' })
            return errors
        },
        closeAlert() {
            this.error = false;
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

<template>
    <div class="singin-container">
        <UForm :validate="validate" :state="state" class="singin-form" @submit="saveUser">
            <UAlert
                v-if="error"
                icon="i-heroicons-exclamation-triangle-16-solid"
                color="red"
                variant="solid"
                title="Error"
                description="This email is already in use"
                :style="'margin-bottom: 15px;'"
                :close-button="{ icon: 'i-heroicons-x-mark-20-solid', color: 'gray', variant: 'link', padded: false }"  
                @close="closeAlert"             
            />
            <UFormGroup label="Name" name="name">
                <UInput v-model="state.name"/>
            </UFormGroup>
            <UFormGroup label="Email" name="email">
                <UInput v-model="state.email" type="email"/>
            </UFormGroup>
            <UFormGroup label="Password" name="password">
                <UInput v-model="state.password" type="password"/>
            </UFormGroup>
            <UFormGroup label="Confirm your password" name="password2">
                <UInput v-model="state.password2" type="password"/>
            </UFormGroup>
            <div class="singin-button-container">
                <UButton type="submit" class="singin-button">
                    Continue
                </UButton>
            </div>
        </UForm>
    </div>
</template>
  
<script>
    export default {
        name: 'Signin',
        data() {
            return {
                state: {
                    name: undefined,
                    email: undefined,
                    password: undefined,
                    password2: undefined,
                },
                error: false,
            }
        },
        methods: {
            async saveUser() {
                // console.log(this.name, this.email, this.password)
                const response = await $fetch(
                    '/api/user/search_email',
                    { method: 'POST', body: { email: this.state.email}}
                );

                if (response == true) {
                    const user = await $fetch(
                        '/api/user/create',
                        { method: 'POST', body: { user: this.state}}
                    );
                    this.$router.push('/modes');
                } else {
                    this.error = true;
                }
            },
            validate() {
                const errors = []
                if (!this.state.name) errors.push({ path: 'name', message: 'Required' })
                if (!this.state.email) errors.push({ path: 'email', message: 'Required' })
                if (!this.state.password) errors.push({ path: 'password', message: 'Required' })
                if (!this.state.password2) errors.push({ path: 'password2', message: 'Required' })
                if (this.state.password2 != this.state.password) errors.push({ path: 'password2', message: 'The password dont match' })
                return errors
            },
            closeAlert() {
                this.error = false;
            }
        },
    }
</script>
  
<style scoped>
    .singin-container {
        display: flex;
        justify-content: center;
        /* Centra horizontalmente */
        align-items: center;
        /* Centra verticalmente */
        height: 90vh;
    }

    .singin-form {
        width: 300px;
        padding: 20px;
        border: 1px solid var(--border-color);
        border-radius: 5px;
        background-color: var(--bg-secondary);
    }

    .singin-button-container {
        text-align: center;
        /* Centra el botón horizontalmente */
    }

    .singin-button {
        width: auto;
        margin-top: 15px;
        /* Ajusta el ancho del botón al texto */
    }
</style>
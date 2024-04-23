<template>
    <UInput v-model="name" placeholder="Name"/>
    <UInput v-model="email" placeholder="Email"/>
    <UInput v-model="password" placeholder="Password"/>
    <UInput v-model="password" placeholder="Password"/>
    <UButton @click="saveUser">signin</UButton>
</template>
  
<script>
    export default {
        name: 'Signin',
        data() {
            return {
                name: null,
                email: null,
                password: null,
            }
        },
        created() {
            this.getUsers();
        },
        methods: {
            async getUsers() {
                // console.log(this.name, this.email, this.password)
                const response = await $fetch('/api/users', {
                    method: 'POST'
                })
                // useColorMode().preference = response.data[0].mode_theme;
                // console.log(response.data);
            },
            saveUser() {

            }
        },
    }
</script>
  
<style>

</style>
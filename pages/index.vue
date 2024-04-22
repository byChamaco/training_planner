<template>
    <UInput v-model="name" placeholder="Name"/>
    <UInput v-model="email" placeholder="Email"/>
    <UInput v-model="password" placeholder="Password"/>
    <UButton @click="saveUser">Save</UButton>
</template>
  
<script>
    export default {
        name: 'Index',
        data() {
            return {
                name: null,
                email: null,
                password: null,
                // mode_theme: 'dark',
            }
        },
        created() {
            // this.getUsers();
        },
        methods: {
            // async getUsers() {
            //     // console.log(this.name, this.email, this.password)
            //     const response = await $fetch('/api/users', {
            //         method: 'POST'
            //     })
            //     // useColorMode().preference = response.data[0].mode_theme;
            //     console.log(response.data);
            // },
            saveUser() {

            }
        },
    }
</script>
  
  <style scoped>
  .welcome-container {
    text-align: center;
    margin-top: 50px;
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
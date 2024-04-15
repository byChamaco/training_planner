<template>
    <div>
        <h1>{{number}}</h1>
        <button @click="sumar">Sumar</button>
    </div>
</template>
  
<script>
    export default {
        name: 'Index',
        data() {
            return {
                number: 0,
            }
        },
        methods: {
            sumar() {
                this.number++;
            }
        },
    }
</script>
  
<style>
  
</style>
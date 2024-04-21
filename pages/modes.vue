<template>
    <div>
      <h1>Select Mode</h1>
      <ul>
        <li v-for="(mode, index) in modes" :key="index">
          <UButton @click="selectMode(mode)">{{ mode }}</UButton>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import UButton from '~/components/Button.vue'
  
  export default {
    name: 'Modes',
    components: {
      UButton
    },
    data() {
      return {
        modes: ['Mode 1', 'Mode 2', 'Mode 3', 'Mode 4']
      }
    },
    methods: {
      selectMode(mode) {
        // Aquí puedes implementar la lógica para seleccionar el modo
        console.log("Selected mode:", mode);
        // Por ejemplo, podrías guardar el modo seleccionado en el estado de tu aplicación o realizar otras acciones necesarias.
      }
    }
  }
  </script>
  
  <style>
  /* Estilos opcionales aquí */
  </style>
  
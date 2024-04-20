<template>
    <div class="app_header personal_button">
        <h1 class="header-title">Trainig Planner</h1>
        <UIcon class="header-icon" :name="icon_name" dynamic size="3rem" @click="selectMode"/>
    </div>
</template>
  
<script>
    export default {
      name: 'Header',
      data() {
        return {
          selected: false,
          icon_name: useColorMode().preference  ? 'i-mingcute-sun-fill' : 'i-mingcute-moon-stars-fill',
        }
      },
      methods: {
        selectMode() {
          useColorMode().preference = useColorMode().preference == 'dark' ? 'light' : 'dark';
          this.icon_name = useColorMode().preference == 'dark' ? 'i-mingcute-sun-fill' : 'i-mingcute-moon-stars-fill';
        }
      },
    }
</script>
  
<style>
  .app_header {
    width: 100%;
    height: 4rem;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .header-icon {
    margin-left: auto;
  }

  .header-title {
    margin-left: auto;
  }
</style>
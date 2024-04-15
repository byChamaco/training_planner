<template>
    <div class="card">
        <img src="/public/favicon.ico" alt="Avatar" style="width:100%">
        <div class="container">
            <h4><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
        </div>
    </div>
</template>
  
<script>
    export default {
        name: 'Card',
        data() {
            return {
            }
        },
    }
</script>
  
<style>
    .card {
        width: 10%;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: 5px; /* 5px rounded corners */
    }
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    img {
        border-radius: 5px 5px 0 0;
    }
</style>
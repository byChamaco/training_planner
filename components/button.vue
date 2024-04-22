<template>
<button :class="['btn', type]">
    <slot></slot>
</button>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'primary' // Default button type is primary
        }
    }
}
</script>

<style scoped>
.btn {
    /* Define your button styles here */
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.primary {
    background-color: #007bff;
    color: #fff;
}

.secondary {
    background-color: #6c757d;
    color: #fff;
}

/* Add more button types and styles as needed */
</style>

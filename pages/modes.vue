<template>
<div class="modes-container">
    <ul class="modes-list">
        <li v-for="(mode, index) in modes" :key="index" class="mode-item">
            <UButton @mouseover="showDescriptionPopup(mode)" @mouseleave="hideDescriptionPopup" class="mode-button">
                {{ mode }}
            </UButton>
            <p v-if="showPopup && mode === currentMode" class="mode-popup">{{ modeDescriptions[mode] }}</p>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'Modes',
    data() {
        return {
            modes: [
                'Cardio Blast',
                'Power Pump',
                'Flex & Balance',
                'HIIT Fusion'
            ],
            modeDescriptions: {
                'Cardio Blast': 'Mejora la resistencia cardiovascular y la quema de calorías.',
                'Power Pump': 'Prioriza el desarrollo de la fuerza y la musculatura.',
                'Flex & Balance': 'Mejora la flexibilidad y el equilibrio.',
                'HIIT Fusion': 'Ejercicios de alta intensidad con periodos de descanso.'
            },
            showPopup: false,
            currentMode: null
        }
    },
    methods: {
        showDescriptionPopup(mode) {
            this.showPopup = true;
            this.currentMode = mode;
        },
        hideDescriptionPopup() {
            this.showPopup = false;
            this.currentMode = null;
        }
    }
}
</script>

<style scoped>
.modes-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.modes-list {
    list-style-type: none;
    padding: 0;
}

.mode-item {
    margin-bottom: 30px;
    text-align: center;
}

.mode-button {
    cursor: pointer;
    font-size: 24px;
    padding: 20px 40px;
}

.mode-popup {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--bg-secondary);
    border: 1px solid var(--border-color);
    color: var(--color);
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 999;
    text-align: left;
}
</style>

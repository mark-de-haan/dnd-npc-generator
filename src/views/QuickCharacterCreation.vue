<template>
    <div class="qcc-container">
        <Dropdown v-model="selectedRace" :options="races" optionLabel="Race" placeholder="Select a Race"/>
    </div>
</template>

<script lang="ts">
    import {defineComponent, ref} from 'vue'

    export default defineComponent({
        name: 'QuickCharacterCreation',
        setup() {
            const selectedRace = ref("");
            const races = ["humans"];
            return {
                selectedRace
            }
        }
    })
</script>
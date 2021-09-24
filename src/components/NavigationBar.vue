<template>
    <nav role="navigation">
        <Menu :model="items"/>
    </nav>
</template>

<style>
    nav {
        height: 5vh
    }
</style>

<script lang="ts">
    import {defineComponent, ref} from 'vue'

    export default defineComponent({
        name: 'NavigationBar',
        setup() {
            const items = ref([
                {
                    label: 'Navigate'
                },
            ]);

            return {items}
        }
    })
</script>
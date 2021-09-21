<template>
    <div id="app-container">
        <div class="grid">

            <div class="col-6">
                <div class="grid">
                    <div class="col">
                        <Button label="Get complete NPC" @click="getNpc()"/>
                        <Button label="Get Storyhook" @click="getStoryhook()"/>
                    </div>
                </div>
            </div>

            <div class="col">
                <CharacterCard v-if="!!npc.nameObject" :npc="npc" :storyhook="storyhook" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent, ref} from 'vue';
    import {useStore} from 'vuex';
    import CharacterCard from './components/CharacterCard.vue'


    export default defineComponent({
        name: 'App',
        components: {
            CharacterCard
        },
        setup() {
            const store = useStore();

            const npc = ref({});
            const name = ref({});
            const storyhook = ref({});

            const getCharacterName = async () => {
                name.value = await store.dispatch("getCharacterNameAction", {race: "dwarf", gender: "female"})
            };

            const getNpc = async () => {
                npc.value = await store.dispatch("getNpcAction", {race: "elf", gender: "male"});
            };

            const getStoryhook = async () => {
                storyhook.value = await store.dispatch("getCharacterStoryHookAction");
            };

            return {name, npc, storyhook, getCharacterName, getNpc, getStoryhook}
        }
    });
</script>

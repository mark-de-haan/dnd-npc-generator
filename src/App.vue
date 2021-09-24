<template>
    <div id="app-container">

<!--        <NavigationBar />-->

        <div id="banner" />

        <main role="main">
            <div class="grid-nogutter">
                <div class="col-8 col-offset-4">
                    <router-view />
                </div>
            </div>
        </main>

        <footer role="doc-footnote">

        </footer>
    </div>
</template>

<style>

    body {
        margin: 0
    }

    main {
        height: 70vh;

    }

    #banner {
        background-repeat: no-repeat;
        height: 30vh;
        width: 100vw;
        mix-blend-mode: multiply;
        background-image: url("./assets/banner.jpg");
        background-position: center;
        background-size: cover;
    }

    #app-container {
        background-color: #fffef0;
        background-image: url("https://www.transparenttextures.com/patterns/exclusive-paper.png");
    }
</style>

<script lang="ts">
    import {defineComponent, ref} from 'vue';
    import {useStore} from 'vuex';

    export default defineComponent({
        name: 'App',
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

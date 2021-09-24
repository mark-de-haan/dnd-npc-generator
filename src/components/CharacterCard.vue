<template>
    <div class="character-card">
        <div class="character-image">
            <img src="../assets/noble/dwarf_female_1.png" alt="Image" width="250"/>
        </div>

        <div class="text-center">
            <p>{{npc.nameObject.name}}</p>
            <p>{{storyhook.storyhook}}</p>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'CharacterCard',
        props: ['npc', 'storyhook']

    });
</script>

<style>
    .character-image {
        text-align: center;
        vertical-align: middle
        mix-blend-mode: multiply;
    }

    .character-card {
        border: 12px double rgba(97,84,56,0.35);
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        padding: 25px 25px 20px 25px !important;
        margin: 20px;
        width: 50%
        /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
    }

    .character-card div {
        display: table;
        height: 90px !important;
        width: 100%;
    }

    .character-card p:first-child {
        display: table-cell;
        font-weight: bold;
        font-size: 22px !important;
        text-transform: uppercase;
        text-align: center;
        vertical-align: middle;
    }

    .character-card p:nth-child(n+1) {
        line-height: 1.4 !important;
        font-size: 14px;
        display: block;
    }
</style>
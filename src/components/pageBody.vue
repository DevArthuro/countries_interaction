<template>
    <div v-for="countrie in props.countries" class="inline-block border border-gray-300 rounded p-3">
        <cardCountrie :capital="countrie.capital" :name="countrie.name.official" :img ="countrie.flags.png" :altImg="countrie.flags.alt" :poblation="countrie.population" :region="countrie.region"/>
    </div>
</template>

<script setup>
import { defineProps, provide, ref } from 'vue';
import cardCountrie from './card.vue'

const props = defineProps({
    countries: {
        type: Array(),
        required: true,
        default: []
    }
})



</script>

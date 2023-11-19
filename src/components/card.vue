<template>
    <div class="h-56 sm:h-36">
        <img :src="img" :alt="altImg" class="h-56 sm:h-36"> 
    </div>
    <h4 class="text-xl font-bold text-gray-500">{{ props.name }}</h4>
    <p class="text-sm text-gray-400">Capital: 
        <span v-for="capital in props.capital" class="font-bold"> {{ capital }} <template> </template></span>
    </p>
    <p class="text-sm text-gray-400">Population: 
        <span class="font-bold"> {{ props.poblation?.toLocaleString() }} </span>
    </p>
    <p class="text-sm text-gray-400">Region: 
        <span class="font-bold"> {{ props.region }} </span>
    </p>
</template>

<script setup> 
import { defineProps } from 'vue';

const props = defineProps({
    name: {
        type: String,
        required: true,
        default: "N/A"
    },
    img: {
        type: String,
        required: true,
        default: "N/A"
    },
    altImg: {
        type: String,
        required: true,
        default: "N/A"
    },
    poblation: {
        type: String,
        required: true,
        default: "N/A"
    },
    region: {
        type: String,
        required: true,
        default: "N/A"
    },
    capital: {
        type: Array(),
        required: true,
        default: "N/A"
    }
})
</script>
<template>
    <input 
    type="text" 
    class="border border-gray-300 rounded w-full p-1 px-4"
    placeholder="Search country"
    v-model="countrie"
    @input="emits('writing')"
    >
</template>

<script setup>
import { inject, defineEmits } from 'vue'

const countrie = inject("search")

const emits = defineEmits(["writing"])

</script>
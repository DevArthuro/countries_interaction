
<template>
  <pageHeader/>
  <div class="container max-w-screen-lg mx-auto px-6">
        <div class="mb-8">
            <inputFilter @writing="writing()"/>
        </div>
  </div>
  <div class="mb-8 flex justify-center space-x-6">
    <button 
    :disabled="page <= 1" 
    :class="{'opacity-50': page <= 1 }" 
    @click="changePage(page - 1)" 
    class="border border-gray-300 rounded px-2 py-0.5 hover:bg-gray-200">Previous</button>
    <button 
    :disabled="page >= (totalItems / itemsPerPage)" 
    :class="{'opacity-50': page >= (totalItems / itemsPerPage) }" 
    @click="changePage(page + 1)" 
    class="border border-gray-300 rounded px-2 py-0.5 hover:bg-gray-200">next</button>
  </div>
  <div class="container max-w-screen-lg mx-auto px-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      <pageBody :countries = "countriesInstance.getCountriesToPage"/>
    </div>
  </div>
  
  
</template>

<script setup>
import pageHeader from './components/pageheader.vue';
import inputFilter from './components/inputFilter.vue';
import pageBody from './components/pageBody.vue';
import { countriesStore } from './store/countriesStore'
import { ref, provide} from 'vue';

import { onMounted } from 'vue';

const countriesInstance = countriesStore();

const page = ref(1)
const itemsPerPage = ref(12)
const paginatedCountries = ref([])
const totalItems = ref(countriesInstance.getAllCountries.length)


onMounted(async () => {
    await countriesInstance.allCountries
    sliceCountries()
})


const writing = () => {
    store.setValueCountries(searching.value.toLocaleLowerCase())
}

const sliceCountries = () => {
  const start = (page.value - 1) * itemsPerPage.value;
  const end = page.value * itemsPerPage.value;
  paginatedCountries.value = countriesInstance.getAllCountries.slice(start, end);
  countriesInstance.setCountriesPage(paginatedCountries.value)
}

const store = countriesStore()

const searching = ref("")

provide("search", searching)

const changePage = (newPage) => {
  page.value = newPage
  sliceCountries()
}

</script>



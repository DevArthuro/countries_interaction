import {defineStore} from 'pinia'
import instance from '../utils/axios'

export const countriesStore = defineStore('countriesApi', ({
    state: () => ({
        countries: [],
        countriesCopy: [],
        countriesToPage: []
    }),
    getters: {
        allCountries: async (state) => {
            try {
                const { data } = await instance.get('/all');
                state.countries = await data
                state.countriesCopy = await data
            } catch(error)
            {
                console.error(error)
            }
            
        },

        getCountries: (state) => {
            return state.countries;
        },

        getCountriesToPage: (state) => {
            return state.countriesToPage;
        },

        getAllCountries: (state) => {
            return state.countriesCopy
        }
    },
    actions: {
        setValueCountries(filter){
            this.countriesToPage = this.countries;
            this.countriesToPage = this.countriesToPage.filter(countrie => {
                return countrie.name.common.toLowerCase().includes(filter);
            })
        },

        setCountriesPage(pageCurrent) {
            this.countries = pageCurrent
            this.countriesToPage = pageCurrent
        }

    }
}))
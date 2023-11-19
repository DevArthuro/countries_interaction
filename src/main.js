import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createPinia } from 'pinia'
import persistence from 'pinia-plugin-persistence'


const pinia = createPinia();
pinia.use(persistence);

const app = createApp(App);

app.use(pinia);

app.mount('#app');

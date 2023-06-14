import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { CoDelete } from 'oh-vue-icons/icons'
addIcons(CoDelete)

const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.mount('#app')

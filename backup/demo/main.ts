import { createApp } from 'vue'
import { PEModalPlugin } from '../src/plugin'
import App from './App.vue'

const app = createApp(App)
app.use(PEModalPlugin)
app.mount('#app')

import { createApp } from 'vue'
import { PEModalPlugin } from './plugin'
import App from './App.vue'

const app = createApp(App)
app.use(PEModalPlugin)
app.mount('#app')

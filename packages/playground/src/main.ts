import { createApp } from 'vue'
import { PEModalPlugin } from "@pe/vue-component-modal/src/main";
import App from './App.vue'

const app = createApp(App)
app.use(PEModalPlugin)

app.mount('#app')

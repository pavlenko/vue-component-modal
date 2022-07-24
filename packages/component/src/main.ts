import type { Plugin } from 'vue'
import { PEModal } from './components';

export const PEModalPlugin: Plugin = {
    install(app) {
        app.component('PEModal', PEModal);

        app.config.globalProperties.$modal = {
            show() { alert('AAA') }
        }
    },
}

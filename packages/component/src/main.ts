import type {Plugin} from 'vue'
import PEModal from './components/PEModal.vue';

export interface PEModalManager {
    show: (name: any) => void;
}

export const PEModalPlugin: Plugin = {
    install(app) {
        app.component('PEModal', PEModal);

        app.config.globalProperties.$modal = {
            show: function (name: any) {
                alert('AAA');
            }
        }
    },
}

export { PEModal }

/**
 * You must declare all here for proper IDE navigation
 */
declare module "@vue/runtime-core" {
    //Bind to `this` keyword
    interface ComponentCustomProperties {
        $modal: PEModalManager;
    }

    interface GlobalComponents {
        PEModal: typeof PEModal,
    }
}

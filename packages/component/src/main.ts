import type {Plugin} from 'vue'
import PEModal from './components/PEModal.vue';
import PEModalContainer from './components/PEModalContainer.vue';

export interface PEModalManager {
    show: (name: any) => void;
}

export const PEModalPlugin: Plugin = {
    install(app) {
        app.component('PEModal', PEModal);
        app.component('PEModalContainer', PEModalContainer);

        app.config.globalProperties.$modal = {
            show: function (name: any) {
                alert('AAA');
            }
        }
    },
}

export { PEModal, PEModalContainer }

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
        PEModalContainer: typeof PEModalContainer,
    }
}

import type {Plugin} from 'vue'
import {Component, shallowReactive} from "vue";
import PEModal from './components/PEModal.vue';
import PEModalContainer from './components/PEModalContainer.vue';

export interface PEModalConfig {
    id?: string,
    component?: string | Component,
    props?: { [key: string]: any },
    attrs?: { [key: string]: any },
    listen?: { [key: string]: Function | Function[] }
}

export interface PEModalConfig {
    slots?: { [key: string]: PEModalConfig }
}

class PEModalManager {
    modals: PEModalConfig[] = shallowReactive([])
    show(modal: string | PEModalConfig): void {
        if (typeof modal === 'string') {
            modal = {component: modal};
        }
        modal.id = 'id' + (new Date()).getTime();
        this.modals.push(modal);
    }
    hide(modal: string) {
        this.modals.splice(
            this.modals.findIndex(config => config.id === modal),
            1
        );
    }
}

export const PEModalPlugin: Plugin = {
    install(app) {
        app.component('PEModal', PEModal);
        app.component('PEModalContainer', PEModalContainer);

        app.config.globalProperties.$modal = new PEModalManager();
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

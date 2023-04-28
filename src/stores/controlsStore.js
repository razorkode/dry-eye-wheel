import { defineStore } from 'pinia';

export const useControlsStore = defineStore('controls', {
    state: () => {
        return {
            merp: 'derp',
        };
    },
});

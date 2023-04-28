import { defineStore } from 'pinia';

export const useControlsStore = defineStore('controls', {
    state: () => {
        return {
            selectedArea: 'mitigation',
            selectedSection: null,
            sliderValue: 0,
        };
    },
    getters: {
        selectedArea(state) {
            if (state.sliderValue === 0) {
                return 'mitigation';
            }
            if (state.sliderValue === 50) {
                return 'measurement';
            }
            if (state.sliderValue === 100) {
                return 'management';
            }
        },
    },
});

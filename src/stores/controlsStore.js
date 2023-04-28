import { defineStore } from 'pinia';

export const useControlsStore = defineStore('controls', {
    state: () => {
        return {
            defaultState: true,
            selectedSection: null,
            selectedItem: null,
            sliderValue: 0,
        };
    },
    actions: {
        reset() {
            this.selectedSection = null;
            this.selectedItem = null;
            this.sliderValue = 0;
        },
        selectArea(area, skipReset) {
            this.defaultState = false;
            if (!skipReset) {
                this.reset();
            }
            if (area === 'mitigation') {
                this.sliderValue = 0;
            }
            if (area === 'measurement') {
                this.sliderValue = 50;
            }
            if (area === 'management') {
                this.sliderValue = 100;
            }
        },
        selectSection(section, area, skipReset) {
            this.defaultState = false;
            if (!skipReset) {
                this.reset();
            }
            this.selectedSection = section;
            this.selectArea(area, true);
        },
        selectItem(item, section, area, skipReset) {
            this.defaultState = false;
            if (!skipReset) {
                this.reset();
            }
            this.selectedItem = item;
            this.selectSection(section, area, true);
        },
    },
    getters: {
        computedDefaultState(state) {
            if (state.sliderValue !== 0) {
                state.defaultState = false;
                return false;
            }

            return state.defaultState;
        },
        selectedArea(state) {
            if (this.computedDefaultState) {
                return null;
            }
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

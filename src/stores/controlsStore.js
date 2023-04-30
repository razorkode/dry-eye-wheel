import { defineStore } from 'pinia';
import { nextTick } from 'vue';

export const useControlsStore = defineStore('controls', {
    state: () => {
        return {
            defaultStateInit: true,
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
            this.defaultStateInit = false;
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
            this.defaultStateInit = false;
            if (!skipReset) {
                this.reset();
            }
            this.selectedSection = section;
            this.selectArea(area, true);
        },
        selectItem(item, section, area, skipReset) {
            this.defaultStateInit = false;
            if (!skipReset) {
                this.reset();
            }
            this.selectedItem = item;
            this.selectSection(section, area, true);
        },
        async handleDefaultStateClick() {
            if (this.defaultState) {
                this.sliderValue = 50;
                await nextTick();
                this.sliderValue = 0;
            }
        },
    },
    getters: {
        defaultState(state) {
            if (state.sliderValue !== 0) {
                state.defaultStateInit = false;
                return false;
            }

            return state.defaultStateInit;
        },
        selectedArea(state) {
            if (this.defaultState) {
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

        // Area Classes
        mitigationAreaClasses(state) {
            let classes = '';
            if (state.selectedArea === 'mitigation') {
                return 'active';
            }
            return classes;
        },
        measurementAreaClasses(state) {
            let classes = '';
            if (state.selectedArea === 'measurement') {
                return 'active';
            }
            return classes;
        },
        managementAreaClasses(state) {
            let classes = '';
            if (state.selectedArea === 'management') {
                classes = 'active';
            }
            if (state.selectedArea === 'mitigation' || state.selectedArea === 'measurement') {
                classes = `${classes} grayscale`;
            }
            return classes;
        },

        // Mitigation: Section Classes
        triagingSectionClasses(state) {
            let classes = '';
            if (state.selectedArea === 'mitigation' && state.selectedSection === 'risk-factors') {
                classes = 'grayscale';
            }
            if (!state.defaultState && state.selectedArea !== 'mitigation') {
                classes = 'grayscale';
            }
            return classes;
        },
        riskFactorsSectionClasses(state) {
            let classes = '';
            if (state.selectedArea === 'mitigation' && state.selectedSection === 'triaging') {
                classes = 'grayscale';
            }
            if (!state.defaultState && state.selectedArea !== 'mitigation') {
                classes = 'grayscale';
            }
            return classes;
        },
        // Measurement: Section Classes
        diagnosisSectionClasses(state) {
            let classes = '';
            if (state.selectedArea === 'measurement' && state.selectedSection === 'sub-classification') {
                classes = 'grayscale';
            }
            if (!state.defaultState && state.selectedArea !== 'measurement') {
                classes = 'grayscale';
            }
            return classes;
        },
        subClassificationSectionClasses(state) {
            let classes = '';
            if (state.selectedArea === 'measurement' && state.selectedSection === 'diagnosis') {
                classes = 'grayscale';
            }
            if (!state.defaultState && state.selectedArea !== 'measurement') {
                classes = 'grayscale';
            }
            return classes;
        },
    },
});

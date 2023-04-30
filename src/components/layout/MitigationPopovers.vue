<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';
import MitigationPopover from '@/components/wheel/popovers/MitigationPopover.vue';
import QuestionnaireForEarlyId from '@/components/wheel/popovers/mitigation/QuestionnaireForEarlyId.vue';
import DifferentialDiagnosis from '@/components/wheel/popovers/mitigation/DifferentialDiagnosis.vue';

const controlsStore = useControlsStore();
</script>

<template>
    <MitigationPopover
        v-if="
            controlsStore.selectedArea === 'mitigation' && !controlsStore.selectedSection && !controlsStore.selectedItem
        " />

    <!-- Section Popovers -->
    <QuestionnaireForEarlyId v-if="controlsStore.selectedItem === 'questionnaire'" />
    <DifferentialDiagnosis v-if="controlsStore.selectedItem === 'differential'" />
</template>

<style lang="postcss" scoped></style>

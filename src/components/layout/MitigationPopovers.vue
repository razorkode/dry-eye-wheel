<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';
import MitigationPopover from '@/components/wheel/popovers/MitigationPopover.vue';
import QuestionnaireForEarlyIdPopover from '@/components/wheel/popovers/mitigation/QuestionnaireForEarlyIdPopover.vue';
import DifferentialDiagnosisPopover from '@/components/wheel/popovers/mitigation/DifferentialDiagnosisPopover.vue';
import ProphylaxisPopover from '@/components/wheel/popovers/mitigation/ProphylaxisPopover.vue';
import SleepPopover from '@/components/wheel/popovers/mitigation/SleepPopover.vue';
import ContactLensesPopover from '@/components/wheel/popovers/mitigation/ContactLensesPopover.vue';
import EyeStrainPopover from '@/components/wheel/popovers/mitigation/EyeStrainPopover.vue';
import EnvironmentPopover from '@/components/wheel/popovers/mitigation/EnvironmentPopover.vue';
import HormonesPopover from '@/components/wheel/popovers/mitigation/HormonesPopover.vue';
import MedicationReviewPopover from '@/components/wheel/popovers/mitigation/MedicationReviewPopover.vue';

const controlsStore = useControlsStore();
</script>

<template>
    <MitigationPopover
        v-if="
            controlsStore.selectedArea === 'mitigation' && !controlsStore.selectedSection && !controlsStore.selectedItem
        " />

    <!-- Section Popovers -->
    <QuestionnaireForEarlyIdPopover v-if="controlsStore.selectedItem === 'questionnaire'" />
    <DifferentialDiagnosisPopover v-if="controlsStore.selectedItem === 'differential'" />
    <ProphylaxisPopover v-if="controlsStore.selectedItem === 'prophylaxis'" />
    <SleepPopover v-if="controlsStore.selectedItem === 'sleep'" />
    <ContactLensesPopover v-if="controlsStore.selectedItem === 'contact-lens'" />
    <EyeStrainPopover v-if="controlsStore.selectedItem === 'eye-strain'" />
    <EnvironmentPopover v-if="controlsStore.selectedItem === 'environment'" />
    <HormonesPopover v-if="controlsStore.selectedItem === 'hormones'" />
    <MedicationReviewPopover v-if="controlsStore.selectedItem === 'medication-review'" />
</template>

<style lang="postcss" scoped></style>

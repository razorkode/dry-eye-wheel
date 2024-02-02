<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';
import ManagementPopover from '@/components/wheel/popovers/ManagementPopover.vue';
import LidHygienePopover from '@/components/wheel/popovers/management/LidHygienePopover.vue';
import WarmCompressPopover from '@/components/wheel/popovers/management/WarmCompressPopover.vue';
import BlinkExercisesPopover from '@/components/wheel/popovers/management/BlinkExercisesPopover.vue';
import AdvicePopover from '@/components/wheel/popovers/management/AdvicePopover.vue';
import ArtificialTearsPopover from '@/components/wheel/popovers/management/ArtificialTearsPopover.vue';
import LightTherapyPopover from '@/components/wheel/popovers/management/LightTherapyPopover.vue';
import DietAndDietarySupplementsPopover from '@/components/wheel/popovers/management/DietAndDietarySupplementsPopover.vue';
import PharmaceuticalsPopover from '@/components/wheel/popovers/management/PharmaceuticalsPopover.vue';
import ScleralLensesPopover from '@/components/wheel/popovers/management/ScleralLensesPopover.vue';
import PunctalPlugsPopover from '@/components/wheel/popovers/management/PunctalPlugsPopover.vue';
import ComplexTreatmentsPopover from '@/components/wheel/popovers/management/ComplexTreatmentsPopover.vue';

const controlsStore = useControlsStore();
</script>

<template>
    <ManagementPopover
        v-if="
            controlsStore.selectedArea === 'management' && !controlsStore.selectedSection && !controlsStore.selectedItem
        " />

    <!-- Management Section Popovers -->
    <LidHygienePopover v-if="controlsStore.selectedItem === 'lid-hygiene'" />
    <WarmCompressPopover v-if="controlsStore.selectedItem === 'warm-compress'" />
    <BlinkExercisesPopover v-if="controlsStore.selectedItem === 'blink-exercises'" />
    <AdvicePopover v-if="controlsStore.selectedItem === 'advice'" />
    <DietAndDietarySupplementsPopover v-if="controlsStore.selectedItem === 'diet-and-dietary-supplements'" />
    <ArtificialTearsPopover v-if="controlsStore.selectedItem === 'artificial-tears'" />
    <LightTherapyPopover v-if="controlsStore.selectedItem === 'in-office-treatments'" />
    <PharmaceuticalsPopover v-if="controlsStore.selectedItem === 'pharmaceuticals'" />
    <ScleralLensesPopover v-if="controlsStore.selectedItem === 'scleral-lenses'" />
    <PunctalPlugsPopover v-if="controlsStore.selectedItem === 'punctal-plugs'" />
    <ComplexTreatmentsPopover v-if="controlsStore.selectedItem === 'complex-treatments'" />
</template>

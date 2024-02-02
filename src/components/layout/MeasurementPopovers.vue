<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';
import MeasurementPopover from '@/components/wheel/popovers/MeasurementPopover.vue';
import ComfortAfterBlinkTestPopover from '@/components/wheel/popovers/measurement/ComfortAfterBlinkTestPopover.vue';
import ValidatedQuestionnairePopover from '@/components/wheel/popovers/measurement/ValidatedQuestionnairePopover.vue';
import FluoresceinStainingPopover from '@/components/wheel/popovers/measurement/FluoresceinStainingPopover.vue';
import NonInvasiveBreakupTimePopover from '@/components/wheel/popovers/measurement/NonInvasiveBreakupTimePopover.vue';
import OsmolarityPopover from '@/components/wheel/popovers/measurement/OsmolarityPopover.vue';
import LissamineGreenStainingPopover from '@/components/wheel/popovers/measurement/LissamineGreenStainingPopover.vue';
import BlinkRateCompletenessPopover from '@/components/wheel/popovers/measurement/BlinkRateCompletenessPopover.vue';
import TearMeniscusHeightPopover from '@/components/wheel/popovers/measurement/TearMeniscusHeightPopover.vue';
import MeibomianGlandExpressionPopover from '@/components/wheel/popovers/measurement/MeibomianGlandExpressionPopover.vue';
import MeibographyPopover from '@/components/wheel/popovers/measurement/MeibographyPopover.vue';

const controlsStore = useControlsStore();
</script>

<template>
    <MeasurementPopover
        v-if="
            controlsStore.selectedArea === 'measurement' &&
            !controlsStore.selectedSection &&
            !controlsStore.selectedItem
        " />

    <!-- Section Popovers -->
    <ComfortAfterBlinkTestPopover v-if="controlsStore.selectedItem === 'comfort-time-after-blink-test'" />
    <ValidatedQuestionnairePopover v-if="controlsStore.selectedItem === 'validated-questionnaire'" />
    <FluoresceinStainingPopover v-if="controlsStore.selectedItem === 'fluorescein-staining'" />
    <NonInvasiveBreakupTimePopover v-if="controlsStore.selectedItem === 'non-invasive-breakup-time'" />
    <OsmolarityPopover v-if="controlsStore.selectedItem === 'osmolarity'" />
    <LissamineGreenStainingPopover v-if="controlsStore.selectedItem === 'lissamine-green-staining'" />
    <BlinkRateCompletenessPopover v-if="controlsStore.selectedItem === 'blink-rate-and-completeness'" />
    <TearMeniscusHeightPopover v-if="controlsStore.selectedItem === 'tear-meniscus-height'" />
    <MeibomianGlandExpressionPopover v-if="controlsStore.selectedItem === 'meibomian-gland-expression'" />
    <MeibographyPopover v-if="controlsStore.selectedItem === 'meibography'" />
</template>

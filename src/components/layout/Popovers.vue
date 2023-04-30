<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';
import MitigationPopover from '@/components/wheel/popovers/MitigationPopover.vue';
import ManagementPopover from '@/components/wheel/popovers/ManagementPopover.vue';
import MeasurementPopover from '@/components/wheel/popovers/MeasurementPopover.vue';

const controlsStore = useControlsStore();
</script>

<template>
    <MitigationPopover
        v-if="
            controlsStore.selectedArea === 'mitigation' && !controlsStore.selectedSection && !controlsStore.selectedItem
        " />
    <ManagementPopover
        v-if="
            controlsStore.selectedArea === 'management' && !controlsStore.selectedSection && !controlsStore.selectedItem
        " />
    <MeasurementPopover
        v-if="
            controlsStore.selectedArea === 'measurement' &&
            !controlsStore.selectedSection &&
            !controlsStore.selectedItem
        " />
</template>

<style lang="postcss" scoped></style>

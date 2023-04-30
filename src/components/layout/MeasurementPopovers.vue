<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';
import MeasurementPopover from '@/components/wheel/popovers/MeasurementPopover.vue';

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
</template>

<style lang="postcss" scoped></style>

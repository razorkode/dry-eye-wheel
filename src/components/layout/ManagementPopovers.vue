<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';
import ManagementPopover from '@/components/wheel/popovers/ManagementPopover.vue';

const controlsStore = useControlsStore();
</script>

<template>
    <ManagementPopover
        v-if="
            controlsStore.selectedArea === 'management' && !controlsStore.selectedSection && !controlsStore.selectedItem
        " />

    <!-- Management Section Popovers -->
</template>

<style lang="postcss" scoped></style>

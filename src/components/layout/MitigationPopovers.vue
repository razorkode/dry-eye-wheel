<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';
import MitigationPopover from '@/components/wheel/popovers/MitigationPopover.vue';

const controlsStore = useControlsStore();
</script>

<template>
    <MitigationPopover
        v-if="
            controlsStore.selectedArea === 'mitigation' && !controlsStore.selectedSection && !controlsStore.selectedItem
        " />

    <!-- Section Popovers -->
</template>

<style lang="postcss" scoped></style>

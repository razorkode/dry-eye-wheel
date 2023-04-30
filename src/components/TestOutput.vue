<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';
const controlsStore = useControlsStore();
</script>

<template>
    <div
        class="absolute right-2 top-1 rounded-lg bg-slate-950 bg-opacity-60 px-5 py-3 font-mono text-sm leading-5 text-white">
        <table>
            <tr>
                <td class="pr-2 text-gray-300">Default State</td>
                <td>{{ !!controlsStore.defaultState }}</td>
            </tr>
            <tr>
                <td class="pr-2 text-gray-300">Slider</td>
                <td>{{ controlsStore.sliderValue }}</td>
            </tr>
            <tr>
                <td class="pr-2 text-gray-300">Area</td>
                <td>{{ controlsStore.selectedArea }}</td>
            </tr>
            <tr>
                <td class="pr-2 text-gray-300">Section</td>
                <td>{{ controlsStore.selectedSection }}</td>
            </tr>
            <tr>
                <td class="pr-2 text-gray-300">Item</td>
                <td>{{ controlsStore.selectedItem }}</td>
            </tr>
            <tr>
                <td class="pr-2 text-gray-300">triagingSectionClasses</td>
                <td>{{ controlsStore.triagingSectionClasses }}</td>
            </tr>
            <tr>
                <td class="pr-2 text-gray-300">riskFactorsSectionClasses</td>
                <td>{{ controlsStore.riskFactorsSectionClasses }}</td>
            </tr>
            <tr>
                <td class="pr-2 text-gray-300">diagnosisSectionClasses</td>
                <td>{{ controlsStore.diagnosisSectionClasses }}</td>
            </tr>
            <tr>
                <td class="pr-2 text-gray-300">subClassificationSectionClasses</td>
                <td>{{ controlsStore.subClassificationSectionClasses }}</td>
            </tr>
        </table>
    </div>
</template>

<style lang="postcss" scoped></style>

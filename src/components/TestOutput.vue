<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';
const controlsStore = useControlsStore();
</script>

<template>
    <div
        class="absolute right-2 top-1 z-20 rounded-lg bg-slate-950 bg-opacity-60 px-5 py-3 font-mono text-sm leading-5 text-white">
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
                <td class="pr-2 text-gray-300">mitigationAreaClasses</td>
                <td>{{ controlsStore.mitigationAreaClasses }}</td>
            </tr>
            <tr>
                <td class="pr-2 text-gray-300">measurementAreaClasses</td>
                <td>{{ controlsStore.measurementAreaClasses }}</td>
            </tr>
            <tr>
                <td class="pr-2 text-gray-300">managementAreaClasses</td>
                <td>{{ controlsStore.managementAreaClasses }}</td>
            </tr>
            <tr>
                <td class="pr-2 text-gray-300">triagingSectionGrayscale</td>
                <td>{{ controlsStore.triagingSectionGrayscale }}</td>
            </tr>
            <tr>
                <td class="pr-2 text-gray-300">riskFactorsSectionGrayscale</td>
                <td>{{ controlsStore.riskFactorsSectionGrayscale }}</td>
            </tr>
            <tr>
                <td class="pr-2 text-gray-300">diagnosisSectionGrayscale</td>
                <td>{{ controlsStore.diagnosisSectionGrayscale }}</td>
            </tr>
            <tr>
                <td class="pr-2 text-gray-300">subClassificationSectionGrayscale</td>
                <td>{{ controlsStore.subClassificationSectionGrayscale }}</td>
            </tr>
        </table>
    </div>
</template>

<style lang="postcss" scoped></style>

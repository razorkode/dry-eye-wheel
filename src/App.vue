<script setup>
import { useControlsStore } from './stores/controlsStore.js';
import SunAnimation from './components/icons/SunAnimation.vue';
import ManagementSvg from './components/management/MainSvg.vue';
import MitigationSvg from './components/mitigation/MainSvg.vue';
import MeasurementSvg from './components/measurement/MainSvg.vue';
import VerticalSlider from './components/VerticalSlider.vue';
import Popup from './components/Popup.vue';
import GradientButton from './components/GradientButton.vue';

const controlsStore = useControlsStore();
</script>

<template>
    <div class="m-6 flex h-[500px]">
        <VerticalSlider />

        <!-- Menu Buttons -->
        <div class="mx-6 flex max-w-lg flex-col gap-3">
            <GradientButton class="btn-area"> Area Button </GradientButton>
            <div class="grid grid-cols-2 gap-3">
                <GradientButton class="btn-section"> Section Button </GradientButton>
                <GradientButton class="btn-silver"> Silver Button </GradientButton>
            </div>
            <div class="grid grid-cols-2 gap-3">
                <GradientButton class="btn-orange"> Orange Button </GradientButton>
                <GradientButton class="btn-yellow"> Yellow Button </GradientButton>
            </div>
        </div>

        <!-- Wheel Area -->
        <div class="h-full w-full border-2 border-red-600">
            {{ controlsStore.sliderValue }}
            {{ controlsStore.selectedArea }}
        </div>
    </div>

    <Popup>
        <template #icon>
            <SunAnimation
                targetId="sunAnim5"
                class="!h-32" />
        </template>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusamus temporibus, ut facilis quasi nisi
        nemo? Eius at temporibus sit asperiores, numquam incidunt dicta, ratione dolorem ut ea odit obcaecati.
    </Popup>

    <MitigationSvg />
    <MeasurementSvg />
    <ManagementSvg />

    <table>
        <tr>
            <td><SunAnimation targetId="sunAnim1" /></td>
            <td><SunAnimation targetId="sunAnim2" /></td>
        </tr>
        <tr>
            <td><SunAnimation targetId="sunAnim3" /></td>
            <td><SunAnimation targetId="sunAnim4" /></td>
        </tr>
    </table>
</template>

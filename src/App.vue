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
    <GradientButton />

    <Popup>
        <template #icon>
            <SunAnimation
                targetId="sunAnim5"
                class="!h-32" />
        </template>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusamus temporibus, ut facilis quasi nisi
        nemo? Eius at temporibus sit asperiores, numquam incidunt dicta, ratione dolorem ut ea odit obcaecati.
    </Popup>

    <div class="h-[500px]">
        <VerticalSlider />
    </div>

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

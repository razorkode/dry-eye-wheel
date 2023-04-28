<script setup>
import SunAnimation from './components/icons/SunAnimation.vue';
import ManagementSvg from './components/management/MainSvg.vue';
import MitigationSvg from './components/mitigation/MainSvg.vue';
import MeasurementSvg from './components/measurement/MainSvg.vue';
</script>

<template>
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

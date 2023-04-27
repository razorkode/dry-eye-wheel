<script setup>
import SunAnimation from './components/icons/SunAnimation.vue';
import WheelSvg from './components/WheelSvg.vue';
</script>

<template>
    <WheelSvg />

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

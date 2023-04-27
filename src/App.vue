<script setup>
import SunAnimation from './components/icons/SunAnimation.vue';
</script>

<template>
    <span>No Font Applied</span>
    <br />
    <span class="font-euclid-circular-bold">EuclidCircularA BOLD</span>
    <br />
    <span class="font-euclid-circular-semibold">EuclidCircularA SEMIBOLD</span>
    <img
        src="./assets/wheel.svg"
        alt="" />
    <table style="border: 2px solid red">
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

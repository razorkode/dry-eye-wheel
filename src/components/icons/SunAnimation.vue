<script setup>
import LottieAnimation from 'lottie-vuejs/src/LottieAnimation.vue';

const props = defineProps({
    targetId: {
        type: String,
        default: 'sunAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        path="./sun.json"
        :loop="true"
        :autoPlay="true"
        :width="256"
        :height="256" />
</template>

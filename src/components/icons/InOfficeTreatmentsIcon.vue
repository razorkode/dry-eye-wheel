<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import LightTherapyJson from '@/assets/json/light-therapy.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'lightTherapyAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="LightTherapyJson"
        :loop="true"
        :autoPlay="true" />
</template>

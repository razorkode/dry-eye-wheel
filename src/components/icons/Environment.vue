<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import EnvironmentJson from '@/assets/json/environment.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'environmentAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="EnvironmentJson"
        :loop="true"
        :autoPlay="true" />
</template>

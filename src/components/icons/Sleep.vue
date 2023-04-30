<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import SleepJson from '@/assets/json/sleep.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'sleepAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="SleepJson"
        :loop="true"
        :autoPlay="true" />
</template>

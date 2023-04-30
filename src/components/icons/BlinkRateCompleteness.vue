<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import BlinkRateCompletenessJson from '@/assets/json/blink-rate-completeness.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'blinkRateCompletenessAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="BlinkRateCompletenessJson"
        :loop="true"
        :autoPlay="true" />
</template>

<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import BreakupTimeJson from '@/assets/json/breakup-time.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'breakupTimeAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="BreakupTimeJson"
        :loop="true"
        :autoPlay="true" />
</template>

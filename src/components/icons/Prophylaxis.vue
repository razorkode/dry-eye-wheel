<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import ProphylaxisJson from '@/assets/json/prophylaxis.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'prophylaxisAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="ProphylaxisJson"
        :loop="true"
        :autoPlay="true" />
</template>

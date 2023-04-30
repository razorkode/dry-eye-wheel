<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import AdviceJson from '@/assets/json/advice.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'adviceAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="AdviceJson"
        :loop="true"
        :autoPlay="true" />
</template>

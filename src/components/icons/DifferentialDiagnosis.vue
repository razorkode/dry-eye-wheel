<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import DifferentialDiagnosisJson from '@/assets/json/differential-diagnosis.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'differentialDiagnosisAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="DifferentialDiagnosisJson"
        :loop="true"
        :autoPlay="true" />
</template>

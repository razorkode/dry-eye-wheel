<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import ComplexTreatmentsJson from '@/assets/json/complex-treatments.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'complexTreatmentsAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="ComplexTreatmentsJson"
        :loop="true"
        :autoPlay="true" />
</template>

<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import MedicationReviewJson from '@/assets/json/medication-review.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'medicationReviewAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="MedicationReviewJson"
        :loop="true"
        :autoPlay="true" />
</template>

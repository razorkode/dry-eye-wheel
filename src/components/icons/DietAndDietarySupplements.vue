<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import DietAndDietarySupplementsJson from '@/assets/json/diet-and-dietary-supplements.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'dietAndDietarySupplementsAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="DietAndDietarySupplementsJson"
        :loop="true"
        :autoPlay="true" />
</template>

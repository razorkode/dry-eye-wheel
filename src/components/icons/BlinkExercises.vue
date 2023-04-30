<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import BlinkExercisesJson from '@/assets/json/blink-exercises.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'blinkExercisesAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="BlinkExercisesJson"
        :loop="true"
        :autoPlay="true" />
</template>

<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import ScleralLensesJson from '@/assets/json/scleral-lenses.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'scleralLensesAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="ScleralLensesJson"
        :loop="true"
        :autoPlay="true" />
</template>

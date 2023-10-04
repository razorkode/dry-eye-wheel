<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import NutraceuticalsJson from '@/assets/json/nutraceuticals.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'nutraceuticalsAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="NutraceuticalsJson"
        :loop="true"
        :autoPlay="true" />
</template>

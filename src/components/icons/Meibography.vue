<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import MeibographyJson from '@/assets/json/meibography.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'meibographyAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="MeibographyJson"
        :loop="true"
        :autoPlay="true" />
</template>

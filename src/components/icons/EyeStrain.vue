<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import EyeStrainJson from '@/assets/json/eye-strain.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'eyeStrainAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="EyeStrainJson"
        :loop="true"
        :autoPlay="true" />
</template>

<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import SunJson from '@/assets/json/sun.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'sunAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="SunJson"
        :loop="true"
        :autoPlay="true" />
</template>

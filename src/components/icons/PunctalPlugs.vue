<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import PunctalPlugsJson from '@/assets/json/punctal-plugs.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'punctalPlugsAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="PunctalPlugsJson"
        :loop="true"
        :autoPlay="true" />
</template>

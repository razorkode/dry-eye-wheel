<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import PharmaceuticalsJson from '@/assets/json/pharmaceuticals.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'pharmaceuticalsAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="PharmaceuticalsJson"
        :loop="true"
        :autoPlay="true" />
</template>

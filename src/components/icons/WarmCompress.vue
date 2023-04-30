<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import WarmCompressJson from '@/assets/json/warm-compress.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'warmCompressAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="WarmCompressJson"
        :loop="true"
        :autoPlay="true" />
</template>

<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import ComfortAfterBlinkTestJson from '@/assets/json/comfort-after-blink-test.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'comfortAfterBlinkTestAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="ComfortAfterBlinkTestJson"
        :loop="true"
        :autoPlay="true" />
</template>

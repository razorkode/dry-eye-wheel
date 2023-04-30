<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import LissamineGreenStaningJson from '@/assets/json/lissamine-green-staning.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'lissamineGreenStaningAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="LissamineGreenStaningJson"
        :loop="true"
        :autoPlay="true" />
</template>

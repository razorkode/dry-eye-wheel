<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import LidHygeineJson from '@/assets/json/lid-hygeine.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'lidHygeineAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="LidHygeineJson"
        :loop="true"
        :autoPlay="true" />
</template>

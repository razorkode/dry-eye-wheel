<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import HormonesJson from '@/assets/json/hormones.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'hormonesAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="HormonesJson"
        :loop="true"
        :autoPlay="true" />
</template>

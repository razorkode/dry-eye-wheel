<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import TearMeniscusHeightJson from '@/assets/json/tear-meniscus-height.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'tearMeniscusHeightAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="TearMeniscusHeightJson"
        :loop="true"
        :autoPlay="true" />
</template>

<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import ArtificialTearsJson from '@/assets/json/artificial-tears.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'artificialTearsAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="ArtificialTearsJson"
        :loop="true"
        :autoPlay="true" />
</template>

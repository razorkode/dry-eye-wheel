<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import LidHygieneJson from '@/assets/json/lid-hygiene.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'lidHygieneAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="LidHygieneJson"
        :loop="true"
        :autoPlay="true" />
</template>

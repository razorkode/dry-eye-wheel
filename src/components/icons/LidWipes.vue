<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import LidWipesJson from '@/assets/json/lid-wipes.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'lidWipesAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="LidWipesJson"
        :loop="true"
        :autoPlay="true" />
</template>

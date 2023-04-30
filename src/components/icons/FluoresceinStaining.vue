<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import FluoresceinStainingJson from '@/assets/json/fluorescein-staining.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'fluoresceinStainingAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="FluoresceinStainingJson"
        :loop="true"
        :autoPlay="true" />
</template>

<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import OsmolarityJson from '@/assets/json/osmolarity.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'osmolarityAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="OsmolarityJson"
        :loop="true"
        :autoPlay="true" />
</template>

<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import ContactLensJson from '@/assets/json/contact-lens.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'contactLensAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="ContactLensJson"
        :loop="true"
        :autoPlay="true" />
</template>

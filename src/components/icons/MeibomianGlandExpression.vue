<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import MeibomianGlandExpressionJson from '@/assets/json/meibomian-gland-expression.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'meibomianGlandExpressionAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="MeibomianGlandExpressionJson"
        :loop="true"
        :autoPlay="true" />
</template>

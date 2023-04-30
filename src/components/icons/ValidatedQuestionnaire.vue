<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import ValidatedQuestionnaireJson from '@/assets/json/validated-questionnaire.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'validatedQuestionnaireAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="ValidatedQuestionnaireJson"
        :loop="true"
        :autoPlay="true" />
</template>

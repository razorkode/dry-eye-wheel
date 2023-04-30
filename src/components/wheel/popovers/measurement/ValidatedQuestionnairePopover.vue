<script setup>
import Card from '@/components/Card.vue';
import ValidatedQuestionnaireIcon from '@/components/icons/ValidatedQuestionnaire.vue';
</script>

<template>
    <Card
        title="Validated Questionnaire"
        class="absolute left-1/2 top-[220px] z-10 col-span-5 ml-[-240px] max-w-lg">
        <template #icon>
            <ValidatedQuestionnaireIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        <div>OSDI score ≥ 13 OR DEQ-5 score ≥ 6.</div>
        <div>Other questionnaires can assist with management choices, but not standardized diagnosis.</div>
    </Card>
</template>

<style lang="postcss" scoped></style>

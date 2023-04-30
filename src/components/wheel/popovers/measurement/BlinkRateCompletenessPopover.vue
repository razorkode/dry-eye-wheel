<script setup>
import Card from '@/components/Card.vue';
import BlinkRateCompletenessIcon from '@/components/icons/BlinkRateCompleteness.vue';
</script>

<template>
    <Card
        title="Blink Rate And Completeness"
        class="absolute left-1/2 top-[320px] z-10 col-span-5 ml-[-300px] max-w-lg">
        <template #icon>
            <BlinkRateCompletenessIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        Reduced blink rate or incomplete blinking can cause evaporative dry eye disease.
    </Card>
</template>

<style lang="postcss" scoped></style>

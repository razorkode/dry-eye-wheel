<script setup>
import Card from '@/components/Card.vue';
import MedicationReviewIcon from '@/components/icons/MedicationReview.vue';
</script>

<template>
    <Card
        title="Medication Review"
        class="absolute left-1/2 top-[390px] z-10 col-span-5 ml-[-224px] max-w-lg">
        <template #icon>
            <MedicationReviewIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        Many medications, whether prescribed or over-the-counter, can affect the tear film, so a medication review, in
        conjunction with the prescribing clinician, might allow for symptoms to be reduced.
    </Card>
</template>

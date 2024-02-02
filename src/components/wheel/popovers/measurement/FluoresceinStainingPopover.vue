<script setup>
import Card from '@/components/Card.vue';
import FluoresceinStainingIcon from '@/components/icons/FluoresceinStaining.vue';
</script>

<template>
    <Card
        title="Fluorescein Staining"
        class="absolute left-1/2 top-[260px] z-10 col-span-5 ml-[-300px] max-w-lg">
        <template #icon>
            <FluoresceinStainingIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        <div>Minimal fluorescein is applied to the eye; observed between 1 and 3 minutes after instillation.</div>
        <div>&gt; 5 corneal spots diagnostic of dry eye disease.</div>
    </Card>
</template>

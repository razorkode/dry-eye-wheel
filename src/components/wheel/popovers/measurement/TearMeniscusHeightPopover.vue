<script setup>
import Card from '@/components/Card.vue';
import TearMeniscusHeightIcon from '@/components/icons/TearMeniscusHeight.vue';
</script>

<template>
    <Card
        title="Tear Meniscus Height"
        class="absolute left-1/2 top-[340px] z-10 col-span-5 ml-[-340px] max-w-lg">
        <template #icon>
            <TearMeniscusHeightIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        <div>&lt; 0.2mm indicative of aqueous dry eye disease.</div>
        <div>Irregularity suggests poor tear film quality.</div>
    </Card>
</template>

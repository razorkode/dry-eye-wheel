<script setup>
import Card from '@/components/Card.vue';
import MeibographyIcon from '@/components/icons/Meibography.vue';
</script>

<template>
    <Card
        title="Meibography"
        class="absolute left-1/2 top-[380px] z-10 col-span-5 ml-[-300px] max-w-xl">
        <template #icon>
            <MeibographyIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        Shortened glands / dropout on transillumination or IR imaging of everted lids may be indicative of evaporative
        dry eye disease.
    </Card>
</template>

<style lang="postcss" scoped></style>

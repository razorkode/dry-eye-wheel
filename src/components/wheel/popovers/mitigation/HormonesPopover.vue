<script setup>
import Card from '@/components/Card.vue';
import HormonesIcon from '@/components/icons/Hormones.vue';
</script>

<template>
    <Card
        title="Hormones"
        class="absolute left-1/2 top-[240px] z-10 col-span-5 ml-[-140px] max-w-lg">
        <template #icon>
            <HormonesIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        Hormones regulate many key physiological body processes, so changes can disrupt the precisely balanced tear
        film. When hormones are changing, a medical review might be warranted.
    </Card>
</template>

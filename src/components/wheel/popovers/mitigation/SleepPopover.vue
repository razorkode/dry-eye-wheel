<script setup>
import Card from '@/components/Card.vue';
import SleepIcon from '@/components/icons/Sleep.vue';
</script>

<template>
    <Card
        title="Sleep"
        class="absolute left-1/2 top-[240px] z-10 col-span-5 ml-[-200px] max-w-lg">
        <template #icon>
            <SleepIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        Poor sleep quality and quantity are associated with an increased risk of dry eye disease, especially less than 5
        hours sleep per night. Encourage good sleeping habits to help reduce the risk of dry eye symptoms.
    </Card>
</template>

<style lang="postcss" scoped></style>

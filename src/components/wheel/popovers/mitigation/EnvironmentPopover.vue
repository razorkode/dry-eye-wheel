<script setup>
import Card from '@/components/Card.vue';
import EnvironmentIcon from '@/components/icons/Environment.vue';
</script>

<template>
    <Card
        title="Environment"
        class="absolute left-1/2 top-[340px] z-10 col-span-5 ml-[-224px] max-w-lg">
        <template #icon>
            <EnvironmentIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        Environmental conditions such as air-conditioning and windy conditions can contribute to dry eye; a review of
        when the dry eye symptoms are worst can allow for targeting the necessary adaptations.
    </Card>
</template>

<style lang="postcss" scoped></style>

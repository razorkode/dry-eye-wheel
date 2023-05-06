<script setup>
import Card from '@/components/Card.vue';
import LidWipesIcon from '@/components/icons/LidWipes.vue';
</script>

<template>
    <Card
        title="Lid Wipes"
        class="absolute left-1/2 top-[280px] z-10 col-span-5 ml-[-224px] max-w-lg">
        <template #icon>
            <LidWipesIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        Eyelid cleansing products can effectively remove lid debris and other irritants from around the eyes and reduce
        bacteria. Lid wipes are a mainstay of blepharitis management with some containing active ingredients for the
        control of demodex specifically.
    </Card>
</template>

<style lang="postcss" scoped></style>

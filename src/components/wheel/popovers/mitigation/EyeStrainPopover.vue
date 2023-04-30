<script setup>
import Card from '@/components/Card.vue';
import EyeStrainIcon from '@/components/icons/EyeStrain.vue';
</script>

<template>
    <Card
        title="Eye Strain"
        class="absolute left-1/2 top-[240px] z-10 col-span-5 ml-[-224px] max-w-lg">
        <template #icon>
            <EyeStrainIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        Digital screen viewing can exacerbate ocular surface disease, especially more than 4-5 hours a day. The impact
        can be reduced by taking regular breaks, blink exercises, and positioning screens lower than the eyes.
    </Card>
</template>

<style lang="postcss" scoped></style>

<script setup>
import Card from '@/components/Card.vue';
import LidHygieneIcon from '@/components/icons/LidHygiene.vue';
</script>

<template>
    <Card
        title="Lid Hygiene"
        class="absolute left-1/2 top-[280px] z-10 col-span-5 ml-[-224px] max-w-lg">
        <template #icon>
            <LidHygieneIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        Eyelid cleansing products can effectively remove lid debris and other irritants from around the eyes and reduce
        bacteria. Lid hygiene is a mainstay of blepharitis management with some containing active ingredients for the
        control of demodex specifically.
    </Card>
</template>

<script setup>
import Card from '@/components/Card.vue';
import LightTherapyIcon from '@/components/icons/LightTherapy.vue';
</script>

<template>
    <Card
        title="Intense Pulsed Light Therapy"
        class="absolute left-1/2 top-[200px] z-10 col-span-5 ml-[-300px] max-w-xl">
        <template #icon>
            <LightTherapyIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        Intense pulsed light, which is used widely in dermatology for the treatment of rosacea and other skin
        conditions, has also demonstrated benefits in the management of meibomian gland dysfunction.
    </Card>
</template>

<style lang="postcss" scoped></style>

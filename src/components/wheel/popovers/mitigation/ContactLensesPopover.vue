<script setup>
import Card from '@/components/Card.vue';
import ContactLensIcon from '@/components/icons/ContactLens.vue';
</script>

<template>
    <Card
        title="Contact Lens"
        class="absolute left-1/2 top-[280px] z-10 col-span-5 ml-[-224px] max-w-lg">
        <template #icon>
            <ContactLensIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        Contact lenses can disrupt the tear film and risk causing friction with the ocular surface and so should be
        carefully optimized, especially in those with pre-existing ocular surface disease.
    </Card>
</template>

<style lang="postcss" scoped></style>

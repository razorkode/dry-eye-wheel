<script setup>
import Card from '@/components/Card.vue';
import ScleralLensesIcon from '@/components/icons/ScleralLenses.vue';
</script>

<template>
    <Card
        title="Scleral Lenses"
        class="absolute left-1/2 top-[250px] z-10 col-span-5 ml-[-300px] max-w-xl">
        <template #icon>
            <ScleralLensesIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        Growing evidence shows that some patients with dry eye can benefit from the wearing of scleral contact lenses,
        which hold tears between the lens and cornea/conjunctiva and prevent drying of the ocular surface.
    </Card>
</template>

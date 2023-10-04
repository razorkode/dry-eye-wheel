<script setup>
import Card from '@/components/Card.vue';
import NutraceuticalsIcon from '@/components/icons/Nutraceuticals.vue';
</script>

<template>
    <Card
        title="Nutraceuticals"
        class="absolute left-1/2 top-[320px] z-10 col-span-5 ml-[-280px] max-w-lg">
        <template #icon>
            <NutraceuticalsIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        A healthy, particularly Mediterranean, diet can aid the ocular surface along with supplements such as those rich
        in Omega-3.
    </Card>
</template>

<style lang="postcss" scoped></style>

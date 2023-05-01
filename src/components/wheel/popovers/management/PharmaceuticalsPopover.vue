<script setup>
import Card from '@/components/Card.vue';
import PharmaceuticalsIcon from '@/components/icons/Pharmaceuticals.vue';
</script>

<template>
    <Card
        title="Pharmaceuticals"
        class="absolute left-1/2 top-[240px] z-10 col-span-5 ml-[-224px] max-w-xl">
        <template #icon>
            <PharmaceuticalsIcon class="!-mb-6 !h-40" />
        </template>
        A number of oral and topical prescription pharmaceutical agents are now available for the management of more
        severe forms of dry eye.
    </Card>
</template>

<style lang="postcss" scoped></style>

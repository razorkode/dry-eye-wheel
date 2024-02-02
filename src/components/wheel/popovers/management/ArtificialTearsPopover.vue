<script setup>
import Card from '@/components/Card.vue';
import ArtificialTearsIcon from '@/components/icons/ArtificialTears.vue';
</script>

<template>
    <Card
        title="Artificial Tears"
        class="absolute left-1/2 top-[260px] z-10 col-span-5 ml-[-200px] max-w-lg">
        <template #icon>
            <ArtificialTearsIcon class="!-mb-4 !-mt-4 !h-40" />
        </template>
        Ocular lubricants remain a mainstay of dry eye disease management. Many different formulations exist, including
        lipid-based drops to help stabilize the tear film and many preservative-free options, which are advisable for
        more severe forms of the disease.
    </Card>
</template>

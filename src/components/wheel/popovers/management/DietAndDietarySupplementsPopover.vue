<script setup>
import Card from '@/components/Card.vue';
import DietAndDietarySupplementsIcon from '@/components/icons/DietAndDietarySupplements.vue';
</script>

<template>
    <Card
        title="Diet And Dietary Supplements"
        class="absolute left-1/2 top-[320px] z-10 col-span-5 ml-[-280px] max-w-lg">
        <template #icon>
            <DietAndDietarySupplementsIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        A healthy, particularly Mediterranean, diet can aid the ocular surface along with supplements such as those rich
        in Omega-3.
    </Card>
</template>

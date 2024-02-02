<script setup>
import Card from '@/components/Card.vue';
import OsmolarityIcon from '@/components/icons/Osmolarity.vue';
</script>

<template>
    <Card
        title="Osmolarity"
        class="absolute left-1/2 top-[300px] z-10 col-span-5 ml-[-260px] max-w-lg">
        <template #icon>
            <OsmolarityIcon class="!-mb-12 !-mt-14 !h-40" />
        </template>
        <div>
            A tiny sample of the tear film is extracted, and the impedance used to assess the osmolarity (saltiness) of
            the tear film.
        </div>
        <div>&GreaterEqual; 308 mOsm/L or an inter-eye difference of &gt; 8 is diagnostic of dry eye disease.</div>
    </Card>
</template>

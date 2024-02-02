<script setup>
import Card from '@/components/Card.vue';
import LissamineGreenStainingIcon from '@/components/icons/LissamineGreenStaining.vue';
</script>

<template>
    <Card
        title="Lissamine Green Staining"
        class="absolute left-1/2 top-[340px] z-10 col-span-5 ml-[-260px] max-w-lg">
        <template #icon>
            <LissamineGreenStainingIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        <div>
            Lissamine green strip is wet with saline, with the whole drop retained on the strip for at least 5 seconds
            to elute the dye; observed between 1 and 4 minutes post-instillation.
        </div>
        <div>&gt; 9 conjunctival spots diagnostic of dry eye disease.</div>
        <div>Lid margin observed between 3 and 6 minutes.</div>
        <div>
            &GreaterEqual; 2 mm in length and/or ≥ 25% sagittal width (excluding Marx's line) diagnostic of dry eye
            disease.
        </div>
    </Card>
</template>

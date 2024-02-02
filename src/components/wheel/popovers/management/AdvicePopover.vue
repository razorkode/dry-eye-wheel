<script setup>
import Card from '@/components/Card.vue';
import AdviceIcon from '@/components/icons/Advice.vue';
</script>

<template>
    <Card
        title="Advice"
        class="absolute left-1/2 top-[320px] z-10 col-span-5 ml-[-280px] max-w-lg">
        <template #icon>
            <AdviceIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        It is important to discuss with patients that dry eye disease requires a long-term, ongoing commitment to
        management and is rarely cured, but rather is managed using a variety of approaches, with careful follow-up with
        their practitioner being important.
    </Card>
</template>

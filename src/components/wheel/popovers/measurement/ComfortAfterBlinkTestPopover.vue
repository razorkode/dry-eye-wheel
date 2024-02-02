<script setup>
import Card from '@/components/Card.vue';
import ComfortAfterBlinkTestIcon from '@/components/icons/ComfortAfterBlinkTest.vue';
</script>

<template>
    <Card
        title="Comfort Time After Blink Test"
        class="absolute left-1/2 top-[160px] z-10 col-span-5 ml-[-224px] max-w-lg">
        <template #icon>
            <ComfortAfterBlinkTestIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        <div>Patient blinks and reports when eyes first become uncomfortable &ndash; repeat 3 times.</div>
        <div>&lt; 10s indicative of dry eye disease.</div>
    </Card>
</template>

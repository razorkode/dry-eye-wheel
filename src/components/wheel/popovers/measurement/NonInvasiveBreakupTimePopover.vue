<script setup>
import Card from '@/components/Card.vue';
import NonInvasiveBreakupTimeIcon from '@/components/icons/NonInvasiveBreakupTime.vue';
</script>

<template>
    <Card
        title="Non-Invasive Breakup Time"
        class="absolute left-1/2 top-[300px] z-10 col-span-5 ml-[-260px] max-w-lg">
        <template #icon>
            <NonInvasiveBreakupTimeIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>

        <div>
            Patient blinks and keeps their eyes open for as long as possible and the time at which the reflections from
            the ocular surface distort indicates the tear quality.
        </div>
        <div>&lt; 10s is diagnostic of dry eye disease.</div>
    </Card>
</template>

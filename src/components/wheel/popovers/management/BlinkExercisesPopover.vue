<script setup>
import Card from '@/components/Card.vue';
import BlinkExercisesIcon from '@/components/icons/BlinkExercises.vue';
</script>

<template>
    <Card
        title="Blink Exercises"
        class="absolute left-1/2 top-[340px] z-10 col-span-5 ml-[-224px] max-w-lg">
        <template #icon>
            <BlinkExercisesIcon class="!-mb-8 !-mt-4 !h-40" />
        </template>
        Reduced blinking during digital device use can result in dry eyes. Training patients how to blink fully, to take
        regular breaks from near work and to use various methods to remind them to blink regularly can alleviate these
        issues.
    </Card>
</template>

<script setup>
import Card from '@/components/Card.vue';
import AdviceIcon from '@/components/icons/Advice.vue';
</script>

<template>
    <Card
        title="History & Symptoms"
        class="absolute left-1/2 top-[220px] z-10 col-span-5 ml-[-224px] max-w-md">
        <template #icon>
            <AdviceIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        History-taking: Careful history-taking allows identification of dry eye symptoms as well as risks associated
        with the development of dry eye disease. Modifiable risk factors are especially important to identify, as simple
        changes in lifestyle can help reduce or eliminate their impact, and promote a healthier ocular surface.
    </Card>
</template>

<style lang="postcss" scoped></style>

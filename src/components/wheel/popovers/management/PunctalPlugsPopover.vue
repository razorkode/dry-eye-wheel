<script setup>
import Card from '@/components/Card.vue';
import PunctalPlugsIcon from '@/components/icons/PunctalPlugs.vue';
</script>

<template>
    <Card
        title="Punctal Plugs"
        class="absolute left-1/2 top-[180px] z-10 col-span-5 ml-[-260px] max-w-xl">
        <template #icon>
            <PunctalPlugsIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        Punctal plugs can be used to temporarily or permanently block the drainage of tears from the ocular surface by
        occluding the puncta.
    </Card>
</template>

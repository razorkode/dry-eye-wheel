<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: false,
    },
    theme: {
        type: String,
        default: 'popup',
    },
});
</script>

<template>
    <div class="flex max-w-md flex-col gap-2 rounded-2xl border border-gray-400 p-6 shadow-md">
        <div
            v-if="$slots.icon"
            class="text-center">
            <slot name="icon"></slot>
        </div>
        <div
            :class="{
                'font-euclid-circular-bold text-4xl text-[#2B398F]': props.theme === 'popup',
                'font-euclid-circular-medium text-2xl text-[#6D6E71]': props.theme !== 'popup',
            }"
            class="text-center uppercase">
            {{ props.title }}
        </div>
        <div class="flex flex-col gap-3 text-center leading-5 text-gray-600">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="postcss" scoped></style>

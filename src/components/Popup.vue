<script setup></script>

<template>
    <div class="m-6 flex max-w-md flex-col gap-2 rounded-2xl border border-gray-400 p-6 shadow-md">
        <div class="text-center">
            <slot name="icon"></slot>
        </div>
        <div class="text-center font-euclid-circular-bold text-4xl text-[#2B398F]">TITLE</div>
        <div class="text-center text-gray-600">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="postcss" scoped></style>

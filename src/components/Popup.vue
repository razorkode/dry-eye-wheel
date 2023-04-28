<script setup></script>

<template>
    <div class="m-6 flex max-w-md flex-col gap-2 rounded-2xl border border-gray-400 p-6 shadow-md">
        <div class="text-center">
            <slot name="icon"></slot>
        </div>
        <div class="font-euclid-circular-bold text-center text-4xl text-indigo-600">TITLE</div>
        <div class="text-center text-gray-600">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="postcss" scoped></style>

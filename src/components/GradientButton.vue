<script setup></script>

<template>
    <button class="btn btn-header">Merp Derp</button>
</template>

<style lang="postcss" scoped>
.btn {
    @apply rounded-full px-5 py-1;
}

.btn-header {
    @apply bg-gradient-to-r from-[#E6E6E7] via-white to-[#E5E6E7] font-euclid-circular-bold font-extrabold uppercase text-[#2B398F];
}

.btn-light {
    @apply bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-extrabold;
}

.btn-silver {
    @apply font-extrabold;
}

.btn-orange {
    @apply font-extrabold;
}

.btn-yellow {
    @apply font-extrabold;
}
</style>

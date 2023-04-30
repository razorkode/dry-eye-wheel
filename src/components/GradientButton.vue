<script setup></script>

<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<style lang="postcss" scoped>
.btn {
    @apply min-h-[34px] rounded-full bg-gradient-to-r px-3 text-sm leading-4;
}

.btn-area {
    @apply w-full font-euclid-circular-bold uppercase;
    @apply from-[#E6E6E7] via-white to-[#E5E6E7] text-[#2B398F];
    @apply hover:from-[#2B398F] hover:via-[#2B398F] hover:to-[#2B398F] hover:text-white;
    &.active {
        @apply from-[#2B398F] via-[#2B398F] to-[#2B398F] text-white;
    }
}

.btn-section {
    @apply uppercase;
    @apply from-[#E6E6E7] via-white to-[#E5E6E7] text-[#58595B];
    @apply hover:from-[#2B398F] hover:via-[#2B398F] hover:to-[#2B398F] hover:font-euclid-circular-bold hover:text-white;
    &.active {
        @apply from-[#2B398F] via-[#2B398F] to-[#2B398F] font-euclid-circular-bold text-white;
    }
}

.btn-silver {
    @apply from-[#828386] via-[#E4E4E5] to-[#828385] text-[#58595B] ring-[#2B398F];
    @apply hover:font-euclid-circular-bold hover:ring;
    &.active {
        @apply font-euclid-circular-bold ring;
    }
}

.btn-orange {
    @apply from-[#9A6C23] via-[#D68A33] to-[#9B6C22] text-white ring-[#2B398F];
    @apply hover:font-euclid-circular-bold hover:ring;
    &.active {
        @apply font-euclid-circular-bold ring;
    }
}

.btn-yellow {
    @apply from-[#B38C14] via-[#E5B628] to-[#B28A10] text-white ring-[#2B398F];
    @apply hover:font-euclid-circular-bold hover:ring;
    &.active {
        @apply font-euclid-circular-bold ring;
    }
}
</style>

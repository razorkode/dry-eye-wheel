<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';
const controlsStore = useControlsStore();
</script>

<template>
    <g :class="{ 'svg-active': controlsStore.selectedItem === 'punctal-plugs' }">
        <g>
            <path
                class="management-cls-6"
                d="m402.68,489.75v2.32h-1.45v-7.1h2.36c1.43,0,2.49,1.04,2.49,2.39s-1.06,2.39-2.49,2.39h-.91Zm0-3.42v2.06h.89c.65,0,1.1-.44,1.1-1.03s-.45-1.03-1.1-1.03h-.89Z" />
            <path
                class="management-cls-6"
                d="m407.32,484.97h1.45v4.32c0,.93.57,1.5,1.44,1.5s1.44-.57,1.44-1.5v-4.32h1.45v4.3c0,1.76-1.21,2.92-2.89,2.92s-2.89-1.16-2.89-2.92v-4.3Z" />
            <path
                class="management-cls-6"
                d="m421.18,484.97v7.1h-1.25l-3.64-4.63v4.63h-1.45v-7.1h1.25l3.64,4.63v-4.63h1.45Z" />
            <path
                class="management-cls-6"
                d="m429.76,489.65c-.38,1.49-1.84,2.54-3.44,2.54-2.11.04-3.76-1.64-3.72-3.67-.04-2.03,1.61-3.71,3.72-3.67,1.6,0,3.06,1.05,3.44,2.54h-1.57c-.29-.69-1.06-1.14-1.87-1.14-1.33,0-2.26,1-2.26,2.27s.93,2.27,2.26,2.27c.81,0,1.58-.45,1.87-1.14h1.57Z" />
            <path
                class="management-cls-6"
                d="m430.39,486.35v-1.38h5.26v1.38h-1.91v5.72h-1.46v-5.72h-1.89Z" />
            <path
                class="management-cls-6"
                d="m440.62,490.45h-3.02l-.69,1.62h-1.5l3.06-7.1h1.29l3.07,7.1h-1.52l-.69-1.62Zm-.53-1.27l-.98-2.31-.98,2.31h1.96Z" />
            <path
                class="management-cls-6"
                d="m445.32,484.97v5.72h3.04v1.38h-4.49v-7.1h1.45Z" />
            <path
                class="management-cls-6"
                d="m453.3,489.75v2.32h-1.45v-7.1h2.36c1.43,0,2.49,1.04,2.49,2.39s-1.06,2.39-2.49,2.39h-.91Zm0-3.42v2.06h.89c.65,0,1.1-.44,1.1-1.03s-.45-1.03-1.1-1.03h-.89Z" />
            <path
                class="management-cls-6"
                d="m459.46,484.97v5.72h3.04v1.38h-4.49v-7.1h1.45Z" />
            <path
                class="management-cls-6"
                d="m463.44,484.97h1.45v4.32c0,.93.57,1.5,1.44,1.5s1.44-.57,1.44-1.5v-4.32h1.45v4.3c0,1.76-1.21,2.92-2.89,2.92s-2.89-1.16-2.89-2.92v-4.3Z" />
            <path
                class="management-cls-6"
                d="m474.3,492.19c-2.12.04-3.77-1.64-3.74-3.67-.04-2.03,1.61-3.71,3.72-3.67,1.49,0,2.87.89,3.35,2.22h-1.66c-.35-.51-1-.82-1.69-.82-1.33,0-2.26,1-2.26,2.27s.93,2.27,2.28,2.27c1.13,0,1.84-.61,2-1.61h-2.17v-1.36h3.67c.03.21.04.44.04.68.03,2.39-1.58,3.71-3.54,3.69Z" />
            <path
                class="management-cls-6"
                d="m481.55,492.19c-1.63.03-2.68-1.13-2.72-2.32h1.44c.09.61.63.98,1.28.98.59,0,1.01-.28,1.01-.72,0-.39-.31-.68-.94-.86l-.76-.22c-1.16-.33-1.85-1.05-1.86-2.1,0-.65.22-1.16.65-1.53.43-.38,1.01-.57,1.73-.57,1.47-.02,2.45,1.08,2.49,2.16h-1.43c-.16-.56-.59-.82-1.06-.82-.53,0-.92.27-.92.68s.29.66.89.83l.84.23c1.16.33,1.84,1.07,1.84,2.15,0,1.2-1.01,2.11-2.48,2.11Z" />
        </g>
        <path
            class="management-cls-4"
            d="m447.55,440.36l-8.04-5.31s4.62-6.02,16.67-.51c12.07,5.53,10.03,12.58,10.03,12.58l-8.33-1.87-9.01,16.5s-.41,1.21,1.06,2.04c.68.38,3.04,1.44,3.44,1.62,1.45.64,2.89,2.76.47,3.87-3.68,1.68-15.01,6.04-15.01,6.04,0,0-3.36,1.45-4.8-2.08-1.45-3.53-4.63-14.62-4.63-14.62,0,0-.43-4.04,3.53-2.64l4,1.96s1.53.98,2.64-.89,7.99-16.67,7.99-16.67Z" />
    </g>
</template>

<style lang="postcss" scoped></style>

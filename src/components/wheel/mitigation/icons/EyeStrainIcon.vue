<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';
const controlsStore = useControlsStore();
</script>

<template>
    <g
        :class="{ 'svg-active': controlsStore.selectedItem === 'eye-strain' }"
        class="svg-fill-path">
        <g>
            <path
                class="mitigation-cls-1"
                d="m103,529.3v1.38h-2.97v1.46h2.37v1.38h-2.37v1.5h2.97v1.38h-4.42v-7.1h4.42Z" />
            <path
                class="mitigation-cls-1"
                d="m103.82,529.3h1.68l1.66,2.69,1.67-2.69h1.69l-2.63,4.12v2.98h-1.45v-2.99l-2.62-4.11Z" />
            <path
                class="mitigation-cls-1"
                d="m116.08,529.3v1.38h-2.97v1.46h2.37v1.38h-2.37v1.5h2.97v1.38h-4.42v-7.1h4.42Z" />
            <path
                class="mitigation-cls-1"
                d="m122.37,536.51c-1.63.03-2.68-1.13-2.72-2.32h1.44c.09.61.63.98,1.28.98.59,0,1.01-.28,1.01-.72,0-.39-.31-.68-.94-.86l-.76-.22c-1.16-.33-1.85-1.05-1.86-2.1,0-.65.22-1.16.65-1.53.43-.38,1.01-.57,1.73-.57,1.47-.02,2.45,1.08,2.49,2.16h-1.43c-.16-.56-.59-.82-1.06-.82-.53,0-.92.27-.92.68s.29.66.89.83l.84.23c1.16.33,1.84,1.07,1.84,2.15,0,1.2-1.01,2.11-2.48,2.11Z" />
            <path
                class="mitigation-cls-1"
                d="m125.55,530.68v-1.38h5.26v1.38h-1.91v5.72h-1.46v-5.72h-1.89Z" />
            <path
                class="mitigation-cls-1"
                d="m136.3,536.39l-2.43-2.99h-.36v2.99h-1.45v-7.1h2.72c1.31,0,2.18.91,2.18,2.1,0,.92-.49,1.54-1.46,1.85l2.55,3.15h-1.75Zm-1.69-4.23c.55,0,.91-.29.91-.77s-.36-.77-.91-.77h-1.1v1.54h1.1Z" />
            <path
                class="mitigation-cls-1"
                d="m143.3,534.77h-3.02l-.69,1.62h-1.5l3.06-7.1h1.29l3.07,7.1h-1.52l-.69-1.62Zm-.53-1.27l-.98-2.31-.98,2.31h1.96Z" />
            <path
                class="mitigation-cls-1"
                d="m148,529.3v7.1h-1.45v-7.1h1.45Z" />
            <path
                class="mitigation-cls-1"
                d="m156.17,529.3v7.1h-1.25l-3.64-4.63v4.63h-1.45v-7.1h1.25l3.64,4.63v-4.63h1.45Z" />
        </g>
        <g id="Dry">
            <path
                d="m126.59,517.58c-8.66,0-15.71-7.05-15.71-15.71s7.05-15.71,15.71-15.71,15.71,7.05,15.71,15.71-7.05,15.71-15.71,15.71Zm0-29.03c-7.35,0-13.33,5.98-13.33,13.33s5.98,13.33,13.33,13.33,13.33-5.98,13.33-13.33-5.98-13.33-13.33-13.33Z" />
            <path
                d="m126.76,521.29c-8.9,0-16.47-4.38-21.25-8.05-2.88-2.21-4.98-4.33-6.23-5.71-2.51-2.78-2.51-3.46-2.51-3.75,0-.65.74-1.9,2.19-3.72,1.13-1.42,3.05-3.58,5.76-5.81,4.54-3.73,11.99-8.17,21.72-8.17s17.29,4.37,21.88,8.04c2.8,2.24,4.75,4.39,5.9,5.8,1.03,1.27,2.25,2.97,2.25,3.87,0,.3,0,1.08-2.45,3.87-1.21,1.38-3.26,3.48-6.14,5.71-4.69,3.62-12.16,7.93-21.11,7.93Zm-27.5-17.54c.78,1.19,3.79,4.71,8.24,8.01,4.38,3.26,11.28,7.15,19.27,7.15s14.85-3.83,19.16-7.05c4.57-3.42,7.47-7,8.09-8.1-.55-1.06-3.08-4.62-7.64-8.14-4.22-3.26-11.1-7.15-19.94-7.15s-15.57,3.94-19.73,7.24c-4.24,3.37-6.79,6.87-7.45,8.04Zm-.17-.3s0,0,0,0t0,0Z" />
            <path
                d="m126.59,496c-3.51,0-6.35,2.84-6.35,6.35s2.84,6.35,6.35,6.35,6.35-2.84,6.35-6.35-2.84-6.35-6.35-6.35Zm2.22,5.87c-1.14,0-2.06-.92-2.06-2.06s.92-2.06,2.06-2.06,2.06.92,2.06,2.06-.92,2.06-2.06,2.06Z" />
            <polygon
                points="125.29 515.95 126.53 514.42 126.53 513.08 125.58 513.08 125.58 514.09 124.56 515.36 125.29 515.95" />
            <polygon
                points="138.01 511.65 131.12 508.63 130.74 509.49 133.66 510.77 133.34 511.22 131.76 511.67 132.02 512.58 133.91 512.04 134.54 511.15 137.64 512.51 138.01 511.65" />
            <polygon
                points="116.3 491.78 123.2 494.81 123.58 493.94 120.66 492.66 120.98 492.21 122.55 491.76 122.29 490.86 120.4 491.39 119.78 492.28 116.68 490.92 116.3 491.78" />
            <polygon
                points="115.87 502.31 118.93 501.39 118.65 500.49 111.44 502.67 111.72 503.57 114.95 502.59 115.47 503.54 117.28 504.3 117.65 503.43 116.14 502.8 115.87 502.31" />
            <polygon
                points="138.72 500.41 141.77 499.48 141.5 498.58 134.29 500.76 134.56 501.66 137.8 500.68 138.32 501.64 140.13 502.4 140.49 501.53 138.99 500.9 138.72 500.41" />
            <polygon
                points="120.9 511.42 120.45 511.08 122.86 508.98 122.24 508.27 121.25 509.13 120.58 508.33 120.56 507.31 119.62 507.33 119.65 508.67 120.55 509.75 116.57 513.23 117.18 513.94 119.73 511.71 120.59 512.37 122.56 512.31 122.53 511.37 120.9 511.42" />
            <polygon
                points="133.12 491.91 133.56 492.24 131.16 494.34 131.78 495.05 132.76 494.19 133.44 495 133.45 496.01 134.4 495.99 134.37 494.65 133.47 493.57 137.45 490.09 136.83 489.39 134.29 491.61 133.42 490.96 131.46 491.01 131.49 491.95 133.12 491.91" />
            <polygon
                points="126.7 487.38 125.87 489.77 126.45 491.4 127.59 490.99 127.15 489.76 127.84 487.77 126.7 487.38" />
            <polygon
                points="139.78 507.8 137.96 506.04 136.24 505.89 136.13 507.1 137.43 507.21 138.94 508.67 139.78 507.8" />
        </g>
    </g>
</template>

<style lang="postcss" scoped></style>

<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';
const controlsStore = useControlsStore();
</script>

<template>
    <g
        :class="{ 'svg-active': controlsStore.selectedItem === 'comfort-time-after-blink-test' }"
        class="svg-fill-path">
        <g>
            <path
                class="measurement-cls-12"
                d="m473.55,106.87c0-2.06,1.56-3.67,3.73-3.67,1.56,0,3.04.99,3.45,2.56h-1.73c-.3-.66-1.02-1.02-1.72-1.02-1.3,0-2.13.94-2.13,2.13s.83,2.13,2.13,2.13c.7,0,1.42-.36,1.72-1.02h1.73c-.41,1.57-1.89,2.56-3.45,2.56-2.17,0-3.73-1.61-3.73-3.67Z" />
            <path
                class="measurement-cls-12"
                d="m481.32,106.87c0-2.02,1.64-3.67,3.67-3.67s3.67,1.65,3.67,3.67-1.65,3.67-3.67,3.67-3.67-1.65-3.67-3.67Zm5.73,0c0-1.15-.91-2.13-2.06-2.13s-2.07.98-2.07,2.13.91,2.13,2.07,2.13,2.06-.98,2.06-2.13Z" />
            <path
                class="measurement-cls-12"
                d="m491.35,106.04v4.38h-1.59v-7.1h1.45l2.22,3.06,2.22-3.06h1.45v7.1h-1.6v-4.38l-2.07,2.87-2.08-2.87Z" />
            <path
                class="measurement-cls-12"
                d="m498.6,103.32h4.37v1.52h-2.78v1.28h2.17v1.52h-2.17v2.78h-1.59v-7.1Z" />
            <path
                class="measurement-cls-12"
                d="m503.51,106.87c0-2.02,1.64-3.67,3.67-3.67s3.67,1.65,3.67,3.67-1.65,3.67-3.67,3.67-3.67-1.65-3.67-3.67Zm5.73,0c0-1.15-.91-2.13-2.06-2.13s-2.07.98-2.07,2.13.91,2.13,2.07,2.13,2.06-.98,2.06-2.13Z" />
            <path
                class="measurement-cls-12"
                d="m511.95,103.32h2.8c1.34,0,2.2.96,2.2,2.14,0,.92-.49,1.51-1.39,1.83l2.51,3.13h-1.91l-2.36-2.93h-.26v2.93h-1.59v-7.1Zm2.61,2.82c.47,0,.81-.27.81-.68s-.34-.68-.81-.68h-1.02v1.36h1.02Z" />
            <path
                class="measurement-cls-12"
                d="m519.63,104.84h-1.81v-1.52h5.24v1.52h-1.83v5.58h-1.6v-5.58Z" />
            <path
                class="measurement-cls-12"
                d="m526.98,104.84h-1.81v-1.52h5.24v1.52h-1.83v5.58h-1.6v-5.58Z" />
            <path
                class="measurement-cls-12"
                d="m531.38,103.32h1.59v7.1h-1.59v-7.1Z" />
            <path
                class="measurement-cls-12"
                d="m536.06,106.04v4.38h-1.59v-7.1h1.45l2.22,3.06,2.22-3.06h1.45v7.1h-1.6v-4.38l-2.07,2.87-2.08-2.87Z" />
            <path
                class="measurement-cls-12"
                d="m543.31,103.32h4.5v1.52h-2.91v1.27h2.31v1.52h-2.31v1.27h2.91v1.52h-4.5v-7.1Z" />
            <path
                class="measurement-cls-12"
                d="m553.25,103.32h1.44l3.04,7.1h-1.66l-.63-1.5h-2.94l-.63,1.5h-1.66l3.04-7.1Zm1.61,4.22l-.89-2.14-.89,2.14h1.78Z" />
            <path
                class="measurement-cls-12"
                d="m558.47,103.32h4.37v1.52h-2.78v1.28h2.17v1.52h-2.17v2.78h-1.59v-7.1Z" />
            <path
                class="measurement-cls-12"
                d="m565.2,104.84h-1.81v-1.52h5.24v1.52h-1.83v5.58h-1.6v-5.58Z" />
            <path
                class="measurement-cls-12"
                d="m569.6,103.32h4.5v1.52h-2.91v1.27h2.31v1.52h-2.31v1.27h2.91v1.52h-4.5v-7.1Z" />
            <path
                class="measurement-cls-12"
                d="m575.31,103.32h2.8c1.34,0,2.2.96,2.2,2.14,0,.92-.49,1.51-1.39,1.83l2.51,3.13h-1.91l-2.36-2.93h-.26v2.93h-1.59v-7.1Zm2.61,2.82c.47,0,.81-.27.81-.68s-.34-.68-.81-.68h-1.02v1.36h1.02Z" />
            <path
                class="measurement-cls-12"
                d="m500.72,114.32h2.67c1.16,0,2.11.94,2.11,2.11,0,.5-.2.92-.51,1.22.6.31,1.01.92,1.01,1.68,0,1.17-.94,2.09-2.16,2.09h-3.12v-7.1Zm2.49,2.87c.43,0,.74-.32.74-.7s-.31-.72-.74-.72h-.9v1.42h.9Zm.5,2.77c.42,0,.74-.31.74-.71s-.32-.71-.75-.71h-1.39v1.42h1.4Z" />
            <path
                class="measurement-cls-12"
                d="m507.07,114.32h1.59v5.58h2.94v1.52h-4.53v-7.1Z" />
            <path
                class="measurement-cls-12"
                d="m512.59,114.32h1.59v7.1h-1.59v-7.1Z" />
            <path
                class="measurement-cls-12"
                d="m520.73,121.42l-3.46-4.39v4.39h-1.59v-7.1h1.37l3.45,4.38v-4.38h1.6v7.1h-1.37Z" />
            <path
                class="measurement-cls-12"
                d="m523.6,114.32h1.58v2.97l2.41-2.97h1.95l-2.8,3.41,3.37,3.69h-2.04l-2.89-3.18v3.18h-1.58v-7.1Z" />
            <path
                class="measurement-cls-12"
                d="m533.58,115.84h-1.81v-1.52h5.24v1.52h-1.83v5.58h-1.6v-5.58Z" />
            <path
                class="measurement-cls-12"
                d="m537.98,114.32h4.5v1.52h-2.91v1.27h2.31v1.52h-2.31v1.27h2.91v1.52h-4.5v-7.1Z" />
            <path
                class="measurement-cls-12"
                d="m543.26,119.14h1.59c.1.6.59.93,1.21.93.53,0,.92-.23.92-.63,0-.33-.25-.59-.93-.77l-.69-.18c-1.13-.3-1.91-1.02-1.92-2.13-.01-1.34.97-2.16,2.44-2.16,1.55,0,2.52,1.13,2.56,2.22h-1.58c-.16-.56-.6-.75-.98-.75-.46,0-.83.2-.84.58,0,.39.31.62.86.76l.81.21c1.16.3,1.88,1.06,1.88,2.17,0,1.21-1,2.15-2.53,2.15-1.76,0-2.74-1.21-2.8-2.4Z" />
            <path
                class="measurement-cls-12"
                d="m550.83,115.84h-1.81v-1.52h5.24v1.52h-1.83v5.58h-1.6v-5.58Z" />
        </g>
        <g>
            <g id="a0Abqb">
                <path
                    d="m550.12,92.02c.68-1.62,1.36-3.24,2.04-4.85.68-1.61,1.36-3.23,2.06-4.88h-3.81c.09-.24.17-.45.25-.66,1.15-2.89,2.3-5.79,3.44-8.68.06-.15.13-.2.29-.2,1.23,0,2.45,0,3.68,0,.06,0,.11,0,.21.01-.92,2.22-1.82,4.42-2.74,6.66h4.02c-.06.1-.09.16-.13.21-1.53,2.08-3.06,4.16-4.59,6.23-1.49,2.02-2.97,4.03-4.46,6.05-.06.08-.1.17-.27.12Z" />
            </g>
            <path
                d="m554.33,93.32c-5.28-.21-10.07-1.88-14.6-4.4-2.99-1.67-5.79-3.61-8.17-6.09-1.18-1.23-1.18-1.64.04-2.8,3.57-3.39,7.58-6.12,12.11-8.08,7.71-3.33,15.32-3,22.83.63,3.99,1.93,7.58,4.45,10.79,7.5,1.12,1.06,1.14,1.56.05,2.59-4.99,4.67-10.62,8.27-17.36,9.83-1.85.43-3.78.55-5.67.82Zm0-2.35c5.11.09,9.56-4.18,9.66-9.27.1-5.33-4.11-9.77-9.34-9.85-5.33-.08-9.71,4.12-9.8,9.4-.1,5.25,4.18,9.64,9.48,9.73Zm-9.04-1.93c-3.56-5.05-3.52-10.08-.09-15.19-4.49,1.77-8.34,4.37-11.93,7.64,3.61,3.33,7.53,5.86,12.02,7.55Zm18.31-.05c4.44-1.74,8.3-4.32,11.88-7.59-3.55-3.23-7.39-5.83-11.85-7.55,3.47,5.07,3.45,10.09-.03,15.14Z" />
        </g>
        <g>
            <line
                class="measurement-cls-7"
                x1="509.05"
                y1="81.49"
                x2="518.95"
                y2="81.49" />
            <polygon points="517.32 87.07 526.99 81.49 517.32 75.9 517.32 87.07" />
        </g>
        <g id="Pc4Sao">
            <g>
                <path
                    d="m472.9,80.99c.01-6.45,4.12-12.33,10.15-14.46.86-.3,1.77-.48,2.67-.69.2-.05.29-.12.28-.32,0-.04,0-.09,0-.13.09-.61-.11-1.01-.63-1.44-1.42-1.16-1.89-2.73-1.46-4.5.43-1.75,1.58-2.87,3.33-3.29,3-.73,5.82,1.72,5.54,4.79-.13,1.37-.75,2.48-1.89,3.26-.23.16-.35.32-.31.61.04.31-.06.71.1.9.15.18.56.15.85.22,3.46.78,6.34,2.52,8.61,5.25,1.74,2.1,2.85,4.51,3.29,7.19.69,4.21-.23,8.08-2.7,11.56-1.97,2.76-4.62,4.61-7.83,5.65-6.27,2.04-13.41-.38-17.17-5.8-1.36-1.96-2.24-4.11-2.62-6.45-.13-.78-.15-1.57-.22-2.36Zm27.49-.03c0-6.7-5.41-12.12-12.1-12.12-6.63,0-12.1,5.45-12.1,12.07,0,6.73,5.41,12.15,12.11,12.15,6.67,0,12.09-5.43,12.09-12.1Zm-12.09-18.36c.65,0,1.3.02,1.95-.01.16,0,.38-.12.47-.25.63-.84.78-1.78.45-2.77-.4-1.19-1.26-1.89-2.49-2.05-1.32-.16-2.38.36-3.03,1.52-.63,1.12-.52,2.25.21,3.31.12.17.27.25.49.25.65-.01,1.3,0,1.95,0Z" />
                <path
                    d="m498.31,67.4c.76-.75,1.52-1.5,2.29-2.24.04-.04.24.02.3.08.77.75,1.52,1.51,2.28,2.26.37.37.73.74,1.1,1.1.13.13.14.22,0,.35-.7.69-1.4,1.39-2.09,2.09-.11.11-.2.13-.33,0-1.16-1.16-2.31-2.31-3.47-3.47-.04-.04-.05-.09-.1-.18Z" />
                <path
                    d="m478.34,67.5c-.39.36-.75.67-1.1,1.01-.83.81-1.65,1.63-2.46,2.46-.19.2-.31.19-.49,0-.64-.66-1.3-1.31-1.96-1.95-.17-.17-.17-.29,0-.45,1.12-1.11,2.24-2.23,3.36-3.36.13-.13.22-.14.35,0,.73.74,1.47,1.47,2.3,2.3Z" />
                <path
                    d="m488.3,84.7c-1.81,0-3.4-1.32-3.69-3.02-.32-1.83.64-3.67,2.53-4.28,1.27-.41,2.47-.17,3.52.67.2.16.36.19.61.11,1.98-.64,3.96-1.27,5.95-1.89.13-.04.28-.07.42-.07.37,0,.66.2.75.51.09.32-.03.69-.35.87-.7.41-1.42.8-2.13,1.19-1.2.66-2.39,1.32-3.6,1.97-.18.1-.27.21-.28.42-.11,1.99-1.74,3.52-3.73,3.52Z" />
            </g>
        </g>
    </g>
</template>

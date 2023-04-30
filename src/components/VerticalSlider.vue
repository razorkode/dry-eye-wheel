<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';
import VueSlider from 'vue-slider-component';

const controlsStore = useControlsStore();
</script>

<template>
    <div
        @click="controlsStore.handleClickVerticalSlider()"
        style="height: calc(100% - 70px)">
        <VueSlider
            v-model="controlsStore.sliderValue"
            direction="ttb"
            :dotSize="[30, 60]"
            :hide-label="true"
            :interval="50"
            :marks="true"
            tooltip="none"
            style="display: inline-block; height: 100%" />
    </div>
</template>

<style lang="postcss">
.vue-slider {
    border-radius: 50px;
    padding: 32px 14px !important;
    background-color: #fff;
    border: 3px solid #e5e6e7;
}

.vue-slider-disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.vue-slider-rail {
    border-radius: 15px;
}

.vue-slider-process {
    border-radius: 15px;
}

.vue-slider-marks {
    visibility: hidden;
}

.vue-slider-mark {
    z-index: 4;
}

.vue-slider-mark:first-child .vue-slider-mark-step,
.vue-slider-mark:last-child .vue-slider-mark-step {
    display: none;
}

.vue-slider-mark-step {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.16);
}

.vue-slider-mark-label {
    font-size: 14px;
    white-space: nowrap;
}

.vue-slider-dot-handle {
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    background-color: #929497;
    box-sizing: border-box;
    box-shadow: 0.5px 0.5px 2px 1px rgba(0, 0, 0, 0.32);
}

.vue-slider-dot-handle-disabled {
    cursor: not-allowed;
    background-color: #ccc;
}

.vue-slider-dot-tooltip-inner {
    font-size: 14px;
    white-space: nowrap;
    padding: 2px 5px;
    min-width: 20px;
    text-align: center;
    color: #fff;
    border-radius: 5px;
    border-color: #3498db;
    background-color: #3498db;
    box-sizing: content-box;
}

.vue-slider-dot-tooltip-inner::after {
    content: '';
    position: absolute;
}

.vue-slider-dot-tooltip-inner-top::after {
    top: 100%;
    left: 50%;
    transform: translate(-50%, 0);
    height: 0;
    width: 0;
    border-color: transparent;
    border-style: solid;
    border-width: 5px;
    border-top-color: inherit;
}

.vue-slider-dot-tooltip-inner-bottom::after {
    bottom: 100%;
    left: 50%;
    transform: translate(-50%, 0);
    height: 0;
    width: 0;
    border-color: transparent;
    border-style: solid;
    border-width: 5px;
    border-bottom-color: inherit;
}

.vue-slider-dot-tooltip-inner-left::after {
    left: 100%;
    top: 50%;
    transform: translate(0, -50%);
    height: 0;
    width: 0;
    border-color: transparent;
    border-style: solid;
    border-width: 5px;
    border-left-color: inherit;
}

.vue-slider-dot-tooltip-inner-right::after {
    right: 100%;
    top: 50%;
    transform: translate(0, -50%);
    height: 0;
    width: 0;
    border-color: transparent;
    border-style: solid;
    border-width: 5px;
    border-right-color: inherit;
}

.vue-slider-dot-tooltip-wrapper {
    opacity: 0;
    transition: all 0.3s;
}
.vue-slider-dot-tooltip-wrapper-show {
    opacity: 1;
}
</style>

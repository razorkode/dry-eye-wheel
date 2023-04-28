<script setup>
import { onMounted } from 'vue';
import { useControlsStore } from '../../stores/controlsStore.js';
import ManagementSvg from './management/MainSvg.vue';
import MitigationSvg from './mitigation/MainSvg.vue';
import MeasurementSvg from './measurement/MainSvg.vue';

const controlsStore = useControlsStore();

const setContainerSize = () => {
    const container = document.querySelector('.container');
    const firstSvg = container.querySelector('.first-svg');

    const width = firstSvg.clientWidth || firstSvg.getBoundingClientRect().width;
    const height = firstSvg.clientHeight || firstSvg.getBoundingClientRect().height;

    container.style.width = `${width - 80}px`;
    container.style.height = `${height - 80}px`;
};

onMounted(() => {
    setContainerSize();
    window.addEventListener('resize', setContainerSize);
});
</script>

<template>
    <div class="relative">
        <div class="container">
            <MitigationSvg
                :class="{
                    'left-[-40px] top-[-20px]': controlsStore.selectedArea === 'mitigation',
                    grayscale: controlsStore.selectedArea !== 'mitigation',
                }"
                class="first-svg absolute max-h-[500px] w-full" />

            <MeasurementSvg
                :class="{
                    'left-[40px] top-[-20px]': controlsStore.selectedArea === 'measurement',
                    grayscale: controlsStore.selectedArea !== 'measurement',
                }"
                class="absolute max-h-[500px] w-full" />

            <ManagementSvg
                :class="{
                    'top-[45px]': controlsStore.selectedArea === 'management',
                    grayscale: controlsStore.selectedArea !== 'management',
                }"
                class="absolute max-h-[500px] w-full" />
        </div>
    </div>
</template>

<style lang="postcss" scoped></style>

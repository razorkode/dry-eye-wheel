<script setup>
import { onMounted } from 'vue';
import ManagementSvg from './management/MainSvg.vue';
import MitigationSvg from './mitigation/MainSvg.vue';
import MeasurementSvg from './measurement/MainSvg.vue';

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
            <MitigationSvg class="first-svg absolute max-h-[500px]" />
            <MeasurementSvg class="absolute max-h-[500px]" />
            <ManagementSvg class="absolute max-h-[500px]" />
        </div>
    </div>
</template>

<style lang="postcss" scoped></style>

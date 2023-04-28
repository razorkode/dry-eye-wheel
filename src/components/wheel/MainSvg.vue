<script setup>
import { onMounted } from 'vue';
import { useControlsStore } from '../../stores/controlsStore.js';
import ManagementSvg from './management/MainSvg.vue';
import MitigationSvg from './mitigation/MainSvg.vue';
import MeasurementSvg from './measurement/MainSvg.vue';

const controlsStore = useControlsStore();

const setContainerSize = () => {
    const container = document.querySelector('.container');
    const firstSvg = container.querySelector('.mitigation-svg');

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
                    active: controlsStore.selectedArea === 'mitigation',
                    grayscale: controlsStore.selectedArea !== 'mitigation',
                }"
                class="mitigation-svg absolute max-h-[700px] w-full transition-all duration-300" />

            <MeasurementSvg
                :class="{
                    active: controlsStore.selectedArea === 'measurement',
                    grayscale: controlsStore.selectedArea !== 'measurement',
                }"
                class="measurement-svg absolute max-h-[700px] w-full transition-all duration-300" />

            <ManagementSvg
                :class="{
                    active: controlsStore.selectedArea === 'management',
                    grayscale: controlsStore.selectedArea !== 'management',
                }"
                class="management-svg absolute max-h-[700px] w-full" />
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.mitigation-svg {
    top: 0px;
    left: 0px;
    animation: mitigation-slide-in 300ms ease-in-out 1 alternate;

    &.active {
        top: -20px;
        left: -40px;
        animation: mitigation-slide-out 300ms ease-in-out 1 alternate;
    }
}

@keyframes mitigation-slide-in {
    0% {
        top: -20px;
        left: -40px;
    }
    100% {
        top: 0px;
        left: 0px;
    }
}

@keyframes mitigation-slide-out {
    0% {
        top: 0px;
        left: 0px;
    }
    100% {
        top: -20px;
        left: -40px;
    }
}

.measurement-svg {
    top: 0px;
    left: 0px;
    animation: measurement-slide-in 300ms ease-in-out 1 alternate;

    &.active {
        top: -20px;
        left: 40px;
        animation: measurement-slide-out 300ms ease-in-out 1 alternate;
    }
}

@keyframes measurement-slide-in {
    0% {
        top: -20px;
        left: 40px;
    }
    100% {
        top: 0px;
        left: 0px;
    }
}

@keyframes measurement-slide-out {
    0% {
        top: 0px;
        left: 0px;
    }
    100% {
        top: -20px;
        left: 40px;
    }
}

.management-svg {
    top: 0px;
    animation: management-slide-in 300ms ease-in-out 1 alternate;

    &.active {
        top: 45px;
        animation: management-slide-out 300ms ease-in-out 1 alternate;
    }
}

@keyframes management-slide-in {
    0% {
        top: 45px;
    }
    100% {
        top: 0px;
    }
}

@keyframes management-slide-out {
    0% {
        top: 0px;
    }
    100% {
        top: 45px;
    }
}
</style>

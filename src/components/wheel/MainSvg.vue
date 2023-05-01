<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';
import ManagementSvg from '@/components/wheel/management/MainSvg.vue';
import MitigationSvg from '@/components/wheel/mitigation/MainSvg.vue';
import MeasurementSvg from '@/components/wheel/measurement/MainSvg.vue';
import MitigationPopovers from '@/components/layout/MitigationPopovers.vue';
import MeasurementPopovers from '@/components/layout/MeasurementPopovers.vue';
import ManagementPopovers from '@/components/layout/ManagementPopovers.vue';

const controlsStore = useControlsStore();
</script>

<template>
    <div class="relative h-full w-full">
        <MitigationPopovers />
        <MeasurementPopovers />
        <ManagementPopovers />

        <MitigationSvg
            :class="controlsStore.mitigationAreaClasses"
            class="mitigation-svg absolute max-h-[800px] w-full transition-all duration-300" />

        <MeasurementSvg
            :class="controlsStore.measurementAreaClasses"
            class="measurement-svg absolute max-h-[800px] w-full transition-all duration-300" />

        <ManagementSvg
            :class="controlsStore.managementAreaClasses"
            class="management-svg absolute max-h-[800px] w-full" />

        <!-- Key Area -->
        <div
            class="w-54 absolute bottom-0 right-0 flex flex-col gap-2 border-4 border-[#E5E6E7] p-3 font-euclid-circular-medium text-sm">
            <div class="flex gap-2">
                <div class="items-center justify-center">
                    <img
                        class="h-5 w-5"
                        src="../../assets/svg/orange-dot.svg" />
                </div>
                <div class="grow items-center">Simple Treatment</div>
            </div>
            <div class="flex gap-2">
                <div class="items-center justify-center">
                    <img
                        class="h-5 w-5"
                        src="../../assets/svg/silver-dot.svg" />
                </div>
                <div class="grow items-center">Moderate Treatment</div>
            </div>
            <div class="flex gap-2">
                <div class="items-center justify-center">
                    <img
                        class="h-5 w-5"
                        src="../../assets/svg/yellow-dot.svg" />
                </div>
                <div class="grow items-center">Complex Treatment</div>
            </div>
        </div>

        <!-- Grayscale class needs to exist in a template to build in Tailwind -->
        <span class="hidden grayscale"></span>
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

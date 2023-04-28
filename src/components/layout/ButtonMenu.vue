<script setup>
import { useControlsStore } from '../../stores/controlsStore.js';
import GradientButton from '../GradientButton.vue';

const controlsStore = useControlsStore();
</script>

<template>
    <div class="mx-6 flex w-[440px] max-w-full flex-col gap-3 overflow-y-hidden p-[3px]">
        <!-- Mitigation -->
        <template v-if="controlsStore.selectedArea === 'mitigation'">
            <GradientButton
                :class="{ active: controlsStore.selectedArea === 'mitigation' }"
                class="btn-area">
                Mitigation
            </GradientButton>
            <div class="grid grid-cols-2 gap-3">
                <GradientButton class="btn-section"> Triaging </GradientButton>
                <GradientButton class="btn-section"> Risk Factors </GradientButton>
            </div>
            <div class="grid grid-cols-2 gap-3">
                <GradientButton class="btn-orange"> Questionnaire </GradientButton>
                <GradientButton class="btn-orange"> Contact Lens </GradientButton>
            </div>
            <div class="grid grid-cols-2 gap-3">
                <GradientButton class="btn-silver"> Differential </GradientButton>
                <GradientButton class="btn-orange"> Eye Strain </GradientButton>
            </div>
            <div class="grid grid-cols-2 gap-3">
                <GradientButton class="btn-yellow"> Prophylaxis </GradientButton>
                <GradientButton class="btn-silver"> Environment </GradientButton>
            </div>
            <div class="grid grid-cols-2 gap-3">
                <div>&nbsp;</div>
                <GradientButton class="btn-silver"> Hormones </GradientButton>
            </div>
            <div class="mb-6 grid grid-cols-2 gap-3">
                <div>&nbsp;</div>
                <GradientButton class="btn-yellow"> Medication Review </GradientButton>
            </div>
        </template>

        <!-- Measurement -->
        <template v-if="controlsStore.selectedArea === 'mitigation' || controlsStore.selectedArea === 'measurement'">
            <GradientButton
                :class="{ active: controlsStore.selectedArea === 'measurement' }"
                class="btn-area">
                Measurement
            </GradientButton>
            <div class="grid grid-cols-2 gap-3">
                <GradientButton class="btn-section"> Diagnosis </GradientButton>
                <GradientButton class="btn-section"> Sub-Classification </GradientButton>
            </div>
            <div class="grid grid-cols-2 gap-3">
                <GradientButton class="btn-orange"> Orange Button </GradientButton>
                <GradientButton class="btn-yellow"> Yellow Button </GradientButton>
            </div>
            <div class="mb-6 grid grid-cols-2 gap-3">
                <GradientButton class="btn-silver"> Silver Button </GradientButton>
                <GradientButton class="btn-silver"> Silver Button </GradientButton>
            </div>
        </template>

        <!-- Management -->
        <GradientButton
            :class="{ active: controlsStore.selectedArea === 'management' }"
            class="btn-area">
            Management
        </GradientButton>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton class="btn-orange"> Orange Button </GradientButton>
            <GradientButton class="btn-yellow"> Yellow Button </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton class="btn-silver"> Silver Button </GradientButton>
            <GradientButton class="btn-silver"> Silver Button </GradientButton>
        </div>
    </div>
</template>

<style lang="postcss" scoped></style>

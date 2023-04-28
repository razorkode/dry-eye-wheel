<script setup>
import { useControlsStore } from '../../stores/controlsStore.js';
import GradientButton from '../GradientButton.vue';

const controlsStore = useControlsStore();
</script>

<template>
    <div class="mx-6 flex min-w-[360px] max-w-full flex-col gap-3 overflow-y-hidden p-[3px]">
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
                <GradientButton class="btn-orange"> Comfort Time After Blink Test </GradientButton>
                <GradientButton class="btn-orange"> Blink Rate & Completeness </GradientButton>
            </div>
            <div class="grid grid-cols-2 gap-3">
                <GradientButton class="btn-orange"> Validated Questionnaire </GradientButton>
                <GradientButton class="btn-silver"> Tear Meniscus Height </GradientButton>
            </div>
            <div class="grid grid-cols-2 gap-3">
                <GradientButton class="btn-silver"> Fluorescein Staining </GradientButton>
                <GradientButton class="btn-silver"> Meibomian Gland Expression </GradientButton>
            </div>
            <div class="grid grid-cols-2 gap-3">
                <GradientButton class="btn-silver"> Non-Invasive Breakup Time </GradientButton>
                <GradientButton class="btn-yellow"> Tear Meniscus Height </GradientButton>
            </div>
            <div class="grid grid-cols-2 gap-3">
                <GradientButton class="btn-silver"> Osmolarity </GradientButton>
                <div>&nbsp;</div>
            </div>
            <div class="grid grid-cols-2 gap-3">
                <GradientButton class="btn-yellow"> Lissamine Green Staining </GradientButton>
                <div>&nbsp;</div>
            </div>
        </template>

        <!-- Management -->
        <GradientButton
            :class="{ active: controlsStore.selectedArea === 'management' }"
            class="btn-area">
            Management
        </GradientButton>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton class="btn-orange"> Lid Wipes </GradientButton>
            <GradientButton class="btn-orange"> Warm Compress </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton class="btn-orange"> Blink Exercises </GradientButton>
            <GradientButton class="btn-orange"> Advice </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton class="btn-orange"> Artificial Tears </GradientButton>
            <GradientButton class="btn-silver"> Scleral Lenses </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton class="btn-silver"> Pharma-ceuticals </GradientButton>
            <GradientButton class="btn-silver"> Intense Pulsed Light Therapy </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton class="btn-yellow"> Punctal Plugs </GradientButton>
            <div>&nbsp;</div>
        </div>
    </div>
</template>

<style lang="postcss" scoped></style>

<script setup>
import { useControlsStore } from '../../stores/controlsStore.js';
import GradientButton from '../GradientButton.vue';

const controlsStore = useControlsStore();
</script>

<template>
    <div class="mx-6 flex min-w-[320px] max-w-full flex-col gap-3 overflow-y-hidden p-[3px]">
        <!-- Mitigation -->
        <template v-if="controlsStore.selectedArea === 'mitigation' || controlsStore.defaultState">
            <GradientButton
                @click="controlsStore.selectArea('mitigation')"
                :class="{ active: controlsStore.selectedArea === 'mitigation' }"
                class="btn-area">
                Mitigation
            </GradientButton>
            <div class="grid grid-cols-2 gap-3">
                <GradientButton
                    @click="controlsStore.selectSection('triaging', 'mitigation')"
                    :class="{ active: controlsStore.selectedSection === 'triaging' }"
                    class="btn-section">
                    Triaging
                </GradientButton>
                <GradientButton
                    @click="controlsStore.selectSection('risk-factors', 'mitigation')"
                    :class="{ active: controlsStore.selectedSection === 'risk-factors' }"
                    class="btn-section">
                    Risk Factors
                </GradientButton>
            </div>
            <div class="grid grid-cols-2 gap-3">
                <GradientButton
                    @click="controlsStore.selectItem('questionnaire', 'triaging', 'mitigation')"
                    :class="{ active: controlsStore.selectedItem === 'questionnaire' }"
                    class="btn-orange">
                    Questionnaire
                </GradientButton>
                <GradientButton
                    @click="controlsStore.selectItem('contact-lens', 'risk-factors', 'mitigation')"
                    :class="{ active: controlsStore.selectedItem === 'contact-lens' }"
                    class="btn-orange">
                    Contact Lens
                </GradientButton>
            </div>
            <div class="grid grid-cols-2 gap-3">
                <GradientButton
                    @click="controlsStore.selectItem('differential', 'triaging', 'mitigation')"
                    :class="{ active: controlsStore.selectedItem === 'differential' }"
                    class="btn-silver">
                    Differential
                </GradientButton>
                <GradientButton
                    @click="controlsStore.selectItem('eye-strain', 'risk-factors', 'mitigation')"
                    :class="{ active: controlsStore.selectedItem === 'eye-strain' }"
                    class="btn-orange">
                    Eye Strain
                </GradientButton>
            </div>
            <div class="grid grid-cols-2 gap-3">
                <GradientButton
                    @click="controlsStore.selectItem('prophylaxis', 'triaging', 'mitigation')"
                    :class="{ active: controlsStore.selectedItem === 'prophylaxis' }"
                    class="btn-yellow">
                    Prophylaxis
                </GradientButton>
                <GradientButton
                    @click="controlsStore.selectItem('environment', 'risk-factors', 'mitigation')"
                    :class="{ active: controlsStore.selectedItem === 'environment' }"
                    class="btn-silver">
                    Environment
                </GradientButton>
            </div>
            <div class="grid grid-cols-2 gap-3">
                <div>&nbsp;</div>
                <GradientButton
                    @click="controlsStore.selectItem('hormones', 'risk-factors', 'mitigation')"
                    :class="{ active: controlsStore.selectedItem === 'hormones' }"
                    class="btn-silver">
                    Hormones
                </GradientButton>
            </div>
            <div class="mb-6 grid grid-cols-2 gap-3">
                <div>&nbsp;</div>
                <GradientButton
                    @click="controlsStore.selectItem('medication-review', 'risk-factors', 'mitigation')"
                    :class="{ active: controlsStore.selectedItem === 'medication-review' }"
                    class="btn-yellow">
                    Medication Review
                </GradientButton>
            </div>
        </template>

        <!-- Measurement -->
        <template
            v-if="
                controlsStore.selectedArea === 'mitigation' ||
                controlsStore.selectedArea === 'measurement' ||
                controlsStore.defaultState
            ">
            <GradientButton
                @click="controlsStore.selectArea('measurement')"
                :class="{ active: controlsStore.selectedArea === 'measurement' }"
                class="btn-area">
                Measurement
            </GradientButton>
            <div class="grid grid-cols-2 gap-3">
                <GradientButton
                    @click="controlsStore.selectSection('diagnosis', 'measurement')"
                    :class="{ active: controlsStore.selectedSection === 'diagnosis' }"
                    class="btn-section">
                    Diagnosis
                </GradientButton>
                <GradientButton
                    @click="controlsStore.selectSection('sub-classification', 'measurement')"
                    :class="{ active: controlsStore.selectedSection === 'sub-classification' }"
                    class="btn-section">
                    Sub-Classification
                </GradientButton>
            </div>
            <div class="grid grid-cols-2 gap-3">
                <GradientButton
                    @click="controlsStore.selectItem('comfort-time-after-blink-test', 'diagnosis', 'measurement')"
                    :class="{ active: controlsStore.selectedItem === 'comfort-time-after-blink-test' }"
                    class="btn-orange">
                    Comfort Time After Blink Test
                </GradientButton>
                <GradientButton
                    @click="
                        controlsStore.selectItem('blink-rate-and-completeness', 'sub-classification', 'measurement')
                    "
                    :class="{ active: controlsStore.selectedItem === 'blink-rate-and-completeness' }"
                    class="btn-orange">
                    Blink Rate & Completeness
                </GradientButton>
            </div>
            <div class="grid grid-cols-2 gap-3">
                <GradientButton
                    @click="controlsStore.selectItem('validated-questionnaire', 'diagnosis', 'measurement')"
                    :class="{ active: controlsStore.selectedItem === 'validated-questionnaire' }"
                    class="btn-orange">
                    Validated Questionnaire
                </GradientButton>
                <GradientButton
                    @click="controlsStore.selectItem('tear-meniscus-height', 'sub-classification', 'measurement')"
                    :class="{ active: controlsStore.selectedItem === 'tear-meniscus-height' }"
                    class="btn-silver">
                    Tear Meniscus Height
                </GradientButton>
            </div>
            <div class="grid grid-cols-2 gap-3">
                <GradientButton
                    @click="controlsStore.selectItem('fluorescein-staining', 'diagnosis', 'measurement')"
                    :class="{ active: controlsStore.selectedItem === 'fluorescein-staining' }"
                    class="btn-silver">
                    Fluorescein Staining
                </GradientButton>
                <GradientButton
                    @click="controlsStore.selectItem('meibomian-gland-expression', 'sub-classification', 'measurement')"
                    :class="{ active: controlsStore.selectedItem === 'meibomian-gland-expression' }"
                    class="btn-silver">
                    Meibomian Gland Expression
                </GradientButton>
            </div>
            <div class="grid grid-cols-2 gap-3">
                <GradientButton
                    @click="controlsStore.selectItem('non-invasive-breakup-time', 'diagnosis', 'measurement')"
                    :class="{ active: controlsStore.selectedItem === 'non-invasive-breakup-time' }"
                    class="btn-silver">
                    Non-Invasive Breakup Time
                </GradientButton>
                <GradientButton
                    @click="controlsStore.selectItem('tear-meniscus-height', 'sub-classification', 'measurement')"
                    :class="{ active: controlsStore.selectedItem === 'tear-meniscus-height' }"
                    class="btn-yellow">
                    Tear Meniscus Height
                </GradientButton>
            </div>
            <div class="grid grid-cols-2 gap-3">
                <GradientButton
                    @click="controlsStore.selectItem('osmolarity', 'diagnosis', 'measurement')"
                    :class="{ active: controlsStore.selectedItem === 'osmolarity' }"
                    class="btn-silver">
                    Osmolarity
                </GradientButton>
                <div>&nbsp;</div>
            </div>
            <div class="grid grid-cols-2 gap-3">
                <GradientButton
                    @click="controlsStore.selectItem('lissamine-green-staining', 'diagnosis', 'measurement')"
                    :class="{ active: controlsStore.selectedItem === 'lissamine-green-staining' }"
                    class="btn-yellow">
                    Lissamine Green Staining
                </GradientButton>
                <div>&nbsp;</div>
            </div>
        </template>

        <!-- Management -->
        <GradientButton
            @click="controlsStore.selectArea('management')"
            :class="{ active: controlsStore.selectedArea === 'management' }"
            class="btn-area">
            Management
        </GradientButton>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('lid-wipes', null, 'management')"
                :class="{ active: controlsStore.selectedItem === 'lid-wipes' }"
                class="btn-orange">
                Lid Wipes
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectItem('warm-compress', null, 'management')"
                :class="{ active: controlsStore.selectedItem === 'warm-compress' }"
                class="btn-orange">
                Warm Compress
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('blink-exercises', null, 'management')"
                :class="{ active: controlsStore.selectedItem === 'blink-exercises' }"
                class="btn-orange">
                Blink Exercises
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectItem('advice', null, 'management')"
                :class="{ active: controlsStore.selectedItem === 'advice' }"
                class="btn-orange">
                Advice
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('artificial-tears', null, 'management')"
                :class="{ active: controlsStore.selectedItem === 'artificial-tears' }"
                class="btn-orange">
                Artificial Tears
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectItem('scleral-lenses', null, 'management')"
                :class="{ active: controlsStore.selectedItem === 'scleral-lenses' }"
                class="btn-silver">
                Scleral Lenses
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('pharmaceuticals', null, 'management')"
                :class="{ active: controlsStore.selectedItem === 'pharmaceuticals' }"
                class="btn-silver">
                Pharma-ceuticals
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectItem('intense-pulsed-light-therapy', null, 'management')"
                :class="{ active: controlsStore.selectedItem === 'intense-pulsed-light-therapy' }"
                class="btn-silver">
                Intense Pulsed Light Therapy
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('punctal-plugs', null, 'management')"
                :class="{ active: controlsStore.selectedItem === 'punctal-plugs' }"
                class="btn-yellow">
                Punctal Plugs
            </GradientButton>
            <div>&nbsp;</div>
        </div>
    </div>
</template>

<style lang="postcss" scoped></style>

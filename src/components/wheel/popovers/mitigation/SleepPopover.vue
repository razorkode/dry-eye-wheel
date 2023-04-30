<script setup>
import Card from '@/components/Card.vue';
import SleepIcon from '@/components/icons/Sleep.vue';
import GradientBorderBox from '@/components/layout/GradientBorderBox.vue';
</script>

<template>
    <Card
        title="Sleep"
        class="absolute left-1/2 top-[240px] z-10 col-span-5 ml-[-224px] max-w-xl">
        <template #icon>
            <SleepIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        <div>
            Dry eye disease is just one of many ocular surface diseases. Differential diagnosis helps ensure there
            aren’t other underlying conditions, such as ocular allergy or infection, responsible for the patient’s
            presenting symptoms. Treat co-morbid conditions before tackling any residual dry eye disease, to increase
            the chances of successful outcomes for patients. The TFOS DEWS II triaging checklist quickly and easily
            helps narrow down the diagnosis and avoid unnecessary clinical visits.
        </div>
        <GradientBorderBox>
            <div class="p-3">
                <ul class="mx-1 list-inside list-disc text-left text-xs">
                    <li>How severe is the eye discomfort?</li>
                    <li>Do you have any mouth dryness or swollen glands?</li>
                    <li>How long have your symptoms lasted and was there any triggering event?</li>
                    <li>Is your vision affected and does it clear on blinking?</li>
                    <li>Are the symptoms or any redness much worse in one eye than the other?</li>
                    <li>Do the eyes itch, appear swollen or crusty, or have they given off any discharge?</li>
                    <li>Do you wear contact lenses?</li>
                    <li>
                        Have you been diagnosed with any general health conditions (including recent respiratory
                        infections) or are you taking any medications?
                    </li>
                </ul>
                <div class="text-xs font-bold text-[#2B398F]">
                    + Detailed anterior eye examination differential diagnosis where indicated by answers.
                </div>
            </div>
        </GradientBorderBox>
    </Card>
</template>

<style lang="postcss" scoped></style>

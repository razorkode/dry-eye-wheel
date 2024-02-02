<script setup>
import Card from '@/components/Card.vue';
import GradientBorderBox from '@/components/layout/GradientBorderBox.vue';
</script>

<template>
    <Card
        title="Measurement"
        class="absolute left-1/2 top-[340px] z-10 col-span-5 ml-[-460px] max-w-lg">
        <div>Diagnosis needs to be a standardised process in order for:</div>
        <GradientBorderBox>
            <ul class="mx-1 list-inside list-disc text-left text-xs">
                <li>Patients to have certainty of their disease and trust in clinicians.</li>
                <li>Clinicians to have consistency of approach.</li>
                <li>Authorities to receive robust epidemiological data to plan resource allocation.</li>
            </ul>
        </GradientBorderBox>
        <div>
            Advanced technology is not required for an indicative diagnosis, which can be achieved with a standardised
            questionnaire and the simple comfort time after blink test. Diagnosis can be aided with an ocular surface
            damage assessment with ophthalmic stains and assessment of tear film stability and osmolarity.
        </div>
        <div>
            Likewise, sub-classification to aid the choice of management can be investigated with blinking
            (rate/completeness), tear volume, and meibomian gland expression, as well as meibomian gland imaging.
        </div>
    </Card>
</template>

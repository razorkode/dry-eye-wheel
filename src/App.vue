<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';
import WheelSvg from '@/components/wheel/MainSvg.vue';
import VerticalSlider from '@/components/VerticalSlider.vue';
import Card from '@/components/Card.vue';
import ButtonMenu from '@/components/layout/ButtonMenu.vue';
// import TestOutput from '@/components/TestOutput.vue';

const controlsStore = useControlsStore();
</script>

<template>
    <div class="p-6">
        <div class="flex h-[800px]">
            <!-- Vetical Slider/Menu Area -->
            <div class="flex h-[700px] w-96">
                <VerticalSlider />
                <ButtonMenu />
            </div>

            <!-- Wheel Area -->
            <div class="grow">
                <WheelSvg />
                <!-- <TestOutput /> -->
            </div>
        </div>

        <div class="my-5 grid grid-cols-12 gap-5">
            <!-- The Wheel -->
            <Card
                title="The Wheel"
                theme="card"
                class="col-span-5 max-w-none">
                Dry eye is a chronic condition that will require you to work with your patient to manage it. The wheel
                symbolizes the process of mitigating, measuring, and using that information to inform your management
                approach. When your patient returns for review, you will gather the information again to understand what
                or how it has changed and how this may inform further mitigation, measurement and refine your management
                approach.
            </Card>

            <!-- The Rings -->
            <Card
                title="The Rings"
                theme="card"
                class="col-span-7 max-w-none">
                <div>
                    The rings shown in the dry eye wheel symbolise the simplest through to more complex approaches for
                    mitigation, measurement, and management of dry eye, according to severity.
                </div>
                <div>
                    There is plenty you can do to ease the discomfort of dry eye patients through mitigation,
                    measurement, and management, even with no additional investment (bronze outer ring) or limited
                    investment (silver middle ring). As the majority of patients with dry eye have mild to moderate
                    disease, all practitioners need to get involved, referring to specialist centres when needed.
                </div>
            </Card>
        </div>
    </div>
</template>

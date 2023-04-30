<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';
import Advice from '@/components/icons/Advice.vue';
import Environment from '@/components/icons/Environment.vue';
import WheelSvg from '@/components/wheel/MainSvg.vue';
import VerticalSlider from '@/components/VerticalSlider.vue';
import Card from '@/components/Card.vue';
import ButtonMenu from '@/components/layout/ButtonMenu.vue';
import TestOutput from '@/components/TestOutput.vue';

const controlsStore = useControlsStore();
</script>

<template>
    <div class="p-6">
        <div class="flex h-[700px]">
            <VerticalSlider />
            <ButtonMenu />

            <!-- Wheel Area -->
            <div class="h-full w-full">
                <WheelSvg />
                <TestOutput />
            </div>
        </div>

        <div class="my-5 grid grid-cols-12 gap-5">
            <Card
                title="The Wheel"
                theme="card"
                class="col-span-5 max-w-none">
                Dry eye is a chronic condition that will require you to work with your patient to manage it. The wheel
                symbolises the process of mitigating, measuring and using that information to inform your management
                approach. When your patient returns for review, you will gather the information again to understand what
                or how it has changed and how this may inform further mitigation, measurement and refine your management
                approach.
            </Card>

            <Card
                title="The Rings"
                theme="card"
                class="col-span-7 max-w-none">
                <div>
                    The rings shown in the Dry Eye Wheel symbolise the simplest through to more complex approaches for
                    mitigation, measurement, and management of dry eye, according to severity.
                </div>
                <div>
                    There is plenty you can do to ease the discomfort of dry eye patients through mitigation,
                    measurement and management, even with no additional investment (bronze outer ring) or limited
                    investment (silver middle ring). As the majority of patients with dry eye disease have mild to
                    moderate disease, all practitioners need to get involved, referring to specialist centres when
                    needed.
                </div>
            </Card>
        </div>

        <Card title="Title">
            <template #icon>
                <Environment
                    targetId="sunAnim5"
                    class="!h-32" />
            </template>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusamus temporibus, ut facilis quasi
            nisi nemo? Eius at temporibus sit asperiores, numquam incidunt dicta, ratione dolorem ut ea odit obcaecati.
        </Card>

        <table>
            <tr>
                <td><Advice targetId="sunAnim1" /></td>
                <td><Environment targetId="sunAnim2" /></td>
            </tr>
            <tr>
                <td><Environment targetId="sunAnim3" /></td>
                <td><Environment targetId="sunAnim4" /></td>
            </tr>
        </table>
    </div>
</template>

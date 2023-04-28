<script setup>
import { useControlsStore } from './stores/controlsStore.js';
import SunAnimation from './components/icons/SunAnimation.vue';
import ManagementSvg from './components/wheel/management/MainSvg.vue';
import MitigationSvg from './components/wheel/mitigation/MainSvg.vue';
import MeasurementSvg from './components/wheel/measurement/MainSvg.vue';
import VerticalSlider from './components/VerticalSlider.vue';
import Card from './components/Card.vue';
import ButtonMenu from './components/layout/ButtonMenu.vue';

const controlsStore = useControlsStore();
</script>

<template>
    <div class="p-6">
        <div class="flex h-[500px]">
            <VerticalSlider />
            <ButtonMenu />

            <!-- Wheel Area -->
            <div class="h-full w-full border-2 border-red-600">
                Slider Value: {{ controlsStore.sliderValue }}
                <br />
                Selected Area: {{ controlsStore.selectedArea }}
                <br />
                Selected Section: {{ controlsStore.selectedSection }}
                <br />
                Selected Item: {{ controlsStore.selectedItem }}
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

        <Card>
            <template #icon>
                <SunAnimation
                    targetId="sunAnim5"
                    class="!h-32" />
            </template>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusamus temporibus, ut facilis quasi
            nisi nemo? Eius at temporibus sit asperiores, numquam incidunt dicta, ratione dolorem ut ea odit obcaecati.
        </Card>

        <MitigationSvg />
        <MeasurementSvg />
        <ManagementSvg />

        <table>
            <tr>
                <td><SunAnimation targetId="sunAnim1" /></td>
                <td><SunAnimation targetId="sunAnim2" /></td>
            </tr>
            <tr>
                <td><SunAnimation targetId="sunAnim3" /></td>
                <td><SunAnimation targetId="sunAnim4" /></td>
            </tr>
        </table>
    </div>
</template>

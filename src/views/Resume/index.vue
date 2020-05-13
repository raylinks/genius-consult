<template>
    <default-layout>
        <div class="min-h-screen">
            <div class="h-32 w-full bg-transparent"></div>
            <div class="flex items-center justify-between w-11/12 xl:w-8/12 mx-auto mb-3">
                <p class="text-dark font-semibold">Select Template</p>
                <p class="text-dark font-semibold">Fill Form</p>
                <p class="text-dark font-semibold">Make Payment</p>
            </div>
            <progress-bar :step="step" />

            <template v-if="step == 1">
                <select-template @next="step = 2" />
            </template>
            <template v-if="step === 2">
                <fill-form @continue="step = 3" />
            </template>
            <template v-if="step === 3">
                <make-payment />
            </template>
            <div class="h-32 w-full bg-transparent"></div>
        </div>
    </default-layout>
</template>

<script>
import ProgressBar from '@/components/Progress'
import SelectTemplate from './SelectTemplate'
import FillForm from './FillForm'
import MakePayment from './MakePayment'
export default {
    components: {
        ProgressBar,
        SelectTemplate,
        FillForm,
        MakePayment,
    },
    data() {
        return {
            step: 1,
        }
    },
}
</script>

<style></style>

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
                <fill-form />
            </template>
            <div class="h-32 w-full bg-transparent"></div>
        </div>
    </default-layout>
</template>

<script>
import ProgressBar from '@/components/Progress'
import SelectTemplate from './SelectTemplate'
import FillForm from './FillForm'
export default {
    components: {
        ProgressBar,
        SelectTemplate,
        FillForm,
    },
    data() {
        return {
            step: 2,
        }
    },
}
</script>

<style></style>

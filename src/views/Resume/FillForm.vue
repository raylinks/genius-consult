<template>
    <div class="w-full lg:w-10/12 xl:w-9/12 mx-auto mt-10">
        <personal-info />
        <template v-if="sections.includes('education')">
            <education />
        </template>
        <template v-if="sections.includes('skills')">
            <skills />
        </template>
        <template v-if="sections.includes('experience')">
            <experience />
        </template>
        <template v-if="sections.includes('references')">
            <references />
        </template>
        <template v-if="sections.includes('awards')">
            <awards />
        </template>
        <template v-if="sections.includes('certificates')">
            <certificate />
        </template>
        <other-sections @addSection="addSection" />
    </div>
</template>

<script>
import PersonalInfo from '@/components/forms/PersonalInfo'
import OtherSections from '@/components/forms/OtherSections'
import Skills from '@/components/forms/Skills'
import Education from '@/components/forms/Education'
import References from '@/components/forms/References'
import Awards from '@/components/forms/Awards'
import Experience from '@/components/forms/Experience'
import Certificate from '@/components/forms/Certificate'

export default {
    data() {
        return {
            sections: [],
        }
    },
    mounted() {
        this.sections = JSON.parse(localStorage.getItem('sections')) || []
    },
    components: {
        PersonalInfo,
        OtherSections,
        Skills,
        Education,
        References,
        Awards,
        Experience,
        Certificate,
    },
    methods: {
        addSection(value) {
            this.sections.push(value.toLowerCase())
            localStorage.setItem('sections', JSON.stringify(this.sections))
        },
    },
}
</script>

<style lang="scss">
.wrapper {
    border: 1px solid #9f9eaa;

    .left {
        border-right: 1px solid #9f9eaa;
        @media (max-width: 640px) {
            border-right: 0px !important;
        }
    }

    input[type='text'],
    input[type='date'],
    input[type='url'],
    input[type='email'],
    input[type='number'] {
        padding: 10px;
        height: 55px;
        border: 1px solid #abaabe;
        width: 100%;
        border-radius: 10px;
    }

    textarea {
        padding: 15px;
        border: 1px solid #abaabe;
        width: 100%;
        border-radius: 10px;
    }
}
</style>

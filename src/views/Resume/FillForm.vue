<template>
    <div class="w-9/12 mx-auto mt-10">
        <personal-info />
        <skills />
        <other-sections />
    </div>
</template>

<script>
import PersonalInfo from '@/components/forms/PersonalInfo'
import OtherSections from '@/components/forms/OtherSections'
import Skills from '@/components/forms/Skills'

export default {
    data() {
        return {
            sections: [],
        }
    },
    components: {
        PersonalInfo,
        OtherSections,
        Skills,
    },
}
</script>

<style lang="scss">
.wrapper {
    border: 1px solid #9f9eaa;

    .left {
        border-right: 1px solid #9f9eaa;
    }

    input {
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

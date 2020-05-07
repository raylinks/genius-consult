<template>
    <div class="w-9/12 mx-auto mt-10">
        <personal-info />

        <other-sections />
    </div>
</template>

<script>
import PersonalInfo from '@/components/forms/PersonalInfo'
import OtherSections from '@/components/forms/OtherSections'
export default {
    components: {
        PersonalInfo,
        OtherSections,
    },
}
</script>

<style lang="scss">
.wrapper {
    border: 1px solid #9f9eaa;
}
</style>

<template>
    <div class="relative mb-20">
        <base-header :blog="blog"></base-header>
        <slot></slot>
        <!-- <base-footer></base-footer> -->
    </div>
</template>

<script>
import BaseHeader from './includes/BaseHeader'
// import BaseFooter from './includes/BaseFooter'
export default {
    components: {
        BaseHeader,
        // BaseFooter,
    },

    props: {
        blog: Boolean,
    },
}
</script>

<style></style>

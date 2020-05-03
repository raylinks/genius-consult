<template>
    <div class="relative">
        <base-header></base-header>
        <slot></slot>
        <base-footer></base-footer>
    </div>
</template>

<script>
import BaseHeader from './includes/BaseHeader'
import BaseFooter from './includes/BaseFooter'
export default {
    components: {
        BaseHeader,
        BaseFooter,
    },
}
</script>

<style></style>

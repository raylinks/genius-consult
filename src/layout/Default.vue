<template>
    <div>
        <base-header></base-header>
        <slot></slot>
    </div>
</template>

<script>
import BaseHeader from './includes/BaseHeader'
export default {
    components: {
        BaseHeader,
    },
}
</script>

<style></style>

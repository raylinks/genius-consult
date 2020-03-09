<template>
  <authenticatedWithSideBar-layout>
    <select-template v-if="step === '1'" />
    <fill-resume v-else-if="step === '2'" />
  </authenticatedWithSideBar-layout>
</template>

<script>
/* eslint-disable space-before-function-paren */
import SelectTemplate from './SelectTemplate.vue'
import FillResume from './FillResume.vue'

export default {
  data() {
    return {}
  },
  mounted() {
    console.log(this.$route.params.step)
  },

  computed: {
    step: function() {
      return this.$route.params.step
    }
  },
  components: {
    'select-template': SelectTemplate,
    'fill-resume': FillResume
  }
}
</script>

<style></style>

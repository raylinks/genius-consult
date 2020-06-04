<template>
  <div class="relative mb-20">
    <base-header :blog="blog"></base-header>
    <slot></slot>
    <!-- <base-footer></base-footer> -->
    <whatsapp-widget />
  </div>
</template>

<script>
import BaseHeader from "./includes/BaseHeader";
// import BaseFooter from './includes/BaseFooter'
import WhatsappWidget from "@/components/WhatsappWidget";
export default {
  components: {
    BaseHeader,
    // BaseFooter,
    WhatsappWidget,
  },

  props: {
    blog: Boolean,
  },
};
</script>

<style></style>

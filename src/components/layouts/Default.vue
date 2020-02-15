<template>
  <div class="page-container">
    <div class="nav">
      <p>Genius Consult</p>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Default'
}
</script>

<style lang="scss" scoped>
.nav {
  position: absolute;
  top: 0;
  padding: 10px 30px !important;

  p {
    font-size: 20px;
    color: #464353;
    font-weight: 900;
  }
}
</style>

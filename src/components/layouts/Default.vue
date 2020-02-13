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
.nav{
  position: absolute;
  top: 0;
  padding: 0px 20px;

  p{
    font-size: 20px;
    color: #464353;
    font-weight: 900;
  }
}
</style>

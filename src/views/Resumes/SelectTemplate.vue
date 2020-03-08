<template>
  <div class="selectTemplate">
    <h2 class="mt-4">Please select a template</h2>

    <div class="row holders">
      <div class="col-lg-4 holder-inner">
        <div class="placeholder"></div>
      </div>

      <div class="col-lg-4 holder-inner">
        <div class="placeholder"></div>
      </div>
      <div class="col-lg-4 holder-inner">
        <div class="placeholder"></div>
      </div>
      <div class="col-lg-4 holder-inner">
        <div class="placeholder"></div>
      </div>
      <div class="col-lg-4 holder-inner">
        <div class="placeholder"></div>
      </div>
      <div class="col-lg-4 holder-inner">
        <div class="placeholder"></div>
      </div>
      <div class="col-lg-4 holder-inner">
        <div class="placeholder"></div>
      </div>
      <div class="col-lg-4 holder-inner">
        <div class="placeholder"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>

<style lang="scss" scoped>
$light-blue: #479bff;

.selectTemplate {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #e5eaee;

  h3 {
    color: black;
    margin: 10px 0;
  }

  .holders {
    width: 95%;
    margin: auto;
    justify-content: center;
    .holder-inner {
      margin: 5px;
      max-width: 30% !important;
      margin-bottom: 30px;
      border-radius: 3px;
      border: 1px solid white;
      padding: 0!important;
    }
    .placeholder {
      background: #4b4b4b;
      height: 405px;
      width: 100%;
    }
  }
}
</style>

<template>
  <div>
    <div class="dashboard">
      <router-link to="/resume/create" class="mt-10 btn-genius"
        >Create new Resume</router-link
      >

      <p>You have not created any resume yet, create one right now!</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.dashboard {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;

  p {
    font-size: 1.4rem;
    font-weight: 800;
    margin-top: 20px;
  }
}
.btn-genius {
  font-size: 1.2rem !important;
  color: white;
  border: 1px solid $primary;
  font-weight: 700;
  border-radius: 45px;
  background: $primary;
  padding: 10px 30px;
}
</style>

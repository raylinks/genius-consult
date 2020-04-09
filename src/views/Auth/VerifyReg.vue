<template>
  <div class="ver">
    <div>
      <img src="@/assets/svg/logo.png" alt="" width="200px" />
    </div>
    <h3 class="mt-5">Your email has been verified succesfully</h3>
    <router-link to="/login">Go to Login</router-link>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */
export default {
  name: 'verify-registration-mail',
  created() {
    if (!this.$route.query.user_id) {
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="scss" scoped>
.ver {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    color: black;
  }

  a {
    color: white;
    font-weight: 600;
    background: $primary;
    padding: 10px 30px;
    border-radius: 50px;
    margin-top: 20px;
    border: 1px solid $primary;
    transition: 500ms;

    &:hover {
      text-decoration: none;
      color: $primary;
      background: white;
    }
  }
}
</style>

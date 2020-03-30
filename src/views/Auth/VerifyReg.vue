<template>
  <div class="ver">
    <h3>A confirmation mail has been sent to {{ user.email }}</h3>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */
import { mapGetters } from 'vuex'
import { verifyUser } from '@/api/auth'
export default {
  name: 'verify-registration-mail',
  computed: {
    ...mapGetters('Auth', {
      user: 'getUser'
    })
  },
  mounted() {
    if (this.$route.query.token === undefined) {
      this.$router.push('/register')
    } else {
      verifyUser(this.$route.query.token)
        .then(data => {
          console.log(data)
          this.$router.push('/login')
        })
        .catch(err => {
          this.$swal({
            icon: 'error',
            text: err.response.data.message
          })
        })
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

  h3 {
    color: black;
  }
}
</style>

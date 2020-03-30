<template>
  <div class="register">
    <b-container class="panel d-flex justify-content-center">
      <div class="panel-inner">
        <div class="top">
          <h3 class="text-center">Genius Consult</h3>
        </div>
        <h4 class="title bg-white pt-3 m-0">Sign in to your account</h4>
        <b-row align-v="center" class="h-100">
          <b-col cols="6" class="left d-flex align-items-center">
            <div class="actions">
              <b-button pill variant="outline-secondary" class="btn-genius"
                ><span
                  ><img src="@/assets/svg/google.svg" alt="google icon"
                /></span>
                Sign up with Google</b-button
              >

              <b-button pill variant="primary" class="btn-genius"
                ><span
                  ><img src="@/assets/svg/facebook.svg" alt="facebook icon"
                /></span>
                Sign up with Facebook</b-button
              >
            </div>
          </b-col>
          <b-col cols="6" class="right d-flex align-items-center">
            <RegisterForm type="Login" @Login="login" />
          </b-col>
        </b-row>
        <div class="d-flex justify-content-between mt-1 bottom-text">
          <div></div>

          <p class="hasAccount">
            Don't have an account?
            <router-link to="/register" class="login">Register</router-link>
          </p>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */
import { mapActions, mapGetters } from 'vuex'
const RegisterForm = () => import('@/components/RegisterForm')
export default {
  components: {
    RegisterForm
  },
  data() {
    return {
      continueWithMail: false
    }
  },
  methods: {
    ...mapActions('Auth', {
      login: 'AUTHENTICATE_USER'
    })
  },
  computed: {
    ...mapGetters('Auth', {
      error_message: 'ERROR_MESSAGE'
    })
  },
  watch: {
    error_message: function(newValue, oldValue) {
      if (newValue !== '') {
        this.$swal({
          icon: 'error',
          title: 'AN ERROR OCCURED',
          text: newValue
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.register {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #8e8e8e;

  .panel {
    max-width: 80%;
    margin: auto !important;
    height: 35% !important;
    border-radius: 10px;

    .panel-inner {
      height: 100%;
      width: 70%;
    }

    .top {
      background: #262626 linear-gradient(135deg, #262626 0%, #4b4b4b 100%);

      h3 {
        color: white;
        margin: 0px !important;
        padding: 10px 0;
      }
    }
  }

  .left {
    background: white;
    height: 100%;
    border-bottom-left-radius: 10px;

    .actions {
      .btn-genius {
        padding: 7px 12px;
        margin-top: 10px;
        span {
          margin-right: 20px;
        }
      }
    }
  }

  .right {
    height: 100%;
    background: white;

    .right-inner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    }
  }
}
.title {
  font-size: 1.8rem;
  color: #8e8e8e;
  font-weight: 300;
}
@media screen and (min-width: 600px) {
  .right {
    border-bottom-right-radius: 10px;
  }

  .top {
    border-radius: 7px 7px 0 0;
  }
}
.row {
  margin: 0 !important;
}

@media screen and (max-width: 1024px) {
  .panel-inner {
    width: 100% !important;
  }
}

@media screen and (max-width: 600px) {
  .left {
    display: none !important;
  }

  .right {
    min-width: 100% !important;
  }

  .register .panel {
    max-width: 100% !important;
    height: 100% !important;
    padding: 0 !important;
    overflow: none;
  }

  .bottom-text {
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 0px 10px;
  }
}

.back {
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}

.hasAccount {
  letter-spacing: 0.04em;
  font-weight: 300;

  .login {
    color: black;
    font-weight: 500;
  }
}
</style>

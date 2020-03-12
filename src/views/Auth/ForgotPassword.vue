<template>
  <div>
    <div class="register">
      <b-container class="panel d-flex justify-content-center">
        <div class="panel-inner">
          <div class="top">
            <h3 class="text-center">Genius Consult</h3>
          </div>
          <h4 class="title bg-white pt-3 m-0">Reset your password</h4>
          <b-row align-v="center" class="h-100">
            <b-col cols="12" class="right d-flex align-items-center">
              <b-form @submit.prevent="forgotpassword(email)">
                <b-form-group id="input-group-1" label="Enter your email">
                  <b-form-input
                    id="email"
                    v-model="email"
                    type="email"
                    required
                    placeholder="Email"
                    class="mb-20"
                  ></b-form-input>
                </b-form-group>

                <b-button
                  pill
                  variant="primary"
                  type="submit"
                  class="btn-genius-lg"
                >
                  Reset Password</b-button
                >
              </b-form>
            </b-col>
          </b-row>
          <div class="d-flex justify-content-between mt-1 bottom-text">
            <div></div>

            <p class="hasAccount">
              <router-link to="/login" class="login"
                >Go back to login</router-link
              >
            </p>
          </div>
        </div>
      </b-container>
    </div>

    <b-modal ref="my-modal" hide-footer hide-header id="modal">
      <div class="d-block text-center mt-5">
        <img src="@/assets/svg/success.svg" width="150px" height="150px" />
        <h5>{{ message }}</h5>
      </div>
      <b-button class="mt-3" variant="primary" block @click="hidemodal"
        >Noted!</b-button
      >
    </b-modal>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {},
  data() {
    return {
      email: ''
    }
  },

  mounted() {},

  methods: {
    ...mapActions('Auth', {
      forgotpassword: 'FORGOT_PASSWORD'
    }),

    hidemodal() {
      this.$refs['my-modal'].hide()
    }
  },

  computed: {
    ...mapGetters('Auth', {
      message: 'GET_FORGOT_PASSWORD_MESSAGE',
      modalStatus: 'GET_FORGOT_PASSWORD_STATUS'
    })
  },

  watch: {
    modalStatus: function(newStatus, oldStatus) {
      if (newStatus) {
        this.$refs['my-modal'].show()
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

  .right {
    height: 100%;
    background: white;

    form {
      width: 50%;
      margin: auto;
    }

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

.form-control:first-child {
  height: 40px;
  line-height: 38px;
  padding-left: 15px;
  padding-right: 15px;
  // margin-bottom: 20px!important;
  background-color: #eeeeee;
  border: 1px solid #c2c2c2;
  border-radius: 10px;
  width: 100%;
}

.col-form-label {
  text-align: left !important;
}
</style>

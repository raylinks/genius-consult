<template>
  <div class="register">
    <b-container class="panel d-flex justify-content-center">
      <div class="panel-inner">
        <div class="top">
          <h3 class="text-center">Genius Consult</h3>
        </div>
        <b-row align-v="center" class="h-100">
          <b-col cols="5" class="left d-flex align-items-center">
            <ul class="list">
              <li class="list-item d-flex align-items-center">
                <img
                  src="@/assets/svg/check-circle-solid.svg"
                  alt="checkmark with a circle background"
                  class="mr-3"
                />
                Lorem ipsum dolor sit, amet consectetur
              </li>
              <li class="list-item d-flex align-items-center mt-3">
                <img
                  src="@/assets/svg/check-circle-solid.svg"
                  alt="checkmark with a circle background"
                  class="mr-3"
                />
                Lorem ipsum dolor sit, amet consectetur
              </li>
              <li class="list-item d-flex align-items-center mt-3">
                <img
                  src="@/assets/svg/check-circle-solid.svg"
                  alt="checkmark with a circle background"
                  class="mr-3"
                />
                Lorem ipsum dolor sit, amet consectetur
              </li>

              <li class="list-item d-flex align-items-center mt-3">
                <img
                  src="@/assets/svg/check-circle-solid.svg"
                  alt="checkmark with a circle background"
                  class="mr-3"
                />
                Lorem ipsum dolor sit, amet consectetur
              </li>
            </ul>
          </b-col>
          <b-col cols="7" class="right">
            <h4 class="title">Create your new account</h4>
            <div class="right-inner">
              <template v-if="!continueWithMail">
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

                  <b-button
                    pill
                    variant="outline-secondary"
                    class="btn-genius"
                    @click="continueWithMail = true"
                    ><span
                      ><img
                        src="@/assets/svg/envelope-regular.svg"
                        alt="mail icon"
                    /></span>
                    Sign up with Mail</b-button
                  >
                </div>
              </template>
              <template v-else>
                <RegisterForm type="Register" @Register="register" />
              </template>
            </div>
          </b-col>
        </b-row>
        <div class="d-flex justify-content-between mt-1 bottom-text">
          <div>
            <p
              v-if="continueWithMail"
              @click="continueWithMail = false"
              class="back"
            >
              Back
            </p>
          </div>

          <p class="hasAccount">
            Already have an account?
            <router-link to="/login" class="login">Login</router-link>
          </p>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */
import { registerUser } from '@/api/auth'
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
    register(form) {
      registerUser(form)
        .then(data => {
          console.log(data)
        })
        .catch(e => {
          console.dir(e)
        })

      // fetch(process.env.VUE_APP_API_URL + '/api/register/user', {

      // })
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
    height: 60% !important;
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
    background: $secondary;
    height: 100%;
    border-bottom-left-radius: 10px;
    .list {
      margin: 0 !important;
      padding: 0 !important;
    }
    .list-item {
      color: #c2c2c2 !important;
      text-align: left;
      font-size: 1.1rem;
    }
  }

  .right {
    height: 100%;
    background: white;

    padding-top: 40px;

    .right-inner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      // height: 100%;
      margin-top: 20px;
    }
    .title {
      font-size: 1.8rem;
      color: #8e8e8e;
      font-weight: 300;
    }
    .actions {
      display: flex;
      flex-direction: column;
      margin-top: 50px;
      .btn-genius {
        padding: 7px 12px;
        margin-top: 10px;
        span {
          margin-right: 20px;
        }
      }
    }
  }
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

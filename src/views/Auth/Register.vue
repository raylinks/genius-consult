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
                <RegisterForm />
              </template>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */
const RegisterForm = () => import('@/components/RegisterForm')
export default {
  components: {
    RegisterForm
  },
  data() {
    return {
      continueWithMail: false
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
      border-radius: 7px 7px 0 0;
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
    border-bottom-right-radius: 10px;
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

.row {
  margin: 0 !important;
}
</style>

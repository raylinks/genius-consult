<template>
  <b-form @submit.prevent="onSubmit" @reset="onReset">
    <b-form-group id="input-group-1">
      <b-form-input
        id="input-1"
        v-model="form.email"
        type="email"
        required
        placeholder="Email"
        class="mb-20"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2">
      <b-form-input
        id="input-2"
        v-model="form.password"
        type="password"
        required
        placeholder="Password"
      ></b-form-input>
    </b-form-group>

    <!-- <b-form-group id="input-group-4">
      <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
        <b-form-checkbox value="me" class="checkbox">
          I have read and agree to Kickresumes's
          <a href="/terms/">Terms of use</a>,&nbsp;</b-form-checkbox
        >
        <b-form-checkbox value="that">Check that out</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group> -->
    <template v-if="type == 'Login'">
      <div class="mb-20 fp-wrapper">
        <router-link to="forgotpassword" class="forgotpassword">
          Forgot Password?
        </router-link>
      </div>
    </template>
    <b-button
      pill
      variant="primary"
      type="submit"
      class="btn-genius-lg"
      :disabled="valid || loader"
    >
      {{ type }} <img v-if="loader" src="@/assets/svg/loader/loader.svg"
    /></b-button>
  </b-form>
</template>

<script>
/* eslint-disable space-before-function-paren */
import { mapGetters } from 'vuex'
export default {
  props: ['type'],
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      valid: true
    }
  },
  computed: {
    ...mapGetters('Auth', {
      loader: 'LOADING_STATUS'
    })
  },
  updated() {
    if (this.form.email !== '' && this.form.password !== '') {
      this.valid = false
    } else {
      this.valid = true
    }
  },
  methods: {
    onSubmit() {
      this.$emit(`${this.type}`, this.form)
    },
    onReset() {},

    forgotPassword() {
      this.type = 'Reset Password'
      this.$el.querySelector('#input-group-2').style.display = 'none'
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  width: 70%;
  margin-top: 20px;
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

.form-group {
  margin-bottom: 0px !important;
}
.mb-20 {
  margin-bottom: 20px !important;
}

.forgotpassword {
  color: $primary !important;
  font-size: 0.8rem;
  text-align: right;
  margin-left: auto;
  width: 100%;
  background: transparent;
  border: 0px;
}

.fp-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
  cursor: pointer;
}

.checkbox {
  text-align: left !important;
  font-size: 13px;
}
</style>

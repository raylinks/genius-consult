<template>
  <b-form @submit.prevent="onSubmit" @reset="onReset">
    <b-form-group id="input-group-1">
      <b-form-input
        id="input-1"
        v-model="form.email"
        type="email"
        required
        placeholder="Email"
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

    <b-button pill variant="primary" type="submit" class="btn-genius-lg">
      {{ type }}</b-button
    >
  </b-form>
</template>

<script>
/* eslint-disable space-before-function-paren */
export default {
  props: ['type'],
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$emit(`${this.type}`, this.form)
    },
    onReset() {}
  }
}
</script>

<style lang="scss" scoped>
form {
  width: 70%;
  margin-top: 20px;
}
.form-control {
  height: 40px;
  line-height: 38px;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 10px;
  background-color: #eeeeee;
  border: 1px solid #c2c2c2;
  border-radius: 10px;
  width: 100%;
}

.checkbox {
  text-align: left !important;
  font-size: 13px;
}
</style>

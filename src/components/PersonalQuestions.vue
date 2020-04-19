<template>
  <div class="box pq" style="margin-top: 8rem">
    <div class="top">
      <h4>Personal Info</h4>
    </div>
    <div class="under">
      <div class="picture-col">
        <img src="" alt="something to use as place holder" />
        <div class="mt-10">
          <button class="btn-primary-outline">Upload a Photo</button>
        </div>
      </div>

      <div class="questions">
        <b-form @submit.prevent="submit">
          <b-row>
            <b-col cols="12" sm="6">
              <b-row>
                <b-col cols="12" sm="4">
                  <b-form-group
                    id="title"
                    label="Title before"
                    label-for="title"
                  >
                    <b-form-input
                      id="title-input"
                      v-model="form.title"
                      type="text"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" sm="8">
                  <b-form-group
                    id="first-name"
                    label="First Name"
                    label-for="firstName"
                  >
                    <b-form-input
                      id="first-name-input"
                      v-model="form.firstname"
                      type="text"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row>
                <b-col cols="12">
                  <b-form-group id="dob" label="Date of Birth" label-for="DOB">
                    <b-form-input
                      id="dob-input"
                      v-model="form.date_of_birth"
                      type="date"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12">
                  <b-form-group
                    id="phone-number"
                    label="Phone Number"
                    label-for="phoneNumber"
                  >
                    <b-form-input
                      id="phone-number-input"
                      v-model="form.phone"
                      type="number"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-col>

            <b-col cols="12" sm="6">
              <b-row>
                <b-col cols="12" sm="8">
                  <b-form-group
                    id="last-name"
                    label="Last Name"
                    label-for="lastName"
                  >
                    <b-form-input
                      id="last-name-input"
                      v-model="form.lastname"
                      type="text"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" sm="4">
                  <b-form-group
                    id="title-after"
                    label="Title after"
                    label-for="title-after-input"
                  >
                    <b-form-input
                      id="title-after-input"
                      type="text"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row>
                <b-col cols="12">
                  <b-form-group
                    id="nationality"
                    label="Nationality"
                    label-for="nationality-input"
                  >
                    <b-form-input
                      id="nationality-input"
                      v-model="form.nationality"
                      type="text"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12">
                  <b-form-group
                    id="email-address"
                    label="Email Address"
                    label-for="email-address-input"
                  >
                    <b-form-input
                      id="email-address-input"
                      v-model="form.email"
                      type="email"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-col>

            <b-col cols="12">
              <b-form-group
                id="website"
                label="Website"
                label-for="website-input"
              >
                <b-form-input
                  id="website-input"
                  v-model="form.web"
                  type="link"
                ></b-form-input>
              </b-form-group>
            </b-col>

            <b-col cols="12">
              <b-row>
                <b-col cols="12">
                  <b-form-group
                    id="address"
                    label="Address"
                    label-for="address-input"
                  >
                    <b-form-input
                      id="address-input"
                      v-model="form.address"
                      type="text"
                      placeholder="Street, Number"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-col>

            <b-col cols="12" class="mt-3">
              <label for="textarea">Profile</label>
              <b-form-textarea
                id="profile"
                v-model="form.profile"
                type="text"
                placeholder="Enter something..."
                rows="4"
                max-rows="6"
                class="p-3"
              ></b-form-textarea>
            </b-col>
          </b-row>
          <b-button type="submit" variant="primary" class="mt-4 px-5" pill
            >Continue</b-button
          >
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */
import { submitPersonalQuestions } from '@/api/resume'
export default {
  data() {
    return {
      form: {
        title: '',
        firstname: '',
        lastname: '',
        date_of_birth: '',
        nationality: '',
        phone: '',
        email: '',
        web: '',
        address: '',
        profile: '',
        picture_url: '',
        interest: 'interest'
      }
    }
  },

  methods: {
    submit() {
      submitPersonalQuestions(this.form)
        .then(data => {
          this.$emit('submitted')
        })
        .catch(err => {
          console.dir(err)
        })
    }
  }
}
</script>

<style lang="scss">

</style>

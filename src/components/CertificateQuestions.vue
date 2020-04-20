<template>
  <div class="box">
    <div class="top">
      <h4>Certificates</h4>
      <div class="trash">
        <svg
          height="20px"
          viewBox="-40 0 427 427.00131"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
        >
          <path
            d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"
          />
          <path
            d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"
          />
          <path
            d="m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0"
          />
          <path
            d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"
          />
        </svg>
      </div>
    </div>
    <div class="under">
      <div class="picture-col"></div>

      <div class="questions">
        <b-form @submit.prevent="submit(form)">
          <b-row>
            <b-col cols="12" sm="6">
              <b-form-group
                id="certification"
                label="Certification Name"
                label-for="certification-input"
              >
                <b-form-input
                  id="certification-input"
                  v-model="form.name"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>

            <b-col cols="12" sm="6">
              <b-form-group
                id="authority-title"
                label="Authority"
                label-for="authority-input"
              >
                <b-form-input
                  id="authority-input"
                  v-model="form.authority"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>

            <b-col cols="12" class="mt-3">
              <b-form-group
                id="certification-url"
                label="Certification URL/ code"
                label-for="certification-url-input"
              >
                <b-form-input
                  id="certification-url-input"
                  v-model="form.url"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <div class="ml-3 mt-4">
              <p class="m-auto">Date of Certification</p>
            </div>
            <b-row rows="12" class="select_section ">
              <b-col cols="6">
                <b-form-input
                  id="dob-input"
                  v-model="form.date"
                  type="date"
                  required
                ></b-form-input>
              </b-col>
            </b-row>

            <!-- <b-col cols="12" class="mt-3">
              <b-form-textarea
                id="profile"
                v-model="form.profile"
                type="text"
                placeholder="Enter Note"
                rows="2"
                max-rows="5"
                class="p-3"
              ></b-form-textarea>
            </b-col> -->
          </b-row>
          <b-button type="submit" variant="primary" class="mt-4 px-5" pill
            >Submit</b-button
          >
        </b-form>
        <p
          :class="
            `mt-2 text-danger ${
              message.certificate.type === 'Success'
                ? 'text-success'
                : 'text-danger'
            }`
          "
        >
          {{ message.certificate.note }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      form: {
        name: '',
        authority: '',
        url: '',
        date: ''
      }
    }
  },

  computed: {
    ...mapGetters('Resume', {
      message: 'GET_MESSAGE'
    })
  },

  methods: {
    ...mapActions('Resume', {
      submit: 'SAVE_CERTIFICATE'
    })
  }
}
</script>

<style lang="scss" scoped>
.top {
  position: relative;

  .trash {
    position: absolute;
    right: 20px;
  }
}

.dropdown {
  width: 100%;
}

.btn-outline-secondary {
  border: 1px solid #c2c2c2 !important;
  color: #565656 !important;
  background-color: transparent !important;
  width: 100%;
  text-align: left !important;
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px !important;
  width: 100%;

  &:hover {
    background-color: #f3f3f3 !important;
  }
}

.select_section {
  margin: 0px !important;
  // margin-top: 20px !important;
  width: 95%;
  align-items: center;
  flex-wrap: nowrap !important;
}

.hyphen {
  margin-left: 15px;
}
</style>

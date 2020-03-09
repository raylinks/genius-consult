<template>
  <div class="fillResume">
    <div class="box">
      <div class="top">
        <p>
          select an icon
        </p>
        <h4>Personal Info</h4>
        <p class="bold">?</p>
      </div>
      <div class="under">
        <div class="picture-col">
          <img src="" alt="something to use as place holder" />
          <div class="mt-10">
            <button class="btn-primary-outline">Upload a Photo</button>
          </div>
        </div>

        <div class="questions">
          <b-row>
            <b-col cols="12" sm="6">
              <b-row>
                <b-col cols="12" sm="4">
                  <b-form-group
                    id="input-group-1"
                    label="Title before"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="form.email"
                      type="email"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" sm="8">
                  <b-form-group
                    id="input-group-1"
                    label="First Name"
                    label-for="firstName"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="form.email"
                      type="email"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row>
                <b-col cols="12">
                  <b-form-group
                    id="input-group-1"
                    label="Date of Birth"
                    label-for="DOB"
                  >
                    <b-form-input
                      id="DOB"
                      v-model="form.email"
                      type="date"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12">
                  <b-form-group
                    id="input-group-1"
                    label="Phone Number"
                    label-for="phoneNumber"
                  >
                    <b-form-input
                      id="phoneNumber"
                      v-model="form.email"
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
                    id="input-group-1"
                    label="Last Name"
                    label-for="lastName"
                  >
                    <b-form-input
                      id="lastName"
                      v-model="form.email"
                      type="email"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12" sm="4">
                  <b-form-group
                    id="input-group-1"
                    label="Title after"
                    label-for="titleAfter"
                  >
                    <b-form-input
                      id="titleAfter"
                      v-model="form.email"
                      type="email"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row>
                <b-col cols="12">
                  <b-form-group
                    id="input-group-1"
                    label="Nationality"
                    label-for="nationality"
                  >
                    <b-form-input
                      id="nationality"
                      v-model="form.email"
                      type="text"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12">
                  <b-form-group
                    id="input-group-1"
                    label="Email Address"
                    label-for="emailAddress"
                  >
                    <b-form-input
                      id="emailAddress"
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
                id="input-group-1"
                label="Website"
                label-for="website"
              >
                <b-form-input
                  id="website"
                  v-model="form.email"
                  type="link"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>

            <b-col cols="12" sm="6">
              <b-row>
                <b-col cols="12">
                  <b-form-group
                    id="input-group-1"
                    label="Address"
                    label-for="address"
                  >
                    <b-form-input
                      id="address"
                      v-model="form.email"
                      type="text"
                      placeholder="Street, Number"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12">
                  <b-form-group
                    id="input-group-1"
                    label-for="phoneNumber"
                    label="Postal Code"
                  >
                    <b-form-input
                      id="phoneNumber"
                      v-model="form.email"
                      type="number"
                      placeholder="Postal Code"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-col>

            <b-col cols="12" sm="6">
              <b-row>
                <b-col cols="12">
                  <b-form-group
                    id="input-group-1"
                    label="City"
                    label-for="nationality"
                  >
                    <b-form-input
                      id="nationality"
                      v-model="form.email"
                      type="text"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12">
                  <b-form-group
                    id="input-group-1"
                    label="Country"
                    label-for="emailAddress"
                  >
                    <b-form-input
                      id="emailAddress"
                      v-model="form.email"
                      type="email"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-col>

            <b-col cols="12">
              <label for="textarea">Profile</label>
              <b-form-textarea
                id="textarea"
                v-model="text"
                placeholder="Enter something..."
                rows="4"
                max-rows="6"
              ></b-form-textarea>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable space-before-function-paren */

export default {
  data() {
    return {
      form: {
        email: ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@media screen and (max-width: 1200px) {
  .box {
    width: 95% !important;
  }
}

@media screen and (max-width: 500px) {
  .box {
    width: 100% !important;
    border-radius: 0px !important;
    .top {
      border-top-left-radius: 0px !important;
      border-top-right-radius: 0px !important;
    }
  }
  .under {
    flex-wrap: wrap;

    .picture-col {
      width: 100% !important;
    }

    .questions {
      width: 100% !important;
    }
  }
}
.fillResume {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #e5eaee;
  .box {
    // display: flex;
    width: 80%;
    margin: auto;
    background: white;
    border-radius: 10px;
    margin-top: 4rem !important;
    margin-bottom: 2rem !important;

    .top {
      background: linear-gradient(165deg, #395ebe, #54a1e3);
      width: 100%;
      padding: 10px 20px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
      h4 {
        margin: 0 !important;
      }
      p {
        margin: 0 !important;
      }
      .bold {
        font-weight: 900;
        font-size: 20px;
      }
    }
    .picture-col {
      width: 25%;
      border-right: 1px solid #eeeeee;
      padding: 10px;

      .btn-primary-outline {
        color: $primary;
        border: 1px solid $primary;
        padding: 10px 20px;
        border-radius: 45px;
        font-size: 1.1rem;
        margin-top: 20px;
        background: white;
      }
    }

    .under {
      display: flex;
      .questions {
        padding: 20px;
        width: 80%;
        .form-group {
          text-align: left !important;
          font-size: 1rem !important;
          color: black !important;
          margin-bottom: 3px !important;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .form-control {
          display: block;
          position: relative;
          box-sizing: border-box;
          width: 100%;
          height: 38px;
          background-color: #eeeeee;
          z-index: 1;
          margin-bottom: 0px;
          padding: 0 8px;
          border: 1px solid #c2c2c2;
          border-radius: 10px;
          line-height: 35px;
          font-size: 1rem;
          box-shadow: none;
        }
      }
    }
  }
}
</style>

<template>
  <div class="h-screen w-full flex items-center justify-center md:bg-blue-primary">
    <div class="md:w-9/12 lg:w-7/12 xl:w-2/5 mx-auto">
      <div class="bg-white rounded-lg py-10 px-12">
        <h3 class="font-semibold text-dark">Create a new account</h3>

        <form class="mt-12" @submit.prevent="register">
          <div class="flex flex-col">
            <label for="email">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              v-model="form.name"
              class="rounded-lg px-6 mt-3 border border-dark py-4"
              autocomplete="email"
              placeholder="Enter name "
              required
            />
          </div>
          <div class="flex flex-col">
            <label for="email">Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              v-model="form.email"
              class="rounded-lg px-6 mt-3 border border-dark py-4"
              autocomplete="email"
              placeholder="Enter Email Address"
              required
            />
          </div>

          <div class="flex flex-col mt-8">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              v-model="form.password"
              class="rounded-lg px-6 py-4 mt-3 border border-light-gray"
              placeholder="Password (6 -10 characters long)"
              autocomplete="new-password"
              required
            />
          </div>
          <div class="flex flex-col mt-8">
            <label for="confirm-password">Confirm Password</label>
            <input
              type="password"
              name="confirm-password"
              autocomplete="new-password"
              id="confirm-password"
              v-model="confirm_password"
              class="rounded-lg px-6 py-4 mt-3 border border-light-gray"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div class="mt-10">
            <button
              type="submit"
              :disabled="loading || form.email === '' || form.password === '' || confirm_password === ''"
              class="bg-blue-primary py-2 rounded-full flex items-center justify-center font-semibold w-full text-white"
            >
              Register
              <template v-if="loading">
                <img src="@/assets/svg/load.svg" class="ml-2" />
              </template>
            </button>
          </div>
        </form>
      </div>
      <div class="flex justify-center md:justify-end mt-1">
        <router-link to="/login" class="md:text-right md:ml-auto md:text-white">Already a member?</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { register } from "@/services/auth";
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      },
      loading: false,
      confirm_password: ""
    };
  },
  computed: {
    passwordMatch: function() {
      return this.form.password === this.confirm_password;
    }
  },
  methods: {
    register() {
      //   console.log(this.form);
      if (this.passwordMatch) {
        this.loading = true;
        register(this.form)
          .then(data => {
            this.loading = false;
            this.$swal({
              icon: "success",
              title: "Success",
              text: data.data.message,
              focusConfirm: false
            });
          })
          .catch(err => {
            this.loading = false;
            this.$swal({
              icon: "error",
              title: "Sorry",
              text: err.response ? err.response.data.message : err.message,
              focusConfirm: false
            });
          });
      } else {
        this.$swal({
          icon: "error",
          text: "Passwords do not match"
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
button[disabled] {
  opacity: 0.7;
  cursor: not-allowed !important;
}

h3 {
  font-size: 38px;
  letter-spacing: 0.03em;
}

label {
  font-size: 15px;
  letter-spacing: 0.04em;
}

input:focus {
  border-color: theme("colors.blue.primary");
  outline: none;
}

.border-light-gray {
  border: 1px solid theme('colors["light-gray"]') !important;
}

::placeholder {
  font-size: 14px;
}

button {
  font-size: 22px;
  letter-spacing: 0.03em;
}

.small {
  font-size: 14px;
}

a {
  letter-spacing: 0.06em;
}
</style>

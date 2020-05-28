<template>
    <div class="h-screen w-full flex items-center justify-center md:bg-blue-primary">
        <div class="md:w-9/12 lg:w-7/12  xl:w-2/5 mx-auto">
            <div class="bg-white rounded-lg py-10 px-12">
                <h3 class="font-semibold text-dark text-center">Ener  Your  new password</h3>

                <form class="mt-12" @submit.prevent="login">
                    <div class="flex flex-col">
                        <label for="email">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            v-model="password"
                            class="rounded-lg px-6 mt-3 border border-dark py-4"
                            placeholder="Enter new password"
                        />
                    </div>

                    <div class="flex flex-col mt-8">
                        <label for="password">Confirm Password</label>
                        <input
                            type="password"
                            name="new-password"
                            id="new-password"
                            v-model="newpassword"
                            class="rounded-lg px-6 py-4 mt-3 border border-light-gray"
                            placeholder="Confirm Password"
                        />
                    </div>

                    <div class="mt-10">
                        <button
                            type="submit"
                            :disabled="loading || password == '' || newPassword == '' || newPassword !== password"
                            class="bg-blue-primary py-2 rounded-full flex items-center justify-center font-semibold w-full text-white"
                        >
                            Submit<template v-if="loading"><img src="@/assets/svg/load.svg" class="ml-2"/></template>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { resetPassword } from '@/services/auth'
export default {
    data() {
        return {
            loading: false,
            password: '',
            newPassword: '',
        }
    },
    created() {
        if (!this.$route.query.token) {
            this.$router.push('/login')
        }
    },

    computed: {
        form() {
            return {
                password: this.password,
                token: this.$route.query.token,
            }
        },
    },
    methods: {
        login() {
            this.loading = true
            resetPassword(this.form)
                .then((data) => {
                    this.loading = false
                    this.$swal({
                        icon: 'success',
                        title: 'Success',
                        text: data.data.message,
                        focusConfirm: false,
                    }).then((data) => {
                        this.$router.push('/login')
                    })
                })
                .catch((err) => {
                    this.loading = false
                    this.$swal({
                        icon: 'error',
                        title: 'An Error occured',
                        text: err.response.data.message,
                        focusConfirm: false,
                    })
                })
        },
    },
}
</script>

<style lang="scss" scoped>
.welcome_text {
    font-size: 22px;
    color: rgba(63, 61, 86, 0.5);
}

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
    border-color: theme('colors.blue.primary');
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

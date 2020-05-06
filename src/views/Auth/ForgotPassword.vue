<template>
    <div class="h-screen w-full flex items-center justify-center md:bg-blue-primary">
        <div class="md:w-9/12 lg:w-7/12  xl:w-2/5 mx-auto">
            <div class="bg-white rounded-lg py-10 px-12">
                <h3 class="font-semibold text-dark text-center">Enter your email address</h3>
                <p class="welcome_text mt-2 text-center">
                    A link will be sent to the email address provided to reset your password
                </p>
                <form class="mt-8" @submit.prevent="requestLink">
                    <div class="flex flex-col">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            v-model="email"
                            class="rounded-lg px-6 mt-3 border border-dark py-4"
                            placeholder="Enter Email Address"
                        />
                    </div>

                    <div class="mt-10">
                        <button
                            type="submit"
                            :disabled="loading || email == ''"
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
import { forgotPassword } from '@/services/auth'
export default {
    data() {
        return {
            email: '',
            loading: false,
        }
    },
    methods: {
        requestLink() {
            this.loading = true
            forgotPassword(this.email)
                .then((data) => {
                    this.loading = false
                    this.$swal({
                        icon: 'success',
                        title: 'Success',
                        text: data.data.message,
                        focusConfirm: false,
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
    font-size: 14px;
    color: rgba(63, 61, 86, 0.5);
}
button[disabled] {
    opacity: 0.7;
    cursor: not-allowed !important;
}

h3 {
    font-size: 32px;
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

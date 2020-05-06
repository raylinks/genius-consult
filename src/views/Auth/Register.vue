<template>
    <div class="h-screen w-full flex items-center justify-center md:bg-blue-primary">
        <div class="md:w-9/12 lg:w-7/12  xl:w-2/5 mx-auto">
            <div class="bg-white rounded-lg py-10 px-12">
                <h3 class="font-semibold text-dark">Create a new account</h3>

                <form class="mt-12">
                    <div class="flex flex-col">
                        <label for="email">Email address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            class="rounded-lg px-6 mt-3 border border-dark py-4"
                            placeholder="Enter Email Address"
                        />
                    </div>

                    <div class="flex flex-col mt-8">
                        <label for="email">Password</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            class="rounded-lg px-6 py-4 mt-3 border border-light-gray"
                            placeholder="Password (6 -10 characters long)"
                        />
                    </div>
                    <div class="flex flex-col mt-8">
                        <label for="email">Confirm Password</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            class="rounded-lg px-6 py-4 mt-3 border border-light-gray"
                            placeholder="Confirm Password"
                        />
                    </div>

                    <div class="mt-10">
                        <button
                            class="bg-blue-primary py-2 rounded-full flex items-center justify-center font-semibold w-full text-white"
                        >
                            Register
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
export default {}
</script>

<style lang="scss" scoped>
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

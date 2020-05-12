<template>
    <div class="wrapper lg:rounded-lg mx-auto">
        <div class="bg-blue-special h-16 w-full lg:rounded-tl-lg lg:rounded-tr-lg flex items-center justify-center">
            <h2 class="font-semibold">Personal Info</h2>
        </div>
        <div class="grid grid-cols-5 justify-center">
            <div class="md:col-span-1 col-span-5 left flex flex-col items-center pt-10">
                <div class="img">
                    <img src="@/assets/svg/placeholder.svg" alt="" />
                </div>
                <div class="mt-5">
                    <p>Upload a picture</p>
                </div>
            </div>

            <div class="md:col-span-4 col-span-5">
                <form class="w-11/12 mx-auto mt-10 mb-10" @submit.prevent="submit">
                    <div class="grid grid-cols-5 w-full gap-2 md:gap-5">
                        <div class="col-span-1">
                            <input type="text" placeholder="Title" v-model="form.title" required />
                        </div>
                        <div class="col-span-2">
                            <input type="text" placeholder="First name" v-model="form.firstname" required />
                        </div>
                        <div class="col-span-2">
                            <input type="text" placeholder="Last name" v-model="form.lastname" required />
                        </div>
                    </div>

                    <div class="grid grid-cols-2 mt-10 gap-2 md:gap-10">
                        <div class="col-span-1">
                            <input
                                type="date"
                                name="dob"
                                id="dob"
                                placeholder="Date of Birth"
                                v-model="form.date_of_birth"
                                required
                            />
                        </div>
                        <div class="col-span-1">
                            <input
                                type="text"
                                name="nationality"
                                id="nationality"
                                placeholder="Nationality"
                                v-model="form.nationality"
                                required
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-2 mt-10 gap-2 md:gap-10">
                        <div class="col-span-1">
                            <input
                                type="number"
                                name="phone-number"
                                id="phone-number"
                                placeholder="Phone number"
                                v-model="form.phone"
                                required
                            />
                        </div>
                        <div class="col-span-1">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email Address"
                                v-model="form.email"
                                required
                            />
                        </div>
                    </div>

                    <div class="mt-10">
                        <input
                            type="url"
                            name="website-url"
                            id="website-url"
                            placeholder="Website url"
                            v-model="form.web"
                        />
                    </div>
                    <div class="mt-10">
                        <input
                            type="text"
                            name="address"
                            id="address"
                            placeholder="Address"
                            v-model="form.address"
                            required
                        />
                    </div>

                    <div class="mt-10">
                        <textarea
                            type="text"
                            name="profile"
                            id="profile"
                            placeholder="Profile"
                            rows="6"
                            v-model="form.profile"
                        ></textarea>
                    </div>

                    <div class="mt-10 flex justify-center">
                        <button class="bg-blue-primary py-3 px-16 text-white rounded-full">Submit</button>
                    </div>
                    <template>
                        <p :class="`mt-2 text-center ${message.type === 'Success' ? 'text-success' : 'text-danger'}`">
                            {{ message.note }}
                        </p>
                    </template>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { submitPersonalInfo } from '@/services/resume'
export default {
    data() {
        return {
            personal_info: '',
            message: {
                type: '',
                note: '',
            },
        }
    },
    computed: {
        form: function() {
            return {
                title: this.personal_info.title || '',
                firstname: this.personal_info.firstname || '',
                lastname: this.personal_info.lastname || '',
                date_of_birth: this.personal_info.date_of_birth || '',
                nationality: this.personal_info.nationality || '',
                phone: this.personal_info.phone || '',
                email: this.personal_info.email || '',
                web: this.personal_info.web || '',
                address: this.personal_info.address || '',
                profile: this.personal_info.profile || '',
                picture_url: this.personal_info.picture_url || '',
                interest: 'interest',
            }
        },
    },
    mounted() {
        this.personal_info = JSON.parse(localStorage.getItem('personal_info')) || {}
    },
    methods: {
        submit() {
            submitPersonalInfo(this.form)
                // eslint-disable-next-line no-unused-vars
                .then((data) => {
                    localStorage.setItem('personal_info', JSON.stringify(this.form))
                    this.message = {
                        type: 'Success',
                        note: 'Personal info has been submitted successfully',
                    }
                })
                .catch((err) => {
                    this.message = {
                        type: 'Error',
                        note: err.response.data.message,
                    }
                })
        },
    },
}
</script>

<style lang="scss" scoped>
.wrapper {
    h2 {
        font-size: 30px;
    }
}
</style>

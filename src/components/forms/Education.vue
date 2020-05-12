<template>
    <div class="wrapper lg:rounded-lg mt-20">
        <div class="bg-blue-special h-16 w-full lg:rounded-tl-lg lg:rounded-tr-lg flex items-center justify-center">
            <h2 class="font-semibold">Education</h2>
        </div>
        <div class="grid grid-cols-5">
            <div class="col-span-5 md:col-span-1 left">
                <template v-if="education.length">
                    <div
                        :class="
                            `w-full py-3 ${i == step ? 'bg-dark text-white' : 'text-dark'} text-center cursor-pointer`
                        "
                        @click="step = i"
                        v-for="(edu, i) in education"
                        :key="Math.random(i, 10)"
                    >
                        {{ edu.job_title || `Education #${i + 1}` }}
                    </div>
                </template>
                <template v-else>
                    <div class="bg-dark text-white py-3 w-full text-center">
                        Education #1
                    </div>
                </template>
                <div class="mt-20 flex justify-center">
                    <button type="submit" class="bg-blue-primary py-3 px-10 text-white rounded-full" @click="addNew">
                        Add New
                    </button>
                </div>
            </div>

            <div class="col-span-5 md:col-span-4">
                <form class="w-11/12 mx-auto mt-10 mb-10" @submit.prevent="submit">
                    <div class="grid grid-cols-4 gap-5 md:gap-10">
                        <div class="col-span-4 md:col-span-2">
                            <input type="text" placeholder="Institution" v-model="form.institution" required />
                        </div>
                        <div class="col-span-4 md:col-span-2">
                            <input type="text" placeholder="Field of Study" v-model="form.field_of_study" required />
                        </div>
                        <div class="col-span-2">
                            <input type="text" placeholder="Country" v-model="form.country" required />
                        </div>
                        <div class="col-span-2">
                            <input type="text" placeholder="City" v-model="form.city" required />
                        </div>
                        <div class="col-span-4 md:col-span-2">
                            <p class="mb-2">From</p>
                            <div class="grid grid-cols-2 gap-5 md:gap-10">
                                <div class="col-span-1 relative">
                                    <input type="text" placeholder="Month" v-model="form.month_from" required />
                                </div>
                                <div class="col-span-1">
                                    <input type="text" placeholder="Year" v-model="form.year_from" required />
                                </div>
                            </div>
                        </div>
                        <div class="col-span-4 md:col-span-2">
                            <p class="mb-2">To</p>
                            <div class="grid grid-cols-2 gap-5 md:gap-10">
                                <div class="col-span-1">
                                    <input type="text" placeholder="Month" v-model="form.month_to" />
                                </div>
                                <div class="col-span-1">
                                    <input type="text" placeholder="Year" v-model="form.year_to" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-10 flex justify-center">
                        <button class="bg-blue-primary py-3 px-16 text-white rounded-full">Submit</button>
                    </div>
                </form>

                <template>
                    <p :class="`mt-2 text-center ${message.type === 'Success' ? 'text-success' : 'text-danger'}`">
                        {{ message.note }}
                    </p>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import { months } from '@/utils/time'
import { submitEducation } from '@/services/resume'
export default {
    data() {
        return {
            education: [],
            step: 0,
            message: {
                type: '',
                note: '',
            },
        }
    },

    computed: {
        Months: function() {
            return months
        },
        form: function() {
            return {
                institution: this.education.length ? this.education[this.step].institution : '',
                field_of_study: this.education.length ? this.education[this.step].field_of_study : '',
                country: this.education.length ? this.education[this.step].country : '',
                city: this.education.length ? this.education[this.step].city : '',
                month_from: this.education.length ? this.education[this.step].month_from : '',
                month_to: this.education.length ? this.education[this.step].month_to : '',
                year_from: this.education.length ? this.education[this.step].year_from : '',
                year_to: this.education.length ? this.education[this.step].year_to : '',
                note: this.education.length ? this.education[this.step].note : '',
            }
        },
    },

    mounted() {
        this.education = JSON.parse(localStorage.getItem('education')) || []
    },

    methods: {
        addNew() {},

        submit() {
            submitEducation(this.form)
                .then((data) => {
                    this.education.push(this.form)
                    localStorage.setItem('education', JSON.stringify(this.education))
                    this.message = {
                        type: 'Success',
                        note: data.data.message,
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

<style scoped>
h2 {
    font-size: 30px;
}
</style>

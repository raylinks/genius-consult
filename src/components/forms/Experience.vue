<template>
    <div class="wrapper lg:rounded-lg mt-20">
        <div class="bg-blue-special h-16 w-full lg:rounded-tl-lg lg:rounded-tr-lg flex items-center justify-center">
            <h2 class="font-semibold">Experience</h2>
        </div>
        <div class="grid grid-cols-5">
            <div class="col-span-5 md:col-span-1 left">
                <template v-if="experience.length">
                    <div
                        :class="
                            `w-full py-3 ${i == step ? 'bg-dark text-white' : 'text-dark'} text-center cursor-pointer`
                        "
                        @click="step = i"
                        v-for="(exp, i) in experience"
                        :key="Math.random(i, 10)"
                    >
                        {{ exp.job_title || `Experience #${i + 1}` }}
                    </div>
                </template>
                <template v-else>
                    <div class="bg-dark text-white py-3 w-full text-center">
                        Experience #1
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
                        <div class="col-span-2">
                            <input type="text" placeholder="Company Name" v-model="form.company_name" />
                        </div>
                        <div class="col-span-2">
                            <input type="text" placeholder="Job Title" v-model="form.job_title" />
                        </div>
                        <div class="col-span-2">
                            <input type="text" placeholder="Country" v-model="form.country" />
                        </div>
                        <div class="col-span-2">
                            <input type="text" placeholder="City" v-model="form.city" />
                        </div>
                        <div class="col-span-4 md:col-span-2">
                            <p class="mb-2">From</p>
                            <div class="grid grid-cols-2 gap-5 md:gap-10">
                                <div class="col-span-1">
                                    <input type="text" placeholder="Month" v-model="form.month_from" />
                                </div>
                                <div class="col-span-1">
                                    <input type="text" placeholder="Year" v-model="form.year_from" />
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
                        <div class="col-span-4">
                            <div class="flex items-center justify-end">
                                <input type="checkbox" v-model="form.currently_work" />
                                <label for="" class="ml-2">Currently Work Here</label>
                            </div>
                        </div>
                    </div>
                    <div class="mt-10">
                        <textarea type="text" placeholder="Note" rows="6" v-model="form.note"></textarea>
                    </div>
                    <div class="mt-10 flex justify-center">
                        <button type="submit" class="bg-blue-primary py-3 px-16 text-white rounded-full">Submit</button>
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
import { submitExperience } from '@/services/resume'
export default {
    data() {
        return {
            experience: [],
            step: 0,
            message: {
                type: '',
                note: '',
            },
        }
    },
    computed: {
        form: {
            get: function() {
                return {
                    company_name: this.experience.length ? this.experience[this.step].company_name : '',
                    job_title: this.experience.length ? this.experience[this.step].job_title : '',
                    country: this.experience.length ? this.experience[this.step].country : '',
                    city: this.experience.length ? this.experience[this.step].city : '',
                    month_from: this.experience.length ? this.experience[this.step].month_from : '',
                    month_to: this.experience.length ? this.experience[this.step].month_to : '',
                    year_from: this.experience.length ? this.experience[this.step].year_from : '',
                    year_to: this.experience.length ? this.experience[this.step].year_to : '',
                    currently_work: this.experience.length ? this.experience[this.step].currently_work : false,
                    note: this.experience.length ? this.experience[this.step].note : '',
                }
            },
        },
    },

    mounted() {
        this.experience = JSON.parse(localStorage.getItem('experience')) || []
    },

    methods: {
        submit() {
            submitExperience(this.form)
                .then((data) => {
                    this.experience.push(this.form)
                    localStorage.setItem('experience', JSON.stringify(this.experience))
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

        addNew() {},
    },
}
</script>

<style scoped>
h2 {
    font-size: 30px;
}
</style>

<template>
    <div class="wrapper lg:ounded-lg mt-20">
        <div class="bg-blue-special h-16 w-full lg:rounded-tl-lg lg:rounded-tr-lg flex items-center justify-center">
            <h2 class="font-semibold">Certificates</h2>
        </div>
        <div class="grid grid-cols-5">
            <div class="col-span-5 md:col-span-1 left">
                <template v-if="certificates.length">
                    <div
                        :class="
                            `w-full py-3 ${i == step ? 'bg-dark text-white' : 'text-dark'} text-center cursor-pointer`
                        "
                        @click="step = i"
                        v-for="(exp, i) in certificates"
                        :key="Math.random(i, 10)"
                    >
                        {{ exp.job_title || `Certificate #${i + 1}` }}
                    </div>
                </template>
                <template v-else>
                    <div class="bg-dark text-white py-3 w-full text-center">
                        Certificate #1
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
                    <div class="grid grid-cols-2 gap-10">
                        <div class="col-span-2 md:col-span-1">
                            <input type="text" placeholder="Name" v-model="form.name" required />
                        </div>
                        <div class="col-span-2 md:col-span-1">
                            <input type="text" placeholder="Authority" v-model="form.authority" required />
                        </div>
                        <div class="col-span-2 md:col-span-1">
                            <input type="text" placeholder="Link to Certificate" v-model="form.url" required />
                        </div>
                        <div class="col-span-2 md:col-span-1">
                            <input type="date" placeholder="date" v-model="form.date" required />
                        </div>
                    </div>
                    <div class="mt-10 flex justify-center">
                        <button class="bg-blue-primary py-3 px-16 text-white rounded-full" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { submitCertificate } from '@/services/resume'
export default {
    data() {
        return {
            certificates: [],
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
                    name: this.certificates.length ? this.certificates[this.step].name : '',
                    authority: this.certificates.length ? this.certificates[this.step].authority : '',
                    url: this.certificates.length ? this.certificates[this.step].url : '',
                    date: this.certificates.length ? this.certificates[this.step].date : '',
                }
            },
        },
    },

    mounted() {
        this.certificates = JSON.parse(localStorage.getItem('certificates')) || []
    },

    methods: {
        submit() {
            submitCertificate(this.form)
                .then((data) => {
                    this.certificates.push(this.form)
                    localStorage.setItem('certificates', JSON.stringify(this.certificates))
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

<style lang="scss" scoped>
h2 {
    font-size: 30px;
}
</style>

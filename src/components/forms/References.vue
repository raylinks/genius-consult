<template>
    <div class="wrapper lg:rounded-lg mt-20">
        <div class="bg-blue-special h-16 w-full lg:rounded-tl-lg lg:rounded-tr-lg flex items-center justify-center">
            <h2 class="font-semibold">References</h2>
        </div>
        <div class="grid grid-cols-5">
            <div class="col-span-5 md:col-span-1 left">
                <template v-if="references.length">
                    <div
                        :class="
                            `w-full py-3 ${i == step ? 'bg-dark text-white' : 'text-dark'} text-center cursor-pointer`
                        "
                        @click="step = i"
                        v-for="(exp, i) in references"
                        :key="Math.random(i, 10)"
                    >
                        {{ exp.job_title || `Reference #${i + 1}` }}
                    </div>
                </template>
                <template v-else>
                    <div class="bg-dark text-white py-3 w-full text-center">
                        Reference #1
                    </div>
                </template>
                <div class="mt-20 flex justify-center">
                    <button type="submit" class="bg-blue-primary py-3 px-10 text-white rounded-full" @click="addNew">
                        Add New
                    </button>
                </div>
            </div>

            <div class="col-span-5 md:col-span-4">
                <div class="w-11/12 mx-auto mt-10 mb-10">
                    <div class="grid grid-cols-2 gap-5 md:gap-10">
                        <div class="col-span-2 md:col-span-1">
                            <input type="text" placeholder="Company Name" v-model="form.company_name" />
                        </div>
                        <div class="col-span-2 md:col-span-1">
                            <input type="text" placeholder="Name" v-model="form.name" />
                        </div>
                        <div class="col-span-2 md:col-span-1">
                            <input type="text" placeholder="Contact 1" v-model="form.contact_1" />
                        </div>
                        <div class="col-span-2 md:col-span-1">
                            <input type="text" placeholder="Contact 2" v-model="form.contact_2" />
                        </div>
                    </div>

                    <div class="mt-10">
                        <textarea type="text" placeholder="Note" rows="6" v-model="form.note"></textarea>
                    </div>
                    <div class="mt-10 flex justify-center">
                        <button class="bg-blue-primary py-3 px-16 text-white rounded-full">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { submitCertificate } from '@/services/resume'
export default {
    data() {
        return {
            references: [],
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
                    company_name: this.references.length ? this.references[this.step].company_name : '',
                    name: this.references.length ? this.references[this.step].name : '',
                    contact_1: this.references.length ? this.references[this.step].contact_1 : '',
                    contact_2: this.references.length ? this.references[this.step].contact_2 : '',
                    note: this.references.length ? this.references[this.step].note : '',
                }
            },
        },
    },

    mounted() {
        this.references = JSON.parse(localStorage.getItem('references')) || []
    },

    methods: {
        submit() {
            submitCertificate(this.form)
                .then((data) => {
                    this.references.push(this.form)
                    localStorage.setItem('references', JSON.stringify(this.references))
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

<template>
    <div class="wrapper lg:rounded-lg mt-20">
        <div class="bg-blue-special h-16 w-full lg:rounded-tl-lg lg:rounded-tr-lg flex items-center justify-center">
            <h2 class="font-semibold">Awards</h2>
        </div>
        <div class="grid grid-cols-5">
            <div class="col-span-5 md:col-span-1 left">
                <template v-if="awards.length">
                    <div
                        :class="
                            `w-full py-3 ${i == step ? 'bg-dark text-white' : 'text-dark'} text-center cursor-pointer`
                        "
                        @click="step = i"
                        v-for="(exp, i) in awards"
                        :key="Math.random(i, 10)"
                    >
                        {{ exp.job_title || `Award #${i + 1}` }}
                    </div>
                </template>
                <template v-else>
                    <div class="bg-dark text-white py-3 w-full text-center">
                        Award #1
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
                        <div class="col-span-1">
                            <input type="text" placeholder="Title" v-model="form.title" required />
                        </div>
                        <div class="col-span-1">
                            <input type="text" placeholder="Issuer" v-model="form.issuer" required />
                        </div>
                        <div class="col-span-1">
                            <input type="url" placeholder="Link to Award" v-model="form.url" required />
                        </div>
                        <div class="col-span-1">
                            <input type="date" placeholder="date" v-model="form.date" required />
                        </div>
                    </div>
                    <div class="mt-10">
                        <textarea type="text" placeholder="Note" rows="6" v-model="form.note"></textarea>
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
import submitAward from '@/services/resume'
export default {
    data() {
        return {
            awards: [],
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
                    title: this.awards.length ? this.awards[this.step].title : '',
                    issuer: this.awards.length ? this.awards[this.step].issuer : '',
                    web_url: this.awards.length ? this.awards[this.step].web_url : '',
                    date: this.awards.length ? this.awards[this.step].date : '',
                    note: this.awards.length ? this.awards[this.step].note : '',
                }
            },
        },
    },

    mounted() {
        this.awards = JSON.parse(localStorage.getItem('awards')) || []
    },

    methods: {
        submit() {
            submitAward(this.form)
                .then((data) => {
                    this.awards.push(this.form)
                    localStorage.setItem('awards', JSON.stringify(this.awards))
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

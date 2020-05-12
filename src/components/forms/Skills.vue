<template>
    <div class="wrapper ld:rounded-lg mt-20">
        <div class="bg-blue-special h-16 w-full ld:rounded-tl-lg lg:rounded-tr-lg flex items-center justify-center">
            <h2 class="font-semibold">Skills</h2>
        </div>
        <div class="grid grid-cols-5">
            <div class="col-span-5 md:col-span-1 left">
                <template v-if="skills.length">
                    <div
                        :class="
                            `w-full py-3 ${i == step ? 'bg-dark text-white' : 'text-dark'} text-center cursor-pointer`
                        "
                        @click="step = i"
                        v-for="(exp, i) in skills"
                        :key="Math.random(i, 10)"
                    >
                        {{ exp.job_title || `Skills #${i + 1}` }}
                    </div>
                </template>
                <template v-else>
                    <div class="bg-dark text-white py-3 w-full text-center">
                        Skills #1
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
                    <div class="grid grid-cols-2 gap-5 md:gap-10">
                        <div class="col-span-2 md:col-span-1">
                            <input
                                type="text"
                                placeholder="Skill Category (e.g Languages)"
                                v-model="form.skill_category"
                                required
                            />
                        </div>
                        <div class="col-span-2 md:col-span-1">
                            <input
                                type="text"
                                placeholder="Skill Name (e.g English)"
                                v-model="form.skill_name"
                                required
                            />
                        </div>
                        <div class="col-span-2 md:col-span-1">
                            <input
                                type="text"
                                placeholder="Skill Level (e.g Expert)"
                                v-model="form.skill_level"
                                required
                            />
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
import { submitSkills } from '@/services/resume'
export default {
    data() {
        return {
            skills: [],
            step: 0,
            message: {
                type: '',
                note: '',
            },
        }
    },

    computed: {
        form: function() {
            return {
                skill_category: this.skills.length ? this.skills[this.step].skill_category : '',
                skill_name: this.skills.length ? this.skills[this.step].skill_name : '',
                skill_level: this.skills.length ? this.skills[this.step].skill_level : '',
            }
        },
    },

    mounted() {
        this.skills = JSON.parse(localStorage.getItem('skills')) || []
    },

    methods: {
        submit() {
            submitSkills(this.form)
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

        addNew() {},
    },
}
</script>

<style lang="scss" scoped>
h2 {
    font-size: 30px;
}
</style>

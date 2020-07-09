<template>
    <default-layout class="relative">
        <div class="h-32 w-full"></div>
        <img src="@/assets/img/clipboard.jpg" alt="" class="img" />
        <div class="pl-48 opacity-50 hover:opacity-75 duration-500 cursor-pointer mb-10 ">
            <div class="flex items-center" @click="$router.go(-1)">
                <svg
                    width="20"
                    height="13"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="transform rotate-90"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.3602 7C6.1814 7 6.00339 6.923 5.85831 6.76798L1.15303 1.76762C0.82052 1.4146 0.775036 0.783552 1.05265 0.359521C1.32947 -0.0645092 1.82353 -0.121513 2.15682 0.231512L6.36883 4.70783L10.5738 0.392524C10.911 0.0464988 11.4051 0.114504 11.6764 0.544535C11.9477 0.974566 11.8944 1.60361 11.5572 1.95064L6.85191 6.77898C6.7084 6.92599 6.5343 7 6.3602 7Z"
                        fill="#0371C0"
                    />
                </svg>
                <p class="ml-2">go back</p>
            </div>
        </div>
        <form class="w-7/12 mx-auto mb-10" @submit.prevent="submit">
            <h3 class="font-semibold mb-6 tracking-wide text-blue-primary opacity-">Please fill this form</h3>
            <div class="grid grid-cols-2 gap-10">
                <div class="col-span-1 flex flex-col">
                    <label for="job-title">Job Title</label>
                    <input type="text" placeholder="Enter Job Title" v-model="form.job_title" required />
                </div>
                <div class="col-span-1 flex flex-col">
                    <label for="location">Location</label>
                    <input type="text" placeholder="Enter Location" v-model="form.location" required />
                </div>
                <div class="col-span-1 flex flex-col">
                    <label for="skills">Skills</label>
                    <input
                        type="text"
                        placeholder="Enter Skills (reading, skipping, etc)"
                        v-model="form.skills"
                        required
                    />
                </div>
                <div class="col-span-1 flex flex-col">
                    <label for="experience">Experience</label>
                    <input type="text" placeholder="Enter experience" v-model="form.experience" required />
                </div>
                <div class="col-span-2 flex flex-col">
                    <label for="description">Description</label>
                    <textarea
                        placeholder="Enter a short description of the job"
                        v-model="form.description"
                        required
                    ></textarea>
                </div>
                <div class="col-span-1 flex flex-col">
                    <label for="requirement">Requirement</label>
                    <input type="text" placeholder="Enter requirement" v-model="form.requirement" required />
                </div>
                <div class="col-span-1 flex flex-col">
                    <label for="closing_date">Closing date</label>
                    <input type="date" placeholder="Closing date" v-model="form.closing_date" required />
                </div>
                <div class="col-span-1 flex flex-col">
                    <label for="qualification">Qualification</label>
                    <input type="text" placeholder="Enter qualification" v-model="form.qualification" required />
                </div>
                <div class="col-span-1 flex flex-col">
                    <label for="responsibility">Responsibility</label>
                    <input type="text" placeholder="Enter responsibility" v-model="form.responsibility" required />
                </div>
                <div class="col-span-2 flex flex-col">
                    <label for="scope_of_work">Scope of work</label>
                    <textarea type="date" placeholder="State scope of work" v-model="form.scope_of_work"></textarea>
                </div>
            </div>
            <div class="flex justify-center mt-5">
                <button
                    type="submit"
                    class="hover:bg-blue-primary text-blue-primary border border-blue-primary duration-500 py-2 px-16 hover:text-white rounded-full flex items-center justify-center mt-5"
                >
                    Submit
                </button>
            </div>
        </form>
    </default-layout>
</template>

<script>
import { submitJob } from '@/services/jobs'
export default {
    data() {
        return {
            form: {
                job_title: '',
                location: '',
                skills: '',
                experience: '',
                description: '',
                requirement: '',
                qualification: '',
                closing_date: '',
                scope_of_work: '',
                responsibility: '',
            },
        }
    },

    methods: {
        submit() {
            submitJob(this.form)
                .then((data) => {
                    this.$swal({
                        icon: 'success',
                        title: 'Success',
                        text: data.data.message,
                    })
                })
                .catch((error) => {
                    this.$swal({
                        icon: 'error',
                        title: 'Error',
                        text: error.response.message,
                    })
                })
        },
    },
}
</script>

<style lang="scss" scoped>
label {
    font-size: 16px;
    font-weight: 600;
    color: theme('colors.dark');
    margin-bottom: 8px;
}

textarea {
    height: 85px !important;
    padding-top: 10px !important;
}

input,
textarea {
    height: 50px;
    border-radius: 10px;
    border: 1px solid rgb(173, 173, 173);
    padding: 0px 15px;
    outline: none !important;

    &:focus {
        border-color: theme('colors.blue.primary') !important;
    }
}

.img {
    position: absolute;
    top: 30%;
    // left: 20px;
    width: 280px;
    // height: 100;
}
</style>

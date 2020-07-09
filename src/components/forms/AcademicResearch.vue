<template>

    <div class="wrapper lg:rounded-lg mt-10">

        <div class="bg-blue-special h-16 w-full lg:rounded-tl-lg lg:rounded-tr-lg flex items-center justify-center">
            <h2 class="font-semibold " style="font-size: 1.875rem!important">Academic Research</h2>
        </div>
        <div class="grid grid-cols-5">
            <div class="col-span-5 md:col-span-1 left">
                <!-- <template>
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
                </template> -->
                <template>
                    <div class="bg-dark text-white py-3 w-full text-center">
                        Academic Research #1
                    </div>
                </template>
                <div class="mt-20 flex justify-center">
                    <button disabled type="submit" class="bg-blue-primary py-3 px-10 text-white rounded-full" @click="addNew">
                        Add New
                    </button>
                </div>
            </div>

            <div class="col-span-5 md:col-span-4">
                <form class="w-11/12 mx-auto mt-10 mb-10" @submit="submitForm">
                    <div class="grid grid-cols-2 gap-10">
                        <div class="col-span-2 md:col-span-1">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                First Name
                            </label>
                                <input type="text" class="rounded-l-none" placeholder="Name" required />
                        </div>
                        <div class="col-span-2 md:col-span-1">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Phone
                            </label>
                            <input type="text" placeholder="Phone" required />
                        </div>
                        <div class="col-span-2 md:col-span-1">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Email
                            </label>
                            <input type="text" placeholder="Email" required />
                        </div>
                        <div class="col-span-1 md:col-span-1">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Have you started work on it already?
                            </label>
                            <select class="block appearance-none select-button w-full h-12 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option>Choose an option</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                    </div>
                    <br>
                    <div class="w-full">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Other Details
                            </label>
                            <textarea type="text" placeholder="Research Title"  required />
                        </div>
                    <div class="mt-10 flex justify-center">
                        <button class="bg-blue-primary py-3 px-16 text-white rounded-full"
                        :disabled="loading" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data (){
        return {
            loading: false

        }
    },
    methods:{
        submitForm(){
            this.loading = true
        }
    }

}
</script>

<style lang="scss" scoped>
    .wrapper {
    border: 1px solid #9f9eaa;

    .left {
        border-right: 1px solid #9f9eaa;
        @media (max-width: 640px) {
            border-right: 0px !important;
        }
    }

    input[type='text'],
    input[type='date'],
    input[type='url'],
    input[type='email'],
    input[type='number'],
    input[type='file'] {
        padding: 10px;
        height: 55px;
        border: 1px solid #abaabe;
        width: 100%;
        border-radius: 10px;
    }
    .select-button{
        padding: 10px !important;
        height: 55px !important;
        border: 1px solid #abaabe !important;
        width: 100% !important;
        border-radius: 10px !important;
    }

    textarea {
        padding: 15px;
        border: 1px solid #abaabe;
        width: 100%;
        border-radius: 10px;
    }
}
</style>




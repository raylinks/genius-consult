<template>
  <div class="wrapper lg:rounded-lg mt-10 mb-10">
      <template v-if="plan">

            <div class="bg-blue-special h-16 w-full lg:rounded-tl-lg lg:rounded-tr-lg flex items-center justify-center">
                <h2 class="font-semibold " style="font-size: 1.875rem!important">Business Plan</h2>
            </div>
            <div class="grid grid-cols-5">
                <div class="col-span-5 md:col-span-1 left">
                    <template>
                        <div class="bg-dark text-white py-3 w-full text-center">
                            Business Plan #1
                        </div>
                    </template>
                    <div class="mt-20 flex justify-center">
                        <button disabled type="submit" class="bg-blue-primary py-3 px-10 text-white rounded-full" @click="addNew">
                            Add New
                        </button>
                    </div>
                </div>

                <div class="col-span-5 md:col-span-4">
                    <form class="w-11/12 mx-auto mt-10 mb-10">
                        <div class="grid grid-cols-2 gap-10">
                            <div class="col-span-2 md:col-span-1">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Name of Business
                                </label>
                                <input type="text" placeholder="Name of Business" required />
                            </div>
                            <div class="col-span-2 md:col-span-1">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Nature of Business
                                </label>
                                <input type="text" placeholder="Nature of Business" required />
                            </div>
                            <div class="col-span-2 md:col-span-1">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Address and Location
                                </label>
                                <input type="text" placeholder="Address and Location" required />
                            </div>
                            <div class="col-span-2 md:col-span-1">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Years in Existence
                                </label>
                                <input type="number" placeholder=" Years of Existence" required />
                            </div>
                            <div class="col-span-2 md:col-span-1">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Services Offered
                                </label>
                                <input type="text" placeholder=" Services Offered" required />
                            </div>
                            <div class="col-span-2 md:col-span-1">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    How much is being Charged for services?
                                </label>
                                <div class="flex">
                                    <div class="flex -mr-px">
                                        <span class="flex items-center currency leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">&#8358;</span>
                                    </div>
                                    <input type="text" class="price rounded-l-none" placeholder=" Services Offered" required />
                                </div>
                            </div>
                            <div class="col-span-2 md:col-span-1">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Monthly Turnover
                                </label>
                                <div class="flex">
                                    <div class="flex -mr-px">
                                        <span class="flex items-center currency leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">&#8358;</span>
                                    </div>
                                    <input type="text" class="price rounded-l-none" placeholder=" Monthly Turnover" required />
                                </div>
                            </div>
                            <div class="col-span-2 md:col-span-1">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    How Many branches/Locations does the business have?
                                </label>
                                <div class="">
                                    <input type="number" class=" rounded-l-none" placeholder="Branches/Locations" required />
                                </div>
                            </div>
                            <div class="col-span-1 md:col-span-1">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    What type of Business Proposal would you prefer?
                                </label>
                                <select class="block appearance-none w-full select-button bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option>Choose an option</option>
                                    <option> Basic Business Proposal</option>
                                    <option>Comprehensive Business Proposal</option>
                                </select>
                            </div>
                        </div>
                        <br>
                        <div class="block">
                        <span class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Staff Strength</span>
                        <div class="mt-2">
                            <div>
                            <label class="inline-flex items-center">
                                <input type="radio" class="form-radio" name="radio" value="1">
                                <span class="ml-2">1-5</span>
                            </label>
                            </div>
                            <div>
                            <label class="inline-flex items-center">
                                <input type="radio" class="form-radio" name="radio" value="2">
                                <span class="ml-2">6-20</span>
                            </label>
                            </div>
                            <div>
                            <label class="inline-flex items-center">
                                <input type="radio" class="form-radio" name="radio" value="3">
                                <span class="ml-2">21-100</span>
                            </label>
                            </div>
                            <div>
                            <label class="inline-flex items-center">
                                <input type="radio" class="form-radio" name="radio" value="3">
                                <span class="ml-2">Above 100</span>
                            </label>
                            </div>
                        </div>
                        </div>
                        <br>
                        <div class="w-full">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Future Plans for the business
                                </label>
                                <textarea type="text" placeholder="Future plans"  required />
                        </div>
                        <br>
                        <div class="w-full">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Other Details
                                </label>
                                <textarea type="text" placeholder="Other details"  required />
                        </div>
                        <div class="mt-10 flex justify-center">
                            <button class="bg-blue-primary py-3 px-16 text-white rounded-full" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
      </template>
      <template v-if="proposal">

            <div class="bg-blue-special h-16 w-full lg:rounded-tl-lg lg:rounded-tr-lg flex items-center justify-center">
                <h2 class="font-semibold " style="font-size: 1.875rem!important">Business Proposal</h2>
            </div>
            <div class="grid grid-cols-5">
            <div class="col-span-5 md:col-span-1 left">
                <template>
                    <div class="bg-dark text-white py-3 w-full text-center">
                        Business Proposal #1
                    </div>
                </template>
                <div class="mt-20 flex justify-center">
                    <button disabled type="submit" class="bg-blue-primary py-3 px-10 text-white rounded-full" @click="addNew">
                        Add New
                    </button>
                </div>
            </div>

            <div class="col-span-5 md:col-span-4">
                <form class="w-11/12 mx-auto mt-10 mb-10">
                    <div class="grid grid-cols-2 gap-10">
                        <div class="col-span-2 md:col-span-1">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Name of Business
                            </label>
                            <input type="text" placeholder="Name of Business" required />
                        </div>
                        <div class="col-span-2 md:col-span-1">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Nature of Business
                            </label>
                            <input type="text" placeholder="Nature of Business" required />
                        </div>
                        <div class="col-span-2 md:col-span-1">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Address and Location
                            </label>
                            <input type="text" placeholder="Address and Location" required />
                        </div>
                        <div class="col-span-2 md:col-span-1">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Services Offered
                            </label>
                            <input type="text" placeholder="Services Offered" required />
                        </div>
                        <div class="col-span-2 md:col-span-1">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    How much is being Charged for services?
                                </label>
                                <div class="flex">
                                    <div class="flex -mr-px">
                                        <span class="flex items-center currency leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">&#8358;</span>
                                    </div>
                                    <input type="text" class=" price rounded-l-none" placeholder=" Services Offered" required />
                                </div>
                        </div>
                        <div class="col-span-1 md:col-span-1">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                What type of Business Proposal would you prefer?
                            </label>
                            <select class="block select-button appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option>Choose an option</option>
                                <option> Basic Business Proposal</option>
                                <option>Comprehensive Business Proposal</option>
                            </select>
                        </div>
                    </div>
                    <br>
                    <div class="w-full">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Other Details
                            </label>
                            <textarea type="text" placeholder="Other Details"  required />
                    </div>
                    <div class="mt-10 flex justify-center">
                        <button class="bg-blue-primary py-3 px-16 text-white rounded-full" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
      </template>
  </div>
</template>

<script>
export default {
    props:{
        proposal:Boolean,
        plan:Boolean
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
    input[type='file']{
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

    .currency{
        background-color: #abaabe!important;
        border-color: #abaabe!important;
    }
    .price{
        border-top-left-radius: 0!important;
        border-bottom-left-radius: 0!important;
    }
}
</style>
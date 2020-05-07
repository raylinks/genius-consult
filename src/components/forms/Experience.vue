<template>
    <div class="wrapper rounded-lg mt-20">
        <div class="bg-blue-special h-16 w-full rounded-tl-lg rounded-tr-lg flex items-center justify-center">
            <h2 class="font-semibold">Education</h2>
        </div>
        <div class="grid grid-cols-5">
            <div class="col-span-1 left">
                <div class="w-full py-3 bg-dark text-white text-center">
                    {{ title }}
                </div>
            </div>

            <div class="col-span-4">
                <div class="w-11/12 mx-auto mt-10 mb-10">
                    <div class="grid grid-cols-4 gap-10">
                        <div class="col-span-2">
                            <input type="text" placeholder="Company Name" />
                        </div>
                        <div class="col-span-2">
                            <input type="text" placeholder="Job Title" />
                        </div>
                        <div class="col-span-2">
                            <input type="text" placeholder="Country" />
                        </div>
                        <div class="col-span-2">
                            <input type="text" placeholder="City" />
                        </div>
                        <div class="col-span-2">
                            <p class="mb-2">From</p>
                            <div class="grid grid-cols-2 gap-10">
                                <div class="col-span-1">
                                    <input type="text" placeholder="Month" />
                                </div>
                                <div class="col-span-1">
                                    <input type="text" placeholder="Year" />
                                </div>
                            </div>
                        </div>
                        <div class="col-span-2">
                            <p class="mb-2">To</p>
                            <div class="grid grid-cols-2 gap-10">
                                <div class="col-span-1">
                                    <input type="text" placeholder="Month" />
                                </div>
                                <div class="col-span-1">
                                    <input type="text" placeholder="Year" />
                                </div>
                            </div>
                        </div>
                        <div class="col-span-4">
                            <div class="flex items-center justify-end">
                                <input type="checkbox" /> <label for="" class="ml-2">Currently Work Here</label>
                            </div>
                        </div>
                    </div>
                    <div class="mt-10">
                        <textarea type="text" placeholder="Note" rows="6"></textarea>
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
export default {
    data() {
        return {
            title: 'Experience #1',
        }
    },
}
</script>

<style scoped>
h2 {
    font-size: 30px;
}
</style>

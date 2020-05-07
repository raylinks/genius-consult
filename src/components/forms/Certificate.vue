<template>
    <div class="wrapper rounded-lg mt-20">
        <div class="bg-blue-special h-16 w-full rounded-tl-lg rounded-tr-lg flex items-center justify-center">
            <h2 class="font-semibold">Certificates</h2>
        </div>
        <div class="grid grid-cols-5">
            <div class="col-span-1 left">
                <div class="w-full py-3 bg-dark text-white text-center">
                    {{ title }}
                </div>
            </div>

            <div class="col-span-4">
                <div class="w-11/12 mx-auto mt-10 mb-10">
                    <div class="grid grid-cols-2 gap-10">
                        <div class="col-span-1">
                            <input type="text" placeholder="Name" />
                        </div>
                        <div class="col-span-1">
                            <input type="text" placeholder="Authority" />
                        </div>
                        <div class="col-span-1">
                            <input type="text" placeholder="Link to Certificate" />
                        </div>
                        <div class="col-span-1">
                            <input type="date" placeholder="date" />
                        </div>
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
            title: 'Certificate #1',
        }
    },
}
</script>

<style lang="scss" scoped>
h2 {
    font-size: 30px;
}
</style>

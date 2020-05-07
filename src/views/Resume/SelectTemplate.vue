<template>
    <div>
        <div class="grid grid-cols-4 gap-10 w-11/12 mx-auto">
            <div class="col-span-1">
                <img src="@/assets/img/placeholder.png" />
            </div>
            <div class="col-span-1">
                <img src="@/assets/img/placeholder.png" />
            </div>
            <div class="col-span-1">
                <img src="@/assets/img/placeholder.png" />
            </div>
            <div class="col-span-1">
                <img src="@/assets/img/placeholder.png" />
            </div>
        </div>
        <div class="mt-5 flex justify-center">
            <button class="bg-blue-primary rounded-full h-12 px-12 text-white" @click="$emit('next')">Continue</button>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
button {
    outline: none !important;
}
</style>

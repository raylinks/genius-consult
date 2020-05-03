<template>
    <header class="h-24 lg:flex justify-between items-center lg:w-10/12 xl:w-4/5 mx-auto absolute top-0 inset-x-0">
        <div class="flex justify-between items-center w-10/12 mx-auto lg:w-auto">
            <img src="@/assets/svg/logo.svg" alt="" />

            <div class="strokes lg:hidden block" @click="isOpenMobile = !isOpenMobile">
                <div class="stroke rounded-full br-4 mb-1" :class="[isOpenMobile ? 'rotate-anti-clockwise' : '']"></div>
                <div class="stroke rounded-full br-4 mb-1" :class="[isOpenMobile ? 'hidden' : '']"></div>
                <div class="stroke rounded-full br-4" :class="[isOpenMobile ? 'rotate-clockwise' : '']"></div>
            </div>
        </div>
        <nav>
            <ul class="lg:flex items-center h-full px-10 pb-10" :class="isOpenMobile ? 'block bg-white' : 'hidden bg-transparent'">
                <li class="flex items-center nav_item mr-6 xl:mr-10 mb-4 lg:mb-0">
                    Services <img src="@/assets/svg/caret-down.svg" alt="" class="ml-1" />
                </li>
                <li class="flex items-center nav_item mr-6 xl:mr-10 mb-4 lg:mb-0">
                    Resources <img src="@/assets/svg/caret-down.svg" alt="" class="ml-1" />
                </li>
                <li class="flex items-center nav_item mr-6 xl:mr-10 mb-4 lg:mb-0">
                    Pricing
                </li>
                <li class="flex items-center nav_item mr-6 xl:mr-10 mb-4 lg:mb-0">
                    Jobs
                </li>
                <li class="flex items-center nav_item mr-6 xl:mr-10 mb-4 lg:mb-0">
                    Blog
                </li>
                <li class="flex items-center nav_item mr-6 xl:mr-10 mb-4 lg:mb-0 text-light-gray">
                    Log in
                </li>
                <li>
                    <a
                        class="btn bg-blue-primary rounded-full px-10 py-2 h-10 font-semibold flex items-center justify-center text-white"
                        >Sign Up</a
                    >
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isOpenMobile: false,
        }
    },
}
</script>

<style lang="scss" scoped>
.nav_item {
    font-size: 15px;
}

.btn {
    font-size: 16px;
}

.rotate-clockwise {
    animation: rotate-clockwise 0.2s ease-in-out 1 normal both;
}

.rotate-anti-clockwise {
    animation: rotate-anti-clockwise 0.2s ease-in-out 1 normal both;
}

@keyframes rotate-clockwise {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(45deg);
        margin-top: -6.5px;
    }
}

@keyframes rotate-anti-clockwise {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(-45deg);
    }
}

.strokes {
    .stroke {
        background: black;
        width: 30px;
        height: 3px;
    }
}
</style>

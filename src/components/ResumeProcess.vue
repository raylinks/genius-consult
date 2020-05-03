<template>
    <div class="w-full">
        <div class="bg-blue-light process_section w-full">
            <div class="w-10/12 xl:w-9/12 mx-auto md:flex items-center h-full py-10 md:py-0">
                <div class="w-11/12 md:w-1/2">
                    <h3>Select Template</h3>
                    <p class="lg:w-9/12 lg:pr-2">
                        There is a number of template available. You can select one that you think best for you and get
                        ready to storm the job market
                    </p>
                </div>
                <div class="w-11/12 md:w-1/2">
                    <img src="@/assets/svg/select-template.svg" alt="" class="md:ml-auto mt-10 md:mt-0" />
                </div>
            </div>
        </div>

        <div class="process_section w-full">
            <div class="w-10/12 xl:w-9/12 mx-auto md:flex flex-row-reverse items-center h-full py-10 md:py-0">
                <div class="md:w-1/2 md:ml-auto ">
                    <div class="md:ml-auto md:w-11/12 lg:w-9/12">
                        <h3>Answer Questions</h3>
                        <p class=" lg:pr-2">
                            You will be required to fill forms for different sections you want to include. Some sections
                            include:
                        </p>
                        <div class="flex justify-between mt-6 xl:w-10/12">
                            <ul>
                                <li class="flex items-center">
                                    <img src="@/assets/svg/bullet.svg" alt="" class="mr-3" />Personal Info
                                </li>

                                <li class="flex items-center mt-6">
                                    <img src="@/assets/svg/bullet.svg" alt="" class="mr-3" />Skills
                                </li>
                            </ul>

                            <ul>
                                <li class="flex items-center">
                                    <img src="@/assets/svg/bullet.svg" alt="" class="mr-3" />Experience
                                </li>

                                <li class="flex items-center mt-6">
                                    <img src="@/assets/svg/bullet.svg" alt="" class="mr-3" />Among others
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="md:w-1/2">
                    <img src="@/assets/svg/answer-questions.svg" alt="" class=" mt-10 md:mt-0" />
                </div>
            </div>
        </div>

        <div class="bg-blue-light process_section w-full">
            <div class="w-10/12 xl:w-9/12 mx-auto md:flex items-center h-full py-10 md:py-0">
                <div class="md:w-1/2">
                    <h3>Make Payment</h3>
                    <p class="lg:w-9/12 lg:pr-2">
                        There are different packages for you to choose from to make your resume stand out among others,
                        select the one that suits you the most and make payment.
                    </p>
                </div>
                <div class="md:w-1/2">
                    <img src="@/assets/svg/make-payment.svg" alt="" class="md:ml-auto mt-10 md:mt-0" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.process_section {
    height: 65vh;
    @media (max-width: 640px) {
        height: auto;
    }
    h3 {
        font-size: 28px;
        font-weight: 600;
        color: theme('colors.dark');
        margin-bottom: 10px;
    }

    p {
        font-size: 18px;
        letter-spacing: 0.06em;
        line-height: 36px;
    }
}
</style>

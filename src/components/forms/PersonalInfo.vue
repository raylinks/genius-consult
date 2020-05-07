<template>
    <div class="wrapper rounded-lg">
        <div class="bg-blue-special h-16 w-full rounded-tl-lg rounded-tr-lg flex items-center justify-center">
            <h2 class="font-semibold">Personal Info</h2>
        </div>
        <div class="grid grid-cols-5">
            <div class="col-span-1 left flex flex-col items-center pt-10">
                <div class="img">
                    <img src="@/assets/svg/placeholder.svg" alt="" />
                </div>
                <div class="mt-5">
                    <p>Upload a picture</p>
                </div>
            </div>

            <div class="col-span-4">
                <div class="w-11/12 mx-auto mt-10 mb-10">
                    <div class="grid grid-cols-5 w-full gap-5">
                        <div class="col-span-1">
                            <input type="text" placeholder="Title" />
                        </div>
                        <div class="col-span-2">
                            <input type="text" placeholder="First name" />
                        </div>
                        <div class="col-span-2">
                            <input type="text" placeholder="Last name" />
                        </div>
                    </div>

                    <div class="grid grid-cols-2 mt-10 gap-10">
                        <div class="col-span-1">
                            <input type="date" name="dob" id="dob" placeholder="Date of Birth" />
                        </div>
                        <div class="col-span-1">
                            <input type="text" name="nationality" id="nationality" placeholder="Nationality" />
                        </div>
                    </div>
                    <div class="grid grid-cols-2 mt-10 gap-10">
                        <div class="col-span-1">
                            <input type="number" name="phone-number" id="phone-number" placeholder="Date of Birth" />
                        </div>
                        <div class="col-span-1">
                            <input type="email" name="email" id="email" placeholder="Email Address" />
                        </div>
                    </div>

                    <div class="mt-10">
                        <input type="url" name="website-url" id="website-url" placeholder="Website url" />
                    </div>
                    <div class="mt-10">
                        <input type="text" name="address" id="address" placeholder="Address" />
                    </div>

                    <div class="mt-10">
                        <textarea type="text" name="profile" id="profile" placeholder="Profile" rows="6"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrapper {
    border: 1px solid #9f9eaa;

    h2 {
        font-size: 30px;
    }

    .left {
        border-right: 1px solid #9f9eaa;
    }

    input {
        padding: 10px;
        height: 55px;
        border: 1px solid #abaabe;
        width: 100%;
        border-radius: 10px;
    }

    textarea {
        padding: 15px;
        border: 1px solid #abaabe;
        width: 100%;
        border-radius: 10px;
    }
}
</style>

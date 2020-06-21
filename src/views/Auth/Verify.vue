<template>
    <div class="h-screen relative">
        <div class="absolute top-0 logo_container">
            <img src="@/assets/img/geniusConsultLogo.svg" class="imgLogo" alt />
        </div>

        <div class="h-full flex flex-col items-center justify-center">
            <p class="text w-7/12 mx-auto text-center">
                Your email has been successfully verified. You can now proceed to login to access all features
            </p>
            <div class="mt-10">
                <router-link to="/login" class="bg-blue-primary rounded-full text-white px-16 py-3">
                    Go to login
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        if (!this.$route.query.user_id) {
            this.$router.push('/register')
        }
    },
}
</script>

<style lang="scss" scoped>
.logo_container {
    left: 3%;
}

button {
    font-size: 20px;
}


img.imgLogo {
  height: 100px;
  width: 150px;
}

.text {
    font-size: 28px;
    letter-spacing: 0.03em;
}
</style>

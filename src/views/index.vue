<template>
  <default-layout>
    <section class="md:h-screen header">
      <div class="h-24 bg-transparent w-full md:hidden block"></div>
      <div
        class="h-full md:flex items-center justify-between w-11/12 xl:w-9/12 mx-auto"
      >
        <div class=" w-11/12 md:w-1/2">
          <h1
            class="font-bold hero_title text-white text-deep-gray md:w-11/12 mb-6 intro-note"
          >
            Boost your chances of getting hired!
          </h1>
          <p class="hero_sub_text mb-16 font-semibold text-white">
            Create a resume that stands out without hassle and get to search for
            jobs that will finally get you that financial freedom you wanted.
          </p>

          <div class="">
            <a
              href=""
              class="font-semibold text-white hero_btn py-4 px-16 bg-blue-primary rounded-full"
              >Get Started</a
            >
          </div>
        </div>

        <!-- <div class="w-11/12 md:w-1/2 mx-auto mt-20 md:mt-0">
          <img src="@/assets/svg/hero-img.svg" class="md:ml-auto" />
        </div> -->
      </div>
      <div class="h-24 bg-transparent w-full md:hidden block"></div>
    </section>
    <section class="stats">
      <div
        class="w-10/12 xl:w-9/12 mx-auto stats_inner bg-white rounded-lg px-6 md:px-10 lg:px-16 xl:px-24 py-10 md:flex justify-between items-center"
      >
        <div class="text-center">
          <h3 class="stats_figure font-semibold">200+</h3>
          <p class="stats_info">Total Resume Templates</p>
        </div>
        <div class="text-center mt-10 md:mt-0">
          <h3 class="stats_figure font-semibold">10+</h3>
          <p class="stats_info">Total Jobs</p>
        </div>
        <div class="text-center mt-10 md:mt-0">
          <h3 class="stats_figure font-semibold">50+</h3>
          <p class="stats_info">Employers</p>
        </div>
      </div>
    </section>
    <section class="flex flex-col items-center">
      <div class="h-40 w-full bg-transparent"></div>
      <div class="head_line"></div>
      <h2 class="text-deep-gray font-bold">What we do</h2>
      <div class="h-20 w-full"></div>

      <resume-description />
    </section>
    <section class="flex flex-col items-center">
      <div class="h-40 w-full bg-transparent"></div>
      <div class="head_line"></div>
      <h2 class="text-deep-gray font-bold">How it works</h2>
      <div class="h-20 w-full"></div>

      <resume-process />
    </section>
    <section class="h-screen get__started">
      <div class="flex h-full flex-col items-center justify-center text-center">
        <h2 class="font-bold text-grey">Are you ready to take over the Job market?</h2>
        <p class="cta_text mt-5">
          You want to hire or be hired? we are here for you!
        </p>
        <div class="mt-16">
          <a
            href=""
            class="font-semibold text-white hero_btn py-4 px-16 bg-blue-primary rounded-full"
            >Get Started</a
          >
        </div>
      </div>
    </section>
    <section class="recent-blog"></section>
  </default-layout>
</template>

<script>
import ResumeProcess from "@/components/ResumeProcess.vue";
import ResumeDescription from "@/components/ResumeDescription";
export default {
  components: {
    ResumeProcess,
    ResumeDescription,
  },
};
</script>

<style lang="scss" scoped>
.hero {
  &_title {
    font-size: 46px;
    line-height: 68px;
  }

  &_sub_text {
    font-size: 17px;
    line-height: 38px;
    letter-spacing: 0.03em;
  }

  &_btn {
    font-size: 22px;
  }
}

.get__started{
  background-image: url('../assets/img/mac.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
}

.header{
  // background-image: url('../assets/img/businessmeeting.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  animation: changeBg 30s infinite;
}

@keyframes changeBg{
  0%   {background-image: url("../assets/img/businessmeeting.jpg");}
  25%  {background-image: url("../assets/img/3meeting.jpg");}
  50%  {background-image: url("../assets/img/womanblue.jpg");}
  75%  {background-image: url("../assets/img/group meeting.jpg");}
  100% {background-image: url("../assets/img/books2.jpg");}
  // 0%   {background-image: url("../assets/img/businessmeeting.jpg");}
}

.stats {
  margin-top: -2rem;

  &_inner {
    box-shadow: 0px 4px 80px rgba(0, 0, 0, 0.08);
  }

  &_figure {
    color: theme("colors.blue.dark");
    letter-spacing: 0.03em;
    font-size: 44px;
  }

  &_info {
    color: theme("colors.dark");
    letter-spacing: 0.03em;
    font-size: 20px;
  }
}

.head_line {
  height: 8px;
  width: 120px;
  border-radius: 5px;
  background-color: theme("colors.blue.primary");
}

h2 {
  letter-spacing: 0.03em;
  font-size: 40px;
}

.cta_text {
  font-size: 22px;
}

@media screen and (max-width: 780px) {
  h1.intro-note {
    margin-bottom: 0.5rem;
  }
}
</style>

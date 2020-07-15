<template>
  <header :class="[isScroll ? 'show__header' : '' ]" class="h-24 lg:flex justify-between items-center lg:w-10/12 xl:w-4/5 mx-auto fixed top-0 inset-x-0">
    <div class="flex justify-between items-center w-10/12 mx-auto lg:mx-0 lg:w-auto">
      <router-link to="/"><img src="@/assets/img/geniusConsultLogo.svg" class="imgLogo p-2" alt /></router-link>

      <div class="strokes lg:hidden block" @click="isOpenMobile = !isOpenMobile">
        <div class="stroke rounded-full br-4 mb-1" :class="[isOpenMobile ? 'rotate-anti-clockwise' : '' , !isScroll ? 'hamburger__white' : 'hamburger__black']"></div>
        <div class="stroke rounded-full br-4 mb-1" :class="[isOpenMobile ? 'hidden' : '' , !isScroll ? 'hamburger__white' : 'hamburger__black']"></div>
        <div class="stroke rounded-full br-4" :class="[isOpenMobile ? 'rotate-clockwise' : '' , !isScroll ? 'hamburger__white' : 'hamburger__black']" ></div>
      </div>
    </div>
    <nav>
      <ul class="lg:flex items-center h-full px-10 pb-10 lg:pb-0 lg:px-0"
        :class="isOpenMobile ? 'block bg-white' : 'hidden bg-transparent'">
        <li class="nav_item mr-6 xl:mr-10 mb-4 lg:mb-0 cursor-pointer relative" @mouseover="showNav = 1"
          @mouseleave="showNav = ''">
          <div class="flex items-center " :class="[isScroll ? 'nav__black' : 'nav__white',isOpenMobile ? 'nav__black':'', !isHome ? 'nav__black' : '']">
            <router-link to="/recruitment/create">Recruiment</router-link>
          </div>
        </li>
        <li class="nav_item mr-6 xl:mr-10 mb-4 lg:mb-0 cursor-pointer relative" @mouseover="showNav = 1"
          @mouseleave="showNav = ''">
          <div class="flex items-center " :class="[isScroll ? 'nav__black' : 'nav__white',isOpenMobile ? 'nav__black':'', !isHome ? 'nav__black' : '']">
            Services
            <img src="@/assets/svg/caret-down.svg" alt class="ml-1" />
          </div>
          <template v-if="showNav === 1">
            <div class="md:absolute">
              <ul class="bg-white shadow-lg mt-4 w-64 menu-dropdown rounded-md">
                <li class="text-left px-5 py-4 hover:bg-blue-light hover:text-blue-primary duration-500">
                  <router-link :to="user ? '/resume' : '/login'">CV/Resume Writing</router-link>
                </li>
                <li class="text-left px-5 py-4 flex justify-between hover:bg-blue-light hover:text-blue-primary duration-500">
                  <router-link to="/services/cover_letter_writing"><span>Cover letter writing</span></router-link>
                </li>
                <li class="text-left px-5 flex justify-between py-4 hover:bg-blue-light hover:text-blue-primary duration-500">
                  <router-link to="/services/linkedin_optimisation"><span>LinkedIn Profile Optimization</span></router-link>
                </li>
                <li class="text-left px-5 py-4 flex justify-between hover:bg-blue-light hover:text-blue-primary duration-500">
                  <span>Personal Statement/Motivation letters</span>
                  <span
                    class="bg-teal-400 p-1 badge items-center h-5 text-white rounded-full  uppercase inline-block text-xs">Coming Soon!</span>
                </li>
                <li class="text-left flex justify-between px-5 py-4 hover:bg-blue-light hover:text-blue-primary duration-500">
                  <router-link to="/services/business_plan"><span>Business Plan</span></router-link>
                </li>
                <li class="text-left px-5 py-4 flex justify-between hover:bg-blue-light hover:text-blue-primary duration-500">
                  <router-link to="/services/business_proposal"><span>Business Proposal</span></router-link>
                </li>
                <li class="text-left px-5 py-4 flex justify-between hover:bg-blue-light hover:text-blue-primary duration-500">
                  <router-link to="/services/academic_and_research"><span>Academic and Research Work</span></router-link>
                </li>
              </ul>
            </div>
          </template>
        </li>
        <li class="nav_item mr-6 xl:mr-10 mb-4 lg:mb-0 cursor-pointer relative" @mouseover="showNav = 2"
          @mouseleave="showNav = ''">
          <div class="flex items-center" :class="[isScroll ? 'nav__black' : 'nav__white',isOpenMobile ? 'nav__black':'', !isHome ? 'nav__black' : '']">
            Resources
            <img src="@/assets/svg/caret-down.svg" alt class="ml-1" />
          </div>
          <template v-if="showNav === 2">
            <div class="md:absolute">
              <ul class="bg-white shadow-lg mt-4 w-64 menu-dropdown rounded-md">
                <li class="text-left flex justify-between px-5 py-4 hover:bg-blue-light hover:text-blue-primary duration-500">
                  <span>Learning & Development</span>
                  <span
                    class="bg-teal-400 p-1 badge items-center h-5 text-white rounded-full ml-1 mt-1 uppercase inline-block text-xs">Coming Soon!</span>
                </li>
                <li class="text-left px-5 flex justify-between py-4 hover:bg-blue-light hover:text-blue-primary duration-500">
                  <span>Mentorship Platform</span>
                  <span
                    class="bg-teal-400 p-1 badge items-center h-5 text-white rounded-full ml-1 mt-1 uppercase inline-block text-xs">Coming Soon!</span>
                </li>
                <li class="text-left px-5 flex justify-between py-4 hover:bg-blue-light hover:text-blue-primary duration-500">
                  <span>Training</span>
                  <span
                    class="bg-teal-400 p-1 badge items-center h-5 text-white rounded-full ml-1 mt-1 uppercase inline-block text-xs">Coming Soon!</span>
                </li>
                <li class="text-left px-5 py-4 flex justify-between hover:bg-blue-light hover:text-blue-primary duration-500">
                  <span>Ambassadors</span>
                  <span
                    class="bg-teal-400 p-1 badge items-center h-5 text-white rounded-full ml-1 mt-1 uppercase inline-block text-xs">Coming Soon!</span>
                </li>
                <li class="text-left px-5 flex justify-between py-4 hover:bg-blue-light hover:text-blue-primary duration-500">
                  <span>Referrals</span>
                  <span
                    class="bg-teal-400 p-1 badge items-center h-5 text-white rounded-full ml-1 mt-1 uppercase inline-block text-xs">Coming Soon!</span>
                </li>
              </ul>
            </div>
          </template>
        </li>
        <li class="flex items-center nav_item mr-6 xl:mr-10 mb-4 lg:mb-0" :class="[isScroll ? 'nav__black' : 'nav__white',isOpenMobile ? 'nav__black':'', !isHome ? 'nav__black' : '']">
          Pricing
        </li>
        <li class="flex items-center nav_item mr-6 xl:mr-10 mb-4 lg:mb-0" :class="[isScroll ? 'nav__black' : 'nav__white',isOpenMobile ? 'nav__black':'', !isHome ? 'nav__black' : '']">
          <router-link to="/jobs">Jobs</router-link>
        </li>
        <li class="flex items-center nav_item mr-6 xl:mr-10 mb-4 lg:mb-0 hover:text-blue-primary duration-500" :class="[isScroll ? 'nav__black' : 'nav__white',isOpenMobile ? 'nav__black':'', !isHome ? 'nav__black' : '']">
          <router-link to="/blog">Blog</router-link>
        </li>

        <template>
          <li
            class="flex items-center nav_item mr-6 xl:mr-10 mb-4 lg:mb-0 opacity-75 hover:text-blue-primary duration-500" :class="[isScroll ? 'nav__black' : 'nav__white',isOpenMobile ? 'nav__black':'', !isHome ? 'nav__black' : '']">
            <router-link to="/">Home</router-link>
          </li>
        </template>
        <template v-if="!user">
          <li
            class="flex items-center nav_item mr-6 xl:mr-10 mb-4 lg:mb-0 text-light-gray hover:text-blue-primary duration-500" :class="[isScroll ? 'nav__black' : 'nav__white',isOpenMobile ? 'nav__black':'', !isHome ? 'nav__black' : '']">
            <router-link to="/login">Log in</router-link>
          </li>
          <li>
            <router-link to="/register"
              class="btn bg-blue-primary rounded-full px-10 py-2 h-10 font-semibold flex items-center justify-center text-white">
              Sign Up</router-link>
          </li>
        </template>
        <template v-else>
          <li class="nav_item mr-6 xl:mr-10 mb-4 lg:mb-0 cursor-pointer relative" @mouseover="showNav = 3"
            @mouseleave="showNav = ''">
            <div class="flex items-center">
              <img src="@/assets/svg/ellipse.svg" alt class="mr-2" />
              {{ user.email }}
              <img src="@/assets/svg/caret-down.svg" alt class="ml-1" />
            </div>
            <template v-if="showNav === 3">
              <div class="md:absolute right-0">
                <ul class="bg-white shadow-lg mt-4 w-40 rounded-md">
                  <li class="text-center py-4 hover:bg-blue-light hover:text-blue-primary duration-500" @click="logout">
                    <span>Logout</span>
                  </li>
                </ul>
              </div>
            </template>
          </li>
        </template>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        isOpenMobile: false,
        showNav: "",
      };
    },
    props: {
      blog: {
        type: Boolean,
        default: false,
      },
      isScroll:{
        type:Boolean,
        default:false
      }
    },
    created(){
      window.addEventListener('scroll',this.handleScroll)
    },
    destroyed(){
      window.removeEventListener('scroll')
    },
    methods: {
      logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        this.$router.go();
      },
      handleScroll(){
        if (window.scrollY > 100) {
                this.isScroll = true
            } else this.isScroll = false
      }
    },
    computed: {
      user: function () {
        return JSON.parse(localStorage.getItem("user"));
      },
      isHome : function(){
        return this.$route.path == '/'
      }
    },
  };
</script>

<style lang="scss" scoped>

  .show__header{
    background-color: white;
    width :100%;
    padding-left : 100px;
    padding-right:144px;
  }
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

  img.imgLogo {
    height: 100px;
    width: 150px;
  }

  .menu-dropdown{
    width: 19rem !important;
  }

  .badge{
    background-color: teal !important;
    word-wrap: break-word!important;
    font-size: xx-small !important;
    width: 100px!important;
    text-align: center!important;
  }
  .nav__white{
    color: white;
    font-weight: 200px;
  }

  .nav__black{
    color: black;
  }

  .hamburger__white{
    background: white!important;
  }
  .hamburger__black{
    background: black!important;
  }

  .strokes {
    .stroke {
      background: black;
      width: 30px;
      height: 3px;
    }
  }

  // @media screen and (min-width: 1024px) {
  //   img.imgLogo {
  //     height: 200px;
  //     width: 200px;
  //     // margin-left: 20px;
  //   }
  // }

  @media screen and (max-width: 780px) {
    img.imgLogo {
      height: 90px;
      width: 150px;
    }
  }

  @media screen and (max-width:780px){
    .show__header{
      background-color: white;
      width :100%;
      padding-left: 0;
      padding-right: 0;
    }
  }
</style>
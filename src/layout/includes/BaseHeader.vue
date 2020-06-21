<template>
  <header
    class="h-24 lg:flex justify-between items-center lg:w-10/12 xl:w-4/5 mx-auto absolute top-0 inset-x-0"
  >
    <div
      class="flex justify-between items-center w-10/12 mx-auto lg:mx-0 lg:w-auto"
    >
      <img src="@/assets/img/geniusConsultLogo.svg" class="imgLogo" alt />

      <div
        class="strokes lg:hidden block"
        @click="isOpenMobile = !isOpenMobile"
      >
        <div
          class="stroke rounded-full br-4 mb-1"
          :class="[isOpenMobile ? 'rotate-anti-clockwise' : '']"
        ></div>
        <div
          class="stroke rounded-full br-4 mb-1"
          :class="[isOpenMobile ? 'hidden' : '']"
        ></div>
        <div
          class="stroke rounded-full br-4"
          :class="[isOpenMobile ? 'rotate-clockwise' : '']"
        ></div>
      </div>
    </div>
    <nav>
      <ul
        class="lg:flex items-center h-full px-10 pb-10 lg:pb-0 lg:px-0"
        :class="isOpenMobile ? 'block bg-white' : 'hidden bg-transparent'"
      >
     
          <li
            class="nav_item mr-6 xl:mr-10 mb-4 lg:mb-0 cursor-pointer relative"
            @mouseover="showNav = 1"
            @mouseleave="showNav = ''"
          >
            <div class="flex items-center">
              <router-link to="/recruitment/create">Recruiment</router-link>
            
            </div>
          </li>
          <li
            class="nav_item mr-6 xl:mr-10 mb-4 lg:mb-0 cursor-pointer relative"
            @mouseover="showNav = 1"
            @mouseleave="showNav = ''"
          >
            <div class="flex items-center">
              Services
              <img src="@/assets/svg/caret-down.svg" alt class="ml-1" />
            </div>
            <template v-if="showNav === 1">
              <div class="md:absolute">
                <ul class="bg-white shadow-lg mt-4 w-64 rounded-md">
                  <li
                    class="text-left px-5 py-4 hover:bg-blue-light hover:text-blue-primary duration-500"
                  >
                    <router-link :to="user ? '/resume' : '/login'"
                      >CV/Resume Writing</router-link
                    >
                  </li>
                  <li
                    class="text-left px-5 py-4 hover:bg-blue-light hover:text-blue-primary duration-500"
                  >
                    <span>Cover letter writing</span>
                  </li>
                  <li
                    class="text-left px-5 py-4 hover:bg-blue-light hover:text-blue-primary duration-500"
                  >
                    <span>LinkedIn Profile Optimization</span>
                  </li>
                  <li
                    class="text-left px-5 py-4 hover:bg-blue-light hover:text-blue-primary duration-500"
                  >
                    <span>Personal Statement/Motivation letters</span>
                  </li>
                  <li
                    class="text-left px-5 py-4 hover:bg-blue-light hover:text-blue-primary duration-500"
                  >
                    <span>Business Plan</span>
                  </li>
                  <li
                    class="text-left px-5 py-4 hover:bg-blue-light hover:text-blue-primary duration-500"
                  >
                    <span>Business Proposal</span>
                  </li>
                  <li
                    class="text-left px-5 py-4 hover:bg-blue-light hover:text-blue-primary duration-500"
                  >
                    <span>Academic and Research Work</span>
                  </li>
                </ul>
              </div>
            </template>
          </li>
          <li
            class="nav_item mr-6 xl:mr-10 mb-4 lg:mb-0 cursor-pointer relative"
            @mouseover="showNav = 2"
            @mouseleave="showNav = ''"
          >
            <div class="flex items-center">
              Resources
              <img src="@/assets/svg/caret-down.svg" alt class="ml-1" />
            </div>
            <template v-if="showNav === 2">
              <div class="md:absolute">
                <ul class="bg-white shadow-lg mt-4 w-64 rounded-md">
                  <li
                    class="text-left px-5 py-4 hover:bg-blue-light hover:text-blue-primary duration-500"
                  >
                    <span>Learning & Development</span>
                  </li>
                  <li
                    class="text-left px-5 py-4 hover:bg-blue-light hover:text-blue-primary duration-500"
                  >
                    <span>Mentorship Platform</span>
                  </li>
                  <li
                    class="text-left px-5 py-4 hover:bg-blue-light hover:text-blue-primary duration-500"
                  >
                    <span>Training</span>
                  </li>
                    <li
                    class="text-left px-5 py-4 hover:bg-blue-light hover:text-blue-primary duration-500"
                  >
                    <span>Ambassadors</span>
                  </li>
                  <li
                    class="text-left px-5 py-4 hover:bg-blue-light hover:text-blue-primary duration-500"
                  >
                    <span>Referrals</span>
                  </li>
                </ul>
              </div>
            </template>
          </li>
          <li class="flex items-center nav_item mr-6 xl:mr-10 mb-4 lg:mb-0">
            Pricing
          </li>
          <li class="flex items-center nav_item mr-6 xl:mr-10 mb-4 lg:mb-0">
            <router-link to="/jobs">Jobs</router-link>
          </li>
          <li
            class="flex items-center nav_item mr-6 xl:mr-10 mb-4 lg:mb-0 hover:text-blue-primary duration-500"
          >
            <router-link to="/blog">Blog</router-link>
          </li>
     
        <template>
          <li
            class="flex items-center nav_item mr-6 xl:mr-10 mb-4 lg:mb-0 opacity-75 hover:text-blue-primary duration-500"
          >
            <router-link to="/">Home</router-link>
          </li>
        </template>
        <template v-if="!user">
          <li
            class="flex items-center nav_item mr-6 xl:mr-10 mb-4 lg:mb-0 text-light-gray hover:text-blue-primary duration-500"
          >
            <router-link to="/login">Log in</router-link>
          </li>
          <li>
            <router-link
              to="/register"
              class="btn bg-blue-primary rounded-full px-10 py-2 h-10 font-semibold flex items-center justify-center text-white"
              >Sign Up</router-link
            >
          </li>
        </template>
        <template v-else>
          <li
            class="nav_item mr-6 xl:mr-10 mb-4 lg:mb-0 cursor-pointer relative"
            @mouseover="showNav = 3"
            @mouseleave="showNav = ''"
          >
            <div class="flex items-center">
              <img src="@/assets/svg/ellipse.svg" alt class="mr-2" />
              {{ user.email }}
              <img src="@/assets/svg/caret-down.svg" alt class="ml-1" />
            </div>
            <template v-if="showNav === 3">
              <div class="md:absolute right-0">
                <ul class="bg-white shadow-lg mt-4 w-40 rounded-md">
                  <li
                    class="text-center py-4 hover:bg-blue-light hover:text-blue-primary duration-500"
                    @click="logout"
                  >
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
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      this.$router.go();
    },
  },
  computed: {
    user: function() {
      return JSON.parse(localStorage.getItem("user"));
    },
  },
};
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

img.imgLogo {
  height: 100px;
  width: 150px;
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
</style>

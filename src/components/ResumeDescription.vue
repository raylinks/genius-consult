<template>
  <div class="w-full">
    <div class="bg-blue-light process_section w-full">
      <div
        class="w-10/12 xl:w-9/12 mx-auto md:flex items-center h-full py-10 md:py-0"
      >
        <div class="w-11/12 md:w-1/2">
          <h3>Staffing & Recruitment</h3>
          <p class="lg:w-9/12 lg:pr-2">
            Are you An Employer that needs the right candidate to fill an
            opening in your company? Let’s our team of Recruiters and Human
            Resource Managers get you the best fit for the role.
          </p>
        </div>
        <div class="w-11/12 md:w-1/2">
          <img
            src="@/assets/svg/recruit.svg"
            alt=""
            class="md:ml-auto mt-10 md:mt-0"
          />
        </div>
      </div>
    </div>

    <div class="bg-light process_section w-full">
      <div
        class="w-10/12 xl:w-9/12 mx-auto md:flex items-center h-full py-10 md:py-0"
      >
        <div class="md:w-1/2 p-5">
          <img
            src="@/assets/svg/cv.svg"
            alt=""
            class="md:ml-auto mt-10 md:mt-0 "
          />
        </div>
        <div class="md:w-1/2">
          <h3>CV Writing</h3>
          <p class="lg:w-9/12 lg:pr-2">
            Boost your Chances of getting hired! Create a resume that stands out
            without hassle and get to search for jobs that would finally get you
            that financial freedom you wanted
          </p>
        </div>
      </div>
    </div>
    <div class="bg-blue-light process_section w-full">
      <div
        class="w-10/12 xl:w-9/12 mx-auto md:flex items-center h-full py-10 md:py-0"
      >
        <div class="md:w-1/2">
          <h3>E-Books & Online Courses</h3>
          <p class="lg:w-9/12 lg:pr-2">
            Get Access to nemerous e-books and Courses that would take your
            career or business to the next level
          </p>
        </div>
        <div class="md:w-1/2">
          <img
            src="@/assets/svg/onlineArticle.svg"
            alt=""
            class="md:ml-auto mt-10 md:mt-0"
          />
        </div>
      </div>
    </div>
    <div class="bg-light process_section w-full">
      <div
        class="w-10/12 xl:w-9/12 mx-auto md:flex items-center h-full py-10 md:py-0"
      >
        <div class="md:w-1/2">
          <img
            src="@/assets/svg/development.svg"
            alt=""
            class="md:ml-auto mt-10 md:mt-0"
          />
        </div>
        <div class="md:w-1/2 ml-10">
          <h3>Learning & Development</h3>
          <p class="lg:w-9/12 lg:pr-2">
            Learn In-demand Skills needed in today’s workplace which would help
            you Land your dream job faster or work as a sought after freelancer.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
img {
  padding: 5px;
}
.process_section {
  height: 65vh;
  @media (max-width: 640px) {
    height: auto;
  }
  h3 {
    font-size: 28px;
    font-weight: 600;
    color: theme("colors.dark");
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    letter-spacing: 0.06em;
    line-height: 36px;
  }
}
</style>

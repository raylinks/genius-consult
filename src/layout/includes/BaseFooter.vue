<template>
  <footer class="bg-gray-100 border-t border-gray-300 py-10 text-sm">
    <div class="max-w-5xl mx-auto pb-8 mb-6 border-b border-gray-300 px-4 lg:px-0">
      <div class="flex flex-wrap items-start justify-start">
        <div class="lg:w-1/4 w-full lg:mb-0 mb-6">
          <h5 class="font-semibold text-gray-700 underline mb-2">
            Genius Consult Tools
          </h5>
          <ul class="leading-loose">
            <li>
              <a class="text-gray-600 hover:underline font-semibold" href="#">Resume Templates</a>
            </li>
            <li>
              <a class="text-gray-600 hover:underline font-semibold" href="#">Cover Letter Templates</a>
            </li>
            <li>
              <a class="text-gray-600 hover:underline font-semibold" href="#">Website Templates</a>
            </li>
            <li>
              <a class="text-gray-600 hover:underline font-semibold" href="#">Resume Builder</a>
            </li>
            <li>
              <a class="text-gray-600 hover:underline font-semibold" href="#">Cover Letter Builder</a>
            </li>
            <li>
              <a class="text-gray-600 hover:underline font-semibold" href="#">Website Builder</a>
            </li>
            <li>
              <a class="text-gray-600 hover:underline font-semibold" href="#">Get a job</a>
            </li>
            <li>
              <a class="text-gray-600 hover:underline font-semibold" href="#">Students</a>
            </li>
            <li>
              <a class="text-gray-600 hover:underline font-semibold" href="#">Pricing</a>
            </li>
          </ul>
        </div>
        <div class="lg:w-1/4 w-full lg:mb-0 mb-6">
          <h5 class="font-semibold text-gray-700 underline mb-2">
            Career Guide
          </h5>
          <ul class="leading-loose">
            <li>
              <a class="text-gray-600 hover:underline font-semibold" href="#">Job Search Blogs</a>
            </li>
            <li>
              <a class="text-gray-600 hover:underline font-semibold" href="#">Career Books</a>
            </li>
            <li>
              <a class="text-gray-600 hover:underline font-semibold" href="#">Career Help Center</a>
            </li>
            <li>
              <a class="text-gray-600 hover:underline font-semibold" href="#">Resume Examples</a>
            </li>
            <li>
              <a class="text-gray-600 hover:underline font-semibold" href="#">Cover letter Examples</a>
            </li>
          </ul>
        </div>
        <div class="lg:w-1/4 w-full lg:mb-0 mb-6">
          <h5 class="font-semibold text-gray-700 underline mb-2">About Us</h5>
          <ul class="leading-loose">
            <li>
              <a class="text-gray-600 hover:underline font-semibold" href="#">Home</a>
            </li>
            <li>
              <a class="text-gray-600 hover:underline font-semibold" href="#">Careers</a>
            </li>
            <li>
              <a class="text-gray-600 hover:underline font-semibold" href="#">About Company</a>
            </li>
            <li>
              <a class="text-gray-600 hover:underline font-semibold" href="#">Policies</a>
            </li>
          </ul>
        </div>
        <div class="lg:w-1/4 w-full">
          <div class="flex items-baseline justify-start mb-2">
            <a href="https://ng.linkedin.com/organization-guest/company/geniusconsult" class="mr-2" target="_blank">
              <img src="https://img.icons8.com/android/48/000000/linkedin.png" />
            </a>

            <a href="https://twitter.com/geniusconsultng" target="_blank" class="mr-2">
              <img src="https://img.icons8.com/fluent/48/000000/twitter.png" />
            </a>

            <a href="https://web.facebook.com/geniusconsultng/" target="_blank">
              <img src="https://img.icons8.com/fluent/48/000000/facebook-new.png" />
            </a>
            <a href="https://www.youtube.com/channel/UCX_enCXuaYNGcZWlvBeIxpA?app=desktop" target="_blank">
              <img src="https://img.icons8.com/fluent/48/000000/youtube-play.png" />
            </a>
            <a href="https://www.instagram.com/geniusconsultng/" target="_blank">
              <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" />
            </a>
          </div>

          <ul class="leading-relaxed">
            <li>
              <a class="text-gray-600 hover:underline font-semibold" href="#">Terms</a>
            </li>
            <li>
              <a class="text-gray-600 hover:underline font-semibold" href="#">Privacy</a>
            </li>
          </ul>
          <br />
          <form action="" class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block  tracking-wide text-gray-700 text-xs mb-2" for="grid-first-name">
                  NewsLetter Signup
                </label>
                <input
                  class="appearance-none block w-400 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="" type="text" placeholder="Email" />
                <button
                  class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-black py-1 px-2 rounded"
                  type="button">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="max-w-5xl mx-auto flex items-center px-4 lg:px-0">
      <img src="@/assets/img/geniusConsultLogo.svg" class="fill-current text-gray-600 w-5 h-5 flex-shrink-0" alt="" />
      <p class="text-gray-600 text-sm pl-2">
        &copy; 2020 Genius Consult, Inc. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
  export default {};
</script>

<style>
  footer {
    background-color: rgba(3, 113, 192, 0.4);
    color: #002634;
  }
</style>
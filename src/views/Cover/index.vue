<template>
  <default-layout>
    <section class="min-h-screen pt-32">
          <div class="w-full lg:w-10/12 xl:w-9/12 mx-auto mt-10 mb-10" v-show="start == true">
            <cover-letter-form ></cover-letter-form>
          </div>
          <div v-show="start==false" class="w-full lg:w-10/12 xl:w-9/12 mx-auto mt-10">
            <get-started v-bind:title="getStartedTitle" v-bind:message="getStartedMessage" @getStarted="getStarted" ></get-started>
          </div>
    </section>
  </default-layout>
</template>

<script>
import CoverLetterForm from "@/components/forms/CoverLetterForm.vue"
import GetStarted from "@/components/GetStarted.vue"

export default {
    components:{
        GetStarted,
        CoverLetterForm
    },

    data(){
      return {
        start : false,
        getStartedTitle: 'Cover Letter Writing',
        getStartedMessage:' A Cover Letter is as important as a CV. It allows you to target the job and the '+
                            'employer in a specific way, leaving the resume to market your skills, qualities and experience as '+
                            'part of the bigger picture. Many employers and recruiters read the letter first. Some will not even '+
                            'consider your resume until they are satisfied by the content of your letter.'+
                            'Writing a killer cover letter is not a simple task. It requires thought, knowledge and understanding. '+
                            'Our experts are ready to assist you.'
        }
    },
    methods :{
      getStarted() {
        this.start = !this.start;
      }
    }

}
</script>

<style>



</style>
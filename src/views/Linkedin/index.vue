<template>
  <default-layout>
    <section class="min-h-screen pt-32">
      <div class="w-full lg:w-10/12 xl:w-9/12 mx-auto mb-10 mt-10" v-show="start == true">
        <linkedin-form></linkedin-form>
      </div>
      <div v-show="start==false" class="w-full lg:w-10/12 xl:w-9/12 mx-auto mt-10">
        <get-started
          v-bind:title="getStartedTitle"
          v-bind:message="getStartedMessage"
          @getStarted="getStarted"
        ></get-started>
      </div>
    </section>
  </default-layout>
</template>

<script>
import LinkedinForm from "@/components/forms/LinkedinForm.vue"
import GetStarted from "@/components/GetStarted.vue"

export default {
    components:{
        GetStarted,
        LinkedinForm
    },

    data(){
      return {
        start : false,
        getStartedTitle: 'Linkedin Profile Optimisation',
        getStartedMessage:'Recruiters and Hiring Managers can’t find you without a complete and fully optimised '+
                        'LinkedIn profile. Whether you’re using LinkedIn to attract recruiters or supplement '+
                        'your CV in your job search, your profile will only make an impact if its tailored to '+
                        'the jobs you want with specific and search engine optimized profile sections.'+
                        'By optimizing the look of your LinkedIn profile, you give the best possible first impression '+
                        'to your potential connections. You also make it easier for potential clients to understand '+
                        'what you are about and how to get ahold of you. '+
                        'Get your LinkedIn profile optimised now '
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
<template>
  <default-layout>
    <section class="min-h-screen pt-32">
          <div class="w-full lg:w-10/12 xl:w-9/12 mx-auto mt-10 " v-show="start == true">
            <academic-research/>`
          </div>
          <div v-show="start==false" class="w-full lg:w-10/12 xl:w-9/12 mx-auto mt-10">
            <get-started v-bind:title="getStartedTitle" v-bind:message="getStartedMessage" @getStarted="getStarted" ></get-started>
          </div>
    </section>
  </default-layout>
</template>

<script>
import AcademicResearch from "@/components/forms/AcademicResearch.vue"
import GetStarted from "@/components/GetStarted.vue"

export default {
    components:{
        GetStarted,
        AcademicResearch
    },

    data(){
      return {
        start : false,
        getStartedTitle: 'Academic and Research Work',
        getStartedMessage:'A research project is a scientific endeavor to answer a research question.” Specifically, projects may take the form of “case series, case control study, cohort study, randomized, controlled trial, survey, or secondary data analysis such as decision analysis, cost effectiveness analysis or meta-analysis”,We can assist you carry out research on your project work and put it into writing'
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
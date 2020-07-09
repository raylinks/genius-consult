<template>
  <default-layout>
    <section class="min-h-screen pt-32">
          <div class="w-full lg:w-10/12 xl:w-9/12 mx-auto mt-10 " v-show="start == true">
            <business-form proposal></business-form>
          </div>
          <div v-show="start==false" class="w-full lg:w-10/12 xl:w-9/12 mx-auto mt-10">
            <get-started v-bind:title="getStartedTitle" v-bind:message="getStartedMessage" @getStarted="getStarted" ></get-started>
          </div>
    </section>
  </default-layout>
</template>

<script>
import BusinessForm from "@/components/forms/BusinessForm.vue"
import GetStarted from "@/components/GetStarted.vue"

export default {
    components:{
        GetStarted,
        BusinessForm
    },

    data(){
      return {
        start : false,
        getStartedTitle: 'Business Proposals',
        getStartedMessage:'Proposals of every type are intimidating. You’re asking someone to choose you — or,'+
        'in the case of business proposals, your company — and hoping that they understand why you’re the perfect fit.'+
        'Writing a business proposal requires that you convincingly articulate your understanding of the potential client’s problem,'+
        'as well as the reasons your company is the best choice. Even the most well-crafted solutions can get rejected due to a sub-par proposal.'+
        'Building a business proposal is like building a house. Just as the structure of a house varies based on location and the architect or homeowner’s'+
        'preferences, business proposal components can vary based on industry, company size, and many other factors.'
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
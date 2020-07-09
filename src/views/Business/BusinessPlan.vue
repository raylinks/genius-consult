<template>
  <default-layout>
    <section class="min-h-screen pt-32">
          <div class="w-full lg:w-10/12 xl:w-9/12 mx-auto mt-10 " v-show="start == true">
            <business-form plan></business-form>
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
        getStartedTitle: 'Business Plans',
        getStartedMessage:'A business plan describes a business in detail, including its goals and how it intends to achieve them.'+
                            'Business plans are typically written for new businesses, though they can be written for existing ones as well.'+ 
                            'The plan includes the operational, financial and marketing aspects of the venture.'+
                            'The business plan is a fundamental tool and is necessary for a startup that needs a sense of direction.'+
                            'One of the reasons a business plan is so important is that it is one of the main requirements of venture capital firms and banks interested in investing funds in businesses.'+
                            'The business plan usually starts with an executive summary, followed by a description of the business in detail, including its products and services, and a section on how the business is going to achieve its goals from operational, financial and marketing standpoints.'+
                            'The business plan also typically includes a brief look at the industry within which the business will operate and how the business will differentiate itself from the competition '+
                            'Our team of experienced Business Consultants who have in-depth knowledge in Auditing, Finance and marketing are ready to write a workable business plan that would help grow your business'
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
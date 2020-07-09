<template>
     <div class="min-h-screen mb-10">
      <div class="flex h-full flex-col items-center justify-center text-center">
        <h2 class="font-bold">{{title}}</h2>
        <p class="cta_text mt-5 px-5 text-center">
          {{message}}
        </p>
        <div class="mt-16">
          <button
            href=""
            class="font-semibold text-white hero_btn py-4 px-16 bg-blue-primary rounded-full"
            @click="start"
            >Get Started</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props:{
        title:String,
        message :String
    },
    methods:{
        start(){
            this.$emit('getStarted');
        }
    }

}
</script>

<style>

</style>
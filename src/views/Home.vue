<template>
  <div class="home">
    <img
      src="@/assets/svg/under_maintenance.svg"
      alt="image illustrating site is under construction"
    />

    <div class="texts">
      <h1>Sorry, We are currently under construction</h1>
    </div>

    <count-down />
  </div>
</template>

<script>
const CountDown = () => import('@/components/CountDown')
export default {
  name: 'Home',
  components: {
    'count-down': CountDown
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  img {
    height: 40%;
    width: 40%;
  }

  .texts {
    h1 {
      font-size: 40px;
    }
  }
}

@media screen and (max-width: 700px){
  img{
    width: 90% !important;
    // height: 70%!important;
  }
}
</style>

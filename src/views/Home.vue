<template>
  <div class="home">
    <img
      src="@/assets/svg/under_maintenance.svg"
      alt="image illustrating site is under construction"
    />

    <div class="texts">
      <h1>Hello Esteemed Customer,</h1>
      <p>
        Our website is currently been upgraded, If you need any of our services
        kindly Call/WhatsApp 0902 445 7971, 0808 705 2422<br />You can send an
        email to <a href="mailto:cvgeniusng@gmail.com">cvgeniusng@gmail.com</a
        ><br />Thank you for choosing CV Genius
      </p>
    </div>
    <b-button  variant="secondary">Default Alert</b-button>

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
      font-size: 32px;
    }

    p {
      font-size: 20px;
    }
  }
}

@media screen and (max-width: 700px) {
  img {
    width: 90% !important;
    // height: 70%!important;
  }
}
</style>

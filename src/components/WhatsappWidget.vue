<template>
  <a
    href="https://api.whatsapp.com/send?phone=2348087052422&text=Hello%20Genius%20Consult!%20I%E2%80%99m%20interested%20in%20one%20of%20your%20services%20"
    class="float"
    target="_blank"
  >
    <i class="fa fa-whatsapp my-float"></i>
  </a>
</template>

<script>
export default {};
</script>

<style>
.float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 21px;
  right: 95px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
}

.my-float {
  margin-top: 16px;
}

/* @media screen and (max-width: 480px) {
  .float {
    bottom: 21px;
    right: 90px;
  }
} */
</style>

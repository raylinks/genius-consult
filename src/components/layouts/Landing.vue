<template>
  <div class="page-container">
    <div class="nav">
      <div class="navbar">
        <div class="logo-wrapper">
          <a href="">Genius Consult</a>
        </div>

        <div class="nav-content">
          <ul class="d-flex">
            <li class="nav_item">
              Services
              <i class="icon-down-arrow"></i>
            </li>
            <li class="nav_item">
              Resources
              <i class="icon-down-arrow"></i>
            </li>
            <li class="nav_item">
              <a href="">Pricing</a>
            </li>
            <li class="nav_item">
              <a href="/login">Login</a>
            </li>
            <li class="nav_item">
              <a href="/register" class="btn_genius">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Landing'
}
</script>

<style lang="scss" scoped>
.nav {
  position: absolute;
  top: 0;
  padding: 10px 30px !important;
  width: 100%;

  .navbar {
    width: 90%;
    margin: auto;

    .logo-wrapper {
      a {
        color: $secondary !important;
        font-weight: 900;
        font-size: 28px;
      }
    }

    .nav-content {
      .nav_item {
        display: flex;
        align-items: center;
        font-weight: 400;
        margin-right: 35px;
        cursor: pointer;

        a {
          color: #2c3e50 !important;
        }

        .btn_genius {
          background: transparent !important;
          color: $primary !important;
          border: 1px solid $primary;
          border-radius: 45px;
          padding: 9px 25px;
          font-weight: 700;
          transition: 500ms;

          &:hover {
            background: $primary !important;
            color: white !important;
            text-decoration: none;
          }
        }
        .icon-down-arrow {
          font-weight: 900;
          margin-left: 5px;
          font-size: 12px;
        }
      }
    }
  }

  p {
    font-size: 20px;
    color: #464353;
    font-weight: 900;
  }
}
</style>

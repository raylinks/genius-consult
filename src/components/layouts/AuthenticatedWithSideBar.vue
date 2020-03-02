<template>
  <div class="page-container">
    <b-navbar toggleable="lg" type="dark" variant="secondary">
      <b-navbar-brand href="#">Genius Consult</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">My Resumes</b-nav-item>
          <b-nav-item href="#">My Resumes</b-nav-item>
          <b-nav-item href="#">My Resumes</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="d-flex">
      <div class="sideBar">
        <ul class="list-group">
          <li class="list-item active"><a href="">Select a template</a></li>
          <li class="list-item"><a href="">Fill in your CV</a></li>
          <li class="list-item"><a href="">Preview &amp; customize</a></li>
        </ul>
        <div class="btn-wrapper">
          <button class="btn-download">Download</button>
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthenticatedWithSideBar'
}
</script>

<style lang="scss" scoped>
.nav {
  position: absolute;
  top: 0;
  padding: 10px 30px !important;

  p {
    font-size: 20px;
    color: #464353;
    font-weight: 900;
  }
}

.navbar {
  background: linear-gradient(345deg, #262626 0%, #4b4b4b 100%) !important;
}

.sideBar {
  background-color: #333;
  height: 100vh;
  width: 300px;
  display: flex;
  flex-direction: column;
  z-index: 1150;

  .list-group {
    display: flex;
    flex-direction: column;

    .list-item {
      font-size: 1rem;
      font-weight: 600;

      a {
        display: block;
        position: relative;

        color: #fafafa !important;
        font-weight: 600;
        line-height: 27px;
        padding-top: 10px;
        padding-bottom: 10px !important;
        margin: auto;
        // height: 45px;
        border-top: 1px solid #565656;
      }

      &.active {
        background-color: #262626;
        border-left: #262626;
      }
    }
  }
  .btn-wrapper {
    margin-top: 20px;
  }
  .btn-download {
    width: 70%;
    margin: auto;
    font-size: 1.1rem;
    font-weight: 800;
    background: $primary;
    color: #fafafa !important;
    padding: 8px 0px;
    border: 1px solid $primary;
    border-radius: 45px;
  }
}
</style>

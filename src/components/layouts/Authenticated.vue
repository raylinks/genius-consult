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
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Authenticated'
}
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  padding: 10px 30px !important;

  p {
    font-size: 20px;
    color: #464353;
    font-weight: 900;
  }
}
</style>

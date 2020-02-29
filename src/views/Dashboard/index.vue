<template>
  <div>
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

    <b-container>
      <b-row>
        <b-col cols="3">
          <div class="row">
            <div class="col-md-4 col-sm-6 col-xs-12">
              <div href="" class="thumbnail">
                <img
                  src="https://s3.eu-west-2.amazonaws.com/templates-kickresume-com/bubbles/thumbnail.png"
                  alt="bubbles"
                />
                <div class="caption">
                  <div class="caption-hover-action ">
                    <button
                      type="button"
                      class="btn btn-lg btn-primary btn-block"
                    >
                      Select<i class="ion-ios-arrow-right"></i></button
                    ><button
                      type="button"
                      class="btn btn-lg btn-default btn-block"
                    >
                      Preview
                    </button>
                  </div>
                </div>
              </div>
              <p class="thumbnail-title text-capitalize template-thumbnail">
                <span class="template-name">bubbles</span
                ><label
                  class="Badge__badge___2eSQAJ-Wfr Badge__pro___2JAKy1_HDx"
                  ><i class="ion-ios-star Badge__badge__icon___UzQ_C4TjBp"></i
                  ><span class="Badge__badge__title___1_NnnzgscF"
                    >Pro</span
                  ></label
                >
              </p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {}
</script>

<style></style>

<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="">
        <b-navbar-brand href="#">
          <img
            src="../../../assets/Logo/logo2.png"
            style="width: 15%; margin-right: 10px"
            alt=""
          />
          <b>QUẢN TRỊ</b>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Search</b-button
              >
            </b-nav-form>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>Admin</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <div class="container-fluid" id="container">
      <div class="row">
        <!-- SIDE BAR -->
        <div class="col-sm-2 d-none d-sm-flex" style="padding: 15px">
          <div class="sidebar-manager">
            <SideBar />
          </div>
        </div>

        <!-- TABLE -->
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import axios from "axios";
export default {
  name: "order",
  components: {
    SideBar,
  },
};
</script>

<style scoped>
.navbar {
  padding: 0 15px;
  background-color: #ffd600;
}
</style>

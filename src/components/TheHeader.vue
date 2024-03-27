<template>
  <div>
    <!-- <div class="header-top">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 text-right">
              <p class="user-check d-inline">
                <a href="index.html">👑 KING AND QUEEN</a>
              </p>
              <p class="user-check d-inline">
                <a href="dangky.html">ĐĂNG KÝ</a>
              </p>
              <p class="user-check d-inline" style="border: none">
                <router-link class="" to="/login">ĐĂNG NHẬP</router-link>
              </p>
            </div>
          </div>
        </div>
      </div> -->
    <!-- header -->
    <div class="header">
      <nav
        class="navbar navbar-expand-md navbar-light bg-light sticky-top"
        role="tablist"
      >
        <div class="container-fluid">
          <router-link to="/">
            <img src="../assets/logo.png" alt="LOGO" height="100" />
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarReponsive"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarReponsive">
            <ul class="navbar-nav ml-auto" role="tablist">
              <li class="nav-item">
                <router-link class="nav-link" to="/about"
                  >GIỚI THIỆU</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/nike">NIKE</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/adidas">ADIDAS</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/jordan">JORDAN</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/yeezy">YEZZY</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/spa">SPA GIÀY</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/contact"
                  >LIÊN HỆ</router-link
                >
              </li>
              <li class="nav-item">
                <div class="input-group rounded">
                  <input
                    type="search"
                    class="form-control rounded"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                  <span class="input-group-text" id="search-addon">
                    <a href=""><i class="bi bi-search"></i></a>
                  </span>
                </div>
                <!-- <b-navbar-form class="ml-auto" @submit.stop.prevent="search">
                  <b-form-input
                    v-model="searchQuery"
                    placeholder="Search..."
                    class="mr-sm-2"
                  ></b-form-input>
                  <b-button type="submit" variant="outline-success"
                    >Search</b-button
                  >
                </b-navbar-form> -->
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/login">
                  <i class="bi bi-person-fill"></i>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/cart">
                  <i class="bi bi-cart"></i>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
      
      <script>
export default {
  name: "header",
  props: {
    msg: String,
  },
};
</script>
      
  <style scoped>
.header-top {
  text-decoration: none;
}
.header {
  background-color: #f0f0f0 !important;
  box-shadow: 0 6px 6px -6px rgb(0 0 0 / 50%);
}

.header #search-addon {
  border: none;
}

/* .navbar-nav .nav-item:hover {
          background-color: #fed700;
          color: black !important;
      } */

/* .header-top { */
/* top: 0;
          position: fixed;
          z-index: 1; */
/* margin: 10px;
    color: black;
    box-sizing: border-box;
  } */

/* .user-check {
    padding: 0 6px;
    border-right: 1px solid #ccc;
  } */

.nav-item {
  padding-left: 30px;
}
.nav-link:active {
  color: #bf1919;
}
.card,
.user {
  align-items: center;
}
.bi-person,
.bi-cart {
  font-size: 25px;
  font-weight: bold;
}
/* 
  /* body {
    display: block;
  } */

a:hover {
  color: #ffd600 !important;
  text-decoration: none;
}
li.active > a {
  color: #d31616;
}
a {
  font-weight: bold;
  color: black !important;
}
label {
  font-weight: bold;
}

.navbar-collapse li a:hover,
.navbar-collapse li.active a {
  color: #bf1919;
}
.navbar-collapse li a {
  position: relative;
}
</style>
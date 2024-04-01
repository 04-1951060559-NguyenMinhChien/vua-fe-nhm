<template>
  <div>
    <div class="header-top">
      <div class="container-fluid">
        <div class="row text-right">
          <div class="col-12" style="padding: 10px 20px">
            <b>👑 KING AND QUEEN ~ <i class="bi bi-telephone-fill"></i> </b>
            Hotline: <b>0356422999</b>
          </div>
        </div>
      </div>
    </div>
    <!-- header -->
    <div class="header">
      <nav
        class="navbar navbar-expand-md navbar-light bg-light sticky-top"
        role="tablist"
      >
        <div class="container-fluid">
          <router-link to="/">
            <img src="../assets/Logo/logo.png" alt="LOGO" height="100" />
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
              <li class="nav-item item">
                <router-link class="nav-link element" to="/about"
                  >GIỚI THIỆU</router-link
                >
              </li>
              <li class="nav-item item">
                <router-link class="nav-link" to="/nike">NIKE</router-link>
              </li>
              <li class="nav-item item">
                <router-link class="nav-link" to="/adidas">ADIDAS</router-link>
              </li>
              <li class="nav-item item">
                <router-link class="nav-link" to="/jordan">JORDAN</router-link>
              </li>
              <li class="nav-item item">
                <router-link class="nav-link" to="/yeezy">YEZZY</router-link>
              </li>
              <li class="nav-item item">
                <router-link class="nav-link" to="/spa">SPA GIÀY</router-link>
              </li>
              <li class="nav-item item">
                <router-link class="nav-link" to="/contact"
                  >LIÊN HỆ</router-link
                >
              </li>
              <li class="nav-item">
                <div role="group" class="input-group">
                  <input
                    id="bv-icons-table-search"
                    type="search"
                    placeholder="Bạn muốn tìm gì ?"
                    class="form-control"
                    style="border-radius: 40px; background-color: #f0f0f0"
                  />
                  <div
                    class="input-group-text"
                    style="
                      margin-left: -41px;
                      z-index: 1;
                      border: 0;
                      border-radius: 40px;
                      margin-top: 1px;
                      margin-bottom: 1px;
                      background-color: #f0f0f0;
                    "
                  >
                    <i class="bi bi-search"></i>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/login">
                  <i class="bi bi-person"></i>
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
  name: "the-header",
  props: {
    msg: String,
  },
  // mounted() {
  //   this.checkScrollPosition();
  //   window.addEventListener("scroll", this.checkScrollPosition);
  // },
  // methods: {
  //   checkScrollPosition() {
  //     const headerTop = this.$refs.headerTop; // Sử dụng $refs để truy cập element
  //     if (window.scrollY > 0) {
  //       headerTop.classList.add("hidden");
  //     } else {
  //       headerTop.classList.remove("hidden");
  //     }
  //   },
  // },
  // destroyed() {
  //   window.removeEventListener("scroll", this.checkScrollPosition);
  // },
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

.nav-item {
  padding: 0 15px;
}

.nav-item.item:hover {
  border-radius: 40px;
  background-color: #fcd603;
}

/* .input-group .input-group-text {
  margin-left: -40px;
  z-index: 1;
} */
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

.navbar-collapse ul {
  align-items: center;
}

/* a:hover {
  background: #ffd600;
  border-radius: 40px;
  text-decoration: none;
} */
a {
  font-weight: bold;
  color: black !important;
}

label {
  font-weight: bold;
}

.navbar-collapse li a {
  position: relative;
}
</style>
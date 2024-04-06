<template>
  <div class="container-fluid">
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
    <div class="row">
      <nav
        class="navbar navbar-expand-md navbar-light bg-light sticky-top"
        role="tablist"
      >
        <div class="col-3">
          <div class="collapse navbar-collapse" id="navbarReponsive">
            <router-link to="/">
              <img src="../assets/Logo/logo.png" alt="LOGO" width="70%" />
            </router-link>
          </div>
        </div>
        <div class="col-6">
          <div class="collapse navbar-collapse float-left" id="navbarReponsive">
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
            </ul>
          </div>
        </div>
        <div class="col-3">
          <div class="collapse navbar-collapse" id="navbarReponsive">
            <ul class="navbar-nav ml-auto" role="tablist" style="float: center">
              <!-- <li class="nav-item">
                <b-nav-form @submit.stop.prevent>
                  <b-form-input
                    size="sm"
                    class="mr-sm-2"
                    placeholder="Search"
                    v-model="search"
                  ></b-form-input>
                  <b-button
                    size="sm"
                    class="my-2 my-sm-0"
                    type="submit"
                    @click="searchProduct()"
                    >Search</b-button
                  >
                </b-nav-form>
              </li> -->
              <li class="nav-item">
                <div class="dropdown">
                  <button class="dropbtn">
                    <i class="bi bi-person"></i>
                  </button>
                  <div class="dropdown-content">
                    <router-link class="nav-link" to="/login">
                      Đăng nhập
                    </router-link>
                    <button @click="logout" class="btn btn-logout">
                      Đăng xuất
                    </button>
                  </div>
                </div>
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
// import axios from "axios";
export default {
  name: "the-header",
  props: {
    msg: String,
  },
  data() {
    return {
      listProductSearch: [],
      listProduct: {
        name: "",
        description: "",
        status: "",
        image: "", // Lưu trữ đường dẫn của hình ảnh
        price: "",
        brand_id: "",
        size_id: "",
        product_type: "",
        numberInStock: "",
      },

      // search
      // search: "",
      // listProductSearch: [],
      // message: "",
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("userData"); // Xóa token khỏi local storage
      this.$router.push("/login"); // Chuyển hướng đến trang đăng nhập
    },
    // searchProduct() {
    //   console.log(" SEARCH  !!!", this.search);
    //   if (this.search) {
    //     axios
    //       .post(`http://localhost:3838/products/search/${this.search}`)
    //       .then((res) => {
    //         if (res.data.status === 200 && res.data.data !== null) {
    //           this.listProductSearch = res.data.data;
    //           this.message = "";

    //           console.log("Thành công SEARCH  !!!", this.listProductSearch);
    //         } else {
    //           this.listProductSearch = "";
    //           this.message = "Không tìm thấy sản phẩm !!!";
    //         }
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   } else {
    //     this.listProductSearch = "";
    //     this.message = "Vui lòng nhập từ khóa tìm kiếm";
    //   }
    // },
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

.nav-item {
  padding: 0 15px;
}

.nav-item.item:hover {
  border-radius: 40px;
  background-color: #fcd603;
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

.navbar-collapse ul {
  align-items: center;
}

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

.dropdown {
  position: relative;
  display: inline-block;
}

.dropbtn {
  /* background-color: #3498db; */
  background-color: #f8f9fa;
  color: #000;
  /* padding: 12px; */
  font-size: 10px;
  border: none;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 110px;
  /* box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); */
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: rgb(129, 129, 129) 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
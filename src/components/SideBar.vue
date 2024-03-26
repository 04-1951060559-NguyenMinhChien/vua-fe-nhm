<template>
  <div class="sidebar">
    <h3>
      <i class="bi bi-list" style="padding-left: 15px; font-weight: bold"></i>
      QUẢN LÝ
    </h3>
    <div>
      <ul>
        <li>
          <router-link class="nav-link" to="/admin/adminusers"
            ><i class="bi bi-people"></i>Quản lý tài khoản</router-link
          >
        </li>
        <li>
          <router-link class="nav-link" to="/admin/adminstaff">
            <i class="bi bi-person-gear"></i>Quản lý nhân viên</router-link
          >
        </li>
        <li>
          <router-link class="nav-link" to="/admin/adminproducts"
            ><i class="bi bi-database-fill"></i>Quản lý sản phẩm</router-link
          >
        </li>
        <li>
          <router-link class="nav-link" to="/admin/adminorder"
            ><i class="bi bi-basket"></i>Quản lý đơn hàng</router-link
          >
        </li>
        <li>
          <router-link class="nav-link" to="/admin/adminorder"
            ><i class="bi bi-clipboard2-data"></i>Quản lý thống kê</router-link
          >
        </li>
      </ul>
    </div>
    <!-- <h3><i class="bi bi-gear-fill" style="padding-left: 15px"></i> CÀI ĐẶT</h3>
    <h3>THOÁT</h3> -->
  </div>
</template>

<script>
export default {
  name: "sidebar",
};
</script>

<style scoped>
.sidebar {
  /* padding-left: 30px;
  padding-right: 30px; */
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  padding-top: 20px;
  border: 1px solid #c9c9c9;
}

.sidebar h2 {
  color: #000;
  padding-left: 20px;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.sidebar ul li {
  padding: 10px 35px 10px;
}
.sidebar ul li i {
  padding-right: 10px;
  font-size: 20px;
}
.sidebar ul li a {
  color: #000;
  text-decoration: none;
}

.sidebar ul li:hover {
  background-color: #ffd600;
}
</style>
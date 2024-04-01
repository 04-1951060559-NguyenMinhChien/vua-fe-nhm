<template>
  <div class="container-fluid">
    <div>
      <div class="row" style="padding: 1rem; background-color: #ffd600">
        <!-- HEADER -->
        <div
          class="col-1 d-flex d-sm-none align-items-center justify-content-center"
        >
          <span>X</span>
        </div>
        <div
          class="col-10 col-sm-9 d-flex align-items-center justify-content-center justify-content-sm-start"
        >
          <img
            src="../../../assets/Logo/logo2.png"
            style="width: 50px; padding-right: 10px"
            alt=""
          />
          <b>QUẢN TRỊ</b>
        </div>
        <div
          class="col-sm-3 d-none d-sm-flex align-items-center justify-content-sm-end"
        >
          Admin
        </div>
        <div
          class="col-1 d-flex d-sm-none align-items-center justify-content-center"
        >
          <span>X</span>
        </div>
      </div>

      <div class="row">
        <!-- SIDE BAR -->
        <div class="col-sm-3 d-none d-sm-flex" style="padding: 15px">
          <div class="sidebar-manager"><SideBar /></div>
        </div>

        <!-- TABLE -->
        <div class="col-12 col-sm-9" style="padding: 15px">
          <div class="container-fluid">
            <div class="oder-manager">
              <h2>Quản lý tài khoản</h2>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
// import SiderBar from "../../../components/"

export default {
  name: "users",
  components: {
    SideBar,
  },
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  width: 80%;
  margin: 20px auto;
}

h2 {
  text-align: center;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table th,
table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

table th {
  background-color: #f2f2f2;
}

table tr:nth-child(even) {
  background-color: #f2f2f2;
}

table tr:hover {
  background-color: #ddd;
}
</style>

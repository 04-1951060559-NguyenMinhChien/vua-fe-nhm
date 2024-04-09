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
        <div class="col-12 col-sm-10" style="padding: 15px">
          <div class="container-fluid" id="container">
            <table class="table" v-if="selectedTable === 'Order'">
              <thead>
                <tr style="background-color: #e0e0e0">
                  <th scope="col" style="width: 7%">Tên người nhận</th>
                  <th scope="col" style="width: 9%">Số điện thoại</th>
                  <th scope="col">Email</th>
                  <th scope="col">Địa chỉ</th>
                  <th scope="col" style="width: 7%">Tổng tiền</th>
                  <th scope="col" style="width: 7%">Phương thức thanh toán</th>
                  <th scope="col" style="width: 7%">Trạng thái thanh toán</th>
                  <th scope="col" style="width: 7%">Trạng thái đơn hàng</th>
                  <th scope="col" style="width: 7%">Ngày tạo</th>
                  <th scope="col" style="width: 7%">Ghi chú</th>
                  <th scope="col" style="width: 9%">Tác vụ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in listOrder" :key="item.id">
                  <td>{{ item.name }}</td>
                  <td>{{ item.phone }}</td>
                  <td>{{ item.email }}</td>
                  <td>
                    {{
                      item.address +
                      ", " +
                      item.ward +
                      ", " +
                      item.district +
                      ", " +
                      item.province
                    }}
                  </td>
                  <td>{{ item.totalPrice }} đ</td>
                  <td>{{ item.typePay }}</td>
                  <td>
                    {{
                      item.statusPay === 0
                        ? "thanh toán khi nhận hàng"
                        : "đã thanh toán"
                    }}
                  </td>

                  <td>
                    {{
                      item.statusOder === "0"
                        ? "Chờ xác nhận"
                        : item.statusOder === "1"
                        ? "Xác nhận"
                        : item.statusOder === "2"
                        ? "Đang giao"
                        : item.statusOder === "3"
                        ? "Thành công"
                        : ""
                    }}
                  </td>

                  <td>{{ item.createdAt }}</td>
                  <td>{{ item.note }}</td>
                  <td>
                    <i class="bi bi-eye-fill"></i>
                    <i class="bi bi-pencil-square"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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
  data() {
    return {
      // userData: {},
      selectedTable: "Order",
      listOrder: [],
    };
  },
  created() {
    this.getAllOrder();
    // this.userData = JSON.parse(localStorage.getItem("userData"));
    // localStorage.removeItem("userData");
  },
  methods: {
    getAllOrder() {
      axios
        .get("http://localhost:3838/oders")
        .then((res) => {
          if (res.data.status === 200 && res.data.data) {
            this.listOrder = res.data.data;
            console.log("Thành công !!!", this.listOrder);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.product-manager h5 {
  padding-top: 5px;
}

.active {
  background-color: #6c757d;
  border-radius: 5px;
  color: #fff;
}

.navbar {
  padding: 0 15px;
  background-color: #ffd600;
}

tbody i {
  margin-left: 10px;
  font-size: 30px;
}

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
  padding-bottom: 20px;
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

table tr:hover {
  background-color: #ddd;
}

.bi-pencil-square {
  color: green;
}

.bi-trash {
  color: red;
}

.bi-pencil-square,
.bi-trash {
  border: 1px solid #a1a1a1;
  padding: 0 5px;
  border-radius: 10px;
  background-color: #ddd;
}
</style>

<template>
  <div>
    <div><TheHeader /></div>

    <div class="container" style="padding: 30px 0">
      <div class="row">
        <div class="col-4">
          <h5>THÔNG TIN TÀI KHOẢN</h5>
          <div class="row">
            <div class="col-4">
              <div class="name">
                <h6>Họ tên:</h6>
              </div>
              <div class="email:">
                <h6>Email:</h6>
              </div>
              <div class="phone">
                <h6>Số điện thoại:</h6>
              </div>
            </div>
            <div class="col-8" v-if="userData">
              <div class="name">
                <h6>{{ userData.name }}</h6>
              </div>
              <div class="email:">
                <h6>{{ userData.email }}</h6>
              </div>
              <div class="phone">
                <h6>{{ userData.phone }}</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="col-8" style="border-left: 1px solid #acacac">
          <h5>LỊCH SỬ ĐẶT HÀNG</h5>
          <div class="container-fluid">
            <table class="table" v-if="selectedTable === 'Order'">
              <thead>
                <tr style="background-color: #e0e0e0">
                  <th scope="col" style="width: 7%">Ngày tạo</th>
                  <th scope="col" style="width: 7%">Tên người nhận</th>
                  <th scope="col" style="width: 9%">Số điện thoại</th>
                  <!-- <th scope="col">Email</th> -->
                  <th scope="col">Địa chỉ</th>
                  <th scope="col" style="width: 7%">Tổng tiền</th>
                  <th scope="col" style="width: 7%">Phương thức thanh toán</th>
                  <th scope="col" style="width: 7%">Trạng thái thanh toán</th>
                  <th scope="col" style="width: 7%">Trạng thái đơn hàng</th>
                  <th scope="col" style="width: 7%">Ghi chú</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in listOrder" :key="item.id">
                  <td>{{ item.createdAt }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.phone }}</td>
                  <!-- <td>{{ item.email }}</td> -->
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
                      item.statusPay === "0"
                        ? "Thanh toán khi nhận hàng"
                        : "Đã thanh toán"
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
                  <td>{{ item.note }}</td>
                  <!-- <td>
                    <i class="bi bi-eye-fill"></i>
                    <i class="bi bi-pencil-square"></i>
                  </td> -->
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div><TheFooter /></div>
  </div>
</template>
        
  <script>
import TheHeader from "../../../components/TheHeader.vue";
import TheFooter from "../../../components/TheFooter.vue";
import axios from "axios";
export default {
  name: "Profile",
  props: {
    msg: String,
  },
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      userData: {},
      selectedTable: "Order",
      listOrder: [],
    };
  },
  created() {
    this.getAllUser();
    this.userData = JSON.parse(localStorage.getItem("userData"));

    this.getAllOrder();
  },
  methods: {
    getAllUser() {
      axios
        .get("http://localhost:3838/users")
        .then((res) => {
          if (res.data.status === 200 && res.data.data) {
            this.listUser = res.data.data; //Gan data vao optionSize`
            console.log("Thành công lấy user", res);
            // this.optionsUser = res.data.data; //Gan data vao optionSize
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getAllOrder() {
      axios
        .get(`http://localhost:3838/oders/${this.userData._id}`)
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
/* .col-8 {
  border-left: 1px solid #acacac;
} */
h5 {
  text-align: center;
  font-weight: bold;
}

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
</style>
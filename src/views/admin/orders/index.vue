<template>
  <div>
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
            <div>
              <h5>QUẢN LÝ ĐƠN HÀNG</h5>
            </div>
            <table class="table">
              <thead>
                <tr style="background-color: #e0e0e0">
                  <th scope="col" style="width: 7%">Ngày tạo</th>
                  <th scope="col" style="width: 7%">Tên người nhận</th>
                  <th scope="col" style="width: 9%">Số điện thoại</th>
                  <th scope="col">Email</th>
                  <th scope="col">Địa chỉ</th>
                  <th scope="col" style="width: 7%">Tổng tiền</th>
                  <th scope="col" style="width: 7%">Phương thức thanh toán</th>
                  <th scope="col" style="width: 7%">Trạng thái thanh toán</th>
                  <th scope="col" style="width: 7%">Trạng thái đơn hàng</th>
                  <th scope="col" style="width: 7%">Ghi chú</th>
                  <th scope="col" style="width: 9%">Tác vụ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in listOrder" :key="item.id">
                  <td>{{ item.createdAt }}</td>
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
                        ? "Đang giao hàng"
                        : item.statusOder === "3"
                        ? "Giao hàng thành công"
                        : item.statusOder === "4"
                        ? "Giao hàng thất bại"
                        : ""
                    }}
                  </td>
                  <!-- <td>{{ item.statusOder }}</td> -->
                  <td>{{ item.note }}</td>
                  <td>
                    <i
                      @click="showModalOrderDetail(item)"
                      class="bi bi-eye-fill"
                    ></i>
                    <i
                      @click="showModalUpdateOrder(item)"
                      class="bi bi-pencil-square"
                    ></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- MODAL UPDATE -->
        <b-modal
          ref="my-modal-update-order"
          id="modal-xl"
          centered
          hide-footer
          title="Cập nhật thông tin đơn hàng"
        >
          <div class="modal-body">
            <form @submit.prevent="handleSubmitUpdateOrder">
              <div class="mb-3">
                <label for="productType" class="form-label"
                  >Trạng thái đơn hàng</label
                >
                <select
                  class="form-select"
                  id="productType"
                  v-model="dataUpdateOrder.statusOder"
                  required
                >
                  <option value="">Cập nhật trạng thái đơn hàng:</option>
                  <option
                    v-for="type in statusOder"
                    :key="type._id"
                    :value="type._id"
                  >
                    {{ type.name }}
                  </option>
                </select>
              </div>
              <div class="modal-footer">
                <button type="submit" class="btn btn-primary">Lưu</button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click="hideModalUpdateOrder"
                >
                  Hủy
                </button>
              </div>
            </form>
          </div>
        </b-modal>
        <!-- MODAL XEM CHI TIET DON HANG -->
        <b-modal
          ref="my-modal-order-detail"
          id="modal-xl"
          size="xl"
          centered
          hide-footer
          title="Chi tiết đơn đặt hàng"
        >
          <div class="modal-body">
            <form @submit.prevent="">
              <div class="mb-3 order-detail">
                <div class="row">
                  <div class="col-4">
                    <b>Ngày tạo: </b>{{ dataDetailOrder.createdAt }}
                  </div>
                  <div class="col-4">
                    <b>Trạng thái thanh toán: </b>
                    {{
                      dataDetailOrder.statusPay === "0"
                        ? "Thanh toán khi nhận hàng"
                        : "Đã thanh toán"
                    }}
                  </div>
                  <div class="col-4">
                    <b>Trạng thái vận chuyển:</b>
                    {{
                      dataDetailOrder.statusOder === "0"
                        ? "Chờ xác nhận"
                        : item.statusOder === "1"
                        ? "Xác nhận"
                        : item.statusOder === "2"
                        ? "Đang giao hàng"
                        : item.statusOder === "3"
                        ? "Giao hàng thành công"
                        : item.statusOder === "4"
                        ? "Giao hàng thất bại"
                        : ""
                    }}
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <b>Thông tin giao hàng:</b>
                    <div class="information">
                      <p><b>- Tên người nhận: </b>{{ dataDetailOrder.name }}</p>
                      <p><b>- Số điện thoại: </b>{{ dataDetailOrder.phone }}</p>
                      <p>
                        <b>- Địa chỉ: </b
                        >{{
                          dataDetailOrder.address +
                          ", " +
                          dataDetailOrder.ward +
                          ", " +
                          dataDetailOrder.district +
                          ", " +
                          dataDetailOrder.province
                        }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-4">
                    <b>Phương thức thanh toán: </b>
                    <div class="typePay">
                      {{ dataDetailOrder.typePay }}
                    </div>
                  </div>
                  <div class="col-4">
                    <b>Ghi chú: </b>
                    <div class="note" v-if="dataDetailOrder.note">
                      {{ dataDetailOrder.note }}
                    </div>
                    <div class="note" v-if="!dataDetailOrder.note">
                      Không có ghi chú !!!
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="totalPrice text-right">
                <p>
                <h5>TỔNG TIỀN: <b style="color:Red">{{ dataDetailOrder.totalPrice }} đ</b></h5>

                </p>
                
              </div>
              <div class="product-detail">
                <div class="row">
                  <div class="col-12">
                    <table class="table">
                      <thead>
                        <tr style="background-color: #e0e0e0">
                          <th scope="col">Hình ảnh</th>
                          <th scope="col">Thông tin sản phẩm</th>
                          <th scope="col">Đơn giá</th>
                          <th scope="col">Số lượng</th>
                          <!-- <th scope="col">Tổng tiền</th> -->
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item2 in dataDetailOrder.product">
                          <td>
                            <img
                              :src="
                                'http://localhost:3838/' +
                                item2.product_id.image
                              "
                              alt=""
                              style="width: 50px; height: 70px"
                            />
                          </td>
                          <td>
                            Tên sản phẩm: {{ item2.product_id.name }} <br>
                            Size: {{ item2.product_id.size_id }}
                          </td>
                          <td>
                            <p
                              v-if="
                                item2.product_id.sellingPrice &&
                                item2.product_id.price
                              "
                            >
                              {{
                                formatPrice(
                                  calculateCurrentPrice(
                                    item2.product_id.price,
                                    item2.product_id.sellingPrice
                                  )
                                )
                              }}
                            </p>
                            <p
                              v-if="
                                !item2.product_id.sellingPrice &&
                                item2.product_id.price
                              "
                            >
                              {{
                                formatPrice(
                                  calculateCurrentPrice(
                                    item2.product_id.price,
                                    0
                                  )
                                )
                              }}
                            </p>
                          </td>
                          <!-- <td>{{ item2.product_id.size_id ? item2.product_id.size_id.name : "" }}</td> -->
                          <td>{{ item2.quantity }}</td>
                          <!-- <td rowspan="5">{{ dataDetailOrder.totalPrice }}</td> -->
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </b-modal>
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
      // selectedTable: "Order",
      listOrder: [],
      statusOder: [
        { _id: "0", name: "Chờ xác nhận" },
        { _id: "1", name: "Đã xác nhận" },
        { _id: "2", name: "Đang giao hàng" },
        { _id: "3", name: "Giao hàng thành công" },
        { _id: "4", name: "Giao hàng không thành công" },
      ],
      dataUpdateOrder: {
        statusOder: "",
      },
      dataDetailOrder: {
        user_id: "",
        product_data: [],
        name: "",
        email: "",
        address: "",
        ward: "",
        district: "",
        province: "",
        phone: "",
        totalPrice: "",
        note: "",
        typePay: "COD",
        statusPay: "",
        statusOder: "0",
      },
      dataProductDetail: {},
    };
  },
  created() {
    this.getAllSize();
    this.getAllOrder();
    // this.userData = JSON.parse(localStorage.getItem("userData"));
    // localStorage.removeItem("userData");
  },
  methods: {
    showModalUpdateOrder() {
      this.$refs["my-modal-update-order"].show();
    },

    hideModalUpdateOrder() {
      this.$refs["my-modal-update-order"].hide();
    },
    // handleImageUpload(event) {
    //   const file = event.target.files[0];
    //   this.dataCreate.image = file;
    //   this.imageUrl = URL.createObjectURL(file);
    // },
    handleSubmitUpdateOrder() {
      const formData = new FormData();
      formData.append("statusOder", this.dataUpdateOrder.statusOder);
      axios
        .put(
          `http://localhost:3838/oders/${this.dataUpdateOrder._id}`,
          formData
        )
        .then((res) => {
          if (res.data.status === 200) {
            console.log("Sửa thành công !", res.data);
            // Thêm thông báo thành công
            this.$swal.fire({
              position: "center",
              icon: "success",
              title: "Sửa sản phẩm thành công !",
              showConfirmButton: false,
              timer: 1500,
            });

            this.getAllProduct();
          } else {
            // Thêm thông báo lỗi
            console.log("Sửa thất bại !", res);
            this.$swal.fire({
              position: "center",
              icon: "error",
              title: res.data.message[0].message,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
      this.hideModalUpdateOrder();
    },

    showModalOrderDetail(item) {
      console.log(item);
      this.dataDetailOrder = item;
      this.$refs["my-modal-order-detail"].show();
      this.imageUrl = "http://localhost:3838/" + item.image;
    },

    hideModalOrderDetail() {
      this.$refs["my-modal-order-detail"].hide();
    },
    getAllOrder() {
      axios
        .get("http://localhost:3838/oders")
        .then((res) => {
          if (res.data.status === 200 && res.data.data) {
            this.listOrder = res.data.data;
            this.listOrder.forEach((element) => {
              // console.log(element);
              element.product.forEach((element3) => {
                this.listSize.forEach((element2) => {
                  if (element3.product_id.size_id === element2._id) {
                    element3.product_id.size_id = element2.name;
                  }
                });
              });
            });
            console.log(this.listOrder);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getAllSize() {
      axios
        .get("http://localhost:3838/sizes")
        .then((res) => {
          if (res.data.status === 200 && res.data.data) {
            this.listSize = res.data.data;
          }

          console.log("Thành công lấy size", this.listSize);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    calculateCurrentPrice(price, sellingPrice) {
      // Tính giá tiền hiện tại dựa trên giá gốc và phần trăm giảm giá
      return price - price * (sellingPrice / 100);
    },
    calculateTotalAmount() {
      let total = 0;
      let data = this.dataShowCart.forEach((item) => {
        // Chọn giá bán phù hợp: nếu có giá sale thì sử dụng giá sale, ngược lại sử dụng giá gốc
        let price = item.product_id.sellingPrice
          ? this.calculateCurrentPrice(
              item.product_id.price,
              item.product_id.sellingPrice
            ) * item.quantity
          : this.calculateCurrentPrice(item.product_id.price, "0") *
            item.quantity;

        // Tính tổng số tiền cho từng sản phẩm trong giỏ hàng
        total += price;
      });

      // Cập nhật tổng số tiền cho đơn hàng

      // this.dataOrder.totalPrice = total;
      // Trả về tổng số tiền
      return total;
    },

    formatPrice(price) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(price);
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
.order-detail .row {
  padding: 20px 0;
}
.information,
.typePay,
.note {
  /* border: 1px solid; */
  background-color: #ddd;
  padding-left: 30px;
  margin: 10px 0;
  padding: 10px 0;
  padding-left: 20px;
  border-radius: 5px;
}
.information p {
  margin: 0;
  padding: 10px 0;
}
</style>

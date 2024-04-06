<template>
  <div class="container">
    <img
      src="../../../assets/Logo/logo.png"
      alt=""
      style="width: 30%; padding-top: 50px"
    />
    <div class="row" style="padding: 20px 0">
      <div class="col-8">
        <div class="delivery-address" style="padding-right: 70px">
          <h2>Thông tin giao hàng</h2>
          <form action="#" method="post">
            <div>
              <label for="hoTen">Họ và tên người nhận:</label>
              <input type="text" id="hoTen" name="hoTen" required />
            </div>

            <div>
              <label for="soDienThoai">Số điện thoại:</label>
              <input
                type="tel"
                id="soDienThoai"
                name="soDienThoai"
                required
                pattern="[0-9]{10,11}"
              />
            </div>

            <div>
              <label for="diaChi">Địa chỉ nhận hàng:</label>
              <input type="text" id="diaChi" name="diaChi" required />
            </div>

            <div class="input-group">
              <div>
                <label for="tinh">Tỉnh:</label>
                <input type="text" id="tinh" name="tinh" required />
              </div>
              <div>
                <label for="huyen">Huyện:</label>
                <input type="text" id="huyen" name="huyen" required />
              </div>
              <div>
                <label for="xa">Xã:</label>
                <input type="text" id="xa" name="xa" required />
              </div>
            </div>

            <div>
              <label for="ghiChu">Ghi chú:</label>
              <textarea id="ghiChu" name="ghiChu" rows="4" cols="50"></textarea>
            </div>

            <div
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
              "
            >
              <router-link to="/cart" class="backCart">
                Quay về trang giỏ hàng
              </router-link>
              <input
                type="submit"
                value="Tiếp tục đến phương thức thanh toán"
                style="width: 50%"
              />
            </div>
          </form>
        </div>
      </div>
      <div class="col-4">
        <h2>Thông tin đơn hàng</h2>
        <div class="order-information">
          <div
            class="row"
            v-for="item in dataShowCart"
            style="padding-bottom: 20px"
          >
            <div class="col-3">
              <div class="image">
                <img
                  :src="'http://localhost:3838/' + item.product_id.image"
                  alt=""
                  style="width: 100%"
                />
              </div>
            </div>
            <div class="col-5">
              <div class="info">
                <div class="title text-uppercase">
                  <h3>{{ item.product_id.name }}</h3>
                </div>
                <!-- Size -->
                <div class="sizes">
                  <div v-for="size in listSize" :key="size._id">
                    <div
                      v-if="
                        size._id &&
                        item.product_id &&
                        item.product_id.size_id === size._id
                      "
                    >
                      <span> Size: {{ size.name }} </span>
                    </div>
                  </div>
                </div>

                <!-- So luong -->
                <!-- <div class="quantity">
                  <h3>{{ item.product_id.quantity }} so luong</h3>
                </div> -->
                <!-- Tong tien 1 san pham -->
              </div>
            </div>
            <div class="col-4">
              <div class="price">
                <p>Thành tiền:</p>
                <h5 style="color: red">
                  {{ formatPrice(item.product_id.price * item.quantity) }}
                </h5>
              </div>
            </div>
          </div>
          <hr />
          <!-- <div class="row-discount">

            <div class="col-12">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  Button
                </button>
              </div>
            </div>
          </div> -->

          <!-- Tong tien -->
          <div class="row">
            <div class="col-6">
              <h3>Tổng tiền:</h3>
            </div>
            <div class="col-6">
              <div class="total-price text-right">
                <h3>{{ formatPrice(calculateTotalAmount()) }}</h3>
                <div class="product-details-addCart"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["data"],
  data() {
    return {
      product: [],
      quantity: 1,
      dataShowCart: [],
      user: [],
      provinces: [],
      // dataCart: [],
      dataOrder: {
        user_id: "",
        product_data: [
          {
            product_id: "",
            quantity: 1,
          },
        ],
        name: "",
        address: "",
        ward: "",
        district: "",
        province: "",
        phone: "",
        price: "",
        note: "",
      },
      listSize: [],
    };
  },
  created() {
    console.log("DDD", this.data, "dataa checkkkk");
    this.data.forEach((cart) => {
      cart.product.forEach((item) => {
        this.dataShowCart.push({
          product_id: item.product_id,
          quantity: item.quantity,
        });
      });
    });
    console.log("Thành công Cart chưa show!!!", this.data);
    console.log("Thành công Cart!!!", this.dataShowCart);
    this.getAllSize();
  },
  methods: {
    calculateTotalAmount() {
      let total = 0;
      this.dataShowCart.forEach((item) => {
        total += item.quantity * item.product_id.price;
      });
      return total;
    },
    formatPrice(price) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(price);
    },
    getAllSize() {
      axios
        .get("http://localhost:3838/sizes")
        .then((res) => {
          if (res.data.status === 200 && res.data.data) {
            this.listSize = res.data.data; //Gan data vao optionSize
            // this.optionsSize = res.data.data; //Gan data vao optionSize
          }
          console.log("Thành công lấy size", this.listSize);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}

form {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
}

h2 {
  color: #333;
  padding-bottom: 40px;
}

label {
  display: block;
  margin-top: 10px;
  color: #666;
}

input[type="text"],
input[type="tel"],
textarea {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.input-group {
  display: flex;
  justify-content: space-between;
}

.input-group > div {
  flex: 1;
  margin-right: 10px;
}

input[type="submit"] {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
}

input[type="submit"]:hover {
  background-color: #0056b3;
}
/* .order-information {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
} */
.backCart {
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: #b5b5b5;
  text-decoration: none;
  color: #fff;
}
</style>>
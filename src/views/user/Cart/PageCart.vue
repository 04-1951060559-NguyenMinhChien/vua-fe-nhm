<template>
  <div>
    <div>
      <TheHeader />
    </div>

    <div class="container">
      <div class="cart-listing">
        <div class="cart-page">
          <div class="cart-page-header">
            <h2>GIỎ HÀNG</h2>
          </div>
          <hr />
          <div class="cart-page-item">
            <div class="cart-page-item-info">
              <div class="row" v-for="item in dataShowCart">
                <div class="col-4">
                  <div class="image">
                    <img
                      :src="'http://localhost:3838/' + item.product_id.image"
                      alt=""
                      style="width: 100%"
                    />
                  </div>
                </div>
                <div class="col-7">
                  <div class="info">
                    <div class="title">
                      <h3>{{ item.product_id.name }}</h3>
                    </div>
                    <div class="size">
                      <span>Size giày: {{ item.product_id.size }}</span>
                    </div>
                    <div class="quantity">
                      <div class="product-details-quantity">
                        <div class="product-details-quantity-custom">
                          <button
                            class="reduced items-count sub"
                            @click="decreaseQuantity"
                            type="button"
                          >
                            -
                          </button>
                          <input
                            type="text"
                            class="input-text qty"
                            title="Qty"
                            :min="1"
                            :maxlength="12"
                            id="qty"
                            name="quantity"
                            v-model="item.quantity"
                            readonly
                            disabled
                          />
                          <button
                            class="increase items-count add"
                            @click="increaseQuantity"
                            type="button"
                          >
                            +
                          </button>
                          <div class="clear"></div>
                        </div>
                        <div class="xprice">
                          <i class="bi bi-x"></i>
                          <h5>
                            <b>{{ item.product_id.price }}</b>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div class="price">
                      <p><b>Thành tiền: </b></p>
                      <h5><b>200000 đ</b></h5>
                    </div>
                  </div>
                </div>
                <div class="col-1">
                  <div class="close">
                    <input class="btn btn-primary" type="button" value="X" />
                  </div>
                </div>
                <hr />
              </div>
              <div class="total-price text-right">
                <h5>Tổng tiền: 20000đ</h5>
                <div class="product-details-addCart">
                  <button class="btn btn-primary-addCart" type="submit">
                    <b>MUA TIẾP</b>
                  </button>
                  <button class="btn btn-primary-buy" type="submit">
                    <b>ĐẶT HÀNG</b>
                  </button>
                </div>
                <hr />
              </div>
              <img
                src="../../../assets/About/thanhtoan.jpg"
                alt=""
                style="width: 100%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <TheFooter />
    </div>
  </div>
</template>

<script>
import TheHeader from "../../../components/TheHeader.vue";
import TheFooter from "../../../components/TheFooter.vue";
import axios from "axios";
export default {
  name: "PageAbout",
  props: {
    msg: String,
  },
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      user_id: "",
      quantity: 1,
      modalShow: false,
      dataCart: [],
      dataShowCart: [],
    };
  },
  // mounted() {},
  created() {
    const user = JSON.parse(localStorage.getItem("userData"));
    this.user_id = user._id;
    console.log("user_id", this.user_id);
    this.getAllCart();
  },
  methods: {
    getAllCart() {
      console.log("user_id", this.user_id);

      axios
        .get(`http://localhost:3838/carts?user_id=${this.user_id}`)
        .then((res) => {
          if (res.data.status === 200 && res.data.data) {
            this.dataCart = res.data.data;
            // this.dataShowCart = this.dataCart.map((item) => item.product);
            this.dataCart.forEach((cart) => {
              cart.product.forEach((item) => {
                this.dataShowCart.push({
                  product_id: item.product_id,
                  quantity: item.quantity,
                });
              });
            });

            console.log("Thành công Cart chưa show!!!", this.dataCart);
            console.log("Thành công Cart!!!", this.dataShowCart);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    increaseQuantity() {
      if (this.quantity < 12) {
        // Sử dụng maxlength của ô input là 12
        this.quantity++;
      }
    },
  },
};
</script>

<style scoped>
.id p {
  margin: 0;
}
.cart-listing {
  margin: 50px 0;
}

.cart-page {
  max-width: 100%;
  width: 650px;
  margin: 0 auto;
  /* border: 1px solid; */
}

.product-details-quantity-custom {
  padding-top: 10px;
  display: inline-block;
}
.xprice {
  display: inline-block;
  padding: 0 10px;
}
.xprice h5 {
  display: inline-block;
  color: red;
  padding-left: 10px;
}
.price {
  padding-top: 10px;
}
.price p {
  display: inline-block;
}
.price h5 {
  display: inline-block;
  padding-left: 10px;
  color: red;
}
.close input {
  border-radius: 20px;
  background-color: red;
}
.product-details-quantity button {
  text-align: center;
  width: 30px;
  height: 40px;
  border: 1px solid #5b5b5b;
}

.product-details-quantity input {
  width: 50px;
  height: 40px;
  border: 1px solid;
  border-radius: 0;
  text-align: center;
}
</style>
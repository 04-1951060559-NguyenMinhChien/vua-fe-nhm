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
              <div class="row">
                <div class="col-4">
                  <div class="image">
                    <img
                      src="../../../assets/Adidas/adi1.jpg"
                      alt=""
                      style="width: 100%"
                    />
                  </div>
                </div>
                <div class="col-7">
                  <div class="info">
                    <div class="title">
                      <h3>NIKE</h3>
                    </div>
                    <div class="size">
                      <span>Size giày: 43</span>
                    </div>
                    <div class="id">
                      <p><b>Mã SP: </b> acxcx9o8</p>
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
                            v-model="quantity"
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
                          <h5><b>200000 đ</b></h5>
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
              </div>
              <hr />
              <div class="row">
                <div class="col-4">
                  <div class="image">
                    <img
                      src="../../../assets/Adidas/adi1.jpg"
                      alt=""
                      style="width: 100%"
                    />
                  </div>
                </div>
                <div class="col-7">
                  <div class="info">
                    <div class="title">
                      <h3>NIKE</h3>
                    </div>
                    <div class="size">
                      <span>Size giày: 43</span>
                    </div>
                    <div class="id">
                      <p><b>Mã SP: </b> acxcx9o8</p>
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
                            v-model="quantity"
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
                          <h5><b>200000 đ</b></h5>
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
              </div>
              <hr />
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
              </div>
              <hr />
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
      quantity: 1,
      modalShow: false,
    };
  },
  methods: {
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
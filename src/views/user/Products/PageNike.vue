<template>
  <div>
    <div>
      <TheHeader />
    </div>

    <div class="search1 " style="margin-top: 50px; margin-bottom: 50px ">
      <div class="container navbar-collapse" id="searchReponsive">
        <div class="row">
          <div class="search col-md-3">
            <div class="form-group">
              <label for="">Chọn size giày</label>
              <select class="form-control" name="" id="">
                <option active:>Size</option>
                <option>37</option>
                <option>38</option>
                <option>39</option>
                <option>40</option>
                <option>41</option>
                <option>42</option>
                <option>43</option>
              </select>
            </div>
          </div>
          <div class="search col-md-3">
            <div class="form-group">
              <label for="">Khoảng giá</label>
              <select class="form-control" name="" id="">
                <option>Tất cả</option>
                <option>Dưới 3 Triệu</option>
                <option>Từ 3 đến 5 Triệu</option>
                <option>Từ 5 đến 10 Triệu</option>
                <option>Trên 10 Triệu</option>

              </select>
            </div>
          </div>
          <div class="search col-md-3">
            <div class="form-group">
              <label for="">Sắp xếp theo</label>
              <select class="form-control" name="" id="">
                <option>Giá từ thấp đến cao</option>
                <option>Tên từ A-Z</option>
                <option>Tên từ Z-A</option>
              </select>
            </div>
          </div>
            <!-- <div class="form-group">
              <div role="group" class="input-group">
                  <input
                    id="bv-icons-table-search"
                    type="search"
                    placeholder="Bạn muốn tìm gì ?"
                    class="form-control"
                    style="border-radius: 40px; background-color: #f0f0f0"
                    v-model="search"
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
                    <i @click="searchProduct" class="bi bi-search"></i>
                  </div>
                </div>
            </div> -->
          <div class="search col-md-3">
            <label for="">Tìm kiếm:</label>
            <b-nav-form @submit.stop.prevent>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
                v-model="search"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit" @click="searchProduct()"
                >Search</b-button
              >
            </b-nav-form>
          </div>
        </div>
      </div>
    </div>

    <!-- CONTENT -->
    <!-- Nike -->
    <div class="container">
      <div class="row">
        <div class="col-9">
          <div class="row">
            <div class="center" v-if="message">{{ message }}</div> <!-- Hiển thị thông báo tìm kiếm -->

            <div class="col-md-3" v-for="item in listProduct" :key="item._id">
              <div class="products-hot">
                <div class="products-hot-img">
                  <router-link :to="{ name: 'productDetails', params: { id: item._id } }">
                    <img :src="'http://localhost:3838/' + item.image" alt="" style="width: 100%" />
                  </router-link>
                </div>
                <div class="products-hot-body">
                  <h4 class="card-title text-uppercase">
                    <router-link :to="{ name: 'productDetails', params: { id: item._id } }">
                      {{ item.name }}
                    </router-link>
                  </h4>
                  <span class="card-text">
                    <div class="star">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </div>
                    <strong>{{ formatPrice(item.price) }}</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="aside">
            <div class="aside aside-footwate">
              <a href=""><img src="../../../assets/Banner/bannersitebar01.jpg" alt=""></a>
            </div>
            <hr>
            <div class="aside aside-news">
              <div class="container">
                <div class="row-5">
                  <div class="aside-news-header">
                    <h3><b>TIN TỨC MỚI</b></h3>
                  </div>
                  <div class="aside-news-conten">
                    <img src="../../../assets/Blog/Blog1.jpg" alt="">
                    <p>Dịch Vụ Vệ Sinh Giày Sneaker Chuyên Nghiệp Tại Tân Bình - Kingshoesvn
                    </p>
                  </div>
                </div>
              </div>
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
  name: "PageNike",
  props: {
    msg: String,
  },
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      search: "",
      listProduct: [],
      brand_id: "66091eb20e92bf29e80db7c7",
      message: "",
    };
  },
  created() {
    // Khởi tạo dữ liệu hoặc đăng ký sự kiện
    this.getAllProduct();
  },
  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(price);
    },
    getAllProduct() {
      axios
        .get(`http://localhost:3838/productsbybrand?brand_id=${this.brand_id}`)
        // .get(`http://localhost:3838/productsbybrand?brand_id=${this.brand_id}`)
        .then((res) => {
          if (res.data.status === 200 && res.data.data) {
            console.log("Thành công !!!", res);
            this.listProduct = res.data.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    searchProduct() {
      console.log(" SEARCH  !!!", this.search);
      if (this.search) {
        axios
          .post(`http://localhost:3838/products/search/${this.search}`)
          .then((res) => {
            if (res.data.status === 200 && res.data.data !== null) {
              this.listProduct = res.data.data;
              this.message = "";

              console.log("Thành công SEARCH  !!!", this.listProduct);
            } else {
              this.listProduct = "";
              this.message = "Không tìm thấy sản phẩm !!!";
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        this.listProduct = "";
        this.message = "Vui lòng nhập từ khóa tìm kiếm";
      }
    },
  },
};
</script>

<style scoped>
.aside-footwate img {
  width: 100%;
}

.aside-news img {
  width: 100%;
}

.products-hot {
  border: 1px solid #dadada;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 23px;
}

.products-hot:hover {
  border: 1px solid #b7b6b6;
}

.products-hot-img {
  width: 100%;
  padding-top: 100%;
  /* đảm bảo chiều cao tỷ lệ 1:1 */
  position: relative;
  overflow: hidden;

  margin-bottom: 20px;
}

.products-hot-img img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  transition: transform 0.3s ease;
}
.products-hot-img:hover img {
  transform: scale(1.1); /* Phóng to 110% khi di chuột vào */
}

.products-hot-body {
  padding: 0 20px;
  padding-bottom: 20px;
}

.products-hot-body a {
  text-decoration: none;
  color: #5b5b5b;
}
.products-hot-body a:hover {
  color: #ffd600;
}
</style>
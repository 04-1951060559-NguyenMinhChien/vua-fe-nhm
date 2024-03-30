<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="">
        <b-navbar-brand href="#">
          <img
            src="../../../assets/logo2.png"
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
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <div class="container-fluid">
      <div class="row">
        <!-- SIDE BAR -->
        <div class="col-sm-2 d-none d-sm-flex" style="padding: 15px">
          <div class="sidebar-manager"><SideBar /></div>
        </div>

        <!-- TABLE -->
        <div class="col-12 col-sm-10" style="padding: 15px">
          <div class="container-fluid">
            <div class="oder-manager">
              <div class="row">
                <div class="col-6"><h2>Quản Lý Sản Phẩm</h2></div>
                <b-button id="show-btn" @click="showModal"
                  >Thêm sản phầm</b-button
                >

                <b-modal ref="my-modal" hide-footer title="Them moi san pham">
                  <div class="modal-body">
                    <form @submit.prevent="handleSubmit">
                      <div class="mb-3">
                        <label for="productName" class="form-label"
                          >Tên sản phẩm:</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="productName"
                          v-model="dataCreate.name"
                          required
                        />
                      </div>
                      <div class="mb-3">
                        <label for="productName" class="form-label"
                          >Mô tả:</label
                        >
                        <textarea
                          id="textarea productName"
                          class="form-control"
                          v-model="dataCreate.description"
                          required
                        ></textarea>
                      </div>

                      <div class="mb-3">
                        <label for="productSize" class="form-label"
                          >Size:</label
                        >
                        <select
                          class="form-select"
                          id="productSize"
                          v-model="dataCreate.size_id"
                          required
                        >
                          <option value="">Chọn size</option>
                          <option
                            v-for="size in optionsSize"
                            :key="size._id"
                            :value="size._id"
                          >
                            {{ size.name }}
                          </option>
                        </select>
                      </div>
                      <div class="mb-3">
                        <label for="productBrand" class="form-label"
                          >Thương hiệu:</label
                        >
                        <select
                          class="form-select"
                          id="productBrand"
                          v-model="dataCreate.brand_id"
                          required
                        >
                          <option value="">Chọn thương hiệu</option>
                          <option
                            v-for="brand in optionsBrand"
                            :key="brand._id"
                            :value="brand._id"
                          >
                            {{ brand.name }}
                          </option>
                        </select>
                      </div>
                      <div class="mb-3">
                        <label for="productprice" class="form-label"
                          >Price:</label
                        >
                        <input
                          type="number"
                          min="0"
                          class="form-control"
                          id="productprice"
                          v-model="dataCreate.price"
                          required
                        />
                      </div>
                      <div class="mb-3">
                        <label for="productImage" class="form-label"
                          >Hình ảnh:</label
                        >
                        <input
                          type="file"
                          class="form-control"
                          id="productImage"
                          @change="handleImageUpload"
                          accept="image/*"
                          required
                        />
                      </div>
                      <div class="modal-footer">
                        <button type="submit" class="btn btn-primary">
                          Lưu
                        </button>
                        <button
                          type="button"
                          class="btn btn-secondary"
                          @click="hideModal"
                        >
                          Hủy
                        </button>
                      </div>
                    </form>
                  </div>
                </b-modal>
              </div>
            </div>
            <table class="table">
              <thead>
                <tr style="background-color: #e0e0e0">
                  <th scope="col">Tên sản phẩm</th>
                  <th scope="col">Thương hiệu</th>
                  <th scope="col">Mô tả</th>
                  <th scope="col">Size</th>
                  <th scope="col">Giá bán</th>
                  <th scope="col">Hình ảnh</th>
                  <th scope="col">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in listProduct" :key="item.id">
                  <td>{{ item.name }}</td>
                  <td>{{ item.brand_id }}</td>
                  <td>{{ item.description }}</td>
                  <td>{{ item.size_id }}</td>
                  <td>{{ item.price }}</td>
                  <!-- <td><img :src="item.image" alt="" /></td> -->
                  <td>
                    <img :src="'http://localhost:3838/' + item.image" alt="" />
                  </td>

                  <td>{{ item.status }}</td>
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
  name: "products",
  components: {
    SideBar,
  },
  data() {
    return {
      modalShow: false,
      // Data hiển thị trên table sẽ gán vào đây
      listProduct: {
        name: "",
        description: "",
        status: "",
        image: "", // Lưu trữ đường dẫn của hình ảnh
        price: "",
        brand_id: "",
        size_id: "",
      },
      name: "",
      nameState: null,
      sizeState: null,
      brandState: null,
      descriptionState: null,
      ImgState: null,
      priceState: null,

      selectedBrand: [],
      selectedSize: [],
      // Data khi thêm mới sẽ gán vào dây
      dataCreate: {
        name: "",
        description: "",
        status: true,
        image: "", // Lưu trữ đường dẫn của hình ảnh
        price: "",
        brand_id: "",
        size_id: "",
      },

      optionsBrand: [
        { _id: "65ed7d961d38f0473cc1c35a", name: "36" },
        { _id: "37", name: "37" },
        { _id: "38", name: "38" },
        { _id: "39", name: "39" },
        { _id: "40", name: "40" },
        { _id: "41", name: "41" },
        { _id: "42", name: "42" },
        { _id: "43", name: "43" },
        { _id: "44", name: "44" },
        { _id: "45", name: "45" },
        { _id: "46", name: "46" },
      ],
      optionsSize: [
        { _id: "65ed7d961d38f0473cc1c35a", name: "36" },
        { _id: "37", name: "37" },
        { _id: "38", name: "38" },
        { _id: "39", name: "39" },
        { _id: "40", name: "40" },
        { _id: "41", name: "41" },
        { _id: "42", name: "42" },
        { _id: "43", name: "43" },
        { _id: "44", name: "44" },
        { _id: "45", name: "45" },
        { _id: "46", name: "46" },
      ],
    };
  },
  created() {
    // Khởi tạo dữ liệu hoặc đăng ký sự kiện
    this.getAllProduct();
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    handleSubmit() {
      console.log("Check", this.dataCreate);
      const formData = new FormData();
      formData.append("name", this.dataCreate.name);
      formData.append("price", this.dataCreate.price);
      formData.append("description", this.dataCreate.description);
      formData.append("size_id", this.dataCreate.size_id);
      formData.append("brand_id", this.dataCreate.brand_id);
      formData.append("image", this.dataCreate.image); // Thêm tệp hình ảnh vào FormData
      // Xử lý khi người dùng submit
      axios
        .post("http://localhost:3838/products", formData)
        .then((res) => {
          if (res.data.status === 200) {
            // Thêm thông báo thành công
            console.log("Them thanh cong", res.data);
          }
          // Thêm thông báo lỗi
          console.log("Them tthat bai");
        })
        .catch((err) => {
          console.log(err);
        });
      this.hideModal();
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      this.dataCreate.image = file;
    },
    getAllProduct() {
      axios
        .get("http://localhost:3838/products")
        .then((res) => {
          if (res.data.status === 200 && res.data.data) {
            console.log("thanh cong", res);
            this.listProduct = res.data.data;
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
            console.log("thanh cong", res);
            this.listProduct = res.data.data; //Gan data vao optionSize
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
.navbar {
  padding: 0 15px;
  background-color: #ffd600;
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

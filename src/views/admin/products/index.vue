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
          <div class="sidebar-manager"><SideBar /></div>
        </div>

        <!-- TABLE -->
        <div class="col-12 col-sm-10" style="padding: 15px">
          <div class="container-fluid" id="container">
            <div class="product-manager">
              <div class="row" style="margin-bottom: 20px">
                <div
                  class="col-3 text-center"
                  :class="{ active: selectedTable === 'Product' }"
                  @click="changeTable('Product')"
                >
                  <h4>Quản Lý Sản Phẩm</h4>
                </div>

                <div
                  class="col-3 text-center"
                  :class="{ active: selectedTable === 'Brand' }"
                  @click="changeTable('Brand')"
                >
                  <h4>Quản Lý Thương Hiệu</h4>
                </div>

                <div
                  class="col-3 text-center"
                  :class="{ active: selectedTable === 'Size' }"
                  @click="changeTable('Size')"
                >
                  <h4>Quản Lý Size</h4>
                </div>
                <div class="col-3 text-right">
                  <!-- THEM SAN PHAM -->
                  <b-button
                    id="show-btn"
                    @click="showModal"
                    v-if="selectedTable === 'Product'"
                    >Thêm sản phầm</b-button
                  >
                  <b-button
                    id="show-btn"
                    @click="showModal"
                    v-if="selectedTable === 'Brand'"
                    >Thêm thương hiệu</b-button
                  >
                  <b-button
                    id="show-btn"
                    @click="showModalSize"
                    v-if="selectedTable === 'Size'"
                    >Thêm size</b-button
                  >
                </div>
              </div>

              <!-- MODAL -->
              <!-- modal thêm mới  sản phẩm-->
              <b-modal ref="my-modal" hide-footer title="Thêm mới sản phẩm">
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
                      <label for="productName" class="form-label">Mô tả:</label>
                      <textarea
                        id="textarea productName"
                        class="form-control"
                        v-model="dataCreate.description"
                        required
                      ></textarea>
                    </div>

                    <div class="mb-3">
                      <label for="productSize" class="form-label">Size:</label>
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
                      <button type="submit" class="btn btn-primary">Lưu</button>
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
              <!-- modal sửa sản phẩm -->
              <b-modal
                ref="my-modal-update"
                hide-footer
                title="Sửa thông tin sản phẩm"
              >
                <div class="modal-body">
                  <form @submit.prevent="handleSubmitUpdate">
                    <div class="mb-3">
                      <label for="productName" class="form-label"
                        >Tên sản phẩm:</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="productName"
                        v-model="dataUpdate.name"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label for="productName" class="form-label">Mô tả:</label>
                      <textarea
                        id="textarea productName"
                        class="form-control"
                        v-model="dataUpdate.description"
                        required
                      ></textarea>
                    </div>

                    <div class="mb-3">
                      <label for="productSize" class="form-label">Size:</label>
                      <select
                        class="form-select"
                        id="productSize"
                        v-model="dataUpdate.size_id"
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
                        v-model="dataUpdate.brand_id"
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
                        v-model="dataUpdate.price"
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
                        @change="handleImageUploadUpdate"
                        accept="image/*"
                        required
                      />
                    </div>
                    <div class="modal-footer">
                      <button type="submit" class="btn btn-primary">Lưu</button>
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

              <!-- Modal thêm mới size -->
              <b-modal ref="my-modal-size" hide-footer title="Thêm mới Size">
                <div class="modal-body">
                  <form @submit.prevent="handleSubmitSize">
                    <div class="mb-3">
                      <label for="sizeName" class="form-label">Tên Size:</label>
                      <input
                        type="text"
                        class="form-control"
                        id="sizeName"
                        v-model="dataCreateSize.name"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label for="status" class="form-label">Trạng thái:</label>
                      <input
                        type="checkbox"
                        id="status"
                        v-model="dataCreateSize.status"
                      />
                      <label for="status">Hoạt động</label>
                    </div>
                    <div class="modal-footer">
                      <button type="submit" class="btn btn-primary">Lưu</button>
                      <button
                        type="button"
                        class="btn btn-secondary"
                        @click="hideModalSize"
                      >
                        Hủy
                      </button>
                    </div>
                  </form>
                </div>
              </b-modal>
              <!-- modal sửa Size -->
              <b-modal ref="my-modal-update-size" hide-footer title="Sửa Size">
                <div class="modal-body">
                  <form @submit.prevent="handleSubmit">
                    <div class="mb-3">
                      <label for="productName" class="form-label"
                        >Tên Size:</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="productName"
                        v-model="dataCreateSize.name"
                        required
                      />
                    </div>
                    <div class="modal-footer">
                      <button type="submit" class="btn btn-primary">Lưu</button>
                      <button
                        type="button"
                        class="btn btn-secondary"
                        @click="hideModalSize"
                      >
                        Hủy
                      </button>
                    </div>
                  </form>
                </div>
              </b-modal>

              <!-- Modal thêm mới brand -->
              <b-modal ref="my-modal-brand" hide-footer title="Thêm mới brand">
                <div class="modal-body">
                  <form @submit.prevent="handleSubmit">
                    <div class="mb-3">
                      <label for="brandName" class="form-label"
                        >Tên thương hiệu:</label
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
                      <label for="productName" class="form-label">Mô tả:</label>
                      <textarea
                        id="textarea productName"
                        class="form-control"
                        v-model="dataCreate.description"
                        required
                      ></textarea>
                    </div>

                    <div class="mb-3">
                      <label for="productSize" class="form-label">Size:</label>
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
                      <button type="submit" class="btn btn-primary">Lưu</button>
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

              <!-- Modal sửa brand -->
              <b-modal
                ref="my-modal-update"
                hide-footer
                title="Sửa thông tin sản phẩm"
              >
                <div class="modal-body">
                  <form @submit.prevent="handleSubmitUpdate">
                    <div class="mb-3">
                      <label for="productName" class="form-label"
                        >Tên sản phẩm:</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="productName"
                        v-model="dataUpdate.name"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label for="productName" class="form-label">Mô tả:</label>
                      <textarea
                        id="textarea productName"
                        class="form-control"
                        v-model="dataUpdate.description"
                        required
                      ></textarea>
                    </div>

                    <div class="mb-3">
                      <label for="productSize" class="form-label">Size:</label>
                      <select
                        class="form-select"
                        id="productSize"
                        v-model="dataUpdate.size_id"
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
                        v-model="dataUpdate.brand_id"
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
                        v-model="dataUpdate.price"
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
                        @change="handleImageUploadUpdate"
                        accept="image/*"
                        required
                      />
                    </div>
                    <div class="modal-footer">
                      <button type="submit" class="btn btn-primary">Lưu</button>
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

            <!-- TABLE SAN PHAM -->
            <table class="table" v-if="selectedTable === 'Product'">
              <thead>
                <tr style="background-color: #e0e0e0">
                  <th scope="col">Tên sản phẩm</th>
                  <th scope="col">Thương hiệu</th>
                  <th scope="col">Mô tả</th>
                  <th scope="col">Size</th>
                  <th scope="col">Giá bán</th>
                  <th scope="col">Hình ảnh</th>
                  <th scope="col">Trạng thái</th>
                  <th scope="col">Tác vụ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in listProduct" :key="item.id">
                  <td>{{ item.name }}</td>
                  <td>{{ item.brand_id }}</td>
                  <td>{{ item.description }}</td>
                  <td>{{ item.size_id }}</td>
                  <td>{{ item.price }}</td>
                  <td>
                    <img
                      :src="'http://localhost:3838/' + item.image"
                      alt=""
                      style="width: 50px; height: 70px"
                    />
                  </td>

                  <td>
                    {{ item.status }}
                  </td>
                  <td>
                    <button style="">
                      <i
                        @click="showModalUpdate(item)"
                        class="bi bi-pencil-square"
                      ></i>
                    </button>
                    <button>
                      <i @click="deleteProduct(item)" class="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- TABLE SIZE -->
            <table class="table" v-if="selectedTable === 'Size'">
              <thead>
                <tr style="background-color: #e0e0e0">
                  <th scope="col">Size</th>
                  <th scope="col">Trạng thái</th>
                  <th scope="col">Tác vụ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in listSize" :key="item.id">
                  <td>{{ item.name }}</td>
                  <td>
                    {{ item.status === true ? "Hoạt động" : "Dừng hoạt động" }}
                  </td>
                  <td>
                    <button style="">
                      <i
                        @click="showModalUpdate(item)"
                        class="bi bi-pencil-square"
                      ></i>
                    </button>
                    <button>
                      <i class="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            <!-- TABLE THUONG HIEU -->
            <table class="table" v-if="selectedTable === 'Brand'">
              <thead>
                <tr style="background-color: #e0e0e0">
                  <th scope="col">Thương Hiệu</th>
                  <th scope="col">Email</th>
                  <th scope="col">Số Điện Thoại</th>
                  <th scope="col">Địa Chỉ</th>
                  <th scope="col">Hình ảnh</th>
                  <th scope="col">Trạng thái</th>
                  <th scope="col">Tác vụ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in listProduct" :key="item.id">
                  <td>{{ item.name }}</td>
                  <td>{{ item.emailBrand }}</td>
                  <td>{{ item.phoneNumber }}</td>
                  <td>{{ item.adress }}</td>
                  <td>
                    <img
                      :src="'http://localhost:3838/' + item.image"
                      alt=""
                      style="width: 50px; height: 70px"
                    />
                  </td>

                  <td>
                    {{ item.status }}
                  </td>
                  <td>
                    <button style="">
                      <i
                        @click="showModalUpdate(item)"
                        class="bi bi-pencil-square"
                      ></i>
                    </button>
                    <button>
                      <i class="bi bi-trash"></i>
                    </button>
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
  name: "products",
  components: {
    SideBar,
  },
  data() {
    return {
      selectedTable: "Product",
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
      listSize: {
        name: "",
        status: "",
      },
      listBrand: {
        name: "",
        phoneNumber: "",
        emailBrand: "",
        adress: "",
        image: "", // Lưu trữ đường dẫn của hình ảnh
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
      // Data khi thêm mới, sửa sản phẩm sẽ gán vào dây
      dataCreate: {
        name: "",
        description: "",
        status: true,
        image: "", // Lưu trữ đường dẫn của hình ảnh
        price: "",
        brand_id: "",
        size_id: "",
      },
      dataUpdate: {
        name: "",
        description: "",
        status: true,
        image: "", // Lưu trữ đường dẫn của hình ảnh
        price: "",
        brand_id: "",
        size_id: "",
      },

      //Data khi thêm mới, sửa size
      dataCreateSize: {
        name: "",
        status: false,
      },
      dataUpdateSize: {
        name: "",
        status: "",
      },

      // Data khi thêm mới, sửa brand sẽ gán vào dây
      dataCreateBrand: {
        name: "",
        emailBrand: "",
        phoneNumber: true,
        adress: "", // Lưu trữ đường dẫn của hình ảnh
        image: "",
        status: "",
      },
      dataUpdateBrand: {
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
      optionsSize: [],
    };
  },
  created() {
    // Khởi tạo dữ liệu hoặc đăng ký sự kiện
    this.getAllProduct();
    this.getAllSize();
    this.getAllBrand();
  },
  methods: {
    //Them moi san pham
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
            console.log("Them thanh cong", res.data);
            // Thêm thông báo thành công
            this.$swal.fire({
              position: "center",
              icon: "success",
              title: "Thêm sản phẩm thành công",
              showConfirmButton: false,
              timer: 1500,
            });

            this.getAllProduct();
          } else {
            // Thêm thông báo lỗi
            console.log("Them thất bại", res.data.message[0].message);
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
      this.hideModal();
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      this.dataCreate.image = file;
    },

    // Sửa sán phẩm
    showModalUpdate(item) {
      this.$refs["my-modal-update"].show();
      console.log(item);
      this.dataUpdate = item;
    },
    hideModalUpdate() {
      this.$refs["my-modal-update"].hide();
    },
    handleSubmitUpdate() {
      console.log("Check", this.dataUpdate);
      const formData = new FormData();
      formData.append("_id", this.dataUpdate._id);
      formData.append("name", this.dataUpdate.name);
      formData.append("price", this.dataUpdate.price);
      formData.append("description", this.dataUpdate.description);
      formData.append("size_id", this.dataUpdate.size_id);
      formData.append("brand_id", this.dataUpdate.brand_id);
      formData.append("image", this.dataUpdate.image); // Thêm tệp hình ảnh vào FormData
      // Xử lý khi người dùng submit
      axios
        .put("http://localhost:3838/products/${dataUpdate._id}", formData)
        .then((res) => {
          if (res.data.status === 200) {
            console.log("Them thanh cong", res.data);
            // Thêm thông báo thành công
            this.$swal.fire({
              position: "center",
              icon: "success",
              title: "Thêm sản phẩm thành công",
              showConfirmButton: false,
              timer: 1500,
            });

            this.getAllProduct();
          } else {
            // Thêm thông báo lỗi
            console.log("Them thất bại", res);
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
      this.hideModal();
    },
    handleImageUploadUpdate(event) {
      const file = event.target.files[0];
      this.dataUpdate.image = file;
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

    // Xoa san pham
    deleteProduct(item) {
      // Hiển thị thông báo xác nhận
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            // Nếu người dùng đã xác nhận xóa
            axios
              .delete(`http://localhost:3838/products/${item._id}`)
              .then((res) => {
                if (res.data.status === 200) {
                  console.log("xoa thanh cong", res);

                  // Thông báo xóa thành công
                  this.$swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });

                  // Cập nhật danh sách sản phẩm (giả sử bạn đã có hàm này là getAllProduct())
                  this.getAllProduct();
                }
              })
              .catch((err) => {
                console.log(err);

                // Thông báo lỗi khi xóa sản phẩm
                this.$swal.fire({
                  title: "Error!",
                  text: "An error occurred while deleting the product.",
                  icon: "error",
                });
              });
          }
        });
    },

    //Them moi size
    showModalSize() {
      this.$refs["my-modal-size"].show();
    },
    hideModalSize() {
      this.$refs["my-modal-size"].hide();
    },
    handleSubmitSize() {
      console.log("Check", this.dataCreateSize);
      const formData = new FormData();
      formData.append("name", this.dataCreateSize.name);
      formData.append("status", this.dataCreateSize.status);
      console.log("đasadsadsadsaa", this.formData);
      // Xử lý khi người dùng submit
      axios
        .post("http://localhost:3838/sizes", this.dataCreateSize)
        .then((res) => {
          if (res.data.status === 200) {
            console.log("Them thanh cong", res.data);
            // Thêm thông báo thành công
            this.$swal.fire({
              position: "center",
              icon: "success",
              title: "Thêm size phẩm thành công",
              showConfirmButton: false,
              timer: 1500,
            });

            this.getAllSize();
          } else {
            // Thêm thông báo lỗi
            console.log("Them thất bại", res.data.message[0].message);
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
      this.hideModal();
    },

    getAllSize() {
      axios
        .get("http://localhost:3838/sizes")
        .then((res) => {
          if (res.data.status === 200 && res.data.data) {
            console.log("thanh cong lấy size", res);
            this.listSize = res.data.data; //Gan data vao optionSize
            this.optionsSize = res.data.data; //Gan data vao optionSize
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //Xoa Size
    deleteSize(item) {
      // Hiển thị thông báo xác nhận
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            // Nếu người dùng đã xác nhận xóa
            axios
              .delete(`http://localhost:3838/sizes/${item._id}`)
              .then((res) => {
                if (res.data.status === 200) {
                  console.log("xoa thanh cong", res);

                  // Thông báo xóa thành công
                  this.$swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });

                  // Cập nhật danh sách size
                  this.getAllSize();
                }
              })
              .catch((err) => {
                console.log(err);

                // Thông báo lỗi khi xóa size
                this.$swal.fire({
                  title: "Error!",
                  text: "An error occurred while deleting the product.",
                  icon: "error",
                });
              });
          }
        });
    },

    changeTable(selected) {
      this.selectedTable = selected;
    },
  },
};
</script>

<style scoped>
.active {
  background-color: #ffd600;
  border-radius: 50px;
}
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

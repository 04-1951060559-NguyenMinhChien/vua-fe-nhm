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
                <div class="col-6">
                  <div>
                    <b-button
                      v-b-modal.modal-prevent-closing
                      style="float: right"
                      >Thêm</b-button
                    >

                    <!-- <div class="mt-3">
                      <div v-if="submittedNames.length === 0"></div>
                      <ul v-else class="mb-0 pl-3">
                        <li v-for="name in submittedNames">{{ name }}</li>
                      </ul>
                    </div> -->

                    <b-modal
                      id="modal-prevent-closing"
                      ref="modal"
                      title="Thông tin sản phẩm"
                      @show="resetModal"
                      @hidden="resetModal"
                      @ok="handleOk"
                    >
                      <form ref="form" @submit.stop.prevent="handleSubmit">
                        <!-- Tên sản phẩm -->
                        <b-form-group
                          label="Tên sản phẩm"
                          label-for="name-input"
                          invalid-feedback="Name is required"
                          :state="nameState"
                        >
                          <b-form-input
                            id="name-input"
                            v-model="dataCreate.name"
                            :state="nameState"
                            required
                          ></b-form-input>
                        </b-form-group>

                        <!-- Thương hiệu -->
                        <b-form-group
                          label="Thương hiệu"
                          label-for="name-input"
                          invalid-feedback="Vui lòng chọn Thương hiệu !"
                          :state="brandState"
                        >
                          <div>
                            <b-form-select
                              :options="optionsBrand"
                              :state="brandState"
                              class="mb-3"
                            >
                              <!-- This slot appears above the options from 'options' prop -->
                              <template #first>
                                <b-form-select-option :value="null" disabled
                                  >-- Vui lòng chọn thương hiệu sản phẩm
                                  --</b-form-select-option
                                >
                              </template>
                            </b-form-select>
                          </div>
                        </b-form-group>

                        <!-- Size -->
                        <b-form-group
                          label="Size"
                          label-for="name-input"
                          invalid-feedback="Vui lòng chọn Size !"
                          :state="sizeState"
                        >
                          <div>
                            <b-form-select
                              :options="optionsSize"
                              :state="sizeState"
                              class="mb-3"
                            >
                              <!-- This slot appears above the options from 'options' prop -->
                              <template #first>
                                <b-form-select-option :value="null" disabled
                                  >-- Vui lòng chọn Size sản phẩm
                                  --</b-form-select-option
                                >
                              </template>
                            </b-form-select>
                          </div>
                        </b-form-group>

                        <!-- Mô tả -->
                        <b-form-group
                          label="Mô tả"
                          label-for="name-input"
                          invalid-feedback=""
                          :state="descriptionState"
                        >
                          <b-form-textarea
                            v-model="dataCreate.description"
                            id="textarea-default"
                            placeholder="Thông tin mô tả"
                            :state="descriptionState"
                          ></b-form-textarea>
                        </b-form-group>

                        <!-- Image -->
                        <b-form-group
                          label="Mô tả"
                          label-for="name-input"
                          invalid-feedback=""
                          :state="ImgState"
                        >
                          <b-form-file v-model="dataCreate.image" multiple>
                            <template slot="file-name" slot-scope="{ names }">
                              <div>
                                <b-badge
                                  v-for="(name, index) in names"
                                  :key="index"
                                  variant="dark"
                                  class="mr-1"
                                >
                                  {{ name }}
                                  <b-icon-trash-fill
                                    @click.stop="removeFile(index)"
                                    class="ml-1"
                                  ></b-icon-trash-fill>
                                </b-badge>
                              </div>
                            </template>
                          </b-form-file>
                        </b-form-group>

                        <!-- Gía bán -->
                        <b-form-group label="Giá tiền:" label-for="price">
                          <b-input-group prepend="$">
                            <b-form-input
                              id="price"
                              v-model="dataCreate.price"
                              type="number"
                              min="0"
                              step="0.01"
                              :state="priceState"
                              required
                            ></b-form-input>
                          </b-input-group>
                        </b-form-group>
                      </form>
                    </b-modal>
                  </div>
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
                      <img
                        :src="'http://localhost:3838/' + item.image"
                        alt=""
                      />
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
  props: {
    value: {
      type: [Array, File, String], // Cho phép kiểu String
      default: () => [],
    },
  },
  data() {
    return {
      file: [],
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

      selectedBrand: null,
      selectedSize: null,
      // Data khi thêm mới sẽ gán vào dây
      dataCreate: {
        name: "",
        description: "",
        status: "",
        image: "", // Lưu trữ đường dẫn của hình ảnh
        price: "",
        brand_id: "",
        size_id: "",
      },

      optionsBrand: [
        { value: "A", text: "NIKE" },
        { value: "B", text: "ADIDAS" },
        { value: "C", text: "JORDAN" },
        { value: "D", text: "YEEZY" },
      ],
      optionsSize: [
        { value: "A", text: "37" },
        { value: "B", text: "38" },
        { value: "C", text: "39" },
        { value: "D", text: "40" },
      ],
    };
  },
  created() {
    // Khởi tạo dữ liệu hoặc đăng ký sự kiện
    this.getAllProduct();
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal() {
      this.listProduct = {
        name: "",
        description: "",
        status: "",
        image: "", // Lưu trữ đường dẫn của hình ảnh
        price: "",
        brand_id: "",
        size_id: "",
      };
      this.nameState = null;
    },

    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      axios
        .post("http://localhost:3838/products", this.dataCreate)
        .then((res) => {
          if (res.data.status === 200) {
            // Thêm thông báo thành công
            console.log("Them thanh cong", res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
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
    removeFile(index) {
      this.files.splice(index, 1);
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

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

                    <div class="mt-3">
                      <div v-if="submittedNames.length === 0"></div>
                      <ul v-else class="mb-0 pl-3">
                        <li v-for="name in submittedNames">{{ name }}</li>
                      </ul>
                    </div>

                    <b-modal
                      id="modal-prevent-closing"
                      ref="modal"
                      title="Thông tin sản phẩm"
                      @show="resetModal"
                      @hidden="resetModal"
                      @ok="handleOk"
                    >
                      <form ref="form" @submit.stop.prevent="handleSubmit">
                        <b-form-group
                          label="Tên sản phẩm"
                          label-for="name-input"
                          invalid-feedback="Name is required"
                          :state="nameState"
                        >
                          <b-form-input
                            id="name-input"
                            v-model="name"
                            :state="nameState"
                            required
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group
                          label="Thương hiệu"
                          label-for="name-input"
                          invalid-feedback="Name is required"
                          :state="nameState"
                        >
                          <div>
                            <b-form-select
                              v-model="selected"
                              :options="options"
                              class="mb-3"
                            >
                              <!-- This slot appears above the options from 'options' prop -->
                              <template #first>
                                <b-form-select-option :value="null" disabled
                                  >-- Vui lòng chọn thương hiệu sản phẩm
                                  --</b-form-select-option
                                >
                              </template>

                              <!-- These options will appear after the ones from 'options' prop -->
                              <!-- <b-form-select-option value="C"
                                >Option C</b-form-select-option
                              >
                              <b-form-select-option value="D"
                                >Option D</b-form-select-option
                              > -->
                            </b-form-select>
                          </div>
                        </b-form-group>
                      </form>
                    </b-modal>
                  </div>
                </div>
              </div>
              <table class="table">
                <thead>
                  <tr style="background-color: #e0e0e0">
                    <th scope="col">id</th>
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
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
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

export default {
  name: "products",
  components: {
    SideBar,
  },
  data() {
    return {
      name: "",
      nameState: null,
      selected: null,
      submittedNames: [],
      options: [
        { value: "A", text: "NIKE" },
        { value: "B", text: "ADIDAS" },
        { value: "C", text: "JORDAN" },
        { value: "D", text: "YEEZY" },
      ],
    };
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal() {
      this.name = "";
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
      // Push the name to submitted names
      this.submittedNames.push(this.name);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
  },

  // methods: {
  //   dropdown() {
  //     const dropdowns = document.querySelectorAll(".dropdown");
  //     dropdowns.forEach((dropdowns) => {
  //       const select = dropdowns.querySelector(".select");
  //       const caret = dropdowns.querySelector(".caret");
  //       const menu = dropdowns.querySelector("menu");
  //       const options = dropdowns.querySelectorAll(".menu li");
  //       const selected = dropdowns.querySelector(".selected");
  //       select.addEventListener("click", () => {
  //         select.classList.toggle("select-clicked");
  //         caret.classList.toggle("caret-rotate");
  //         menu.classList.toggle("menu-open");
  //       });

  //       options.forEach((options) => {
  //         options.addEventListener("click", () => {
  //           select.innerHTML = options.innerHTML;
  //           select.classList.remove("select-clicked");
  //           caret.classList.remove("caret-rotate");
  //           menu.classList.remove("menu-open");
  //           options.forEach((options) => {
  //             options.classList.remove("active");
  //           });
  //           options.classList.add("active");
  //         });
  //       });
  //     });
  //   },
  // },
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

/* DROPDOWN */
/* .dropdown {
  min-width: 15em;
  position: relative;
  margin: 2em;
}

.dropdown * {
  box-sizing: border-box;
}

.select {
  background: #2a2f3b;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px #2a2f3b solid;
  border-radius: 0.5em;
  cursor: pointer;
  transition: background 0.3s;
}

.select-clicked {
  border: 2px #24689a solid;
  box-shadow: 0 0 0.8em #26489a;
}

.select:hover {
  background: #323741;
}

.caret {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid #fff;
  transition: 0.3s;
}

.caret-rotate {
  transform: rotate(180deg);
}

.menu {
  list-style: none;
  padding: 0.2em 0.5em;
  background: #ffd600;
  border: 1px #363a43 solid;
  box-shadow: 0 0.5em 1em rgb(0, 0, 0, 0.2);
  border-radius: 0.5em;
  color: #9fa5b5;
  position: absolute;
  top: 3em;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  opacity: 0;
  display: none;
  transition: 0.2s;
  z-index: 1;
}

.menu li {
  padding: 0.7em 0.5em;
  margin: 0.3em 0;
  border-radius: 0.5em;
  cursor: pointer;
}

.menu li:hove {
  background: #2a2d35;
}
.active {
  background: #23242a;
}
.menu-open {
  display: block;
  opacity: 1;
} */
</style>

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
    };
  },
  created() {
    this.getAllUser();
    this.userData = JSON.parse(localStorage.getItem("userData"));
  },
  methods: {
    getAllUser() {
      axios
        .get("http://localhost:3838/users")
        .then((res) => {
          if (res.data.status === 200 && res.data.data) {
            this.listUser = res.data.data; //Gan data vao optionSize
            console.log("Thành công lấy user", res);
            // this.optionsUser = res.data.data; //Gan data vao optionSize
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
</style>
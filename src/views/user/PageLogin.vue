<template>
  <!-- <div>
    <div><TheHeader /></div> -->

  <div>
    <div>
      <div class="container" id="container">
        <div class="form-container sign-up">
          <form>
            <h1>Tạo Tài Khoản</h1>
            <div class="social-icons">
              <a href="#" class="icon"><i class="bi bi-google"></i></a>
              <a href="#" class="icon"><i class="bi bi-facebook"></i></a>
              <a href="#" class="icon"><i class="bi bi-twitter"></i></a>
            </div>
            <span>hoặc đăng ký tài khoản với email của bạn</span>
            <input type="text" v-model="user.name" placeholder="Name" />
            <input type="email" v-model="user.email" placeholder="Email" />
            <input
              type="text"
              v-model="user.phone"
              placeholder="Số điện thoại"
            />
            <input
              type="password"
              v-model="user.password"
              placeholder="Password"
            />
            <button @click="signup">Đăng Ký</button>
          </form>
        </div>
        <div class="form-container sign-in">
          <form>
            <h1>Đăng Nhập</h1>
            <div class="social-icons">
              <a href="#" class="icon"><i class="bi bi-google"></i></a>
              <a href="#" class="icon"><i class="bi bi-facebook"></i></a>
              <a href="#" class="icon"><i class="bi bi-twitter"></i></a>
            </div>
            <span>hoặc sử dụng email và mật khẩu của bạn</span>
            <input type="email" v-model="userLogin.email" placeholder="Email" />
            <input
              type="password"
              v-model="userLogin.password"
              placeholder="Password"
            />
            <a href="">Bạn quên mật khẩu ?</a>
            <button @click="login">Đăng Nhập</button>
          </form>
        </div>
        <div class="toggle-container">
          <div class="toggle">
            <div class="toggle-panel toggle-left">
              <h1>Mừng Trở Lại!</h1>
              <p>
                Nhập thông tin cá nhân của bạn để sử dụng tất cả các tính năng
                của trang web !
              </p>
              <button class="hidden" id="login">Đăng Nhập</button>
            </div>
            <div class="toggle-panel toggle-right">
              <h1>Xin chào !</h1>
              <p>
                Đăng ký với thông tin cá nhân của bạn để sử dụng tất cả các tính
                năng của trang web
              </p>
              <button @click="changeSwitch" class="hidden" id="register">
                Đăng Ký
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
        
  <script>
import axios from "axios";
import router from "@/router";
export default {
  name: "PageLogin",
  props: {
    msg: String,
  },
  data() {
    return {
      user: {
        name: "",
        phone: "",
        email: "",
        role: "user",
        password: "",
      },
      userLogin: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    changeSwitch() {
      const container = document.getElementById("container");
      const registerBtn = document.getElementById("register");
      const loginBtn = document.getElementById("login");

      registerBtn.addEventListener("click", () => {
        container.classList.add("active");
      });

      loginBtn.addEventListener("click", () => {
        container.classList.remove("active");
      });
    },
    signup(e) {
      e.preventDefault(); // Ngan form tu submit
      console.log("Day la thong tin nguoi dung dang ky", this.user);
      axios
        .post("http://localhost:3838/signup", this.user)
        .then((res) => {
          console.log("thanh cong", res);
          if (res.data.status === 200) {
            this.$swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
            window.location.reload();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    login(e) {
      e.preventDefault(); // Ngan form tu submit
      console.log("Day la thong tin nguoi dung dang nhap", this.userLogin);
      axios
        .post("http://localhost:3838/login", this.userLogin)
        .then((res) => {
          console.log("thanh cong", res);
          if (res.data.status === 200) {
            this.$swal.fire({
              position: "top-end",
              icon: "success",
              title: "Dang nhap thanh cong",
              showConfirmButton: false,
              timer: 1500,
            });
            if ((res.data.user.role = "administrator")) {
              this.$router.push({ name: "home" });
            }
            this.$router.push({ name: "home" });
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
* {
  font-family: "Montserrat", sans-serif;
}

body {
  background-color: #c9d6ff;
  background: linear-gradient(to right, #e2e2e2, #c9d6ff);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
}

.container {
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  margin-top: 10%;
}

.container p {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.3px;
  margin: 20px 0;
}

.container span {
  font-size: 12px;
}

.container a {
  color: #333;
  font-size: 13px;
  text-decoration: none;
  margin: 15px 0 10px;
}

.container a i {
  color: #333;
  font-size: 20px;
  /* text-decoration: none;
  margin: 15px 0 10px; */
}
.container button {
  background-color: #ffd600;
  color: #fff;
  font-size: 12px;
  padding: 10px 45px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 10px;
  cursor: pointer;
}

.container button.hidden {
  background-color: transparent;
  border-color: #fff;
}

.container form {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  height: 100%;
}

.container input {
  background-color: #eee;
  border: none;
  margin: 8px 0;
  padding: 10px 15px;
  font-size: 13px;
  border-radius: 8px;
  width: 100%;
  outline: none;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.active .sign-in {
  transform: translateX(100%);
}

.sign-up {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.active .sign-up {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: move 0.6s;
}

@keyframes move {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }
  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

.social-icons {
  margin: 20px 0;
}

.social-icons a {
  border: 1px solid #ccc;
  border-radius: 20%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 3px;
  width: 40px;
  height: 40px;
}

.toggle-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
  border-radius: 150px 0 0 100px;
  z-index: 1000;
}

.container.active .toggle-container {
  transform: translateX(-100%);
  border-radius: 0 150px 100px 0;
}

.toggle {
  background-color: #ffd600;
  height: 100%;
  background: linear-gradient(to right, #b09301, #ffd600);
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
}

.container.active .toggle {
  transform: translateX(50%);
}

.toggle-panel {
  position: absolute;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 30px;
  text-align: center;
  top: 0;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
}

.toggle-left {
  transform: translateX(-200%);
}

.container.active .toggle-left {
  transform: translateX(0);
}

.toggle-right {
  right: 0;
  transform: translateX(0);
}

.container.active .toggle-right {
  transform: translateX(200%);
}
</style>
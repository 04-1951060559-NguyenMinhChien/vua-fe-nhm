<template>
  <div class="flex justify-content-center">
    <h1>BAN DEO CO QUYEN TRUY CAP</h1>
    <button @click="logout">Tro ve trang dang nhap</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {},
    };
  },
  name: "errPage",
  created() {
    this.userData = JSON.parse(localStorage.getItem("userData"));
  },

  methods: {
    logout() {
      localStorage.removeItem("userData"); // Xóa token khỏi local storage
      this.$router.push("/login"); // Chuyển hướng đến trang đăng nhập
    },
  },
};
</script>

<style>
</style>
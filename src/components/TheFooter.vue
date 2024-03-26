<template>
  <div>
    <footer>
      <div class="container">
        <div class="row" style="padding-top: 40px">
          <div class="col-md-4 contact">
            <img src="../assets/logo2.png" alt="" style="height: 150px" />
            <h6><b>THÔNG TIN LIÊN HỆ</b></h6>
            <h6><b>KINGSHOES.VN Trang Thông Tin Chính Thức.</b></h6>
            <p>
              <i class="bi bi-house"></i>
              Phan Đình Giót, Phương Liệt, Thanh Xuân, Hà Nội
            </p>
            <p>Email : cskh.kingshoes.vn@gmail.com</p>
            <a href="">https://kingshoes.vn/</a><br />
            <a href="">https://twitter.com/KingShoes_vn</a><br />
            <a href="">https://instagram.com/KingShoes.vn</a><br />
            <a href="">https://facebook.com/pg/www.KingShoes.vn</a><br />
            <a href="">https://www.youtube.com/www.KingShoes.vn</a><br />
          </div>
          <div class="col-md-4">
            <div class="row">
              <div class="col-md-6">
                <h6><B>HỖ TRỢ KHÁCH HÀNG</B></h6>
                <p>Chăm sóc khách hàng</p>
                <p>Thanh toán</p>
                <p>Hướng dẫn mua hàng</p>
              </div>
              <div class="col-md-6">
                <h6><b>CHÍNH SÁCH</b></h6>
                <p>Chế độ bảo hành</p>
                <p>Chính sách đổi trả</p>
                <p>Bảo mật thông tin</p>
                <p>Chính sách giao nhận</p>
              </div>
            </div>
            <div class="col-md-12">
              <p>
                Số ĐKKD: 41N8041309 cấp ngày 17/8/2018. Nơi cấp Ủy Ban Nhân Dân
                Quận Thanh Xuân. Hộ Kinh Doanh: KINGSHOES. Hotline: 0356.422.999
              </p>
              <h4>CHỨNG NHẬN</h4>
              <img
                src="../assets/logoSaleNoti.png"
                alt=""
                style="width: 400px"
              />
            </div>
          </div>
          <div class="col-md-4">
            <H5>FANPAGE</H5>
          </div>
          <div class="col-12"></div>
        </div>
      </div>
      <hr />
      <h4>&copy;KINGSHOES.VN</h4>
    </footer>
  </div>
</template>
            
      <script>
export default {
  name: "footer",
  props: {
    msg: String,
  },
};
</script>
            
<style scoped>
footer {
  background-color: #f0f0f0;
}
a {
  text-decoration: none;
  /* color: #000; */
  color: inherit;
}

.contact a:hove {
  color: #fed700;
}
</style>
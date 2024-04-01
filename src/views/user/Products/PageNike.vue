<template>
  <div>
    <div><TheHeader /></div>

    <div class="search1 " style="margin-top: 50px; margin-bottom: 50px ">
        <div class="container navbar-collapse" id="searchReponsive">
            <div class="row">
                <div class="search col-md-4">
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
                <div class="search col-md-4">
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
                <div class="search col-md-4">
                    <div class="form-group">
                        <label for="">Sắp xếp theo</label>
                        <select class="form-control" name="" id="">
                        <option>Giá từ thấp đến cao</option>
                        <option>Tên từ A-Z</option>
                        <option>Tên từ Z-A</option>
                      </select>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- CONTENT -->
    <!-- ADIDAS -->
    <div class="container">
        <div class="row">
            <div class="col-8">
                <div class="row">
                    <div class="col-md-3">
                        </div>
                </div>
            </div>
            <div class="col-4">
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
    <div><TheFooter /></div>
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
};
</script>
        
        <style scoped>
.aside-footwate img {
  width: 100%;
}

.aside-news img {
  width: 100%;
}
</style>
<template>
  <div class="homepage">
    <div class="search-bar">
      <div class="weui-search-bar"
           v-bind:class="{'weui-search-bar_focusing': focusing}">
        <form class="weui-search-bar__form">
          <div class="weui-search-bar__box">
            <i class="weui-icon-search"></i>
            <input type="search"
                   class="weui-search-bar__input"
                   ref="searchInput"
                   v-model="searchText"
                   @blur="searchInputBlur()"
                   placeholder="搜索" />
            <a href="javascript:"
               @click="searchText=''"
               class="weui-icon-clear"></a>
          </div>
          <label for="search_input"
                 class="weui-search-bar__label"
                 @click="searching()">
            <i class="weui-icon-search"></i>
            <span>找工作、店铺、房子</span>
          </label>
        </form>
        <a href="javascript:"
           class="weui-search-bar__cancel-btn"
           @click="cancelSeach()">取消</a>
      </div>
      <div class="weui-cells weui-cells_access"
           v-show="focusing">
        <div class="weui-cell">
          <div class="weui-cell__bd weui-cell_primary">
            <p>实时搜索文本</p>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd weui-cell_primary">
            <p>实时搜索文本</p>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__bd weui-cell_primary">
            <p>实时搜索文本</p>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="menu">
        <el-tabs v-model="menuName"
                 @tab-click="menuClick"
                 :stretch=true>
          <el-tab-pane class="el-tab-pane"
                       label="同城信息"
                       name="city">
            <div class="menu-item">
              <div class="menu-img">
                <img src="@/assets/imgs/test.png">
              </div>
              <font>招聘求职</font>
            </div>
            <div class="menu-item">
              <div class="menu-img">
                <img src="@/assets/imgs/test.png">
              </div>
              <font>本地服务</font>
            </div>
            <div class="menu-item">
              <div class="menu-img">
                <img src="@/assets/imgs/test.png">
              </div>
              <font>房屋租售</font>
            </div>
            <div class="menu-item">
              <div class="menu-img">
                <img src="@/assets/imgs/test.png">
              </div>
              <font>生意转让</font>
            </div>
            <div class="menu-item">
              <div class="menu-img">
                <img src="@/assets/imgs/test.png">
              </div>
              <font>汽车交易</font>
            </div>
            <div class="menu-item">
              <div class="menu-img">
                <img src="@/assets/imgs/test.png">
              </div>
              <font>二手物品</font>
            </div>
          </el-tab-pane>
          <el-tab-pane class="el-tab-pane"
                       label="商家信息"
                       name="business">
            <div class="menu-item">
              <div class="menu-img">
                <img src="@/assets/imgs/test.png">
              </div>
              <font>招聘信息</font>
            </div>
            <div class="menu-item">
              <div class="menu-img">
                <img src="@/assets/imgs/test.png">
              </div>
              <font>招聘信息</font>
            </div>
            <div class="menu-item">
              <div class="menu-img">
                <img src="@/assets/imgs/test.png">
              </div>
              <font>招聘信息</font>
            </div>
            <div class="menu-item">
              <div class="menu-img">
                <img src="@/assets/imgs/test.png">
              </div>
              <font>招聘信息</font>
            </div>
            <div class="menu-item">
              <div class="menu-img">
                <img src="@/assets/imgs/test.png">
              </div>
              <font>招聘信息</font>
            </div>
            <div class="menu-item">
              <div class="menu-img">
                <img src="@/assets/imgs/test.png">
              </div>
              <font>招聘信息</font>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="carousel">
        <swiper :options="swiperOption">
          <swiper-slide><img src="@/assets/imgs/test.png"></swiper-slide>
          <swiper-slide><img src="@/assets/imgs/test.png"></swiper-slide>
          <swiper-slide><img src="@/assets/imgs/test.png"></swiper-slide>
          <div class="swiper-pagination"
               slot="pagination"></div>
        </swiper>
      </div>
      <div class="list">
        <itemList></itemList>
      </div>
    </div>
    <vfooter></vfooter>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import vfooter from '@/components/footer/footer.vue'
  import itemList from '@/components/list/item-list.vue'
  export default {
    name: 'homepage',
    data () {
      return {
        focusing: false, // 聚焦搜索
        searchText: '', // 搜索内容
        menuName: 'city',
        swiperOption: {
          autoplay: {
            disableOnInteraction: false
          },
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    },
    components: {
      vfooter,
      swiper,
      swiperSlide,
      itemList
    },
    methods: {
      searching () {
        this.focusing = true
        this.$refs.searchInput.focus()
      },
      searchInputBlur () {
        if (!this.searchText.length) {
          this.focusing = false
        }
      },
      cancelSeach () {
        this.focusing = false
      },
      menuClick () {
        console.log(this.menuName)
      }
    }
  }
</script>

<style lang="less" scoped>
  .homepage {
    padding-bottom: 44px;
    .weui-cells {
      position: absolute;
      top: 44px;
      left: 0;
      right: 0;
      bottom: 0px;
      z-index: 3;
      margin-top: 0px;
    }
    .content {
      margin: 0px 8px;
    }
    .el-tab-pane {
      display: flex;
      flex-wrap: wrap;
      .menu-item {
        width: 20%;
        overflow: hidden;
        text-align: center;
        font-size: 12px;
        margin-bottom: 5px;
      }
      .menu-img {
        overflow: hidden;
        margin: 0 8px;
        img {
          border-radius: 50%;
          width: 50px;
        }
      }
    }
    .carousel {
      height: 150px;
      overflow: hidden;
      .swiper-container {
        height: 100%;
      }
      img {
        height: 100%;
        width: 100%;
      }
    }
    .list {
      margin-top: 8px;
    }
  }
</style>

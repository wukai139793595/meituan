<template>
  <div class="product">
    <el-row class="breadcrumb-wrap">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </el-row>
    <div class="left-right">
      <div class="left">
        <div class="filter-wrap">
          <div class="filter-selected-condition"></div>
          <div class="filter-section-wrapper">
            <wk-filter :list='classicList' />
            <wk-filter :list='areaList' />
          </div>
        </div>
        <div class="common-wrap">
          <wk-common />
        </div>
      </div>
      <div class="right">
        right
      </div>

    </div>
    <div class="hotnav-wrap">
      <wk-hotnav />
    </div>
  </div>
</template>

<script>
import wkFilter from "@/components/product/wk-filter.vue";
import wkCommon from "@/components/product/wk-common.vue";
import wkHotnav from "@/components/product/wk-hotnav.vue";
import { mtLeftNav, mtAreaList } from "@/api/index.js";
export default {
  data() {
    return {
      classicList: [],
      areaList: []
    };
  },
  components: {
    wkFilter,
    wkCommon,
    wkHotnav
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      mtLeftNav().then(res => {
        this.classicList = res.data;
      });
      mtAreaList().then(res => {
        this.areaList = res.data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/default.scss";
.product {
  width: 1190px;
  margin: 0 auto;
  @include clear-float;
  .breadcrumb-wrap {
    padding: 19px 0;
    color: #222;
    font-size: 12px;
  }
  .left-right {
    .left {
      float: left;
      width: 950px;
      .filter-wrap {
        border: 1px solid #eee;
        background-color: #fff;
        border-radius: 4px;
      }
      .common-wrap {
        width: 940px;
        margin: 0 auto;
        border: 1px solid #eee;
        background-color: #fff;
        border-radius: 4px;
        margin-top: 10px;
      }
    }
    .right {
      float: right;
      width: 230px;
    }
    @include clear-float;
  }
  .hotnav-wrap {
    width: 100%;
  }
}
</style>
<template>
  <div class="layout">
    <el-container class="layout-contain">
      <el-header class="header-contain">
        <wk-header />
      </el-header>
      <el-main class="main-contain">
        <router-view />
      </el-main>
      <el-footer
        height=''
        class="footer-contain"
      >
        <wk-footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import wkHeader from "@/components/header/wk-header.vue";
import wkFooter from "@/components/footer/index.vue";
export default {
  components: {
    wkHeader,
    wkFooter
  }
};
</script>

<style lang='scss' scoped>
.layout {
  margin: 0 auto;
  .layout-contain {
    position: relative;
  }
  .header-contain {
    padding-left: 0px;
    padding-right: 0px;
    height: auto !important;
  }
  .main-contain {
    padding: 0;
    width: 100%;
    background-color: #f8f8f8;
    position: relative;
    overflow: visible;
  }
  .footer-contain {
    padding-left: 0px;
    padding-right: 0px;
    background-color: #f8f8f8;
    width: 100%;
  }
}
</style>

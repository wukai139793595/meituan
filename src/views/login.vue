<template>
  <el-container>
    <el-header class="login-header">
      <a href="/home"></a>
    </el-header>
    <el-main class="site-body-wrapper">
      <div class="site-body">
        <div class="promotion-banner">
          <img
            src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
            alt=""
          >
        </div>
        <div class="login-section">
          <wk-login />
        </div>
      </div>
    </el-main>
    <el-footer class="wk-footer">
      <el-row class="wk-row">
        <ul>
          <li><a
              href="http://"
              target="_blank"
            >关于美团</a></li>
          <li><a
              href="http://"
              target="_blank"
            >加入我们</a></li>
          <li><a
              href="http://"
              target="_blank"
            >商家入驻</a></li>
          <li><a
              href="http://"
              target="_blank"
            >帮助中心</a></li>
          <li><a
              href="http://"
              target="_blank"
            >美团手机版</a></li>

        </ul>
      </el-row>
      <el-row>
        ©2019
        <a href="">美团网团购</a>
        meituan.com
        <a href="">京ICP证070791号</a>
        京公网安备11010502025545号
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
import wkLogin from "@/components/login/wk-login.vue";
export default {
  components: {
    wkLogin
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/default.scss";
.login-header {
  width: 980px;
  height: auto;
  margin: 40px auto 30px;
  a {
    margin: 0;
    width: 82px;
    height: 54px;
    background-position: -188px -808px;
    background-image: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
    background-size: initial;
    float: left;
    display: block;
    display: inline;
    text-indent: -9999px;
    overflow: hidden;
  }
}
.site-body-wrapper {
  padding: 0;
  .site-body {
    margin: 0 auto 70px;
    width: 980px;
    @include clear-float;
    .promotion-banner {
      float: left;
      height: 370px;
      margin: 0 115px 0 0;
      width: 480px;
    }
    .login-section {
      float: left;
      padding-top: 0;
      margin: 0 auto;
      width: 270px;
      background: #fff;
    }
  }
}
.wk-footer {
  margin: 0 auto 30px;
  clear: both;
  width: 980px;
  font-size: 12px;
  color: #999;
  .wk-row {
    margin-bottom: 20px;
    padding: 12px 0;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    li {
      float: left;
      margin: 5px 0;
      padding: 0 16px;
      line-height: 14px;
      border-right: 1px solid #eee;
    }
    li:first-child {
      padding-left: 0px;
    }
  }
}
</style>
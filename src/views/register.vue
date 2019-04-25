<template>
  <el-container>
    <el-header class="wk-header">
      <div class="header-box">
        <a href=""></a>
        <div class="login-box">
          <span>已有美团账号？</span>
          <a href="/login">登录</a>
        </div>
      </div>
    </el-header>
    <el-main class="wk-main">
      <div class="main-box">
        <wk-register />
      </div>
    </el-main>
    <el-footer
      class="wk-footer"
      height='auto'
    >
      <p class="copyright">
        ©<a
          class="f1"
          href="https://www.meituan.com"
        >meituan.com</a>&nbsp;
        <a
          class="f1"
          target="_blank"
          href="http://www.miibeian.gov.cn/"
        >京ICP证070791号</a>&nbsp;
        <span class="f1">京公网安备11010502025545号</span>
      </p>
    </el-footer>
  </el-container>
</template>

<script>
import wkRegister from "@/components/register/wk-register.vue";
export default {
  components: {
    wkRegister
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/default.scss";
.wk-header {
  @include my-header;
  border-bottom: 2px solid #2bb8aa;
  width: 100%;
  height: 100%;
  .header-box {
    margin: 0 auto;
    padding: 10px 0;
    width: 980px;
    @include clear-float;
    & > a {
      float: left;
      width: 54px;
      height: 36px;
      background-position: -669px -748px;
      background-image: url(https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
    }
    .login-box {
      float: right;
      span {
        margin-right: 10px;
        line-height: 36px;
      }
      a {
        background-color: #2db3a6;
        background-size: 100%;
        background-image: linear-gradient(to bottom, #2ec3b4, #2db3a6);
        line-height: 1.5;
        letter-spacing: 0.1em;
        text-align: center;
        text-decoration: none;
        border-width: 0 0 1px;
        border-style: solid;
        background-repeat: repeat-x;
        border-radius: 2px;
        border-color: #008177;
        color: #fff;
        padding: 5px 10px;
      }
    }
  }
}
.wk-main {
  width: 100%;
  .main-box {
    margin: 0 auto 30px;
    padding-top: 30px;
    width: 980px;
    min-height: 300px;
  }
}
.wk-footer {
  padding: 0;
  text-align: center;
  margin-top: 10px;
  .copyright {
    margin: 0 auto;
    display: inline-block;
  }
}
</style>
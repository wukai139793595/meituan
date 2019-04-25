<template>
  <div class="login">
    <!-- <form
      action="http://api.duyiedu.com/api/meituan/login"
      method="get"
    > -->
    <div
      class="validate-info"
      :class="{visible: !errorWord}"
    >
      <i class="el-icon-remove"></i>
      <span class="error-word">{{errorWord}}</span>
    </div>
    <div class="login-type">
      <span>账号登录</span>
      <a href="">手机动态码登录<i class="el-icon-mobile-phone"></i></a>
    </div>
    <div class="phone-input-wrapper">
      <span class="country-area">
        <i class="el-icon-plus"></i>
        <span>86</span>
        <i class="el-icon-arrow-right"></i>
      </span>
      <input
        type="phone"
        v-model="phoneValue"
        @focus="onFocus($event)"
      >
    </div>
    <div class="pw-input-wrapper">
      <i class="el-icon-goods"></i>
      <input
        type="password"
        name=""
        id=""
        v-model="password"
        @focus="onFocus($event)"
      >
    </div>
    <div class="forget">
      <a href="">忘记密码</a>
    </div>
    <div class="submit-wrap">
      <input
        type="submit"
        value="登录"
        @click="toLogin($event)"
      >
    </div>
    <div class="signup-guide">
      还没有账号？
      <router-link to="/register">免费注册</router-link>
    </div>
    <!-- </form> -->
  </div>
</template>

<script>
import { checkPhone, checkPassword } from "@/util/util.js";
import { mtLogin } from "@/api/index.js";
export default {
  data() {
    return {
      errorWord: "",
      phoneValue: "",
      password: ""
    };
  },
  methods: {
    toLogin(event) {
      if (!checkPhone(this.phoneValue)) {
        this.errorWord = "手机号格式不正确";
        return;
      }
      if (!checkPassword(this.phoneValue)) {
        this.errorWord = "密码格式不正确";
        return;
      }
      this.$store
        .dispatch("user/Login", {
          username: this.phoneValue.trim(),
          password: this.password.trim()
        })
        .then(res => {
          if (res.status === "success") {
            this.$router.push("/home");
          } else if (res.status === "fail") {
            this.errorWord = res.msg;
          }
        });
    },
    onFocus(event) {
      this.errorWord = "";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/default.scss";
.login {
  width: 270px;
  .visible {
    visibility: hidden;
  }
  .validate-info {
    min-height: 18px;
    margin-top: 0;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #f5d8a7;
    border-radius: 2px;
    background: #fff6db;
    i {
      color: orange;
      font-size: 17px;
    }
    .error-word {
      font-size: 12px;
    }
  }
  .login-type {
    height: 38px;
    @include clear-float;
    span {
      font-weight: 400;
      color: #666;
    }
    a {
      float: right;
      font-size: 12px;
      color: #666;
      i {
        color: $primary-color;
        font-size: 15px;
      }
    }
  }
  .phone-input-wrapper {
    box-sizing: border-box;
    width: 100%;
    padding: 0;
    border: 1px solid #aaa;
    background-color: #fff;
    margin: 8px 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    input {
      width: 180px;
      padding-left: 5px;
      border: none;
      max-width: 200px !important;
      line-height: 24px;
      vertical-align: top;
      height: 24px;
      padding: 5px;
      font-size: 14px;
      outline: none;
      background-color: #fff !important;
    }
  }
  .pw-input-wrapper {
    padding-left: 0;
    zoom: 1;
    color: #666;
    position: relative;
    border: 1px solid #aaa;
    margin-top: 15px;
    i {
      display: inline-block;
      width: 18px;
      height: 18px;
      top: 16px;
      left: 9px;
      line-height: 18px;
      vertical-align: middle;
      font-size: 17px;
      margin-left: 4px;
    }
    input {
      padding-left: 33px;
      width: 226px;
      height: 24px;
      padding: 5px;
      line-height: 24px;
      vertical-align: middle;
      outline: none;
      border: none;
      background-color: #fff !important;
    }
  }
  .forget {
    margin-top: 8px;
    margin-bottom: 10px;
    margin-right: 4px;
    text-align: right;
    a {
      color: $primary-color;
    }
  }
  .submit-wrap {
    padding-left: 0;
    padding-bottom: 8px;
    input {
      width: 100%;
      color: #fff;
      background-color: #2db3a6;
      border-color: #008177;
      background-size: 100%;
      background-image: linear-gradient(to bottom, #2ec3b4, #2db3a6);
      display: inline-block;
      vertical-align: middle;
      padding: 7px 20px 6px;
      font-size: 14px;
      font-weight: 700;
      -webkit-font-smoothing: antialiased;
      line-height: 1.5;
      letter-spacing: 0.1em;
      text-align: center;
      text-decoration: none;
      border-width: 0 0 1px;
      border-style: solid;
      background-repeat: repeat-x;
      border-radius: 2px;
      cursor: pointer;
    }
  }
  .signup-guide {
    a {
      color: $primary-color;
    }
  }
}
</style>
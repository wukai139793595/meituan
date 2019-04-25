<template>
  <div class="register">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item
        label='手机号'
        prop="phone"
        class="wk-form-item"
      >
        <el-input
          type='phone'
          v-model="ruleForm.phone"
        ></el-input>
      </el-form-item>
      <div class="security-code">
        免费获取短信动态码
      </div>
      <el-form-item
        label='短信动态码'
        class="wk-form-item"
      >
        <el-input
          type='text'
          v-model="ruleForm.securityCode"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="创建密码"
        prop="pass"
        class="wk-form-item"
      >
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="确认密码"
        prop="checkPass"
        class="wk-form-item"
      >
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
          class="wk-button"
        >同意以下协议并注册</el-button>
      </el-form-item>
      <div class="ter">
        <a href="">《美团网用户协议》</a>
      </div>
    </el-form>
  </div>
</template>

<script>
import { mtRegister } from "@/api/index.js";
export default {
  data() {
    var checkPhone = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("手机号不能为空"));
      } else if (!/^1[34578]\d{9}$/.test(value.trim())) {
        callback(new Error("手机号不正确"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        phone: "",
        pass: "",
        checkPass: "",
        securityCode: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        phone: [{ validator: checkPhone, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$store
            .dispatch("user/Register", {
              userName: this.ruleForm.phone.trim(),
              password: this.ruleForm.pass.trim(),
              rePassword: this.ruleForm.checkPass.trim()
            })
            .then(res => {
              if (res.status === "success") {
                this.$router.push("/login");
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
.register {
  max-width: 360px;
  .security-code {
    margin-left: 100px;
    color: #333;
    background-color: #dedede;
    border: 1px solid #e3e3e3;
    border-bottom: 1px solid #aaa;
    padding: 1px 8px 0;
    font-size: 12px;
    display: inline-block;
    background-size: 100%;
    background-image: linear-gradient(to bottom, #f7f7f7, #dedede);
    margin-bottom: 4px;
  }
  .wk-button {
    background-image: linear-gradient(to bottom, #2ec3b4, #2db3a6);
  }
  .ter {
    margin-left: 100px;
    a {
      color: #2bb8aa;
    }
  }
  .wk-form-item {
    position: relative;
  }
}
</style>
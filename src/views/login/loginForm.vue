<script setup lang="ts">
import "element-plus/theme-chalk/display.css";
import { reactive } from "vue";
import type { FormRules } from "element-plus";

const formLabelAlign = reactive({
  name: "",
  passWord: "",
  code: "",
});
const rules = reactive<FormRules>({
  name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  passWord: [{ required: true, message: "请输入密码", trigger: "blur" }],
  code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
});
</script>

<template>
  <div class="login-left hidden-xs-only">
    <img src="@/assets/login/loginLeft.png" width="650" height="450" />
  </div>
  <div class="login-form">
    <el-form :model="formLabelAlign" style="max-width: 460px" :rules="rules">
      <el-form-item prop="name">
        <el-input v-model="formLabelAlign.name" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item prop="passWord">
        <el-input
          v-model="formLabelAlign.passWord"
          type="password"
          placeholder="请输入密码"
        />
      </el-form-item>
      <el-form-item prop="code">
        <el-input v-model="formLabelAlign.code" placeholder="请输入验证码" />
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="less">
.login-left {
  width: 800px;
  margin: 0 10px 0 0;
}
.login-form {
  width: 420px;
  padding: 50px 40px 45px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 3px 7px #0003;
}
</style>
